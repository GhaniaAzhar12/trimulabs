import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button text={"button 1 from trimulabs"} />
    </main>
  );
}
