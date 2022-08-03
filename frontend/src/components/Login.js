import { Formik } from 'formik';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserContext } from '../useContext';


const img2='https://sustainabletravel.org/wp-content/uploads/Small-Islands-Header-Image-Web.jpg';


const Login = () => {
  const navigate = useNavigate();
  const {setLoggedIn, setCurrentUser} = useContext(UserContext);

    const userSubmit = async (formdata) => {
        console.log(formdata);
        const res=await fetch('http://localhost:5000/user/authenticate',{
              method: 'POST',
              body: JSON.stringify(formdata),
              headers :{
                'Content-Type':"application/json"
              }      
            })
            if(res.status===200){
              Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'You are logged in'
              })
              res.json().then(data=>{
                sessionStorage.setItem("user",JSON.stringify(data));
                setLoggedIn(true);
                navigate('/browse');
             });
            }else if(res.status===400){
              Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Invalid username or password'
              })
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Something went wrong'
              })
            }
    }

  

    return (
        <div style={{backgroundImage:`url(${img2})`, backgroundSize:'cover',backgroundPosition:"center",height:"495px"}} className="pt-5">
            <div className="col-md-4 mx-auto bg-light mt-1 opacity-85">
                <div className="card" style={{color:"black"}}>
                    <div className="card-body">

                        <Formik initialValues={{email : '', password : ''}} onSubmit={userSubmit}>
                            {({values, handleChange, handleSubmit}) => (
                                <form onSubmit={handleSubmit}>
                                    
                                    <h3 className="text-center">Sign-in Here</h3>
                                    <hr />

                                    <label className='mt-4'>Email</label>
                                    <input value={values.email} onChange={handleChange} id="email" className='form-control' />
                                    
                                    <label className='mt-4'>Password</label>
                                    <input value={values.password} onChange={handleChange} id="password" type="password" className='form-control' />
                                
                                    <b><button className='btn btn-primary mt-5'>Login Now</button></b>

                                </form>
                            )}
                        </Formik>

                    </div>
                </div>
            </div>
        </div>
  )
}
export default Login;