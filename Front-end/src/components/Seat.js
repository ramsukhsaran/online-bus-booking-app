import React, { Component } from 'react';
import './Seat.css'
import axios from 'axios'
class Seat extends Component {
    constructor(props) {
        super(props)
        this.state = {
             // craeting an empty array of objects
            totalSeats: [...new Array(this.props.totalSeats)].map((item, index) => {
                return {
                    seatNo: index + 1,
                    selected: false
                }

            }),
            choosenSeat: [],
            userData: {},
            busData: this.props.busData,
            travalDate: this.props.travalDate,
            taxAmmount:this.props.serviceTax
        }
    }

    handleChange = (e) => {
        let userData = this.state.userData
        userData[e.target.name] = e.target.value
        this.setState({ userData })
        console.log(this.state.userData)
    }
    isBooked(seatNo) {
        return this.props.bookedSeats.includes(seatNo)
    }
    handleSelect(seatNo) {
        const muteState = { ...this.state }

        if (!this.isBooked(seatNo)) {
            muteState.totalSeats[seatNo - 1].selected = !muteState.totalSeats[seatNo - 1].selected;
            if (muteState.totalSeats[seatNo - 1].selected) {
                muteState.choosenSeat.push(seatNo);

            }
            else {
                muteState.choosenSeat.pop(seatNo)
            }
            this.setState({ totalSeats: muteState.totalSeats, choosenSeat: muteState.choosenSeat })
            console.log(this.state.choosenSeat)


        }



    }
    renderFillDetails(choosenSeat) {
        return choosenSeat.map((item, index) => {
            if (choosenSeat.includes(item)) {
                return (
                    <div className="card">
                        <div className="card-body">
                            <h1 className="list-group-item text-center" >SeatNumber:{item}</h1>
                            <div className="row">
                                <div className="col-6">
                                    <h4 className="badge badge-danger">Fare Ammount</h4>&#8377;{this.state.busData[0]['fare']} <br />
                                    <h4 className="badge badge-danger">Tax</h4>&nbsp;&nbsp;&#8377;{this.state.taxAmmount}  <br />
                                    <h4 className="badge badge-danger">TotalFare</h4>&#8377;{parseInt(this.state.busData[0]['fare']) + parseInt(this.state.taxAmmount)}
                                </div>
                                <div className="col-6">
                                    <input type="email" name="email" className="form-control" placeholder="Enter Email Id" onChange={e => this.handleChange(e)} />
                                    <input type="text" name="user" placeholder="Enter Name" className="form-control" onChange={e => this.handleChange(e)} />

                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
        })

    }

    updateDB = async (busId) => {
        // updating bookedSeat in db
        let bookedSeat = [...this.state.busData[0]['bookedSeats'].map(item => item.toString())].concat(this.state.choosenSeat.map(item => item.toString()))


        // updating available avaliable  seat
        const Avaliable = {
            routeId: busId,
            avaliable: this.state.busData[0]['avaliable'] - this.state.choosenSeat.length

        }
         // API Call 
        await axios.post('http://localhost:5050/buses/update', Avaliable)
            .then(res => console.log('update avaliable ', res.data))
            .catch(err => console.log(err))
        // updating bookedSeat in db
        await axios.post('http://localhost:5050/buses/update/seat', { routeId: busId, bookedSeat })
            .then(res => console.log('updated bookedSeat', res.data))
            .catch(err => console.log(err))

        {this.sendData(this.state.choosenSeat,this.state.ticketId)}   // callback to parent about seat

    }
    sendData=(choosenSeat,ticketId)=>{
        const nextPayment='true'
        this.props.paraentCallback(choosenSeat,ticketId,nextPayment)

    }
    bookingData = async () => {
        const book = {
            user: this.state.userData.user,
            email: this.state.userData.email,
            travalDate: this.props.travalDate,
            busId: this.state.busData[0]['routeId'],
            from: this.state.busData[0]['from'],
            to: this.state.busData[0]['to'],
            seatNumber: this.state.choosenSeat[0],
            totalAmmount: this.state.busData[0]['fare']*this.state.choosenSeat.length + this.state.taxAmmount*this.state.choosenSeat.length

        }
        console.log('this.is book data', book)
        // post request for booking seat
        let url = `http://localhost:5050/booking/book`
        await axios.post(url, book)
            .then(res => this.setState({ticketId:res.data.ticketId}))
            .catch(err => console.log(err))

        { this.updateDB(book.busId) }   // calling func to update db
  
    }
    render() {
        return (
            <div>
                <div className="card-body bg-dark">
                    <ul className="seat">
                        {this.props.bookedSeats ? (this.state.totalSeats.map((item, index) => <li
                            onClick={() => this.handleSelect(item.seatNo)}
                            key={item.seatNo}
                            className={this.isBooked(item.seatNo) ? 'bookedSeat' : item.selected ? 'selectedSeat' : ''}>{item.seatNo}</li>)) : ''}

                    </ul>
                    <div className="bg-info text-center">
                        <div className="card-header">
                            <div className="show-info">
                                <div className="info-selected"></div><br />Selected&nbsp;
                                      <div className="info-empty"></div> <br />Empty&nbsp;
                                      <div className="info-occ"></div> <br />Occupied
                                  </div>
                        </div>

                    </div>

                </div>
                <div className="mt-2">
                    <div className="card-header text-center"><h1 className="alert-info">Fill Booking Details</h1></div>
                    <div className="card-body">
                        {this.state.choosenSeat.length ? this.renderFillDetails(this.state.choosenSeat) : ''}
                        {this.state.choosenSeat.length ? (<a href='#'><button style={{ width: '150px' }} className='btn btn-primary btn btn-lg float-right form-control' onClick={() => this.bookingData()}>Book</button></a>) : ''}

                    </div>
                </div>
            </div>
        );
    }
}

export default Seat;