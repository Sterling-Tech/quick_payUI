import './css/bootstrap.min.css';
// import './css/component.css';
// import './css/dataTables.bootstrap.min.css';
// import './css/font-awesome.css';
// import './css/home.css';
// import './css/jquery.scrollbar.css';
// import './css/materialize-social.css';
// import './css/offline-language.css';
// import './css/offline-slide.css';
// import './css/pace-theme-flash.css';
// import './css/pages-icons.css';
import './css/pages.css';
// import './css/select2.min.css';
// import './css/switchery.min.css';
import logo from './logo_black.png';

function Heading(){
    return(
        <div className="header text-white" style={{background:"#017cc2"}}>
    
            {/* <a href="#" className="btn-link hidden toggle-sidebar hidden-lg-up pg pg-menu" data-toggle="sidebar">
            </a> */}
        
            <div>
                <div className="brand inline   ">
        
                    <img style={{display:"inline-block"}} src={logo} alt="APLE" width="100" height="50"></img>
        
                    <h4 class="text-white" style={{display:"inline-block",paddingTop: "0px",color: "#FFF", fontWeight: "600",textShadow: "0 7px 10px rgba(0,0,0,0.07), 0 4px 4px rgba(0,0,0,0.2)", paddingLeft:"10px"}}>
                        APLE- QUICK PAY</h4>
                </div>
            </div>
        </div>
    )
}

export default Heading;