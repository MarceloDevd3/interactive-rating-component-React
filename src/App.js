import Nav from './components/navbar/MenuNavBar'
import Main from './components/main/Main'
import './App.css';

import icon from './components/img/logo.svg'



function App() {
  return (
    <div className="App">
         <Nav logo={icon}   />
         <Main />
    </div>
  );
}

export default App;
