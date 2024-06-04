import React from 'react'

const Header = () => {
  return (
    <header className='flex py-3 px-10 justify-between items-center'>
        <section>
            <img src="./Param_Computers_logo.jpg" alt="param-computers-logo" width={"100px"} height={"100px"}/>
        </section>
        <section className='flex gap-10'>
            <h2 className='font-semibold text-xl'>Home</h2>
            <h2 className='font-semibold text-xl'>About</h2>
            <h2 className='font-semibold text-xl'>Courses</h2>
            <h2 className='font-semibold text-xl'>Contact</h2>
        </section>
    </header>
  )
}

export default Header