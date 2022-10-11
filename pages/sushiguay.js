import Image from 'next/image'

import Layout from '../Layout'
import GoBack from '../components/GoBack'
import Sushi1 from '../public/sushiguay1.jpg'
import Sushi2 from '../public/sushiguay2.jpg'
import Sushi3 from '../public/sushiguay3.jpg'
import Sushi4 from '../public/sushiguay4.jpg'
import Sushi5 from '../public/sushiguay5.jpg'
import Lay from '../public/menu-ley.png'

export default function Sushiguay() {
  return (
    <Layout>
      <div className='menu-page'>
        <Image
          src={Sushi1}
          alt='página 1 del menu sushiguay'
          placeholder='blur'
          objectFit='cover'
          width={1000}
        />
        <Image
          alt='página 2 del menu sushiguay'
          src={Sushi2}
          placeholder='blur'
          objectFit='cover'
          width={1000}
        />
        <Image
          alt='página 3 del menu sushiguay'
          src={Sushi3}
          placeholder='blur'
          objectFit='cover'
          width={1000}
        />
        <Image
          alt='página 4 del menu sushiguay'
          src={Sushi4}
          placeholder='blur'
          objectFit='cover'
          width={1000}
        />
        <Image
          alt='página 5 del menu sushiguay'
          src={Sushi5}
          placeholder='blur'
          objectFit='cover'
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
