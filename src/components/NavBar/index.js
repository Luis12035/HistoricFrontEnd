import { Link } from "react-router-dom";
import { MdHome, MdLogin, MdList } from "react-icons/md"

import { useSelector } from "react-redux";

import './index.css';
const NavBar = ({loginstate})=>{
  const {isLogged} = useSelector(({security})=>security);
  let menu;
  if (loginstate) {
    console.log("Logeado");
  } else {
    menu = isLogged ?
    (<ul>
      <li><Link to="/new"><MdLogin />Add Histori</Link></li>
      <li><Link to="/list"><MdList />Historic</Link></li>
    </ul>) :
    (<ul>
      
    </ul>);
  }
  

  return (
    <nav>
     {menu}
    </nav>
  );
}

export default NavBar;
