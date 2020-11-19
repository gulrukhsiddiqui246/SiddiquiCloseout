import React from 'react';
import Header from './Header.jsx';
import slide1 from '../images/audionicSlide.jpg';
import slide2 from '../images/audionicSlide2.jpg';
import slide3 from '../images/audionicSlide3.jpg';

function Home() {
    return (
        <div>
            <Header />


            {/* feature */}
            <div className="container-fluid mt-2 pt-2 CapitalAlpha">
                <div className="row ">
                    <div className="col">
                        <div className="alert alert-gul" role="alert">
                            <h4 className="alert-heading font-weight-bold h3 shadow-sm  border-bottom">Catelogue 2020-2021</h4>
                            <h3>Shop the full <span className="font-weight-bold h4 ">Audionic</span> and <span className="font-weight-bold h4">DANY</span> collection. </h3>
                            <hr />
                            <p className="mb-0">Whenever you need to, be sure to use reliable Sale site <span className="font-weight-bold h4">"Siddiqui Closeout" </span> to order all your stuff.</p>
                        </div>
                    </div>
                </div>
            </div>




            {/* slider */}
            <div className="container-fluid mt-2 pt-2">
                <div className="row">
                    <div className="col ">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={slide1} className="d-block w-100 " alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={slide2} className="d-block w-100 " alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={slide3} className="d-block w-100 " alt="..." />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Home;