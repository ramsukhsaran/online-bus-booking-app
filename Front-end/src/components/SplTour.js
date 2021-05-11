import React, { Component } from 'react';

class SplTour extends Component {
    render() {
        return (
            <div className="container-fluid jumbotron">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header text-center">
                                <h3>Manali</h3>
                            </div>
                            <div className="card-body">
                                <img className="float-left" src='./manali.jpg' alt="logo" />
                                <span className="badge badge-info float-right">Starting From</span><br />
                                <span className="float-right">&#8377;5499</span>
                                <br />
                                <button className="btn btn-primary float-right mt-4">View Details</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header text-center">
                                <h3>Goa</h3>
                            </div>
                            <div className="card-body">
                                <img className="float-left" src='./goa.jpg' alt="logo" />
                                <span className="badge badge-info float-right">Starting From</span><br />
                                <span className="float-right">&#8377;7999</span>
                                <br />
                                <button className="btn btn-primary float-right">View Details</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header text-center">
                                <h3>Kashmir</h3>
                            </div>
                            <div className="card-body">
                                <img className="float-left img-fluid" src='./kashmir.jpg' alt="logo" />
                                <span className="badge badge-info float-right">Starting From</span><br />
                                <span className="float-right">&#8377;11999</span>
                                <br />
                                <button className="btn btn-primary float-right">View Details</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header text-center">
                                <h3>Kerala</h3>
                            </div>
                            <div className="card-body">
                                <img className="float-left" src='./kerala.jpg' alt="logo" />
                                <span className="badge badge-info float-right">Starting From</span><br />
                                <span className="float-right">&#8377;6999</span>
                                <br />

                                <button className="btn btn-primary float-right mt-2">View Details</button>
                            </div>
                        </div>

                    </div>

                    <div className="col-4">
                        <div className="card">
                            <div className="card-header text-center">
                                <h3>Ladakh</h3>
                            </div>
                            <div className="card-body">
                                <img className="float-left" src='./ladakh.jpg' alt="logo" />
                                <span className="badge badge-info float-right">Starting From</span><br />
                                <span className="float-right">&#8377;12000</span>
                                <br />

                                <button className="btn btn-primary float-right mt-2">View Details</button>
                            </div>
                        </div>

                    </div>

                    <div className="col-4">
                        <div className="card">
                            <div className="card-header text-center">
                                <h3>Chennai</h3>
                            </div>
                            <div className="card-body">
                                <img className="float-left" src='./chennai.jpg' alt="logo" />
                                <span className="badge badge-info float-right">Starting From</span><br />
                                <span className="float-right">&#8377;7500</span>
                                <br />

                                <button className="btn btn-primary float-right mt-2">View Details</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default SplTour;