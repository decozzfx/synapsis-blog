import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import { getHref, getNavigationLink } from '../../helpers/helper'

import styles from './card.module.scss'
import { IBlogPost } from '../../../core/types'

const Card: FunctionComponent<IBlogPost> = ({ title, body, id }) => {
  const cardBGStyles = {
    background: `linear-gradient(45deg, rgba(18, 40, 76, 0.56), rgba(39, 173, 213, 0.56), rgba(79, 192, 176, 0.56)),`
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__body}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__text}>{body}</p>
      </div>

      <div className={styles.card__footer}>
        <Link href={getHref()} as={getNavigationLink(id)} className={styles.card__action}>
          Explore
        </Link>
      </div>
    </div>
  )
}

export default Card
