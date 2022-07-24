import React from 'react'
import Swal from 'sweetalert2';
import { Formik } from 'formik';

const Itinerary = () => {
  const url = "http://localhost:5000";
 
   
  const userSubmit = async (formdata) => {
    console.log(formdata);
    const res=await fetch(url+'/place/add',{
          method: 'POST',
          body: JSON.stringify(formdata),
          headers :{
            'Content-Type':"application/json"
          }      
        })
        if(res.status===200){
          Swal.fire({
            icon: 'success',
            title: 'Place added Successful',
            text: 'You are logged in'
          })
        }
}
  return (
    <div>
            <div className="col-md-4 mx-auto bg-light">
                <div className="card mt-5">
                    <div className="card-body">

                        <Formik initialValues={{ place : '', time : '', visited : "false", comments : ''}} onSubmit={userSubmit}>
                            {({values, handleChange, handleSubmit}) => (
                                <form onSubmit={handleSubmit}>
                                    
                                    <h3 className="text-center">Itinerary</h3>
                                    <hr />

                                    <label className='mt-4'>Place</label>
                                    <input value={values.place} onChange={handleChange} id="place" className='form-control' />
                                    
                                    <label className='mt-4'>Time</label>
                                    <input value={values.time} onChange={handleChange} id="time" className='form-control' />
                                
                                    <label className='mt-4'>Comments</label>
                                    <input value={values.comments} onChange={handleChange} id="comments"  className='form-control' />

                              
                                    
                                    <button className='btn btn-secondary mt-5'>ADD</button>

                                </form>
                            )}
                        </Formik>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Itinerary