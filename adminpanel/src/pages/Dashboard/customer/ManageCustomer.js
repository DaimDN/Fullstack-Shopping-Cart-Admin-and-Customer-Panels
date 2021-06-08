import react from 'react';
import {Fragment, useState, useEffect} from 'react'
import SIDEBAR from '../components/Sidebar'
import TOPBAR from '../components/TopBar'
import {GET_ALL_CUSTOMERS} from '../../../action/customer.action'
import {connect} from 'react-redux'


const MANAGECUSTOMER = ({
    customer : {customers}

})=>{


    useEffect(()=>{
        GET_ALL_CUSTOMERS();
    },[])


    return (
        <Fragment>
            <div>
            <div className="row">
                <div className="col-2">
                <div  className=" lh position-fixed">
              <div className="">
              <SIDEBAR/>
              </div>
                     </div>          
                     </div>
                    <div className="col-10">
                    <div className="container">
                        <TOPBAR/>
                        <div className="container">
                        <h1 className="display-6"> Manage Customers <a href="/dashboard/customer/add" className="btn btn-sm alert-primary">Add New</a></h1>
                              <div class="container-fluid  pb-3"></div>
                            <div class="d-grid gap-3" >
                                    <div class="alert-light shadow border rounded-3">
                                    <div class="table-responsive">
                                <table class="table">
                                  
                                    <thead className="alert-success ">
                                        <tr>
                                        <th className="product-text" scope="col">Name</th>
                                        <th className="product-text" scope="col">Email</th>
                                        <th className="product-text" scope="col">Total Orders</th>
                                        <th className="product-text" scope="col">Registeration Date</th>
                                        <th  className="product-text" scope="col">Address </th>
                                        <th  className="product-text" scope="col">Manage </th>
                                        </tr>
                                    </thead>                                       
                                        <tbody>
                                        {customers !== undefined  && <Fragment>
                                        {customers.map((aCustomer, index)=>{
                                            return <Fragment key={index}>
                                            <tr>
                                        <td className="product-text">{aCustomer.name}</td>
                                        <td className="product-text">{aCustomer.email}</td>
                                        <td className="product-text"> {aCustomer.orders.length}</td>
                                        <td className="product-text">{aCustomer.registerationDate}</td>
                                                                               
                                        <td className="product-text">
                                            {aCustomer.address[0].buildingNo}
                                            <br/>
                                            {aCustomer.address[0].StreetNo}
                                            <br/>
                                            {aCustomer.address[0].postCode}
                                        </td> 
                                        <td className="product-text">
                                        <div  className="d-flex">
                                        <button  className="alert-danger shadow btn-sm btn space-2"><i class="fas fa-trash"></i></button>  
                                        <button  className="alert-warning shadow text-success btn-sm btn space-2"><i class="far fa-edit"></i></button>   
                                        </div>                                        
                                        </td>    
                                        </tr>
                                            </Fragment>
                                        })}
                                        </Fragment>}

                                       
      
                                    </tbody>
                                    </table>

                                    
                                    </div>
                                    </div>
                                        </div>
                            </div>
                        </div>
                        </div>
                        </div>                      

            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    customer: state.customer
  });
  
export default connect(mapStateToProps, { GET_ALL_CUSTOMERS })(MANAGECUSTOMER);

