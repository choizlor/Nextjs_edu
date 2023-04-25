import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  notFound();
  return <h1>홈페이지!</h1>;
}
