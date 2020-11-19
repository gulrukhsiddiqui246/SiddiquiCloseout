import React from 'react';
import FAN from '../images/fan.jpg'

function ChargingFan() {
    return (
        <div>
            {/* FIRST BOX */}
            <div className="container pt-2 mt-2">
                <div className="row mx-auto text-center">
                    <div className="col ">
                        

                        <div className="card-deck">
                            {/* card 1 AIRWAVES2  */}
                            <div className="card">
                                <img src={FAN} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold">AIRWAVES2  </h5>
                                    <h2>USB</h2>
                                    <h5>RECHARGEABLE FAN</h5>
                                    <h6 className="font-weight-bold h3">Rs: 1000</h6>
                                    <p className="card-text"> <p>Three Blades</p>
                                    <p>Strong Wind</p>
                                    <p>Three Gears</p>
                                    </p>
                                </div>
                                <div className="card-footer gul">
                                    <small className="text-muted font-weight-bold"><a href="https://wa.me/923132720275" target="_blank"><i className="fa fa-book"> Order Now
                                 </i></a></small>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>






        </div>

    );
}
export default ChargingFan;