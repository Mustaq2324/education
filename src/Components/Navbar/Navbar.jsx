import { useState } from "react";
import { FaBars } from "react-icons/fa";  
import logo from "../../assets/Links Institute.png"


function Navbar() {
  const [drop, setDrop] = useState(false);
  function handleclick(){
      setDrop(!drop)
    }
    function handledrop() {
      setDrop(!drop);
    }
  return (
    <div>
    <div className="p-3 lg:px-4 w-full top-0 z-50 overflow-x-hidden  transition-all duration-500">
            <div className="flex items-center justify-between ">
             <div>
             <img src={logo} className="lg:w-[350px] w-[200px] object-contain"  alt="" />
               </div>
             
              {/* mobile */}
              <div className=" flex justify-center items-center me-1 lg:hidden">
               
                <div>
                  <FaBars
                    onClick={handledrop}
                    className="text-black text-3xl me-2"
                  />
                </div>
              </div>
              <div className="mt-1 lg:flex items-center justify-center hidden pb-2 lg:pb-0 me-8 ">
              <ul className="flex gap-5 justify-center text-lg items-center ">
              <li className="text-black cursor-pointer hover:text-[#29458E]">
              Home
                </li>
                <li className="text-black cursor-pointer hover:text-[#29458E]">
                 About
                </li>
                <li className="text-black cursor-pointer hover:text-[#29458E]">
                 Courses
                </li>
                <li className="text-black cursor-pointer hover:text-[#29458E]">
                   Teacher
                </li> 
              </ul>
            </div>




            </div>
          
            {/* mobile nav */}
            <div
              className={
                drop
                  ? "h-[240px]  transition-all duration-700 w-[100%] lg:hidden "
                  : "h-0 overflow-hidden transition-all duration-700 w-[100%]  opacity-0 lg:hidden"
              }
            >
              <ul className="flex flex-col ms-2 justify-center font-[Lato] gap-3 overflow-hidden ">
              <li onClick={handleclick} className="text-black mt-2 ms-4 cursor-pointer hover:text-[#29458E]">
               Home
                </li>
               
                <li onClick={handleclick} className="text-black mt-2 ms-4 cursor-pointer hover:text-[#29458E]">
                About
                </li>
                <li onClick={handleclick} className="text-black mt-2 ms-4 cursor-pointer hover:text-[#29458E]">
                  Courses
                </li>
                <li onClick={handleclick} className="text-black mt-2 ms-4 cursor-pointer hover:text-[#29458E]">
                  Teacher
                </li>
                     
              </ul>
            </div>
            {/* laptop  */}
            
          </div>
    </div>
  );
}

export default Navbar;
