import { Input } from "@material-tailwind/react";
import {FiSearch} from "react-icons/fi"
function Navbar() {
  return (
    <header>
      <div className="continer bg-[#095ACD]">
      <div className="inner w-[full] h-[96px]">
        <a href="#" className="logo_link text-[#fff] text-[36px]">
          Pressa
        </a>
        <div className="w-72">
      <Input
        type="search"
        placeholder="Email Address"
        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[100px]" }}
        icon={<FiSearch/>}
      />
    </div>
      <ul className="link flex text-[#fff] text-[18px] w-[500px] justify-around items-center">
      <li><a>Biz haqimizda</a></li>
      <li><a>Savol javob</a></li>
      <li><button className="w-[160px] h-[51px] bg-[#FE8B37] rounded-[5px]">Elon berish</button></li>
      </ul>
      </div>
    </div>
    </header>
  );
}

export default Navbar;