import Link from "next/link";
import classes from "src/components/Header/Header.module.css";

export function Header () {
  return (
    <header className={classes.header}>
      <Link href="/">
        Index
      </Link>
      <Link href="/about">
        About
      </Link>
    </header>
  )
}
