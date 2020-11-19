import React from 'react';
import alphaX110 from '../images/alphaX110.jpg';
import galaxyG15 from '../images/galaxyG15.jpg';
import spiro3in1cable from '../images/spiro3in1cable.jpg';


function PowerBank() {
    return (
        <div>
            {/* boxes */}
            {/* FIRST BOX LIST */}
            <div className="container pt-2 mt-2">
                <div className="row mx-auto text-center">
                    <div className="col ">
                        {/* card1 ALPHAX 110*/}
                        <div className="card-deck">
                            <div className="card pt-2 mt-2">
                                <img src={ alphaX110} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title h3 font-weight-bold"> AlphaX 110</h5>
                                    <h6 className="font-weight-bold h3">Rs: 2000</h6>
                                    <p className="card-text">
                                    </p><p>
                                    </p><h5 className="font-weight-bold">COMPACT</h5> <span>ELEGANT DESIGN</span><p />
                                    <p><span className="font-weight-bold">DIGITAL DISPLAY: </span> <span> For Battery Status</span>
                                    </p>
                                    <p><span className="font-weight-bold">RAPID CHARGING: </span> <span> Fast Charging Speed</span>
                                    </p>
                                    <p><span className="font-weight-bold">TWO DEVICES: </span> <span> Charge Simultaneously</span>
                                    </p>
                                    <i className="fa fa-battery-full font-weight-bold"> 10,000mah</i>
                                    <p />
                                </div>
                                <div className="card-footer gul">
                                    <small className="text-muted font-weight-bold"><a href="https://wa.me/923132720275" target="_blank"><i className="fa fa-book"> Order Now
                      </i></a></small>
                                </div>
                            </div>
                            {/* card2 GALAXY G15 */}
                            <div className="card pt-2 mt-2">
                                <img src={galaxyG15} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title h3 font-weight-bold"> GALAXY G 15</h5>
                                    <h6 className="font-weight-bold h3">Rs: 2,500</h6>
                                    <p className="card-text">
                                    </p><p>
                                    </p><h5 className="font-weight-bold">THE COMPACT</h5> <span className="font-weight-bold"> HIGH
                                      CAPACITY</span> <span> Portable Charger</span><p />
                                    <p><span className="font-weight-bold">DIGITAL DISPLAY: </span> <span> For Battery Status</span>
                                    </p>
                                    <p><span className="font-weight-bold">RAPID CHARGING: </span> <span> Fast Charging Speed</span>
                                    </p>
                                    <p><span className="font-weight-bold">TWO DEVICES: </span> <span> Charge Simultaneously</span>
                                    </p>
                                    <i className="fa fa-battery-full font-weight-bold"> 10,000mah</i>
                                    <p />
                                </div>
                                <div className="card-footer gul">
                                    <small className="text-muted font-weight-bold"><a href="https://wa.me/923132720275" target="_blank"><i className="fa fa-book"> Order Now
                      </i></a></small>
                                </div>
                            </div>
                            {/* card3 SPIRO 3in 1 cable */}
                            <div className="card pt-2 mt-2">
                                <img src={spiro3in1cable} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title h3 font-weight-bold"> SPIRO</h5>
                                    <h6 className="font-weight-bold h3">Rs: 2,500</h6>
                                    <p className="card-text">
                                    </p><p>
                                    </p><h5 className="font-weight-bold">3 in 1 CABLE</h5>
                                    <p />
                                    <p><span className="font-weight-bold">RAPID CHARGING: </span> <span> Fast Charging Speed</span>
                                    </p>
                                    <p><span className="font-weight-bold">THREE DEVICES: </span> <span> Charge Simultaneously</span>
                                    </p>
                                    <i className="fa fa-battery-full font-weight-bold"> 10,000mah</i>
                                    <p />
                                </div>
                                <div className="card-footer gul">
                                    <small className="text-muted font-weight-bold"><a href="https://wa.me/923132720275" target="_blank"><i className="fa fa-book"> Order Now
                      </i></a></small>
                                </div>
                            </div>
                            {/* card deck */}
                        </div>
                    </div>
                </div>
            </div>

           

         
        </div>

    );
}
export default PowerBank;