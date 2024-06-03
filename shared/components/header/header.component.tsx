import React, { FunctionComponent } from 'react'
import Link from 'next/link'

import styles from './header.module.scss'

const Header: FunctionComponent = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.brand}>
        <Link href='/' legacyBehavior>
          <h3 className={styles.brand__name}>Front End Developer Challenge Blog Sites</h3>
        </Link>
      </div>
    </div>
  )
}

export default Header
