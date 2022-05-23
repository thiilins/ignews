import { SignInButton } from 'components/signInButton'
import Link from 'next/link'

import styles from './styles.module.scss'
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <Link href="/">Home</Link>
          <a href="#">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}
