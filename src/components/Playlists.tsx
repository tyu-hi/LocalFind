import { useState, useEffect } from 'react';
const Playlists = () => {

  return (
    <div>
      <div className="flex mt-3">
        <div className="border rounded-md mr-5 relative">
          <img
            src="https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-89.jpg"
            className="w-[210px] h-[190px] rounded-md"
            alt="playlist"
          />
          <div className="absolute rounded-md inset-0 bg-gradient-to-b from-transparent to-black opacity-100" style={{ top: 130, height: '30%' }}></div>
          <div className="absolute bottom-0 left-0 right-0 p-2 text-white">playlist 1</div>
        </div>

        <div className="border rounded-md mr-5 relative">
          <img
            src="https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-89.jpg"
            className="w-[210px] h-[190px] rounded-md"
            alt="playlist"
          />
          <div className="absolute rounded-md inset-0 bg-gradient-to-b from-transparent to-black opacity-100" style={{ top: 130, height: '30%' }}></div>
          <div className="absolute bottom-0 left-0 right-0 p-2 text-white">playlist 2</div>
        </div>

       <div className="border rounded-md mr-5 relative">
          <img
            src="https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-89.jpg"
            className="w-[210px] h-[190px] rounded-md"
            alt="playlist"
          />
          <div className="absolute rounded-md inset-0 bg-gradient-to-b from-transparent to-black opacity-100" style={{ top: 130, height: '30%' }}></div>
          <div className="absolute bottom-0 left-0 right-0 p-2 text-white">playlist 3</div>
        </div>
        
        <div className="border rounded-md border-orange border-2 bg-gray-50 w-[210px] h-[190px] flex justify-center items-center">
          <div className="flex align-items:center">
            <svg width="34" height="34" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.3636 43.3068V0.147724H25.1932V43.3068H19.3636ZM0.681818 24.625V18.8295H43.875V24.625H0.681818Z" fill="#FF9E00"/>
            </svg>
          </div>
         
        </div>
      </div>

      {/* if clicked on a playlist, show the playlist below */}
      <div className="border rounded-md mt-5 border-orange border-2">
        <div className='flex flex-col relative'>
          <div className='ml-2 text-black text-2xl px-5 py-4'>
            PlaylistName
          </div>
          <div className='flex flex-row relative text-black mt-2 w-full h-[75px] border border-0  rounded-md hover:bg-orange hover:text-white'>
            <div className='p-6'>
              01
            </div>
            <div className='p-3'>
              <img src="https://d3hbe0kmbam4a5.cloudfront.net/photos/af13582d-ad98-418e-b10a-5fccfe3b1da7.jpg" alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                Restaurant
              </div>
              <div className='text-sm'>
                Restaurant Address
              </div>
            </div>
          </div>

          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-md hover:bg-orange hover:text-white'>
            <div className='p-6'>
              02
            </div>
            <div className='p-2 mt-1'>
              <img src="https://d3hbe0kmbam4a5.cloudfront.net/photos/af13582d-ad98-418e-b10a-5fccfe3b1da7.jpg" alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                Restaurant
              </div>
              <div className='text-sm'>
                Restaurant Address
              </div>
            </div>
          </div>

          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-md hover:bg-orange hover:text-white'>
            <div className='p-6'>
              03
            </div>
            <div className='p-2 mt-1'>
              <img src="https://d3hbe0kmbam4a5.cloudfront.net/photos/af13582d-ad98-418e-b10a-5fccfe3b1da7.jpg" alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                Restaurant
              </div>
              <div className='text-sm'>
                Restaurant Address
              </div>
            </div>
          </div>

          <div className='flex flex-row relative text-black w-full h-[75px] border border-0 rounded-md hover:bg-orange hover:text-white'>
            <div className='p-6'>
              04
            </div>
            <div className='p-2 mt-1'>
              <img src="https://d3hbe0kmbam4a5.cloudfront.net/photos/af13582d-ad98-418e-b10a-5fccfe3b1da7.jpg" alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                Restaurant
              </div>
              <div className='text-sm'>
                Restaurant Address
              </div>
            </div>
          </div>

          <div className='flex flex-row relative text-black w-full h-[75px] border border-0  rounded-md hover:bg-orange hover:text-white'>
            <div className='p-6'>
              03
            </div>
            <div className='p-2 mt-1'>
              <img src="https://d3hbe0kmbam4a5.cloudfront.net/photos/af13582d-ad98-418e-b10a-5fccfe3b1da7.jpg" alt="restraunt" className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex flex-col p-2'>
              <div className='text-md'>
                Restaurant
              </div>
              <div className='text-sm'>
                Restaurant Address
              </div>
            </div>
          </div>

        
        </div>

        

      </div>

    </div>
  )
}

export default Playlists