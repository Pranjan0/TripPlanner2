import { Formik } from 'formik';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Addplaces = () => {

    const url = "http://localhost:5000";
    const [thumbnail, setThumbnail] = useState("");

    const userSubmit = async (formdata) => {
        formdata.thumbnail = thumbnail;
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

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        setThumbnail(file.name);
        const fd = new FormData();
        fd.append('myfile', file);

        const res = await fetch(url+'/util/uploadfile', {
            method: 'POST',
            body : fd,
        });
        console.log(res.status);
        if(res.status === 200){
            console.log('file uploaded');
        }
    }

  

    return (
        <div>
            <div className="col-md-4 mx-auto bg-light">
                <div className="card mt-5">
                    <div className="card-body">

                        <Formik initialValues={{ title : '', city : '', state : '', pincode : 0, createdat: new Date(), type : '', budget : '', description : '', bestTime: ''}} onSubmit={userSubmit}>
                            {({values, handleChange, handleSubmit}) => (
                                <form onSubmit={handleSubmit}>
                                    
                                    <h3 className="text-center">Add Your Place Here</h3>
                                    <hr />

                                    <label className='mt-4'>Title</label>
                                    <input value={values.title} onChange={handleChange} id="title" className='form-control' />
                                    
                                    <label className='mt-4'>City</label>
                                    <input value={values.city} onChange={handleChange} id="city" className='form-control' />
                                
                                    <label className='mt-4'>State</label>
                                    <input value={values.state} onChange={handleChange} id="state" className='form-control' />
                                
                                    <label className='mt-4'>Pincode</label>
                                    <input value={values.pincode} onChange={handleChange} id="pincode"  className='form-control' />

                                    <label className='mt-4'>Create Date</label>
                                    <input value={values.createdat} onChange={handleChange} id="createdat"  className='form-control' />

                                    
                                    <label className='mt-4'>Type</label>
                                    <input value={values.type} onChange={handleChange} id="type" className='form-control' />

                                    <label className='mt-4'>Budget</label>
                                    <input value={values.budget} onChange={handleChange} id="budget" className='form-control' />

                                    <label className='mt-4'>Description</label>
                                    <input value={values.description} onChange={handleChange} id="description" className='form-control' />

                                    <label className='mt-4'>Best Time to Visit</label>
                                    <input value={values.bestTime} onChange={handleChange} id="bestTime" className='form-control' />

                                    <input onChange={uploadImage} type="file" />
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
export default Addplaces;