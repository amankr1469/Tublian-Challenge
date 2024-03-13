import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faTicket,
    faMapPin,
  
    faCartPlus,
    faListAlt,
    faShoppingCart,
  
  } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
      
          <li className="option">
            <span>
              {" "}
              <FontAwesomeIcon icon={faHome} />{" "}
            </span>
            Dashboard
          </li>
    

        
          <li className="option">
            <span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
            All Orders
          </li>
 

     
          <li>
            <span>
              <FontAwesomeIcon icon={faListAlt} />
            </span>
            All Products
          </li>


          <li>
            <span>
              <FontAwesomeIcon icon={faCartPlus} />
            </span>
            Create Products
          </li>


      
          <li>
            <span>
              <FontAwesomeIcon icon={faListAlt} />
            </span>
            All Categories
          </li>


          <li>
            <span>
              <FontAwesomeIcon icon={faCartPlus} />
            </span>
            Create Category
          </li>

          <li>
            <span>
              <FontAwesomeIcon icon={faTicket} />
            </span>
            Coupons Manager
          </li>

          <li>
            <span>
              <FontAwesomeIcon icon={faMapPin} />
            </span>
            Pincodes Manager
          </li>


      </ul>
    </div>
  )
}

export default Sidebar