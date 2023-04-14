import React from 'react'
import CollegeSearch from './components/collegeSearch';
import { Link } from 'react-router-dom';

function App() {
  return (
  <div>
    <div className="flex justify-center items-center relative mb-16 bg-theme-purple">
      <img className="object-fill" src="images/home-image.jpeg" alt=""/>
      <div className='bg-white w-[45%] h-20 absolute -translate-y-32 rounded-xl flex items-center justify-center'>
           <p className='text-4xl font-bold text-black'> Find Your New Roommate Today!</p>
      </div>
      <div className='absolute w-2/3 t-1/2 translate-y-1/2 translate-x-1/5 rounded-3xl bg-white focus:outline-none'>
        <CollegeSearch/>
      </div>
    </div>
    <h1 className='text-center text-4xl pt-5 m-12 font-bold'> Helping CSU and UC students find their perfect roommate.</h1>
    <div className='grid grid-cols-5 gap-x-10 mb-24'>
      <div className='flex items-center justify-end text-3xl'>
        <button className='h-16 w-12 bg-gray-300 font-bold'>&lt;</button>
      </div>

      <div className='flex flex-col w-full rounded-xl bg-theme-purple'>
        <div className='flex justify-center px-5 pt-5 w-full '>
          <img className='rounded-xl' src="images/girl.png" alt="" />
        </div>

        <div>
          <p className='flex justify-center text-3xl py-1 font-bold'>Fake Name</p>
          <p className='flex justify-center'>21 | Computer Science | Hosting</p>
          <p className='flex justify-center py-1 pb-3 text-xl'>Pomona</p>
        </div>
      </div>

      <div className='flex flex-col w-full rounded-xl bg-theme-purple'>
        <div className='flex justify-center px-5 pt-5 w-full '>
          <img className='rounded-xl' src="images/girl.png" alt="" />
        </div>

        <div>
          <p className='flex justify-center text-3xl py-1 font-bold'>Fake Name</p>
          <p className='flex justify-center'>21 | Computer Science | Hosting</p>
          <p className='flex justify-center py-1 pb-3 text-xl'>Pomona</p>
        </div>
      </div>

      <div className='flex flex-col w-full rounded-xl bg-theme-purple'>
        <div className='flex justify-center px-5 pt-5 w-full '>
          <img className='rounded-xl' src="images/girl.png" alt="" />
        </div>

        <div>
          <p className='flex justify-center text-3xl py-1 font-bold'>Fake Name</p>
          <p className='flex justify-center'>21 | Computer Science | Hosting</p>
          <p className='flex justify-center py-1 pb-3 text-xl'>Pomona</p>
        </div>
      </div>
      <div className='flex items-center justify-start text-3xl'>
        <button className='h-16 w-12 bg-gray-300 font-bold'>&gt;</button>
      </div>
    </div>

    <hr class="mb-16 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

    <div className='ml-20 grid md:grid-cols-3 sm:grid-cols-1 gap-x-20 mb-24 px-30 text-center mr-20'>
      <div className='flex flex-col items-center h-100 w-100 overflow-hidden'>
        <p className='flex justify-center font-semibold lg:text-4xl pb-2 md:text-3xl sm:text-2xl mt-6'>Match with fellow students</p>
        <p className='flex justify-center text-center w-3/4 m-5 lg:text-lg md:text-sm sm:text-xs'>Search for your perfect roommate and connect instantly. Forever friends are made here each day.</p>
        <img className='flex justify-center rounded-xl drop-shadow-xl h-full w-full object-fit mt-8' src="images/friends.JPG" alt="" />
      </div>

      <div className='flex flex-col items-center h-100 w-100 overflow-hidden'>
        <p className='flex justify-center font-semibold lg:text-4xl pb-2 md:text-3xl sm:text-2xl mt-6'>Advertise your open rooms</p>
        <p className='flex justify-center text-center w-3/4 m-5 lg:text-lg md:text-sm sm:text-xs'>Streamline your search for the best tenant by becoming a verified host. Never be uncertain again.</p>
        <img className='flex justify-center rounded-xl drop-shadow-xl h-full w-full object-fit mt-8' src="images/lazy.jpg" alt="" />
      </div>

      <div className='flex flex-col items-center h-100 w-100 overflow-hidden'>
        <p className='flex justify-center font-semibold lg:text-4xl pb-2 md:text-3xl sm:text-2xl mt-6'>We care about<br></br>YOU</p>
        <p className='flex justify-center text-center w-3/4 m-5 lg:text-lg md:text-sm sm:text-xs'>Made by college students, for college students. Finding roommates on your terms has never been simpler.</p>
          <img className='flex justify-center rounded-xl drop-shadow-xl h-full w-full object-fit mt-8' src="images/students.jpg" alt="" />
      </div>
    </div>

    <hr class="mb-20 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

    <p className='text-center mx-20 mt-8 font-semibold lg:text-5xl md:text-2xl sm:text-2xl mb-10'> Finding your perfect roommate is important!</p>
    <div className='ml-20 flex flex-col items-center justify-center mb-20 px-30 text-left mr-20'>
      <img className='justify-center rounded-xl drop-shadow-xl w-2/5 mb-10' src="images/happy_roommate.jpg" alt="" />
      <div className='w-2/3 mb-10'>
        <p className= 'flex justify-center text-center b-5 mb-4 lg:text-lg md:text-sm sm:text-xs'> We know finding a good roommate is important for college life. A roommate can have a 
        significant impact on your academic and personal success. We are here to provide the chance to live with a compatible roommate who can promote a healthy and supportive 
        living environment, allowing individuals to focus on their studies and engage in extracurricular activities. </p>
      </div>
    </div>

    <div className='flex flex-col items-center mb-40 font-semibold'>
      <h1 className='text-center text-4xl mb-16 font-bold lg:text-6xl md:text-3xl sm:text-2xl'>Join now and get to matching!</h1>
      <button className='h-24 w-56 lg:text-4xl md:text-2xl sm:text-2xl text-white rounded-xl bg-theme-orange' type='button'>
        <Link to='/signin'>Sign Up</Link>
      </button>

    </div>

    <footer class="bg-gray-800 text-gray-300 py-20">
      <div class="container mx-auto text-center md:text-base sm:text-sm">
        <p>@2023 ITC Web App Development<br></br>Team camel_case: Gabriel Soto, Francisco Ramirez, Giselle Avila, Shavleen Singh.<br></br>All rights reserved.</p>
     </div>
    </footer>

  </div>

  
  )
}

export default App;