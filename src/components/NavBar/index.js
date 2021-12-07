import { Link } from "react-router-dom";
import { MdHome, MdLogin } from "react-icons/md"

import { useSelector } from "react-redux";

import './index.css';
const NavBar = ()=>{
  const {isLogged} = useSelector(({security})=>security);
  const menu = isLogged ?
    (<ul>
      <li><Link to="/dashboard"><MdHome /> Dashboard</Link></li>
      <li><Link to="/new"><MdLogin />Add SWOT</Link></li>
      <li><Link to="/list">List</Link></li>      
    </ul>) :
    (<ul>
      
    </ul>);

  return (
    <nav>
     {menu}
    </nav>
  );
}

export default NavBar;
