import Nav from './components/navbar/MenuNavBar'
import Main from './components/main/Main'
import './App.css';
import './breakpoint01.css'
import './breakpoint02.css'

import icon from './components/img/logo.svg'



function App() {
  return (
    <div className="App">
      <div className="main-container">
      <Nav logo={icon}   />
      <Main />
      </div>
       
    </div>
  );
}

export default App;
