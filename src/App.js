import {React, Component} from 'react'
import {Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TokenAddress from './components/TokenAddress'
import PairAddress from './components/PairAddress'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <div className="app-container">
            <Sidebar />
            <Routes>
              <Route exact path="/" Component={TokenAddress} />
              <Route exact path="/pair" Component={PairAddress} />
            </Routes>
        </div>
        <footer className="footer"></footer>
      </>
    )
  }
}


export default App;
