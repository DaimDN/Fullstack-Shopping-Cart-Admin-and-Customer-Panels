import {useState, useEffect, Fragment} from 'react'

import SIDEBAR from '../components/Sidebar'
import TOPBAR from '../components/TopBar'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddProduct = ()=>{

    const [allImages, setallImages] = useState(undefined);




    const imagesHandler = (e)=>{
        var imgArray = e.target.files;
        var sortedBlob = [];
        imgArray = [...imgArray];
        var FilteredBlob = imgArray.map(anItem => {
            var File = URL.createObjectURL(anItem);
            return File;
        })
        setallImages(FilteredBlob);
    }


    return (
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
            <h1 className="display-6">Products <a href="/dashboard/product/manage" className="btn btn-sm alert-primary">Manage Products</a></h1>
            <div class="container-fluid  pb-3"></div>
          <div class="d-grid gap-3" >
                <div class="alert-light shadow border rounded-3">
                    <div className="spaces">


                   <label>Product name</label>
                   <input placeholder="Denim outdoor Fashion Jeans" className="form-control"/>
                    <br/>
                   <label>Product Category</label>
                   <input placeholder="Jeans.." className="form-control"/>
                   <br/>
                   <label>Product Brand</label>
                   <input placeholder="denim" className="form-control"/>
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
                            <input placeholder="34.5£" className="form-control" type="text" />
                        </div>
                        <div className="col-2">
                        <label>Choose color</label>
                            <input style={{height: '40px'}} className="form-control" type="color" />
                        </div>
                       
                    </div>
                    <br/>
                    <label>Enter product ID</label>
                    <input placeholder="SKU-001"  className="form-control" type="text" />

                    <br/>
                    <label>Enter product Tags &nbsp; <i> e.g denim gap hot</i></label>
                    <input placeholder="shirt, summer, winter..."  className="form-control" type="text" />
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
                    <input placeholder="50"  className="form-control" type="text" />
                    <br/>

                    <label>Enter Product Weight </label>
                    <input placeholder="5"  className="form-control" type="text" />
                    <br/>

                    <label>Enter Product Images</label>
                    <br/>
                    <br/>
                    <div class="file-upload">
                        <div class="file-select">
                            <div class="file-select-button" id="fileName"> <i class="fas fa-cloud-upload-alt"></i> &nbsp; Choose Files </div>
                            <div class="file-select-name" id="noFile">No file chosen...</div> 
                            <input onChange={(e)=>{imagesHandler(e)}} type="file" name="chooseFile" id="chooseFile" multiple/>
                        </div>
                        </div>                   
                    <br/>
                    <br/>
                    <br/>

                    {allImages !== undefined && <div>

                    <div className="row">
                    {allImages.map((anImg, index)=>{
                        return <div className="col-3" style={{marginBottom: '20px'}}>
                        <div class="card" >
                        <img class="card-img-top img-fluid card-hiv shadow" onClick={()=>{
                            var foundImg = allImages.filter((a)=>{
                                return a !== anImg;
                            })
                            setallImages(foundImg)
                        }}  src={anImg} alt="Card image cap"/>
                    
                    </div>

                        </div>
                    })}
                    
                    </div>                   
                    </div>}

                    <br/>
                    <br/>
                    <div className="text-end">
                    <button className="btn  btn-dark"> <i class="fas fa-plus-circle"></i>&nbsp; Add Product</button>
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