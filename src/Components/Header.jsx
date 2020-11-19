import React from 'react';
import logo from '../images/logo.jpg';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div>
            {/* brand */}
            <div className="container-fluid CapitalAlpha">
                <div className="row mx-auto text-center">
                    <div className="col">
                        <img src={logo} className="img-fluid animate__animated animate__bounceInRight animate__delay-1s" alt="Responsive image" />
                        <h2> <span className=" brand animate__animated animate__bounceInRight animate__delay-1s">Siddiqui
                Closeout</span> </h2>
                    </div>
                </div>
            </div>



            {/* navbar */}
            <div className="gul  container-fluid ">
                <div className="row">
                    <div className=" col mb-2 pb-2">
                        <div className="">
                            <span> <a className="pop lol " href="" target="_blank"><i className="fa fa-facebook" /></a></span>
                            <span> <a className="pop lol " href="https://wa.me/923132720275" target="_blank"><i className="fa fa-whatsapp">
                            </i></a></span>
                            <span> <a className="pop lol" href="tel:923132720275" target="_blank"><i className="fa fa-phone">
                            </i></a></span>
                        </div>
                    </div>
                    <div class="col ">
                        <nav class="navbar navbar-expand-lg navbar-light ">

                            <button class="navbar-toggler navbackground" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse " id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <a class="nav-link lol pop animate__animated animate__rubberBand animate__delay-1s" href=""><Link to="/home">Home</Link> <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item ">
                                        <a class="nav-link lol pop animate__animated animate__rubberBand animate__delay-1s" href=""><Link to="/bluetooths">Bluetooths</Link></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link lol pop animate__animated animate__rubberBand animate__delay-1s" href=""> <Link to="/cables" >Cables </Link></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link lol pop animate__animated animate__rubberBand animate__delay-1s" href=""><Link to="/chargingfans" >Charging Fans</Link></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link lol pop animate__animated animate__rubberBand animate__delay-1s" href=""><Link to="/chargers">Chargers</Link></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link lol pop animate__animated animate__rubberBand animate__delay-1s" href=""><Link to="/handfrees" >HandFrees</Link></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link lol pop animate__animated animate__rubberBand animate__delay-1s" href=""><Link to="/powerbanks">PowerBanks</Link></a>
                                    </li>

                                </ul>
                            </div>
                        </nav>


                    </div>
                </div>
            </div>

        </div>
    );
}
export default Header;