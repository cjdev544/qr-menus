import Image from 'next/image'

import LogoSushi from '../../public/logo-sushi.jpg'
import LogoGuay from '../../public/logo-guaywok.jpg'
import LogoSabor from '../../public/logo-sabor.jpg'
import LogoHamburgueseria from '../../public/logo-hamburgueseria.png'
import styles from './MenuList.module.css'

export default function MenuList() {
  return (
    <>
      <a
        href='https://www.centralfoodmalaga.com/sushiguay'
        className={styles.menuList}
        rel='noreferrer noopener'
      >
        <h3>Sushi Guay</h3>
        <Image src={LogoSushi} alt='logo sushiguay' width={70} height={70} />
      </a>

      <a
        href='https://www.centralfoodmalaga.com/guaywok'
        className={styles.menuList}
        rel='noreferrer noopener'
      >
        <h3>GuayWok</h3>
        <Image src={LogoGuay} alt='logo guaywok' width={70} height={70} />
      </a>

      <a
        href='https://www.centralfoodmalaga.com/sabor-casita'
        className={styles.menuList}
        rel='noreferrer noopener'
      >
        <h3>Con Sabor a Casita</h3>
        <Image
          src={LogoSabor}
          alt='logo con sabor a casita'
          width={70}
          height={70}
        />
      </a>
      <a
        href='https://www.centralfoodmalaga.com/hamburgueseria-venezuela'
        className={styles.menuList}
        rel='noreferrer noopener'
      >
        <h3>Hamburguesería VZLA</h3>
        <Image
          src={LogoHamburgueseria}
          alt='Hamburguesería VZLA'
          width={70}
          height={70}
        />
      </a>
      <a
        href='https://www.centralfoodmalaga.com/postres-bebidas'
        className={styles.menuList}
        rel='noreferrer noopener'
        style={{ justifyContent: 'center' }}
      >
        <h3>Postres y Bebidas</h3>
      </a>
    </>
  )
}
