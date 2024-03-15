import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";



export default function Footer() {
  return (



      <footer className="bg-blue-800 text-white p-4 text-left mt-4 lg:text-center">
        <h1 className="ml-5 lg: font-regular mb-6 font-body text-2xl ">CliquéaloMX</h1>

        <div className="sm:flex  ml-5 justify-left md:flex-row md:justify-center gap-20 text-left">
          <div className="">
            <a href="#" className="hover:underline block mb-2 font-light">
              Sobre nosotros
            </a>
            <a href="#" className="hover:underline block mb-2 font-light">
              Política de privacidad
            </a>
            <a href="#" className="hover:underline block mb-2 font-light">
              Términos y condiciones
            </a>
          </div>

          <div>
            <a href="#" className="hover:underline block mb-2 font-light">
              Nuestros aliados
            </a>
            <a href="#" className="hover:underline block mb-2 font-light">
              Garantía de Satisfacción
            </a>
            <a href="tel:+523315670227" className="hover:underline block mb-2 font-light">
              Contacto
            </a>
          </div>

        </div>

        <div className="mb-6 flex md:justify-center lg:justify-center ml-4 mt-8 lg:mx-auto">
  <a href="https://www.instagram.com/cliquealo" className="text-white p-1 text-2xl">
    <FaInstagram />
  </a>
  <a href="https://www.facebook.com/cliquealo" className="text-white p-1 text-2xl">
    <FaFacebookSquare />
  </a>
  <a href="https://www.tiktok.com/@cliquealo" className="text-white p-1 text-2xl">
    <RiTiktokLine />
  </a>
  <a href="https://www.youtube.com/channel/UCsXxUc4C_EZ_Fv2ZPh02yUQ" className="text-white p-1 text-2xl">
    <CiYoutube />
  </a>


</div>

        <div className="flex ml-5 text-left lg:justify-center lg:text-center md:m-0">
          <p className="text-white font-thin text-sm">
            Cliquéalo México
            <br/>
            Copyright © 2024
            <br/>
            <a href="#" className="text-white font-thin text-sm">
              Todos los derechos reservados
            </a>
          </p>
        </div>
      </footer>
  )
}


