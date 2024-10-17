import React from 'react'

const Header = () => {
  return (
    <header className='text'>
      <div className='flex items-center justify-between  w-full h-[65px] gap-5 px-11'>
        <div className='w-[55px] h-[55px]'>
          <img className='w-full h-full object-center' src="./src/assets/image/logo-secondary.png" alt="" />
        </div>
        <div className='flex'>
          <nav className='flex gap-8 items-center'>
            <ul className='flex gap-5 navbar_item '>
              <li><a href="#">Service</a></li>
              <li><a href="#">Work</a></li>
              <li><a href="#">Resume</a></li>
              <li><a href="#">Skill</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>

          </nav>
        </div>
        <div>
          <button className='w-[144px] h-[49px] border antialiased  rounded-full hero_me'>Hero Me</button>
        </div>
        {/* <div className='flex-none'>

        </div> */}
      </div>
    </header>
  )
}

export default Header
