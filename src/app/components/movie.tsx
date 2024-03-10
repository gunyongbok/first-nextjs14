"use client";

import React from "react";
import Link from "next/link";
import styles from "./movie.module.css";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  id: number;
  poster_path: string;
}

const Movie = ({ title, id, poster_path }: Props) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie} key={id}>
      <img src={poster_path} alt="poster_path" onClick={onClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
};

export default Movie;
