import React, { useState } from 'react'

export default function NavbarItem(props) {
  
  // updates whether or not the NavbarItem is underlined using a state hook (based on mouse hover)
  const [underlined, setUnderline] = useState(false)
  function mouseHover() {
    setUnderline(true)
  }
  function mouseLeft() {
    setUnderline(false)
  }


  // TO-DO: implement functionality to load new page on NavbarItem clicked
  function loadPage() { }


  // returns the nav bar item to be displayed
  return (
    <p
      onMouseOver={mouseHover}
      onMouseOut={mouseLeft}
      onClick={loadPage}
      id={underlined ? 'focused' : 'unfocused'}
      className="navbarItem"
    >{props.name}</p>
  )

}
