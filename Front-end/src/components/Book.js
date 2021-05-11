import React, { Component } from 'react';
import axios from 'axios'
import Seat from './Seat'
import Payment from './Payment'
import Ticket from './Ticket'


class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busData: [],
            travalDate:this.props.travalDate,
            bookedSeats:[],
            choosenSeat:[],
            nextPayment:'',
            nextTicket:''
        }
    }
    callbackFunction =(Seatdata,ticketId,nextPayment)=>{
        this.setState({choosenSeat:Seatdata})
        this.setState({ticketId:ticketId})
        this.setState({nextPayment:nextPayment})
    }
  
    // api call load busData of paarticular routeId based on user clicked 
    loadBusData = async () => {
        let url = `http://localhost:5050/buses/routeId?routeId=${this.props.routeId}`
        await axios.get(url)
            .then(response => this.setState({ busData: response.data }))
            .catch(error => console.log(error))

       this.state.busData.map(data =>
        {   
        this.setState({totalSeats:parseInt(data.totalSeats)})
        this.setState({fareAmmount:parseInt(data.fare)})
        this.setState({serviceTax:this.state.fareAmmount*18/100})  //  tax 18% of fare
        this.setState({bookedSeat:data.bookedSeats})
     
        })
    
       {
           this.state.bookedSeat.map((item)=>{
            this.state.bookedSeats.push(parseInt(item))
           })
       }
       console.log('this is new ',this.state)

    }
    componentDidMount(){
        {this.loadBusData(this.props.routeId)}
        
    }
    renderInfo = (busData) => {
        return busData.map((data) => {
            return (
                <tr >
                    <td>{data.busType}</td>
                    <td>{data.route}</td>
                    <td>{data.departureTime}</td>
                    <td>{data.arrivalTime}</td>
                    <td>{this.state.travalDate}</td>
                    <td>{data.fare}</td>
                
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                <th scope="col">BusType</th>
                                <th scope="col">Route</th>
                                <th scope="col">Departure</th>
                                <th scope="col">Arrival</th>
                                <th scope="col">Date</th>
                                <th scope="col">Fare</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderInfo(this.state.busData)}
                        </tbody>
                    </table>
                </div>
                <div className="container" style={{ marginTop: '60px' }}>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Select Seat</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Payment</a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Download Ticket</a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className={this.state.nextPayment?'tab-pane fade':'tab-pane fade show active'} id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                     <div className="row">
                         <div className="col-12">
                         {this.state.bookedSeat?< Seat paraentCallback={this.callbackFunction} totalSeats={this.state.totalSeats} travalDate={this.state.travalDate} bookedSeats={this.state.bookedSeats} busData={this.state.busData} fareAmmount={this.state.fareAmmount} serviceTax={this.state.serviceTax} />:''}
                         </div>
                     </div>
                   
                    </div>
                    <div className={this.state.nextPayment?'tab-pane fade show active':'tab-pane fade'} id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                       {this.state.choosenSeat?<Payment  fare={this.state.fareAmmount} serviceTax={this.state.serviceTax} totalTicket={this.state.choosenSeat.length} />:''}

                    </div>
                    <div className={this.state.nextTicket?'tab-pane fade show active':'tab-pane fade'} id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                       {this.state.ticketId? <Ticket ticketId={this.state.ticketId} />:''}
                    </div>
                </div>
            </div>

            </div>
        );
    }
}

export default Book;