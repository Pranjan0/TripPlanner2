import React from 'react'
import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-2">
        <div class="container-fluid">
        <div class="d-flex">
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"> 
                    <i class="fas fa-bars"></i> 
        </button>
                  <a class="navbar-brand ms-3"> 
                  <i class="fa-solid fa-plane-departure"></i>
                  </a>  
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent d-flex align-item-right">
                 
                   <ul class="navbar-nav me-auto mb-2 ms-2 ps-1 ms-lg-0 ps-lg-0 mb-lg-0"> 
                    <li class="nav-item"><a class="nav-link" href="/" aria-controls="#picker-editor">Home</a></li>
                     <li class="nav-item"> <a class="nav-link" href="/addplace">Add Places</a> </li> 
                     <li class="nav-item"> <a class="nav-link" href="/itinerary" aria-controls="#picker-editor">Itinerary</a> </li> 
                    </ul> 
        </div>
        <div class="d-flex align-item-center"> 
                      <button type="button" class="btn  btn-link px-3 mb-1 me-2" aria-controls="#picker-editor"><Link to="/login">Login</Link></button> 
                      <Link to="/signup"><button type="button" class="btn  btn-primary mb-1 me-lg-3" aria-controls="#picker-editor">Signup</button></Link> 
                    </div> 
        </div>
       </nav>
    </div>
  )
}

export default Navbar;