import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Tripimg from './Tripimg.png'

const Signup = () => {
  const img="https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMG5hdHVyZXxlbnwwfHwwfHw%3D&w=1000&q=80";
  const eimg='https://i.pinimg.com/originals/1b/f3/27/1bf3274d158670e5decc8906959db687.jpg';
  const navigate=useNavigate();
  const userSubmit = async (formdata) => {
    console.log(formdata);
   
    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response.status);
  
    if (response.status === 200) {
        Swal.fire({
            icon: 'success',
            title: 'Signup Successful',
            text: 'You are signed in'
          })
          navigate('/login');
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Signup Failed',
            text: 'Something went wrong'
          })
    }
  };

  

  return (
    <div className="container" >
      <div className="card mb-5" style={{backgroundImage:`url(${img})`,height:"100%",backgroundPosition:"center",backgroundSize:"cover"}}>
            <div className="row">
                 <div className="col-md-7 ">
                      <div style={{background:`url(${Tripimg})`,height:"100%",backgroundPosition:"center",backgroundSize:"cover" ,minHeight:"300px"}}>
                          
                      </div>
                        
                </div>
                <div class="col-md-5">
                    <div class="card-body">
                        
                        <p class="h3">Register Here</p>
                        <hr />
      <Formik
        initialValues={{ name: "", email: "", mobile: 0, age: 0, password: "" }}
        onSubmit={userSubmit}
      >
        
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              value={values.name}
              onChange={handleChange}
              id="name"
              placeholder="Enter Full Name"
              className="form-control mt-4"
            ></input>
            <input
              value={values.age}
              onChange={handleChange}
              id="age"
              placeholder="Enter Age"
              className="form-control mt-4"
            ></input>
            <input
              value={values.mobile}
              onChange={handleChange}
              id="mobile"
              placeholder="Enter mobile number"
              className="form-control mt-4"
            ></input>
            <input
              value={values.email}
              onChange={handleChange}
              id="email"
              placeholder="Enter valid email"
              className="form-control mt-4"
            ></input>
            <input
              value={values.password}
              onChange={handleChange}
              id="password"
              placeholder="Enter Secure password"
              className="form-control mt-4"
            ></input>

            <button type="submit" className="btn btn-primary mt-5">
              Submit
            </button>

            <br />
            <br />
            <p>Already Registered? <a href="/login">Login Here</a></p>
            
          </form>
        )}
      </Formik>
    </div></div></div></div>
    </div>
  );
};

export default Signup;
