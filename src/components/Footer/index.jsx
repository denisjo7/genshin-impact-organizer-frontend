import Link from "next/link";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        href="https://github.com/denisjo7"
        target="_blank"
        rel="noopener noreferrer"
      >
          Created with 💜 by <span className="text-teal-600 font-semibold">Denis Jonathan</span>
      </Link>
    </footer>
  );
}

export default Footer;
