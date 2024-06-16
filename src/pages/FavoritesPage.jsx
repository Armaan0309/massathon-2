import React from 'react'
import UserCard from '../components/UserCard';
const fav = false;

const FavoritesPage = () => {
  return (
    <div className='bg-[#fafbf9] flex-1 p-10 min-h-screen'>
      <div className='max-w-screen-lg mx-auto'>

      <p className='font-bold text-3xl md:text-5xl my-4'>My Favorites</p>

      {!fav && (
        <div className='h-[80vh] flex flex-col items-center gap-4'>
          <img src="/404.svg" className='h-3/4' alt="404 SVG" />
        </div>
      )}

      {fav && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
        </div>
      )}

      </div>

    </div>
  )
}

export default FavoritesPage;
