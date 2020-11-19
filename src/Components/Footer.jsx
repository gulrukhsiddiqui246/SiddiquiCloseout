import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="pt-5 mt-5">
            <div className="container-fluid bg-light border outline-dark ">
                <div className="row bg-light">
                    <div className="col pt-4 mt-4">
                        <p className=" font-weight-bold">Popular Categories</p>
                        <Link to="/bluetooths">Bluetooths</Link><br/>
                        <Link to="/cables" >Cables </Link><br/>
                        <Link to="/chargingfans" >Charging Fans</Link>
                      
                    </div>
                    <div className="col pt-4 mt-4">
                        <p className=" font-weight-bold">Trending Searches</p>
                        
                        <Link to="/chargers">Chargers</Link><br/>
                        <Link to="/handfrees" >HandFrees</Link><br/>
                        <Link to="/powerbanks">PowerBanks</Link><br/>
    
                    </div>
                   
                    

                    <div className="col pt-4 mt-4">
                    <p className=" font-weight-bold">Follow Us</p>
                    <span>
                    
                   <a  href="https://wa.me/923132720275" target="_blank"> <i className="fa fa-whatsapp " style={{fontSize: '20px', color: 'red'}}> </i> </a> 
                   <a  href="tel:923132720275" target="_blank"> <i className="fa fa-phone " style={{fontSize: '20px', color: 'red'}}> </i> </a> 
                    </span>
                   
                   
                   

                    </div>
                </div>
                

                <div className="row pt-3 mt-3 pb-3 mb-3 gul">
                   
                    <div className="col rounded float-right  ">
                        <p className="rounded float-right"> SIDDIQUI CLOSEOUT  <i className="fa fa-copyright"> 2020</i></p>
                        


                    </div>
                </div>
            </div>
           

         
        </div>

    );
}
export default Footer;