import React, {useState} from 'react'
import closeIcon from './img/icon-hamburger.svg'
import burgerIcon from './img/icon-close.svg'



export default function Navbar(props){

    const [isActive, setIsActive] = useState(false)
    function hundleClick() {
      setIsActive(prev => !prev)
       //isActive ? console.log('active') : console.log('not-active') 
    }

    const arra = [closeIcon, burgerIcon]
   

    return (
       <div className='navbar-Container'>
       <div className='bg'></div>
        <div>
            <img  src={props.logo} alt='logo-icon'></img>
        </div>
        <div className='toogle-display'>
            <button onClick={hundleClick} className='Close-btn' >
            <img src={isActive ? arra[0] :arra[1]} />
            </button>
        </div>
         <nav id="navbar"  
          className={`navbar-toggle ${isActive ? "invisible" : "active"}`}>
           
            <ul>
                <li><a href="#">Product</a></li>
                <li><a href="#">features</a></li>
                <li><a href="#">pricing</a></li>
                <li className='bubble'>.</li>
                <div className='Line-Ative'></div>
                <li><a href="#" className='login'>login</a></li>
            </ul>
         </nav>
       </div>
    )
}



