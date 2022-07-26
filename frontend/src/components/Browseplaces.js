import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Card from "react-bootstrap/Card";

const img2 =
  "https://thumbs.dreamstime.com/b/travel-web-header-world-map-9984008.jpg";

const Browseplaces = () => {
  const url = "http://localhost:5000";

  const [placesArray, setPlacesArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState("");
  const [open, setOpen] = useState(false);

  const [cardOpen, setCardOpen] = useState(null);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const getDataFromBackend = async () => {
    setLoading(true);
    const res = await fetch(url + "/place/getall");
    const data = await res.json();
    setPlacesArray(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const filterPlaces = async () => {
    setLoading(true);
    const res = await fetch(url + "/place/getall");
    const data = await res.json();
    setPlacesArray(
      data.filter((place) =>
        place.city.toLowerCase().includes(filter.toLowerCase())
      )
    );
    setLoading(false);
    console.log(data);
  };

  const addToItinerary = async (id) => {
    const dataToSend = {
      place: id,
      time: new Date(),
      comments: "",
      addedBy: currentUser._id,
    };
    const response = await fetch(url + "/itinerary/add", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response.status);
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Added Successfully😉",
        text: "Itinerary updated",
      });
      getDataFromBackend();
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed to add",
        text: "Something went wrong",
      });
    }

    // fetch(url + "/");
  };

  const showPlaces = () => {
    if (!loading) {
      return placesArray.map(
        (
          {
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
          },
          index
        ) => (
          <div class="col-lg-3 col-md-3 mb-4">
            <div class="card">
              <div
                class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                data-mdb-ripple-color="light"
              >
                <img
                  src={url + "/" + thumbnail}
                  class="w-100"
                  style={{ height: "250px" }}
                />
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
                <button onClick={e => {
                  if(cardOpen === index) setCardOpen(null);
                  else setCardOpen(index);
                }} className="btn btn-link">View Details 📑</button>

                <Card body style={{height : (cardOpen === index ? 'fit-content' : 0 ), overflow: 'hidden'}} zIndex="5">
                          <h4>{title}</h4>
                          <p>
                            {city},{state}
                          </p>
                          <p>{description}</p>
                          <h5>Best time to visit - {bestTime}</h5>
                          <p>Budget - {budget}</p>
                        </Card>

                <div>
                  <b>
                    <button
                      onClick={(e) => addToItinerary(_id)}
                      className="btn btn-primary mt-3"
                    >
                      Add to Itinerary
                    </button>
                  </b>
                </div>
              </div>
            </div>
          </div>
        )
      );
    }
  };
  return (
    <div>
      <header
        style={{
          backgroundImage: `url(${img2})`,
          backgroundPosition: "center",
          height: "250px",
        }}
      >
        <div className="col-md-10 mx-auto">
          <h1
            className="text-center display-2 font-weight-bold pt-4"
            style={{ color: "black" }}
          >
            Create Your Itinerary
          </h1>
          <div className="input-group mb-3">
            <input
              className="form-control"
              onChange={(e) => setFilter(e.target.value)}
            />

            <button
              className="input-group-append btn btn-primary"
              onClick={filterPlaces}
            >
              Search
            </button>
          </div>
          <h5 className="text-center text-bold pt-4" style={{ color: "black" }}>
            Browse Tourism Places
          </h5>
        </div>
      </header>
      <section style={{ backgroundColor: "#8fe4ef" }}>
        <div class="text-center col-md-10 mx-auto py-4">
          <h4 class="mt-2 mb-5" style={{ color: "black" }}>
            <strong>😍Mark your Place😍</strong>
          </h4>

          <div class="row">{showPlaces()}</div>
        </div>
      </section>
    </div>
  );
};

export default Browseplaces;
