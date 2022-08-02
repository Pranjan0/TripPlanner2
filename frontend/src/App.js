import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Addplaces from './components/Addplaces';
import Navbar from './components/Navbar';
import Itinerary from './components/Itinerary';
import Browseplaces from './components/Browseplaces';
import Auth from './components/Auth';
import { UserProvider } from "./useContext";
import { useState } from "react";


function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  return (
    <div>
       <UserProvider user={currentUser}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route element={<Home></Home>} path="/" />
        <Route element={<Signup />} path="/signup" />
        {/* <Route element={<Home></Home>} path="/homepage" /> */}
        <Route element={<Login></Login>} path="/login" />
        <Route element={<Addplaces></Addplaces>} path="addplace" />
        <Route element={<Auth>
          <Itinerary></Itinerary>
        </Auth>} path="itinerary" />
        <Route element={<Browseplaces />} path="browse" />
        <Route element={<Auth />} path="auth" />

        {/* <Route element={<Navbar></Navbar>} path="/nav" /> */}
      </Routes>
      </BrowserRouter>      
      </UserProvider>
    </div>
    
  );
}

export default App;
