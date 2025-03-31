import Image from "next/image";
import styles from './banner.module.css';
export default function Banner() {
  // Function implementation goes here

  return (
    <>
      <div className={styles.height}>
        <h1>COSSICH WATCHES</h1>
        <p>Time is the most valuable</p>
      </div>
    </>
  );
}
