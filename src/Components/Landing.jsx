import React from 'react'
import Hero from './Hero'
import PopularTours from './PopularTours'
import Discover from './Discover'
// import Discover from './Discover'

const Landing = () => {
  return (
    <div className='bg-slate-900 my-0 py-0'>
      <Hero/>
      <PopularTours/>
      <Discover/>


      </div>
  )
}

export default Landing