//BodyDisplayHome.jsx
import React from 'react'
import { albumsData, popularAlbumsData, songsData } from '../assets/assets'
import BodyDisplayHomePopularArtist from './BodyDisplayHomePopularArtist'
import BodyDisplayHomePopularAlbum from './BodyDisplayHomePopularAlbum'
import BodyDisplayHomePopularSong from './BodyDisplayHomePopularSong'
import { useNavigate } from 'react-router-dom'

const BodyDisplayHome = () => {
  const navigate = useNavigate()
  return (
    <div className='m-2'>
      <div className='bg-[#ffffff26] rounded-[3px] mt-5 mb-5 pt-4'>
        <div className='flex justify-between mr-3 items-center'>
          <h1 className='font-bold text-[25px] ml-5 hover:underline cursor-pointer'  onClick={() => navigate(`/artist/show`)}>Popular artists</h1>
          <a className='underline text-sm opacity-60 hover:opacity-90 cursor-pointer' onClick={() => navigate(`/artist/show`)}>Show all</a>
        </div>
        <div className='my-5 font-bold text-2xl flex overflow-auto'>
          {albumsData.map((item, index) => (<BodyDisplayHomePopularArtist key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      </div>
      <div className='bg-[#ffffff26] rounded-[3px] mt-5 mb-5 pt-4'>
        <div className='flex justify-between mr-3 items-center'>
          <h1 className='font-bold text-[25px] ml-5 hover:underline cursor-pointer'  onClick={() => navigate(`/album/show`)}>Popular album</h1>
          <a className='underline text-sm opacity-60 hover:opacity-90 cursor-pointer' onClick={() => navigate(`/album/show`)}>Show all</a>
        </div>
        <div className='my-5 font-bold text-2xl flex overflow-auto'>
          {popularAlbumsData.map((item, index) => (<BodyDisplayHomePopularAlbum key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      </div>
      <div className='bg-[#ffffff26] rounded-[3px] mt-5 mb-5 pt-4'>
        <div className='flex justify-between mr-3 items-center'>
          <h1 className='font-bold text-[25px] ml-5 hover:underline cursor-pointer' onClick={() => navigate(`/song/show`)}>Popular Songs</h1>
          <a className='underline text-sm opacity-60 hover:opacity-90 cursor-pointer' onClick={() => navigate(`/song/show`)} >Show all</a>
        </div>
        <div className='my-5 font-bold text-2xl flex overflow-auto'>
          {songsData.map((item, index) => (<BodyDisplayHomePopularSong key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      </div>
    </div>
  )
}

export default BodyDisplayHome
