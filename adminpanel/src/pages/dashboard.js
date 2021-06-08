import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import auth from '../reducers/auth'
import {LogoutController} from '../action/auth'
import TOPBAR from './Dashboard/components/TopBar'
import SIDEBAR from './Dashboard/components/Sidebar'
import MAIN from './Dashboard/components/main'
import {GET_ALL_CUSTOMERS} from '../action/customer.action'
import {loadAdmin, LoginController} from '../action/auth'


const Dashboard = ({
    auth: { user },
    customer : {customers}
})=>{




  useEffect(()=>{
    loadAdmin();
    GET_ALL_CUSTOMERS();
 
  },[])



  const onlogout = ()=>{
    LogoutController();
    
  }

    return (
        <div >
        <div className="row">
          <div className="col-lg-2">
          <div  className="position-fixed">
              <div className="">
              <SIDEBAR/>
              </div>
          </div>
          </div>
          <div className="col-lg-10">
          <div className="container">
          <TOPBAR/>
            <MAIN/>
          </div>
           
          </div>
        </div>

        </div>
    )
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
    customer: state.customer
  });
  
  export default connect(mapStateToProps, {LoginController})(
    Dashboard
  );