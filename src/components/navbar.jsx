function Navbar() {
  return (
    <header>
      <div className="continer">
      <div className="inner w-[full] h-[96px]">
        <a href="#" className="logo_link text-[#fff] text-[36px]">
          Pressa
        </a>
        <input type="search" className="w-[304px] h-[46px] bg-[#fff]"/>
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