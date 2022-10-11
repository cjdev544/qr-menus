import Link from 'next/link'
import Image from 'next/image'

import LogoSushi from '../../public/logo-sushi.jpg'
import LogoGuay from '../../public/logo-guaywok.jpg'
import LogoSabor from '../../public/logo-sabor.jpg'
import LogoHamburgueseria from '../../public/logo-hamburgueseria.png'
import styles from './MenuList.module.css'

export default function MenuList() {
  return (
    <>
      <Link href='/sushiguay'>
        <a className={styles.menuList}>
          <h3>Sushi Guay</h3>
          <Image
            src={LogoSushi}
            alt='logo sushiguay'
            placeholder='blur'
            width={70}
            height={70}
          />
        </a>
      </Link>
      <Link href='/guaywok'>
        <a className={styles.menuList}>
          <h3>GuayWok</h3>
          <Image
            src={LogoGuay}
            alt='logo guaywok'
            placeholder='blur'
            width={70}
            height={70}
          />
        </a>
      </Link>
      <Link href='/saborcasita'>
        <a className={styles.menuList}>
          <h3>Con Sabor a Casita</h3>
          <Image
            src={LogoSabor}
            alt='logo con sabor a casita'
            placeholder='blur'
            width={70}
            height={70}
          />
        </a>
      </Link>
      <Link href='/hamburgueseriavzla'>
        <a className={styles.menuList}>
          <h3>Hamburguesería VZLA</h3>
          <Image
            src={LogoHamburgueseria}
            alt='Hamburguesería VZLA'
            placeholder='blur'
            width={70}
            height={70}
          />
        </a>
      </Link>
      <Link href='/postres-bebidas'>
        <a className={styles.menuList} style={{ justifyContent: 'center' }}>
          <h3>Postres y Bebidas</h3>
        </a>
      </Link>
    </>
  )
}
