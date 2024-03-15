import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <header className='bg-transparent shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        {/* Título Header */}
        <Link to='/'>
          <h1 className='text-gray-700 text-xl font-body'>
            CLIQUÉALO.<span className='text-green-800'>M</span>
            <span className='text-red-800'>X</span>
          </h1>
        </Link>
        {/* Navegación CliquéaloMX */}

        <form></form>

        <ul className='flex gap-5 items-center font-body font-light'>
          <Link to='/'>
            <li className='hidden sm:inline'>Inicio</li>
          </Link>

          <Link to=''>
            <li className='hidden sm:inline'>Financiamiento</li>
          </Link>

          <Link to='/Marketplace'>
            <li>Marketplace</li>
          </Link>

          <Link to='/login'>
            <li className='button bg-green-600 p-2 rounded-md text-white hover:bg-green-700 transition-all	'>
              Iniciar sesión
            </li>
          </Link>
        </ul>
      </div>
    </header>
  )
}
