import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { CardHome } from "./components/CardHome";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <p>
          Hola mundo, soy un capo&nbsp;
        </p> */}
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
        <div style={{display:"flex"}}>
          <Link href="/login">
          <p>
            Login
          </p>
          </Link>
          <p>
            Register
          </p>
        </div>
      </div>

      <div className={styles.center}>
        <h1>
          Le Pain Quantique
        </h1>

      </div>

      <div className={styles.grid}>
        <a></a>
        <CardHome titulo={"titulo1"} subtitulo={"titulo1"} url={"www.google.com"}/>
        <CardHome titulo={"titulo2"} subtitulo={"titulo2"} url={"www.google.com"}/>
        <a></a>
      </div>
    </main>
  );
}
