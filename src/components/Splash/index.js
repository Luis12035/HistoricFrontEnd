import Page from "../Page"
//import logo from './logo.svg';
import rolling_cat from './rolling_cat.svg';

import "./index.css";
const Splash = ()=>{
  return (
    <Page className="page-center">
      <div className="splash_swot">
        Historic App
      </div>
      <img src={rolling_cat} style={{width:"64px"}}/>
      <div className="splash_swot">
        Loading ...
      </div>
    </Page>
  );
}

export default Splash;
