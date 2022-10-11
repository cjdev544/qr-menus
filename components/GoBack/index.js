import Link from 'next/link'
import { FaArrowAltCircleLeft } from 'react-icons/fa'

import styles from './GoBack.module.css'

export default function GoBack() {
  return (
    <Link href='/'>
      <a className={styles.goBack}>
        <FaArrowAltCircleLeft className={styles.arrow} />
        <h3>Volver a Inicio</h3>
      </a>
    </Link>
  )
}
