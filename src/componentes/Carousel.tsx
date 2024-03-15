import { SiToyota } from "react-icons/si";
import { SiChevrolet } from "react-icons/si";
import { SiPorsche } from "react-icons/si";
import { SiKia } from "react-icons/si";
import { SiAudi } from "react-icons/si";
import { SiVolkswagen } from "react-icons/si";
import { SiFord } from "react-icons/si";
import { SiJeep } from "react-icons/si";
import { SiBmw } from "react-icons/si";
import { SiNissan } from "react-icons/si";
import { SiHonda } from "react-icons/si";
import { SiJaguar } from "react-icons/si";
import { SiSeat } from "react-icons/si";
import { SiTesla } from "react-icons/si";
import { SiMazda } from "react-icons/si";
import { SiLamborghini } from "react-icons/si";
import { SiMercedes } from "react-icons/si";

export default function Carousel() {
  return (
      <div>


        <div
            x-data="{}"
            x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mt-10 mb-10"
        >
          <ul x-ref="logos"
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <SiToyota className="text-7xl text-gray-600"/>
            </li>
            <li>
              <SiChevrolet className="text-7xl text-yellow-600"/>
            </li>
            <li>
              <SiPorsche className="text-7xl text-yellow-600"/>
            </li>
            <li>
              <SiAudi className="text-7xl text-gray-600 "/>
            </li>
            <li>
              <SiVolkswagen className="text-7xl text-blue-800"/>

            </li>
            <li>
              <SiKia className="text-7xl text-red-600"/>
            </li>
            <li>
              <SiFord className="text-7xl text-blue-800"/>

            </li>
            <li>
              <SiJeep className="text-7xl text-gray-700"/>

            </li>
            <li>
              <SiBmw className="text-7xl text-blue-900"/>
            </li>
            <li>
              <SiNissan className="text-7xl text-gray-700"/>
            </li>
            <li>
              <SiMercedes className="text-7xl text-gray-600"/>

            </li>
            <li>
              <SiJaguar className="text-7xl text-black"/>

            </li>
            <li>
              <SiSeat className="text-7xl text-red-700"/>

            </li>
            <li>
              <SiTesla className="text-7xl text-gray-400"/>

            </li>
            <li>
              <SiHonda className="text-7xl text-gray-400"/>

            </li>
            <li>
              <SiMazda className="text-7xl text-gray-300"/>

            </li>
            <li>
              <SiLamborghini className="text-7xl text-yellow-400"/>

            </li>
          </ul>

          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <SiToyota className="text-7xl text-gray-600"/>
            </li>
            <li>
              <SiChevrolet className="text-7xl text-yellow-600"/>
            </li>
            <li>
              <SiPorsche className="text-7xl text-yellow-600"/>
            </li>
            <li>
              <SiAudi className="text-7xl text-gray-600 "/>
            </li>
            <li>
              <SiVolkswagen className="text-7xl text-blue-800"/>

            </li>
            <li>
              <SiKia className="text-7xl text-red-600"/>
            </li>
            <li>
              <SiFord className="text-7xl text-blue-800"/>

            </li>
            <li>
              <SiJeep className="text-7xl text-gray-700"/>

            </li>
            <li>
              <SiBmw className="text-7xl text-blue-900"/>
            </li>
            <li>
              <SiNissan className="text-7xl text-gray-700"/>
            </li>
            <li>
              <SiMercedes className="text-7xl text-gray-600"/>

            </li>
            <li>
              <SiJaguar className="text-7xl text-black"/>

            </li>
            <li>
              <SiSeat className="text-7xl text-red-700"/>

            </li>
            <li>
              <SiTesla className="text-7xl text-gray-400"/>

            </li>
            <li>
              <SiHonda className="text-7xl text-gray-400"/>

            </li>
            <li>
              <SiMazda className="text-7xl text-gray-300"/>

            </li>
            <li>
              <SiLamborghini className="text-7xl text-yellow-400"/>

            </li>
          </ul>
        </div>

      </div>
  )
}
