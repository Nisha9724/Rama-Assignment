import React from 'react'
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';


const Home = () => {
  return (
    <div>
      <div className="container mx-auto flex px-5 pb-10 items-center justify-center flex-col">
        <img className="object-contain h-35 w-80 mb-8" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt='cover' />
        <div className="block border border-gray-200 rounded-full  dark:border-gray-600 mb-2 font-medium text-gray-900 text-sm p-3 min-w-[500px]">
          <SearchIcon className="stroke-gray-200" />
          <input type="email" id="email" className="min-w-[600px] outline-0" required />
          <MicIcon />
          <CameraAltTwoToneIcon className='ml-3' />
        </div>


        <div className='flex mt-6'>
          <button class="bg-gray-50 hover:border-gray-300 text-gray-600 font-semibold py-2 px-4 border border-white rounded shadow mr-4">
            Google Search
          </button>
          <button class="bg-gray-50 hover:border-gray-300 text-gray-600 font-semibold py-2 px-4 border border-white rounded shadow">
            I'm feeling Lucky
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home