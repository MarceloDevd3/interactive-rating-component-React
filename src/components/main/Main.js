import React from 'react'
import loadingImg from './img/illustration-devices.svg'
export default function LoadingPage() {



    return (
      <section className='Container'>
        <article className='header-loadingpage-image'>
          <img className='load-Img' src={loadingImg}></img>
        </article>
        <article className='header'>
          <div className='new'>
             <div className='new-bubble'><span>New</span></div>
             <p><span className='upper'>Monograph Dashboard</span></p>
          </div>
          <div className='main-zone'>
          <h1> Powerful insights into your team</h1>
          <p>Project planning and time tracking for agile teams</p>
          <div className='row'>
            <button className='red-btn btn'>Schedule a demo</button>
            <button className='noColor-btn btn'>to see a live preview</button>
          </div>
          </div>

        </article>
      </section>
    )
}