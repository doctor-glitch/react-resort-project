import React from 'react'

//for cover picture
export default function Hero({children, hero}) {
  return (
    <header className={hero}>
      {children}
    </header>
  )
}

Hero.defaultProps={
  hero:"defaultHero"
}


