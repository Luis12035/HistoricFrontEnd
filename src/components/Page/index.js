import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {MdDoorBack,mdRe} from 'react-icons/md'

import NavBar from '../NavBar';
import './index.css';

const Page = ({children, className, showHeader, showNavBar, title, backtostate, backto})=>{
  //JSX
  let classNames = ["page", className];
  let header = null;
  let navBar = null;
  if (showHeader) {
    classNames.push("with_header");
    header = (<div className="header">{title}</div>);
    if (backtostate) {
      header = (
      <div className="header">
        <nav style={{width: '100%'}}>
          <ul>
            <li style={{marginLeft: '0px', width: '10%'}}><Link to={backto}><MdDoorBack></MdDoorBack></Link></li>
            <li style={{marginLeft: '35%'}}>{title}</li>
          </ul>
        </nav> 
        </div>);
    }
  }
  if (showNavBar) {
    classNames.push("with_navbar");
    //navBar = (<div style={{ backgroundColor: "#000", color: "#FFF", minHeight: "64px" }}></div>);
    navBar = (<NavBar/>);
  }

  return (
    <Fragment>
      {header}
      <section className={classNames.join(" ")}>
        {children}
      </section>
      {navBar}
    </Fragment>
  );
}

export default Page;
