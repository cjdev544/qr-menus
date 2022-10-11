import Image from 'next/image'

import Logo from '../../public/central-food.png'
import MenuList from '../MenuList'
import SocialMedia from '../SocialMedia'
import styles from './Home.module.css'

export default function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.imageBox}>
        <Image
          className={styles.image}
          src={Logo}
          alt='Logo central food'
          placeholder='blur'
          width={300}
          height={300}
        />
      </div>
      <h2>EN LA VARIEDAD</h2>
      <h3 className={styles.light}>ESTA EL GUSTO</h3>
      <nav>
        <MenuList />
      </nav>
      <SocialMedia />
    </div>
  )
}
