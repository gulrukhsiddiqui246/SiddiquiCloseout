import React from 'react';
import SA1 from '../images/SA1.jpg';
import SI100 from '../images/SI100.jpg';
import TY5 from '../images/TY5.jpg';
import UN300 from '../images/UN300.jpg';

function Cable() {
    return (
        <div>
            {/* FIRST BOX */}
            <div className="container pt-2 mt-2">
                <div className="row mx-auto text-center">
                    <div className="col ">
                        <h2 className=" h3 font-weight-bold">CHARGER and SYNC IN STYLE</h2>
                        <h6>ANDROID, LIGHTNING and TYPE-C CABLE</h6>
                        <div className="card-deck">
                            {/* card 1 MICRO SA-1  */}
                            <div className="card">
                                <img src={SA1} height={260}  className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold">MICRO SA-1 </h5>
                                    <h6 className="font-weight-bold h3">Rs: 200</h6>
                                    {/* <p className="card-text"><small >ANDROID, LIGHTNING and TYPE-C CABLE</small></p> */}
                                </div>
                                <div className="card-footer gul">
                                    <small className="text-muted font-weight-bold"><a href="https://wa.me/923132720275" target="_blank"><i className="fa fa-book"> Order Now
                                 </i></a></small>
                                </div>
                            </div>
                              {/* card2 iPHONE SI-100  */}
                              <div className="card">
                                <img src={SI100} height={260}  className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold">iPHONE SI-100 </h5>
                                    <h6 className="font-weight-bold h3">Rs: 220</h6>
                                    {/* <p className="card-text"><small >ANDROID, LIGHTNING and TYPE-C CABLE</small></p> */}
                                </div>
                                <div className="card-footer gul">
                                    <small className="text-muted font-weight-bold"><a href="https://wa.me/923132720275" target="_blank"><i className="fa fa-book"> Order Now
                                 </i></a></small>
                                </div>
                            </div>
                             {/* card3 TYPE-C TY-05  */}
                             <div className="card">
                                <img src={TY5} height={260}  className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold">TYPE-C TY-05</h5>
                                    <h6 className="font-weight-bold h3">Rs: 220</h6>
                                    {/* <p className="card-text"><small >ANDROID, LIGHTNING and TYPE-C CABLE</small></p> */}
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
            



             {/* SECOND BOX */}
             <div className="container pt-2 mt-2">
                <div className="row mx-auto text-center">
                    <div className="col ">
                        {/* <h2 className=" h3 font-weight-bold">CHARGER and SYNC IN STYLE</h2>
                        <h6>ANDROID, LIGHTNING and TYPE-C CABLE</h6> */}
                        <div className="card-deck">
                            {/* card1 3 IN 1 CABLE UN-300 */}
                            <div className="card">
                                <img src={UN300} height={260}  className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold">3 IN 1 CABLE UN-300 </h5>
                                    <h6 className="font-weight-bold h3">Rs: 300</h6>
                                    <p className="card-text">
                                    </p><p>
                                    </p><h5 className="font-weight-bold">CHARGER:</h5> <span className="font-weight-bold"> 3 IN 1 TIME
                                       </span> <p />
                                    <p><span className="font-weight-bold">3.0A POWER : </span> <span> Fast Charging Speed</span>
                                    </p>
                                    <p><span className="font-weight-bold">1.2 METER: </span> <span> Cable Length</span>
                                    </p>
                                    <p />
                                    {/* <p className="card-text"><small >ANDROID, LIGHTNING and TYPE-C CABLE</small></p> */}
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
export default Cable;