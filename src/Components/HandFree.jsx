import React from 'react';
import PRO5 from '../images/PRO5.jpg';
import MARK1 from '../images/MARK1.webp';
import T5 from '../images/T50.png';
import OPERA5 from '../images/OPERA5.jpg';
import T40 from '../images/T40.jpg';
import T30 from '../images/T30.jpg';
import D50 from '../images/D50.jpg';
import D20 from '../images/D20.jpg';
import D15 from '../images/D15.jpg';
import D10 from '../images/D10.jpg';
import LE750 from '../images/LE-750.jpg';
import COLARBUDS from '../images/collarBuds.jpg';
import N210 from '../images/N210.jpg';
import A800 from '../images/A800.jpg';
import A750 from '../images/A750.jpg';

function HandFree() {
    return (
        <div>
            {/* FIRST BOX */}
            <div className="container pt-2 mt-2">
                <div className="row mx-auto text-center">
                    <div className="col ">
                        <h2 className=" h3 font-weight-bold">4  in 1 FUNCTIONS WITH SELFIE OPTION </h2>

                        <div className="card-deck">
                            {/* card 1 MAX PRO-5  */}
                            <div className="card">
                                <img src={PRO5} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold">MAX PRO-5 </h5>
                                    <h6 className="font-weight-bold h3">Rs: 400</h6>
                                    {/* <p className="card-text"><small >ANDROID, LIGHTNING and TYPE-C CABLE</small></p> */}
                                </div>
                                <div className="card-footer gul">
                                    <small className="text-muted font-weight-bold"><a href="https://wa.me/923132720275" target="_blank"><i className="fa fa-book"> Order Now
                                 </i></a></small>
                                </div>
                            </div>
                            {/* card2 MARK 1  */}
                            <div className="card">
                                <img src={MARK1} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold">MARK-1  </h5>
                                    <h6 className="font-weight-bold h3">Rs: 350</h6>
                                    <p className="card-text"><small >Colors:<i class="fa fa-square-o bg-secondary" aria-hidden="true"></i><i class="fa fa-square-o bg-primary" aria-hidden="true"></i></small></p>
                                </div>
                                <div className="card-footer gul">
                                    <small className="text-muted font-weight-bold"><a href="https://wa.me/923132720275" target="_blank"><i className="fa fa-book"> Order Now
                                 </i></a></small>
                                </div>
                            </div>
                            {/* card3 T-50  */}
                            <div className="card">
                                <img src={T5} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold">T-50</h5>
                                    <h6 className="font-weight-bold h3">Rs: 300</h6>
                                    <p className="card-text"><small >Colors:<i class="fa fa-square-o bg-primary" aria-hidden="true">
                                    </i>
                                        <i class="fa fa-square-o bg-danger" aria-hidden="true"></i>
                                        <i class="fa fa-square-o bg-dark" aria-hidden="true"></i>
                                        <i class="fa fa-square-o bg-warning" aria-hidden="true"></i>
                                    </small></p>
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

                        <div className="card-deck">
                            {/* card 1 OPERA-5 */}
                            <div className="card">
                                <img src={OPERA5} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold"> OPERA-5  </h5>
                                    <h6 className="font-weight-bold h3">Rs: 400</h6>
                                    <p className="card-text"><small >Colors:<i class="fa fa-square-o bg-secondary" aria-hidden="true"></i><i class="fa fa-square-o bg-warning" aria-hidden="true"></i></small></p>
                                </div>
                                <div className="card-footer gul">
                                    <small className="text-muted font-weight-bold"><a href="https://wa.me/923132720275" target="_blank"><i className="fa fa-book"> Order Now
                                 </i></a></small>
                                </div>
                            </div>
                            {/* card2 T-40  */}
                            <div className="card">
                                <img src={T40} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold">T-40  </h5>
                                    <h6 className="font-weight-bold h3">Rs: 300</h6>
                                    <p className="card-text"><small >Colors:<i class="fa fa-square-o bg-primary" aria-hidden="true">
                                    </i>
                                        <i class="fa fa-square-o bg-danger" aria-hidden="true"></i>
                                        <i class="fa fa-square-o bg-dark" aria-hidden="true"></i>
                                        <i class="fa fa-square-o bg-light" aria-hidden="true"></i>
                                    </small></p>
                                </div>
                                <div className="card-footer gul">
                                    <small className="text-muted font-weight-bold"><a href="https://wa.me/923132720275" target="_blank"><i className="fa fa-book"> Order Now
                                 </i></a></small>
                                </div>
                            </div>
                            {/* card3 T-30  */}
                            <div className="card">
                                <img src={T30} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold">T-30</h5>
                                    <h6 className="font-weight-bold h3">Rs: 300</h6>
                                    <p className="card-text"><small >Colors:
                                        <i class="fa fa-square-o bg-danger" aria-hidden="true"></i>
                                        <i class="fa fa-square-o bg-info" aria-hidden="true"></i>
                                        <i class="fa fa-square-o bg-success" aria-hidden="true"></i>
                                    </small></p>
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





            {/* THIRD BOX */}
            <div className="container pt-2 mt-2">
                <div className="row mx-auto text-center">
                    <div className="col ">


                        <div className="card-deck">
                            {/* card 1 D-50*/}
                            <div className="card">
                                <img src={D50} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold"> D-50  </h5>
                                    <h6 className="font-weight-bold h3">Rs: 350</h6>
                                    <p className="card-text"><small >Colors:<i class="fa fa-square-o bg-dark" aria-hidden="true"></i><i class="fa fa-square-o " aria-hidden="true"></i></small></p>
                                </div>
                                <div className="card-footer gul">
                                    <small className="text-muted font-weight-bold"><a href="https://wa.me/923132720275" target="_blank"><i className="fa fa-book"> Order Now
                                 </i></a></small>
                                </div>
                            </div>
                            {/* card2 D-20  */}
                            <div className="card">
                                <img src={D20} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold">D-20  </h5>
                                    <h6 className="font-weight-bold h3">Rs: 350</h6>
                                    <p className="card-text"><small >Colors:<i class="fa fa-square-o bg-secondary" aria-hidden="true">
                                    </i>
                                        <i class="fa fa-square-o bg-danger" aria-hidden="true"></i>
                                        <i class="fa fa-square-o bg-dark" aria-hidden="true"></i>
                                        <i class="fa fa-square-o bg-light" aria-hidden="true"></i>
                                    </small></p>
                                </div>
                                <div className="card-footer gul">
                                    <small className="text-muted font-weight-bold"><a href="https://wa.me/923132720275" target="_blank"><i className="fa fa-book"> Order Now
                                 </i></a></small>
                                </div>
                            </div>

                            {/* card3 D-15  */}
                            <div className="card">
                                <img src={D15} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold">D-15</h5>
                                    <h6 className="font-weight-bold h3">Rs: 350</h6>
                                    <p className="card-text"><small >Colors:
                                        <i class="fa fa-square-o bg-dark" aria-hidden="true"></i>
                                        <i class="fa fa-square-o bg-warning" aria-hidden="true"></i>
                                        <i class="fa fa-square-o " aria-hidden="true"></i>
                                    </small></p>
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


            {/* fourth BOX */}
            <div className="container pt-2 mt-2">
                <div className="row mx-auto text-center">
                    <div className="col ">


                        <div className="card-deck">
                            {/* card 1 D10*/}
                            <div className="card">
                                <img src={D10} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold"> D-10  </h5>
                                    <h6 className="font-weight-bold h3">Rs: 350</h6>
                                    <p className="card-text"><small >Colors:<i class="fa fa-square-o bg-primary" aria-hidden="true"></i><i class="fa fa-square-o bg-dark" aria-hidden="true"></i><i class="fa fa-square-o " aria-hidden="true"></i></small></p>
                                </div>
                                <div className="card-footer gul">
                                    <small className="text-muted font-weight-bold"><a href="https://wa.me/923132720275" target="_blank"><i className="fa fa-book"> Order Now
                                 </i></a></small>
                                </div>
                            </div>
                            {/* card2 LE-750  */}
                            <div className="card">
                                <img src={LE750} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold">LE-750   </h5>
                                    <h6 className="font-weight-bold h3">Rs: 250</h6>
                                    <p className="card-text"><small >Colors:<i class="fa fa-square-o bg-warning" aria-hidden="true">
                                    </i>
                                        <i class="fa fa-square-o bg-primary" aria-hidden="true"></i>
                                        <i class="fa fa-square-o bg-dark" aria-hidden="true"></i>
                                        <i class="fa fa-square-o bg-secondary" aria-hidden="true"></i>
                                    </small></p>
                                </div>
                                <div className="card-footer gul">
                                    <small className="text-muted font-weight-bold"><a href="https://wa.me/923132720275" target="_blank"><i className="fa fa-book"> Order Now
                                 </i></a></small>
                                </div>
                            </div>
                        </div>
                        <div className="card-deck">


                            {/* card1 COLLARBUDS */}
                            <div className="card">
                                <img src={COLARBUDS} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title h3 font-weight-bold"> CollarBuds C-40</h5>
                                    <h6 className="font-weight-bold h3">Rs: 1,500</h6>
                                    <p className="card-text">
                                    </p><p>
                                        {/* <h5 class="font-weight-bold">COMPACT</h5> <span>ELEGANT DESIGN</span></p> */}
                                    </p><p><span className="font-weight-bold">FEATURES </span>
                                    </p><ul className="list-group list-group-flush">
                                        <li className="list-group-item">Bluetooth 4.2</li>
                                        <li className="list-group-item">Built-in Microphone</li>
                                        <li className="list-group-item">Hanfree Phone Calls</li>
                                        <li className="list-group-item" />
                                    </ul>
                                    <p />
                                    <p><span className="font-weight-bold">SPECIFICATION </span>
                                    </p><ul className="list-group list-group-flush">
                                        <li className="list-group-item">Play/Talk:Upto 7hours</li>
                                        <li className="list-group-item" />
                                    </ul>
                                    <p />
                                    <p className="card-text"><small >Colors:
                                        <i class="fa fa-square-o bg-dark" aria-hidden="true"></i>
                                        <i class="fa fa-square-o bg-warning" aria-hidden="true"></i>

                                    </small></p>
                                    <p>
                                        <i className="fa fa-battery-full font-weight-bold"> </i> <i className="fa fa-microphone font-weight-bold"> </i>
                                        <i className="fa fa-step-forward font-weight-bold"> </i>
                                        <i className="fa fa-volume-down font-weight-bold"> </i>
                                    </p>
                                </div>
                                <div className="card-footer gul">
                                    <small className="text-muted font-weight-bold"><a href="https://wa.me/923132720275" target="_blank"><i className="fa fa-book"> Order Now
                                    </i></a></small>
                                </div>
                            </div>

                            {/* card2 SIGNATURE N-210 */}
                            <div className="card">
                                <img src={N210} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title h3 font-weight-bold"> SIGNATURE N-210</h5>
                                    <h6 className="font-weight-bold h3">Rs: 2,500</h6>
                                    <p className="card-text">
                                    </p><p>
                                        {/* <h5 class="font-weight-bold">COMPACT</h5> <span>ELEGANT DESIGN</span></p> */}
                                    </p><p><span className="font-weight-bold">FEATURES </span>
                                    </p><ul className="list-group list-group-flush">
                                        <li className="list-group-item">Bluetooth 5.0</li>
                                        <li className="list-group-item">Noice Cancelling</li>
                                        <li className="list-group-item">Water Proof</li>
                                        <li className="list-group-item" />
                                    </ul>
                                    <p />
                                    <p><span className="font-weight-bold">SPECIFICATION </span>
                                    </p><ul className="list-group list-group-flush">
                                        <li className="list-group-item">Battery: 110mAh</li>
                                        <li className="list-group-item">300 Hours Stand By Time</li>
                                        <li className="list-group-item">Play Time: 11 Hours</li>
                                        <li className="list-group-item">Charging: 1 Hours</li>
                                        <li className="list-group-item" />
                                    </ul>
                                    <p />
                                   
                                    
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


             {/* FIFTH BOX */}
             <div className="container pt-2 mt-2">
                <div className="row mx-auto text-center">
                    <div className="col ">
                       

                        <div className="card-deck">
                            {/* card 1 airbeats A-750  */}
                            <div className="card">
                                <img src={A750} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold">airbeats A-750</h5>
                                    <h6 className="font-weight-bold h3">Rs: 1,800</h6>
                                    <p className="card-text"><small >HANDSFREE: Phone Calls</small></p>
                                </div>
                                <div className="card-footer gul">
                                    <small className="text-muted font-weight-bold"><a href="https://wa.me/923132720275" target="_blank"><i className="fa fa-book"> Order Now
                                 </i></a></small>
                                </div>
                            </div>
                            {/* card2 airbeat A-800  */}
                            <div className="card">
                                <img src={A800} height={260} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title  h3 font-weight-bold">airbeat A-800  </h5>
                                    <h6 className="font-weight-bold h3">Rs: 2,100</h6>
                                    <p className="card-text"><small ><h2>TF CARD SUPPORTED</h2></small></p>
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
export default HandFree;