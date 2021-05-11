import React, { Component } from 'react';
import axios from 'axios';

class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getData: '',
            data: {}
        }

    }
    componentDidMount() {
        { this.loadData(this.props.ticketId) }
    }
    loadData = async (ticketId) => {
        let url = `http://localhost:5050/booking/ticket?ticketId=${ticketId}`
        await axios.get(url)
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.log(err))


        this.setState({ getData: 'xyz' })
        console.log(this.state)

    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header text-center alert alert-info">Booked Ticket Information</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-2">
                                
                            </div>
                            <div className="col-4">
                                <li className="list-group-item ">Ticket ID</li>
                                <li className="list-group-item ">Name</li>
                                <li className="list-group-item ">Email ID</li>
                                <li className="list-group-item ">Traval Date</li>
                                <li className="list-group-item ">From</li>
                                <li className="list-group-item ">To</li>
                                <li className="list-group-item ">SeatNumber</li>
                                <li className="list-group-item ">TotalFare</li>
                            </div>
                            <div className="col-6">
                                {this.state.getData ?<>
                                    <li className="list-group-item text-center">{this.state.data.ticketId}</li>
                                    <li className="list-group-item text-center">{this.state.data.user}</li>
                                    <li className="list-group-item text-center">{this.state.data.email}</li>
                                    <li className="list-group-item text-center">{this.state.data.travalDate}</li>
                                    <li className="list-group-item text-center">{this.state.data.from}</li>
                                    <li className="list-group-item text-center">{this.state.data.to}</li>
                                    <li className="list-group-item text-center">{this.state.data.seatNumber}</li>
                                    <li className="list-group-item text-center">{this.state.data.totalAmmount}</li>
                                    </>:''}
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ticket;