import React from "react"
import Swal from "sweetalert2"

import { useEffect, useState } from "react"
const img = "https://www.sacredwalks.org/wp-content/themes/isha/images/kailash-kyn.jpg"

const Itinerary = () => {
  const url = "http://localhost:5000"

  const [itineraryArray, setItineraryArray] = useState([])
  const [loading, setLoading] = useState(false)
  const [commentsArray, setCommentsArray] = useState([])
  const [cardOpen, setCardOpen] = useState(null)

  const updateItinerary = async (id, data) => {
    console.log(data)
    const response = await fetch("http://localhost:5000/itinerary/update/" + id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })

    console.log(response.status)
    getDataFromBackend()

    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Update Successful",
        text: "Successfully added",
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Updation Failed",
        text: "Something went wrong",
      })
    }
  }
  const deleteItinerary = async (id) => {
    const response = await fetch("http://localhost:5000/itinerary/delete/" + id, {
      method: "DELETE",
    })

    console.log(response.status)
    getDataFromBackend()

    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Delete Successful",
        text: "Successfully deleted",
      })
      getDataFromBackend()
    } else {
      Swal.fire({
        icon: "error",
        title: "Deletion Failed",
        text: "Something went wrong",
      })
    }
  }

  const [filter, setFilter] = useState("")

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))

  const updateComments = (i, val) => {
    let temp = commentsArray
    temp[i] = val
    setCommentsArray([...commentsArray])
    console.log(commentsArray)
  }

  const getDataFromBackend = async () => {
    setLoading(true)
    const res = await fetch(url + "/itinerary/getbyuser/" + currentUser._id)
    const data = await res.json()
    setItineraryArray(data)
    setLoading(false)
    console.log(data)
    setCommentsArray(data.map((iti) => iti.comments))
  }

  useEffect(() => {
    getDataFromBackend()
  }, [])

  const showItinerary = () => {
    if (!itineraryArray.length) {
      return <h1 className="lg-heading">Start Creating your Itinerary</h1>
    }
    if (!loading) {
      return itineraryArray.map(({ _id, place, time, visited, addedBy, comments }, index) => (
        <div className="col-lg-4 col-md-4 mb-4">
          <div className="card">
            <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
              <img src={url + "/" + place.thumbnail} className="w-100" />
              <div className="mask"></div>

              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-primary ms-2">
                        {place.title}, {place.city}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div class="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                </div>
              </a>
            </div>
            <button
              onClick={(e) => {
                if (cardOpen === index) setCardOpen(null)
                else setCardOpen(index)
              }}
              className="btn btn-link">
              View Details 📑
            </button>
            <div class="card-body" style={{ height: cardOpen === index ? "fit-content" : 0, overflow: "hidden" }}>
              <button
                zIndex="2"
                className="btn btn-danger btn-sm d-flex"
                onClick={() => {
                  deleteItinerary(_id)
                }}>
                <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
              <h4>{place.budget}</h4>
              <p>
                {new Date(time).toLocaleString()},{visited}
              </p>

              
            </div>
            <div className="card-body">
            <div className="formOutline">
                <label className="form-label d-flex mt-2" for="textAreaExample">
                  Comment
                </label>
                <textarea
                  className="form-control"
                  id="textAreaExample"
                  rows="4"
                  value={commentsArray[index]}
                  onChange={(e) => updateComments(index, e.target.value)}></textarea>
              </div>
              <div className="form-check d-flex mt-2">
                <label className="form-check-label" for="flexCheckDefault">
                  Visited
                  <input
                    checked={visited}
                    className="form-check-input"
                    type="checkbox"
                    name="flexCheckDefault"
                    id="flexCheckDefault"
                    onClick={(e, c) => {
                      console.log(e.target.checked)
                      updateItinerary(_id, { visited: e.target.checked })
                    }}
                  />{" "}
                </label>
              </div>
              <div className="d-grid d-md-flex justify-content-md-end">
                <button className="btn btn-success mt-4" onClick={(e) => updateItinerary(_id, { comments: commentsArray[index] })}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      ))
    }
  }

  return (
    <div>
      <header>
        <div className="container">
          <h1 className="text-center display-4">Your Itinerary</h1>
        </div>
      </header>
      <section style={{ backgroundColor: "#eee", backgroundImage: `url(${img})`, backgroundSize: "cover" }}>
        <div class="text-center container py-5">
          <h4 class="mt-4 mb-5" style={{ color: "black" }}>
            <strong>😍Mark your Place`😍</strong>
          </h4>

          <div class="row">{showItinerary()}</div>
        </div>
      </section>
    </div>
  )
}
export default Itinerary
