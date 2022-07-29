import React from 'react'
import Swal from 'sweetalert2';
import { Formik } from 'formik';

import { useEffect, useState } from "react";

const Itinerary = () => {
  const url = "http://localhost:5000";

  const [itineraryArray, setItineraryArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState("");

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const getDataFromBackend = async () => {
    setLoading(true);
    const res = await fetch(url + "/itinerary/getbyuser/"+currentUser._id);
    const data = await res.json();
    setItineraryArray(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);
  
  const showItinerary = () => {
    if (!loading) {
      return itineraryArray.map(
        ({
          place,
          time,
          visited,
          addedBy,
          comments

        }) => (
          <div className="col-lg-4 col-md-4 mb-4">
            <div className="card">
              <div
                className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                data-mdb-ripple-color="light"
              >
                             
                <img src={url + "/" + place.thumbnail} className="w-100" />
                <div className="mask">
            <button className='btn btn-danger btn-sm d-flex'><i className="fa fa-trash" aria-hidden="true"></i></button> 
            </div>
            
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">{place.title}, {place.city}</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
              <div class="card-body">
                <h4>{place.budget}</h4>
                <p>
                  {new Date(time).toLocaleString()},{visited}
                </p>
                
                <div className="formOutline">
                <label className="form-label d-flex mt-2" for="textAreaExample">Comment</label>
                <textarea className="form-control" id="textAreaExample" rows="4"></textarea>
                </div>
                <div className="form-check d-flex mt-2">
                <label className="form-check-label" for="flexCheckDefault">Visited
                <input className="form-check-input" type="checkbox" name="flexCheckDefault" id="flexCheckDefault"/>   </label>
                </div>
                <div className='d-grid d-md-flex justify-content-md-end'><button className='btn btn-success mt-4'>Submit</button></div>
              </div>
            </div>
          </div>
        )
        );
      }
  };
  
  
  return <div>
      <h2>Itinerary</h2>
      <hr />
      <header>
        <div className="container">
          <h1 className="text-center display-4">Your Itinerary</h1>
          
        </div>
      </header>
      <section style={{ backgroundColor: "#eee" }}>
        <div class="text-center container py-5">
          <h4 class="mt-4 mb-5">
            <strong>😍Mark your Place`😍</strong>
          </h4>

          <div class="row">{showItinerary()}</div>
        </div>
      </section>
    </div>
}
  export default Itinerary