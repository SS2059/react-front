import React from "react"
import { FaStar, FaRegStar, FaPlay  } from "react-icons/fa";

const Poster = () => {
    return (
      <div className="flex gap-12 mt-6 ml-6 w-fit">
        <article className='ml-[10px] mt-[10px] bg-[#1a1a1a]  rounded-xl w-fit'>
            <img src = "https://igimage.indiaglitz.com/telugu/home/the-goat-life-100124-2.jpg" 
            alt="movie poster" className="w-[194px] h-[287px]" />

            <div className='py-3 px-2'>

         {/* Rating */}
         <div className='flex items-center gap-4 mb-2'>
          
         <div className='flex items-center gap-1'>
            
            <FaStar color="yellow" className='size-4' />
            
            <p className='text-white opacity-80'>8.6</p>
          </div>

          <FaRegStar className='text-blue-900 cursor-pointer hover:text-white size-[14px]'/>
        </div>

        {/* title */}
        <h2 className='text-white font-medium hover:underline cursor-pointer '>Amaran</h2>

        {/* watch now */}
        <button className='mt-[20px] bg-[#313131]  py-2  w-full flex items-center gap-2 justify-center rounded-2xl text-white'>
          <span className='text-xs font-semibold'>Watch Now</span>
          <FaPlay color='white' size={12} />
        </button>

        <button className=' text-white py-2  w-full flex items-center gap-2 justify-center '>
          <FaPlay color='white' size={12} />
          <span className='text-sm font-semibold'>Trailer</span>
        </button>


      </div>
      </article>

  {/* Poster2 */}
  <article className="mt-[10px] ml-[10px] bg-[#1a1a1a] rounded-xl w-fit">
        < img src ="https://m.media-amazon.com/images/M/MV5BZjI1ZjM3NjUtYTc1Ni00ODJmLWI5YjQtMWZiZTAyNTFiZGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
         alt = "poster" className="w-[194px] h-[287px]" />

         <div className="py-3 px-2">
          
          {/* Rating */}
      <div className="flex items-center gap-4 mb-2" >
        <div className="flex items-center gap-1" >
          <FaStar color= "yellow" className="size-4" />
 
          <p className="text-white opacity-80">7.9</p>
          </div>
        <FaRegStar className="size-4 cursor-pointer hover:text-white text-blue-900"/>
        </div>

        {/* title */}
      <h2 className="text-white cursor-pointer hover:underline font-medium">Kill</h2>


      {/* watch now */}
      <button className="mt-[20px] bg-[#313131] py-2 w-full flex items-center gap-2 justify-center rounded-2xl text-white hover:underline cursor-pointer">
      <span className="text-xs font-semibold">Watch Now</span>
      <FaPlay color="white" size={12} />
      </button>

      <button className=" py-2 w-full text-white flex items-center gap-2 justify-center hover:underline cursor-pointer ">
        <FaPlay color="white" size={12} />
        <span className="text-sm font-semibold">Trailer</span>
      </button>

          </div>
          </article>

          {/* Poster3 */}
          <article className="mt-[10px] ml-[10px] rounded-xl w-fit bg-[#1a1a1a]">
        <img src = "" 
          alt="movie poster" className="w-[194px] h-[287px]" />

        <div className="py-3 px-2">

        {/* Rating */}
        <div className="flex items-center gap-4 mb-2">
        <div className="flex items-center gap-1">
        <FaStar color="yellow" className="size-4"/>
      <p className="text-white opacity-80">7.4</p>
      </div>
      <FaRegStar className="text-blue-900 hover:text-white  cursor-pointer size-4" />
      </div>

      <h2 className="text-white cursor-pointer hover:underline font-medium">Chhaava</h2>

      {/* Watch Now */}
      <button className="mt-[20px] bg-[#313131] py-2 w-full flex items-center gap-2 justify-center rounded-2xl text-white hover:underline cursor-pointer">
        <span className="text-xs font-semibold">Watch Now</span>
      </button>

        </div>
          </article>

</div>
  )
}

export default Poster