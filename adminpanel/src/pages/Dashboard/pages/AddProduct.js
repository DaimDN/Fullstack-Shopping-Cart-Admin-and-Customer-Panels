import react from 'react'
import SIDEBAR from '../components/Sidebar'
import TOPBAR from '../components/TopBar'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddProduct = ()=>{
    return (
        <div>
        <div className="row">
          <div className="col-2">
          <div  className="card shadow position-fixed alert-danger">
              <div className="card-body">
              <SIDEBAR/>
              </div>
          </div>
          
          </div>
          <div className="col-10">
          <div className="container">
            <TOPBAR/>
            <div className="container">
            <h1 className="display-6">Products <a href="/dashboard/product/manage" className="btn btn-sm alert-primary">Manage Products</a></h1>
            <div class="container-fluid  pb-3"></div>
          <div class="d-grid gap-3" >
                <div class="alert-light shadow border rounded-3">
                    <div className="spaces">


                   <label>Product name</label>
                   <input className="form-control"/>
                    <br/>
                   <label>Product Category</label>
                   <input className="form-control"/>
                   <br/>
                   <label>Product Brand</label>
                   <input className="form-control"/>
                    <br/>

                    <div className="row">
                        <div className="col-5">
                        <label>Product Size</label>
                            <select className="form-control">
                            <option>XS</option>
                            <option>SM</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                            </select>
                        </div>
                        <div className="col-5">
                            <label>Enter product price</label>
                            <input  className="form-control" type="text" />
                        </div>
                        <div className="col-2">
                        <label>Choose color</label>
                            <input style={{height: '40px'}} className="form-control" type="color" />
                        </div>
                       
                    </div>
                    <br/>
                    <label>Enter product ID</label>
                    <input  className="form-control" type="text" />

                    <br/>
                    <label>Enter product Tags &nbsp; <i> e.g denim gap hot</i></label>
                    <input  className="form-control" type="text" />
                    <br/>

                    <label>Enter product Description</label>
                    <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    
                    height="400"               
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                        editor.editing.view.change((writer) => {
                            writer.setStyle(
                                "height",
                                "300px",
                                editor.editing.view.document.getRoot()
                            )
                            })
                    } 
                    }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                    />
                    <br/>
                    <label>Enter StockLevel </label>
                    <input  className="form-control" type="text" />
                    <br/>

                    <label>Enter Product Weight </label>
                    <input  className="form-control" type="text" />
                    <br/>

                    <label>Enter Product Images</label>
                    <br/>
                    <input  className="form-control" type="file" />
                    <br/>
                    <input  className="form-control" type="file" />
                    <br/>
                    <input  className="form-control" type="file" />
                    <br/>
                    <input  className="form-control" type="file" />
                    <br/>

                    <br/>
                    <div className="text-end">
                        <button className="btn  btn-dark">Add Product</button>
                    </div>
                    </div>
                   </div>
                </div>
               
                </div>
          </div>
           
          </div>
        </div>
       

        </div>
    )
}

export default AddProduct;