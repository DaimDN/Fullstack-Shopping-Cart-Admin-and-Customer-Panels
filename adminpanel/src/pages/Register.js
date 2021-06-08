import react from 'react'
import {Fragment, useEffect, useState} from 'react'
import {getAdmin} from '../util/getAdmin'
import {RegisterController} from '../action/auth'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import store from '../store'



const RegisterHandler = ({ register, isAuthenticated })=>{
    const [checkforAdmin, setcheckforAdmin] = useState('');

    //@ Checking if admin user available
    const checkAdmin = async ()=>{
        let adminCheck = await getAdmin('/api/check');
       setcheckforAdmin(adminCheck.data.admin)
    }
        useEffect(()=>{
            //calling check admin function
            checkAdmin();
        }, [])


       //formdata is reputed 
       const [formData, setformData] = useState({
        name : '',
        email : '',
        password: '',
        confirmpassword: ''
       })

    const [errorAlert, seterrorAlert] = useState('');


    const {name, email, password, confirmpassword} = formData;
    const onChange = e =>
    setformData({ ...formData, [e.target.name]: e.target.value });


    const onRegister = (e)=>{
        e.preventDefault();
        if(password !== confirmpassword){
           seterrorAlert('Password doest match');
           setTimeout(()=>{seterrorAlert('')}, 1000)
        }
        else{
            RegisterController(formData);
            window.location.reload();
        }
    }


    if(checkforAdmin === false){
        return (
            <Fragment >
            <div className="bg-img">
                     <div className="g-sidenav-show">
                         <section class="h-100-vh mb-8 ">
                             <div class="container">
                               <div class="row mt-lg-n11 mt-md-n11 mt-n11">
                                 <div class="col-xl-6 col-lg-6 col-md-6 mx-auto">   
                                
                                 <div  class="card  z-index-0 space shadow">   
                                     <div className="card-header bg-gradient-primary">
                                    
                                     </div>                            
                                     <div class="card-body alert-primary">
                                        {errorAlert !== '' && <div>
                                        <p className="heading text-white">{errorAlert}</p>
                                        </div>}                                                        
                                         <form onSubmit={onRegister} role="form text-left">
                                         <div class="mb-3">
                                         <input type="text" class="form-control input" onChange={onChange} placeholder="Name" name="name" aria-label="Name" aria-describedby="email-addon" required/>
                                         </div>
                                         <div class="mb-3">
                                         <input type="email" class="form-control input"  onChange={onChange} placeholder="Email" name="email" aria-label="Email" aria-describedby="email-addon" required/>
                                         </div>
                                         <div class="mb-3">
                                         <input type="password" class="form-control input"  onChange={onChange} placeholder="Password" name="password" aria-label="Password" aria-describedby="password-addon" required/>
                                         </div>
                                         <div class="mb-3">
                                         <input type="password" class="form-control input"  onChange={onChange} placeholder="Confirm password" name="confirmpassword" aria-label="Password" aria-describedby="password-addon" required/>
                                         </div>
                                         <div class="text-center">
                                         <button type="submit" class=" heading btn bg-gradient-dark w-100 my-4 mb-2">Register</button>
                                         </div>
                                        
                                          </form>
                                     </div>
                                     <div className="card-footer bg-gradient-primary">
                                     <p class="text-sm mt-3 mb-0 al-100">Already have an account? <a href="/login" class="text-dark font-weight-bolder al-100">Sign in</a></p>
                                     </div>
                                 </div>
                                 </div>
                             </div>
                             </div>
                         </section>
            </div>
                         </div>
            </Fragment>
         )
    }  
    else {

        return (
            <Fragment>
                <div className="g-sidenav-show">
                         <section class="h-200-vh mb-8 padd-inn ">
                             <div class="container">
                               <div class="row mt-lg-n11 mt-md-n11 mt-n11">
                                 <div class="col-xl-6 col-lg-6 col-md-6 mx-auto">                          
                                 <div class="card  z-index-0 space shadow">   
                                     <div className="card-header">
                                     <p class="text-sm mt-3 mb-0 al-200">Sorry! Admin Account is already Registered </p>
                                     </div>                            
                                     <div class="card-body ">                            
                                         <div class="text-center">
                                         <a href="/" class=" heading text-white btn bg-primary w-40 my-4 mb-2">Admin Login</a>
                                         </div>
                                     </div>
                                 </div>
                                 </div>
                             </div>
                             </div>
                         </section>
                         </div>
            </Fragment>
        )
    }  
 
}

RegisterHandler.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });



export default connect(mapStateToProps, {RegisterController})(RegisterHandler);