"use client";
// 모든 컴포넌트와 페이지들은 벡엔드에서 먼저 렌더링 된다.
// SSR(server side rendering)

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navigation() {
  const path = usePathname();
  console.log(path);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🍓" : ""}
        </li>
        <li>
          <Link href="/about-us">About us</Link>{" "}
          {path === "/about-us" ? "🍓" : ""}
        </li>
      </ul>
    </nav>
  );
}
