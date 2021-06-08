import react from 'react';
import {Fragment, useState} from 'react'
import SIDEBAR from '../components/Sidebar'
import TOPBAR from '../components/TopBar'
import {getAdmin} from '../../../util/getAdmin'
var generator = require('generate-password');



const ADDCUSTOMER = ()=>{

    const [password, setPassword] = useState('');

    const [customerdata, setcustomerdata] = useState({
        customername: '',
        customeremail: '',
        customerpassword: '',
        buildingno: '',
        streetno: '',
        postcode: ''
    })

    const [alert, setalert] = useState(false);
    const [msg, setmsg] = useState(undefined);

    var {customername, customeremail , customerpassword, buildingno, streetno, postcode} = customerdata;
    const onChange = e =>
    setcustomerdata({ ...customerdata, [e.target.name]: e.target.value });


    const PasswordGenerator = e =>{
        e.preventDefault();
        var passwordgen = generator.generate({
            length: 10,
            numbers: true
        });
        setPassword(passwordgen);
        var obj = customerdata;
        obj.customerpassword = passwordgen;
        setcustomerdata(obj);
    }

    const PasswordHandler = e =>{
        var choosenPassword = e.target.value;
        setPassword(choosenPassword)
        var obj = customerdata;
        obj.customerpassword = choosenPassword;
        setcustomerdata(obj);
    }

    const RegisterCustomer = (e) =>{
        e.preventDefault();      
        setalert(true);

    }

    const dataDispatcher = async (e)=>{
        e.preventDefault();
        let postCustomerData = await getAdmin.post('/api/customer/add', customerdata);
        setmsg({
            msg : postCustomerData.data.msg,
            type: postCustomerData.data.type
        });

    }

    return (
        <Fragment>

        {alert !== false && <Fragment>
            <div className="full-bright ">
                <div className="container position-fixed">
                <div class="container margin container-table">
                    <div class="row vertical-center-row">
                    <div class="text-center col-md-4 col-md-offset-1" >
                    <div class="card shadow" style={{width: '60rem'}}>
                    <div className="card-header text-start alert-danger">
                    <button onClick={()=>{setalert(false)}} type="button" class="btn-close btn-sm" aria-label="Close">
                    </button>
                    </div>
                    <div class="card-body">
                    {msg !== undefined && <Fragment>

                    {msg.type === 'success' && <Fragment>
                    <div class="alert alert-primary" role="alert">
                    {msg.msg}
                    </div>
                    {(function Run(){
                        setTimeout(()=>{window.location.reload()}, 1000);
                    })()}
                    </Fragment>}


                    {msg.type === 'error' && <Fragment>
                    <div class="alert alert-danger" role="alert">
                    {msg.msg}
                    </div>
                    </Fragment>}
                    </Fragment>}
                        <h5 class="card-title">Customer Details </h5>
                        <br/>
                     
                        <table class="table">
                                  
                                  <thead className="alert-success ">
                                      <tr>
                                      <th className="product-text" scope="col">Customer Name</th>
                                      <th className="product-text" scope="col">Customer Email</th>
                                      <th className="product-text" scope="col">Customer Password</th>
                                      <th className="product-text" scope="col">Building No</th>
                                      <th className="product-text" scope="col">StreetNo</th>
                                      <th  className="product-text" scope="col">PostCode</th>
                                      </tr>
                                  </thead>                                       
                                      <tbody>
                                       <tr>
                                      <td className="product-text">{customerdata.customername}</td>
                                      <td className="product-text">{customerdata.customeremail}</td>
                                      <td className="product-text">{customerdata.customerpassword}</td>
                                      <td className="product-text">{customerdata.buildingno}</td>
                                      <td className="product-text">{customerdata.streetno}</td>
                                      <td className="product-text">{customerdata.postcode}</td>             
                                      </tr>
                                  </tbody>
                                  </table>

                                  <br/>
                        <br/>
                        <h5>Do you want to save the Customer ? </h5>
                        <br/>
                        <button onClick={dataDispatcher} className="btn alert-primary">Save</button>  <button onClick={()=>{setalert(false)}} className="btn alert-danger">Make Ammendments</button>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
                 </div>
                </div> 
        
        </Fragment>}
        <div>
        <div className="row">
          <div className="col-2">
          <div  className="position-fixed">
              <div className="">
              <SIDEBAR/>
              </div>
          </div>
          </div>
          <div className="col-10">
          <div className="container">
            <TOPBAR/>
            <div className="container">
            <h1 className="display-6">Customers Center <a href="/dashboard/customer/manage" className="btn btn-sm alert-primary">Manage Customers</a></h1>
            <div class="container-fluid  pb-3"></div>
          <div class="d-grid gap-3" >
          <div class="alert-light shadow border rounded-3">
          <form className="p-3" onSubmit={RegisterCustomer}>
               <label>Customer Name</label> 
               <br/>
              <input name="customername" onChange={onChange}  className="form-control" type="text"/>
               <br/> 
              <label>Customer Email</label> 
               <br/>
              <input name="customeremail" onChange={onChange} className="form-control" type="email"/>
              <br/>
              <label>Temporary Customer Password - <i>(Generate a Password)</i></label> 
               <br/>
               <div style={{display: 'flex'}}>
              <input  name="customerpassword" onChange={(e)=>{PasswordHandler(e)}} value={password} className="form-control" type="text"/><button onClick={PasswordGenerator} className="btn alert-danger">Generate</button>
              </div>
              <br/>
              <label>Building No</label> 
               <br/>
              <input name="buildingno" onChange={onChange} className="form-control" type="text"/>
               <br/> 
               <label>Street No</label> 
               <br/>
              <input  name="streetno" onChange={onChange} className="form-control" type="text"/>
               <br/> 

               <label>Post Code</label> 
               <br/>
              <input name="postcode" onChange={onChange}  className="form-control" type="text"/>
               <br/> 

             <button type="submit" className="btn alert-primary">Add Customer</button>
          </form>
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

export default ADDCUSTOMER;