import react from 'react'
import {Fragment} from 'react'
import {useState} from 'react'
import {LoginController} from '../action/auth'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Link, Redirect } from 'react-router-dom';


const LoginHandler = ({ login, isAuthenticated })=>{

           //formdata is reputed 
           const [formData, setformData] = useState({
            email : '',
            password: ''
           })

           var {email, password} = formData;

            const onLogin = (e)=>{
                e.preventDefault();
                LoginController(formData);
            }
            const onChange = e =>
            setformData({ ...formData, [e.target.name]: e.target.value });


            if (isAuthenticated) {
                return <Redirect to="/dashboard" />;
              }

    return (
       <Fragment>
       <div className="bg-img">
              <div className="g-sidenav-show">
                         <section class="h-100-vh mb-8 ">
                             <div class="container padd-inn">
                               <div class="row mt-lg-n11 mt-md-n11 mt-n11">
                                 <div class="col-xl-6 col-lg-6 col-md-6 mx-auto">   
                                 <div  class="card z-index-0 space shadow">   
                                     <div className="card-header">
                                     <div className="row text-center">
                                     <h5 className="text-sm">Admin Panel</h5>
                                     </div>
                                     </div>                            
                                     <div class="card-body">                                         
                                         <form  role="form text-left" onSubmit={onLogin}>
                                         <div class="mb-3">
                                         <input type="email" onChange={onChange} class="form-control input"   placeholder="Email" name="email" aria-label="Email" aria-describedby="email-addon" required/>
                                         </div>
                                         <div class="mb-3">
                                         <input type="password" onChange={onChange} class="form-control input"   placeholder="Password" name="password" aria-label="Password" aria-describedby="password-addon" required/>
                                         </div>
                                         <div class="text-center">
                                         <button type="submit" class=" heading btn btn-primary shadow w-50 my-3 mb-3">LOGIN</button>
                                         </div>
                                       
                                          </form>
                                     </div>
                                     <div className="card-footer bg-success shadow  text-center">
                                     <div className="row">
                                     <p class="text-sm mt-3 mb-0 al-100">New to Admin Panel Please register here &nbsp; <a href="/register" class=" font-weight-bolder al-100">Register</a></p>
                                     </div>
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


LoginController.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, { LoginController })(LoginHandler);