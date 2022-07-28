import React from 'react'
import Swal from 'sweetalert2';
import { Formik } from 'formik';

import React, { useEffect, useState } from "react";

const Itinerary = () => {
  const url = "http://localhost:5000";

  const [itineraryArray, setItineraryArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState("");

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const getDataFromBackend = async () => {
    setLoading(true);
    const res = await fetch(url + "/itinerary/getall");
    const data = await res.json();
    setPlacesArray(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);
  const showPlaces = () => {
    if (!loading) {
      return placesArray.map(
        ({
          _id,
          title,
          city,
          state,
          pincode,
          createdat,
          type,
          budget,
          description,
          bestTime,
          thumbnail,
        }) => (
          <div class="col-lg-4 col-md-4 mb-4">
            <div class="card">
              <div
                class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                data-mdb-ripple-color="light"
              >
                <img src={url + "/" + thumbnail} class="w-100" />
                <a href="#!">
                  <div class="mask">
                    <div class="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span class="badge bg-primary ms-2">{type}</span>
                      </h5>
                    </div>
                  </div>
                  <div class="hover-overlay">
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
              <div class="card-body">
                <h4>{title}</h4>
                <p>
                  {city},{state}
                </p>
                <p>{description}</p>
                <h5>Best time to visit - {bestTime}</h5>
                <p>Budget - {budget}</p>
                <b>
                  <button onClick={e => addToItinerary(_id)} className="btn btn-primary mt-5">
                    Add to Itinerary
                  </button>
                </b>
              </div>
            </div>
          </div>
        )
      );
    }
  };
  export default Itinerary;