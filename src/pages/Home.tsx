// Este codigo es el home de la aplicacion, se muestra un carrusel con las marcas disponibles, se muestra un boton para ir al catalogo de autos, y se muestra una lista de razones para comprar un auto con nosotros.


import { Link } from 'react-router-dom'
import { FaCar } from 'react-icons/fa'
import HomeCar from '../assets/img/home-car.jpg'
import Carousel from '../Components/Carousel.tsx'
import { PiShootingStarFill } from 'react-icons/pi'
import { FaCarOn } from 'react-icons/fa6'
import { IoNewspaperSharp } from 'react-icons/io5'
export default function Home () {
  return (
    <>
      <div className=''>
        <img src={HomeCar} className='w-full h-1/2  object-cover h-96'></img>
      </div>

      <h2 className='font-body text-left text-2xl  mt-14 p-7 lg:text-center'>
        Somos la mejor opción para que compres el auto de tus sueños
      </h2>

      <Carousel />

      <div className='flex justify-center'>
        <Link to='/marketplace' className='w-full sm:w-auto m-4 mt-10'>
          <button className='bg-blue-700 text-white p-3 rounded-md shadow-md flex items-center justify-center hover:bg-blue-900 transition-all w-full sm:w-auto sm:mx-2'>
            EXPLORAR CATÁLOGO
            <FaCar className='text-white ml-3' />
          </button>
        </Link>
      </div>

      <div className={'mb-16 m-10 grid grid-cols-1 gap-4 items-center justify-center lg:grid sm:grid-cols-3 sm:justify-start'}>
    <h2 className={'col-span-full text-center mt-10 text-2xl mb-10'}>
        ¿Por qué con nosotros?
    </h2>

    <div className={'flex items-center mb-4'}>
        <PiShootingStarFill className={'text-yellow-500 text-6xl'} />
        <p className={'text-xl p-4'}>
            Porque ofrecemos la mejor experiencia al momento de comprar tu vehículo.
        </p>
    </div>

    <div className={'flex items-center mb-4 '}>
        <FaCarOn className={'text-blue-500 text-5xl -ml-3'} />
        <p className={'text-xl p-4' }>
            Siempre encontrarás el vehículo a tu medida.
        </p>
    </div>

    <div className={'flex items-center '}>
        <IoNewspaperSharp className={'text-emerald-500 text-6xl'} />
        <p className={'text-xl p-4'}>
            Selecciona la mejor propuesta de crédito a tus posibilidades y necesidades
        </p>
    </div>
</div>
    </>
  )
}
