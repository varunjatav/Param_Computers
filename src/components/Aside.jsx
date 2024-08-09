import React from 'react'
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { ToggleSliceActions } from '../store/sideBarToggleSlice';
const Sidebar = () => {
  const dispatch = useDispatch();
  const toggle = useSelector(store => store.sideBarToggle);
  // console.log("toggle", toggle);
  const handleToggle = () => {
    dispatch(ToggleSliceActions.setToggleSlice());
  };
  return (
    <aside>
       <section className={`gap-10 flex flex-col text-center justify-center items-center  ${!toggle && "hidden"} absolute w-[100vw] bg-white py-10 lg:hidden`}>
        <Link to="/" className="font-semibold text-xl" onClick={handleToggle}>
          Home
        </Link>
        <a href="#about" className="font-semibold text-xl" onClick={handleToggle}>About</a>
        <a href="#courses" className="font-semibold text-xl" onClick={handleToggle}>Courses</a>
        <a href="#contact" className="font-semibold text-xl" onClick={handleToggle}>Contact</a>
        <button onClick={handleToggle}><RxCross2 /></button>
      </section>
    </aside>
  )
}

export default Sidebar