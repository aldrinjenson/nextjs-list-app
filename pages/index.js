import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Labore asperiores assumenda hic aspernatur nesciunt eum reiciendis esse
        quasi! Sunt blanditiis reprehenderit amet, quam delectus quo modi illo
        quod.
      </p>
      <p className={styles.text}>
        Sequi accusamus rem laboriosam, eligendi voluptate, optio quisquam
        recusandae dolor fuga, exercitationem impedit velit cumque atque
        accusantium magni dicta repellat!
      </p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See Ninja List</a>
      </Link>
    </div>
  );
}
