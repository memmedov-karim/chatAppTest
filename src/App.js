import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import Room from './pages/room/room';
import  io  from 'socket.io-client';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const socket = io.connect('http://localhost:3001');
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path='/' element={<Home socket={socket} />} />
          <Route path='/room/:name/:id' element={<Room  socket = {socket} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
