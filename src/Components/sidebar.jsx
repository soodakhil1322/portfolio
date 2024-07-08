import React from 'react'

function Sidebar() {
  return (
    <div className='left-0 bottom-0 fixed px-10 sm:static'>
      <div className="flex flex-col items-center ">
      <div className="flex flex-col gap-3 sm:flex-row ">
     
      <i class="ri-facebook-circle-line text-gray-500 text-xl"></i>
     <a href='https://mail.google.com/mail/u/0/#inbox'> <i class="ri-mail-line  text-gray-500 text-xl"></i></a>
      <a href='https://www.instagram.com/sood_akhil_1322/'>  <i class="ri-instagram-line  text-gray-500 text-xl"></i> </a>
      
      <a href='https://www.linkedin.com/in/akhil-sood-940711255/'><i class="ri-linkedin-box-line  text-gray-500 text-xl"></i></a>
      <i class="ri-github-fill text-gray-500 text-xl"></i>
      
      </div>
      <div className='h-32 w-[1px] bg-[#125f63] sm:hidden '></div>
      </div>
    </div>
  )
}

export default Sidebar
