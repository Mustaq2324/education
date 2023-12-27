import { useState } from "react";
import { FaBars } from "react-icons/fa";  
import Font, { Text } from 'react-font'
import { IoCloseCircle } from "react-icons/io5";


function Navbar() {
  const [drop, setDrop] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  function handleclick(){
      setDrop(!drop)
    }
    function handledrop() {
      setDrop(!drop);
    }
  const handleClose = () => {
    setIsHidden(true);
  };

  return (
    <div className="bg-[#140E0E]">
      <div className={isHidden?" hidden":"bg-[#F2874F] text-white pt-1 pb-1  justify-around items-center hidden lg:flex"}>
    <div className="flex justify-center gap-4 items-center ">
    <p> Live Classes for Annual Exam Revision. Starts on 15 January 2024</p>
    <div>
      <button className="bg-[#140E0E] px-3 py-1 rounded-3xl hover:bg-[#FBCB1D] transition-all duration-500 hover:text-black">Check Now</button>
    </div>
    </div>
    <IoCloseCircle onClick={handleClose}  className="text-2xl hover:text-black cursor-pointer transition-all duration-500"/>
      </div>
    <div className="p-3 lg:px-4 w-full top-0 z-50 overflow-x-hidden  transition-all duration-500">
            <div className="flex items-center justify-between lg:px-4 ">

            <div className="mt-1 lg:flex items-center justify-center hidden pb-2 lg:pb-0 me-8 lg:me-0">
              <Font family="Rubik">
              <ul className="flex gap-5 justify-center text-lg items-center ">
              <li className="text-white cursor-pointer hover:text-[#FBCB1D]">
              Home
                </li>
                <li className="text-white cursor-pointer hover:text-[#FBCB1D]">
                 About
                </li>
                <li className="text-white cursor-pointer hover:text-[#FBCB1D]">
                 Courses
                </li>
                <li className="text-white cursor-pointer hover:text-[#FBCB1D]">
                   Teacher
                </li> 
              </ul>
              </Font>
            </div>
              
             <div>
            <Font family="Merriweather">
           <h1  className="text-white text-4xl ">Link's <span className="text-[#FBCB1D]">Institute</span></h1></Font>
               </div>
             
              {/* mobile */}
              <div className=" flex justify-center items-center me-1 lg:hidden">
               
                <div>
                  <FaBars
                    onClick={handledrop}
                    className="text-white text-3xl me-2"
                  />
                </div>
              </div>
        

        <div className="lg:block hidden">
          <Font family="Nunito">
          <button className="bg-[#FBCB1D] px-4 py-2 rounded  font-semibold hover:bg-white transition-all duration-500 " >Work With us</button>
        </Font>
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
                <Font family="Rubik">
              <ul className="flex flex-col ms-2 justify-center font-[Lato] gap-3 overflow-hidden ">
              <li onClick={handleclick} className="text-white mt-2 ms-4 cursor-pointer hover:text-[#FBCB1D]">
               Home
                </li>
               
                <li onClick={handleclick} className="text-white mt-2 ms-4 cursor-pointer hover:text-[#FBCB1D]">
                About
                </li>
                <li onClick={handleclick} className="text-white mt-2 ms-4 cursor-pointer hover:text-[#FBCB1D]">
                  Courses
                </li>
                <li onClick={handleclick} className="text-white mt-2 ms-4 cursor-pointer hover:text-[#FBCB1D]">
                  Teacher
                </li>
                     
              </ul>
              </Font>
            </div>
            {/* laptop  */}
            
          </div>
        
    </div>
  );
}

export default Navbar;
