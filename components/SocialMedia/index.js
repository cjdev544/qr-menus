import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

import Button from '../Button'
import styles from './SocialMedia.module.css'

export default function SocialMedia() {
  return (
    <div className={styles.social}>
      <h4>Siguenos en nuestras redes</h4>
      <div className={styles.group}>
        <Button
          name='instagram'
          href='https://www.instagram.com/centrafoodmalaga/'
        >
          <FaInstagram />
        </Button>
        <Button
          name='facebook'
          href='https://www.facebook.com/Centralfoodmalaga'
        >
          <FaFacebook />
        </Button>
        <Button
          name='whatsapp'
          href='https://api.whatsapp.com/send?phone=+34649718831'
        >
          <FaWhatsapp />
        </Button>
      </div>
    </div>
  )
}
