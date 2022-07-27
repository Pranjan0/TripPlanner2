import React, { useEffect, useState } from 'react'

const Browseplaces = () => {

        const url="http://localhost:5000";
      
        const [placesArray, setPlacesArray] = useState([])
        const [loading, setLoading] = useState(false);
      
        const getDataFromBackend = async () => {
          setLoading(true);
          const res = await fetch(url+'/place/getall');
          const data = await res.json();
          setPlacesArray(data);
          setLoading(false);
          console.log(data);
        }
      
        useEffect(() => {
          getDataFromBackend();
        }, [])

    const showPlaces = () => {
        if(!loading){
          return placesArray.map(({title, city, state, pincode, createdat, type, budget,description, bestTime}) => (
            <div class="col-lg-4 col-md-4 mb-4">
          <div class="card">
            <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
              data-mdb-ripple-color="light">
              <img src=""
                class="w-100" />
              <a href="#!">
                <div class="mask">
                  <div class="d-flex justify-content-start align-items-end h-100">
                    <h5><span class="badge bg-primary ms-2">{type}</span></h5>
                  </div>
                </div>
                <div class="hover-overlay">
                  <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                </div>
              </a>
            </div>
            <div class="card-body">
              <h4>{title}</h4>
              <p>{city},{state}</p>
              <p>{description}</p>
              <h5>Best time to visit - {bestTime}</h5>
              <p>Budget - {budget}</p>


            </div>
          </div>
        </div>
          )) 
        }
    }
  return (
    <div>
      <h2>Browse Tourism Places</h2>
      <hr />
      <section style={{backgroundColor: '#eee'}}>
  <div class="text-center container py-5">
    <h4 class="mt-4 mb-5"><strong>😍Mark your Place`😍</strong></h4>

    <div class="row">
      {showPlaces()}
    </div>
  </div>
</section>
    </div>
  )
}

export default Browseplaces