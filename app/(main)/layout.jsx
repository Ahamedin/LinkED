import React from 'react'

const MainLAyout = ({children}) => {

    // redirect to onboarding
  return (
    <div className="container mx-auto mt-16 sm:mt-20 md:mt-24 mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6">{children}</div>
  )
}

export default MainLAyout