import Image from 'next/image'

import Layout from '../Layout'
import GoBack from '../components/GoBack'
import GuayWok1 from '../public/guaywok01.jpg'
import GuayWok2 from '../public/guaywok02.jpg'
import GuayWok3 from '../public/guaywok03.jpg'
import Lay from '../public/menu-ley.png'

export default function GuayWok() {
  return (
    <Layout>
      <div className='menu-page'>
        <Image
          className='imagesPages'
          src={GuayWok1}
          alt='página 1 del menu GuayWok'
          width={1000}
        />
        <Image
          className='imagesPages'
          src={GuayWok2}
          alt='página 1 del menu GuayWok'
          width={1000}
        />
        <Image
          className='imagesPages'
          src={GuayWok3}
          alt='página 1 del menu GuayWok'
          width={1000}
        />
        <Image
          alt='Ley de Información Alimentaria'
          src={Lay}
          placeholder='blur'
          objectFit='cover'
          width={1000}
        />
        <div className='separator'></div>
      </div>
      <GoBack />
    </Layout>
  )
}
