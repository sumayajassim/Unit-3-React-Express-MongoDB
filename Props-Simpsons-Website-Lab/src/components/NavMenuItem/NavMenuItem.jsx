import React from 'react'

function NavMenuItem(props) {
    console.log(props)
  return (
    <li className="trigger"><a href="/#">MENU ITEM</a>
    <ul className="submenu">
        <li><a href="/#">Link 1</a></li>
        <li><a href="/#">Link 2</a></li>
        {/* {props.listItems.map((item, index) => (
             <li><a href="/#">{item}</a></li>

            ))} */}
    </ul>
</li>
  )
}

export default NavMenuItem