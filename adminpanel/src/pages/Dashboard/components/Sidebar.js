import react from 'react'

const sidebar = ()=>{
    return (

        <div className="">
            <div class="flex-shrink-0 p-3 " >
    <a href="/dashboard" class="d-flex  align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
      <span class="fs-5 fw-semibold ">
      Dashboard </span>
    </a>
    <ul class="list-unstyled ps-0">
      <li class="mb-1">
        <button class="btn zoom-x  btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
        <i class="fas fa-home"></i>  &nbsp; Home 
        </button>
        <div class="collapse show " id="home-collapse">
          <ul class="btn-toggle-nav  list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">Overview</a></li>
            <li><a href="#" class="link-dark rounded">Updates</a></li>
            <li><a href="#" class="link-dark rounded">Reports</a></li>
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button class="btn  btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#products-collapse" aria-expanded="false">
        <i class="fas fa-caravan"></i> &nbsp;Products
        </button>
        <div class="collapse " id="products-collapse">
          <ul class="btn-toggle-nav  list-unstyled fw-normal pb-1 small">
            <li><a href="/dashboard/product/manage" class="link-dark rounded">Manage Inventory</a></li>
            <li><a href="/dashboard/product/add" class="link-dark  rounded">Add Product</a></li>
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
        <i class="fas fa-tachometer-alt"></i> &nbsp;Customer
        </button>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="/dashboard/customer/add" class="link-dark rounded">Add Customer</a></li>
            <li><a href="/dashboard/customer/manage" class="link-dark rounded">Manage Customer</a></li>
            <li><a href="/dashboard/customer/track" class="link-dark rounded">Track Customer</a></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
        <i class="fas fa-shopping-cart"></i> &nbsp; Orders
        </button>
        <div class="collapse" id="orders-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">New</a></li>
            <li><a href="#" class="link-dark rounded">Processed</a></li>
            <li><a href="#" class="link-dark rounded">Shipped</a></li>
            <li><a href="#" class="link-dark rounded">Returned</a></li>
          </ul>
        </div>
      </li>
      <li class="border-top my-3"></li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#shop-collapse" aria-expanded="false">
        <i class="fas fa-store"></i> &nbsp; Store Settings
        </button>
        <div class="collapse " id="shop-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">Shop Setting</a></li>
            <li><a href="#" class="link-dark rounded">Shop Details</a></li>
            <li><a href="#" class="link-dark rounded">More Settings</a></li>
            
          </ul>
        </div>
      </li>

      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="true">
        <i class="fas fa-cogs"></i> &nbsp;Account
        </button>
        <div class="collapse show" id="account-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">New...</a></li>
            <li><a href="#" class="link-dark rounded">Profile</a></li>
            <li><a href="#" class="link-dark rounded">Settings</a></li>
            <br/>
            <li><a href="#" class=" btn-lg shadow btn btn-dark text-white">  Sign out</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
        </div>
    )
}


export default sidebar;