import React from 'react'
import './App.css';
import Display from './components/SubmitCard'
import Star from './images/icon-star.svg'
function App() {
  const [rating, setReting] = React.useState(0)
  const [Visibility, setVisibility] = React.useState(true)

  const ratingValue = (valor) => {
     setReting(valor)
  }

  const visibility = (e) => {
    setVisibility(e)
 }


  function submitForm(e) {
    e.preventDefault()
  }

  console.log(rating)
  return (
    <div className="App">
      <article onChange={submitForm}
      id='first-Card'
       className={Visibility ?  'Display-in visible' : 'Display-in invisible' }>
      <div id='star'>
       <img src={Star} alt='icon-star' className='star-icon' />
      </div>
      <div className='information-box'>
        <h1 className='star-header'>How did we do?</h1>
        <p className='star-information'>Please let us know how we
         did with your support request. All feedback is appreciated 
         to help us improve our offering!</p>
         <div className='row'>
              <button onClick={() => ratingValue(1)}>1</button>
              <button onClick={() => ratingValue(2)}>2</button>
              <button onClick={() => ratingValue(3)}>3</button>
              <button onClick={() => ratingValue(4)}>4</button>
              <button onClick={() => ratingValue(5)}>5</button>
      </div>
      <div className='row-line'>
      <button onClick={() => visibility(false) } className='submit-btn'>submit</button>
      </div>   
      </div>
         
      </article> 


   <div  className={Visibility ?  'Display-in invisible' : 'Display-in visible' } >
   <Display  num={rating} visivel={visibility} />
   </div>
   
       
    </div>
  );
}

export default App;
