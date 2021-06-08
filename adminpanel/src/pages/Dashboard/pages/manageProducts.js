import react from 'react'
import SIDEBAR from '../components/Sidebar'
import TOPBAR from '../components/TopBar'
import {useEffect} from 'react'
import {useState} from 'react'
import {ALL_PRODUCTS, TRENDING_PRODUCTS} from '../../../action/Products'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const ManageProducts = ({product})=>{


    const [viewProduct, setviewProduct] = useState({
        Product : undefined,
        isSwitch : false
    });


    const [deleteProduct, setdeleteProduct] = useState({
        Product : undefined,
        isSwitch : false
    });


    const [editProduct, seteditProduct] = useState({
        Product: undefined,
        isSwitch: false
    })

    useEffect(()=>{
       ALL_PRODUCTS();
        TRENDING_PRODUCTS();
    }, [])



    const viewHandler = input =>{
        setviewProduct({
            Product: input,
            isSwitch : true
        })
    }

    const deleteHandler = input =>{
        setdeleteProduct({
            Product: input,
            isSwitch : true
        })
    }

    const editHandler = input =>{
        seteditProduct({
            Product: input,
            isSwitch: true
        })
    }


    const PAGINATION = ()=>{
        const [dataset, setdataset] = useState('');
        useEffect(()=>{
            intialFiltered();
        }, [])

        function intialFiltered (){
            if(product.products !== null && product.products !== undefined){
            const ALL_PAGINATED_ITEMS = product.products.slice(0, 10);
            setdataset(ALL_PAGINATED_ITEMS);
            }
        }
        
        if(product.products !== null && product.products !== undefined){
            const ALL_PAGINATED_ITEMS = product.products.length;
            var allSizes = Math.ceil(ALL_PAGINATED_ITEMS / 10);

            const PaginateHandler = ()=>{
                alert('hi')
            }


            return (
                <div>
                    <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        {(()=>{
                            for(var a =0; a < allSizes; a++){
                                return (
                                    <li class="page-item"><button onClick={PaginateHandler} class="page-link" href="#">{a+1 }</button></li>
                                )
                            }
                        })()}
                    </ul>
                    </nav>
  
                </div>
                
            )

        }


    }
 
    return (
            <div>
             <div>

                {viewProduct.isSwitch !== false && <div> 
                    <div className="full-bright">
                <div className="container">
                <div class="container margin container-table">
                    <div class="row vertical-center-row">
                    <div class="text-center col-md-4 col-md-offset-1" >
                    <div class="card shadow" style={{width: '60rem'}}>
                    <div className="card-header text-start alert-success">
                    <button onClick={()=>{setviewProduct({isSwitch: false})}} type="button" class="btn-close btn-sm" aria-label="Close">
                    </button>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
                 </div>
                </div>
                </div>}
                {deleteProduct.isSwitch !== false && <div> 
                <div className="full-bright">
                <div className="container">
                <div class="container margin container-table">
                    <div class="row vertical-center-row">
                    <div class="text-center col-md-4 col-md-offset-1" >
                    <div class="card shadow" style={{width: '60rem'}}>
                    <div className="card-header text-start alert-danger">
                    <button onClick={()=>{setdeleteProduct({isSwitch: false})}} type="button" class="btn-close btn-sm" aria-label="Close">
                    </button>
                    </div>
                    <div class="card-body">
                    <div className="container">
 
                    <img className="img-100" src={deleteProduct.Product.productImages[0]} />
                   
                    <p className="lead">{deleteProduct.Product.Name}</p>
                    <button className="btn alert-warning">StockLevel : {deleteProduct.Product.stockLevel} items</button>
                    </div>
                    <br/>
                    <h5 class="card-title">Are you sure you want to delete this item ?</h5>
                    <br/>
                    <button className="btn btn-sm alert-danger">Confirm </button>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
                 </div>
                </div>
                </div>}


                {editProduct.isSwitch !== false && <div> 
                    <div className="full-bright">
                <div className="container">
                <div class="container margin container-table">
                    <div class="row vertical-center-row">
                    <div class="text-center col-md-4 col-md-offset-1" >
                    <div class="card shadow" style={{width: '60rem'}}>
                    <div className="card-header text-start alert-warning">
                    <button onClick={()=>{seteditProduct({isSwitch: false})}} type="button" class="btn-close btn-sm" aria-label="Close">
                    </button>
                    </div>
                    <div class="card-body text-start">

                    <div className="row">
                    <div className="col-4">
                    <label className="label-heading">Product name</label>
                   <input placeholder={editProduct.Product.Name} className="form-control label-heading"/>
                    <br/>
                    </div>

                    <div className="col-4">
                    
                   <label className="label-heading">Product Category</label>
                   <input className="form-control"/>
                   <br/>
                    </div>

                    <div className="col-4">
                    <label className="label-heading">Product Brand</label>
                   <input className="form-control"/>
                    <br/>
                    </div>
                    </div>
                   <div className="row">
                        <div className="col-5">
                        <label className="label-heading">Product Size</label>
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
                            <label className="label-heading">Enter product price</label>
                            <input  className="form-control " type="text" />
                        </div>
                        <div className="col-2">
                        <label className="label-heading">Choose color</label>
                            <input style={{height: '40px'}} className="form-control" type="color" />
                        </div>
                       
                    </div>
                    <br/>
                    <label className="label-heading">Enter product ID</label>
                    <input  className="form-control" type="text" />

                    <br/>
                    <label className="label-heading">Enter product Tags &nbsp; <i> e.g denim gap hot</i></label>
                    <input  className="form-control" type="text" />
                    <br/>

                    <label className="label-heading">Enter product Description</label>
                    <textarea className="form-control"></textarea>
                    <br/>
                    <label className="label-heading">Enter product Specification</label>
                    <textarea className="form-control"></textarea>

                    <br/>
                    <label className="label-heading">Enter StockLevel </label>
                    <input  className="form-control" type="text" />
                    <br/>

                    <label className="label-heading">Enter Product Weight </label>
                    <input  className="form-control" type="text" />
                    <br/>

                    <label className="label-heading">Enter Product Images</label>
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
                </div>}

                


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
                        <h1 className="display-6">Products <a href="/dashboard/product/add" className="btn btn-sm alert-primary">Add New</a></h1>
                              <div class="container-fluid  pb-3"></div>
                            <div class="d-grid gap-3" >
                                    <div class="alert-light shadow border rounded-3">
                                    <div class="table-responsive">
                                {product !== null && <div>
                                {product.products !== null && <div>
                                <table class="table">
                                  
                                    <thead className="alert-success ">
                                        <tr>
                                        <th className="product-text" scope="col">Name</th>
                                        <th className="product-text" scope="col">Category</th>
                                        <th className="product-text" scope="col">Image</th>
                                        <th className="product-text" scope="col">Price</th>
                                        <th className="product-text" scope="col">Size</th>
                                        <th  className="product-text" scope="col">Stock</th>
                                        <th  className="product-text" scope="col">Manage </th>
                                        </tr>
                                    </thead>                                       
                                        <tbody>
                                        {product.products.map((aProducts, index)=>{
                                        return <tr>
                                        <td className="product-text">{aProducts.Name}</td>
                                        <td className="product-text">{aProducts.Category}</td>
                                        <td className="product-text">
                                        <img src={aProducts.productImages[0]} className="prodo-img" />    
                                        </td>
                                        <td className="product-text">{aProducts.price} £</td>
                                        <td className="product-text">{aProducts.Size}</td>
                                        <td className="product-text">{aProducts.stockLevel}</td> 
                                        <td className="product-text">
                                        <div  className="d-flex">
                                        <button onClick={()=>{deleteHandler(aProducts)}} className="alert-danger shadow btn-sm btn space-2"><i class="fas fa-trash"></i></button>
                                        <button onClick={()=>{viewHandler(aProducts)}} className="alert-primary shadow btn-sm btn space-2"><i class="fas fa-eye"></i></button>  
                                        <button onClick={()=>{editHandler(aProducts)}} className="alert-warning shadow text-success btn-sm btn space-2"><i class="far fa-edit"></i></button>   
                                        </div>                                        
                                        </td>    
                                        </tr>
                                        })}
                                    </tbody>
                                    </table>
                                    </div> }
                                    </div>}
                                    {PAGINATION(product)}
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

ManageProducts.propTypes = {
    product: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    product: state.product
  });
  
  export default connect(mapStateToProps, { ALL_PRODUCTS })(ManageProducts);

