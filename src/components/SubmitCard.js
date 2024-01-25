import React from 'react'
import thankYou from '../images/illustration-thank-you.svg'


export default function SubForm(props) {
    return (
        <div id='second-Card' className={props.visivel}>
           <div id='thanks-illustration'>
            <img src={thankYou} alt='thanks-image' className='thanks'/>
           </div>
        <div className='information-box box-2'>

           <div id='select-bubble'>
           <p>You selected {props.num } of 5</p>
           </div>
            <h2 className='result-txt'>Thank You!</h2>
            <p className='thank-you-txt'>We appreciate you taking the time to give a rating.
             If you ever need more support, 
             don’t hesitate to get in touch!</p>
           </div> 
        </div>
    )
}