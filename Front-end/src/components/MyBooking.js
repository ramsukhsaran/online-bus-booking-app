import React, { useState, useEffect } from 'react';

const MyBooking = () => {
    // using hooks 
    let [ticketId, setTicketId] = useState()
    let [email, setEmail] = useState('')
    let [check, setCheck] = useState('')
    let [result, setResult] = useState([])

    let getData = async (e) => {
        e.preventDefault()
        // API Call
        const url = await `http://localhost:5050/booking/myBooking?email=${email}&ticketId=${ticketId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setResult(data))
        setCheck('xyz')
        email = ''
        ticketId = null

    }
    const renderResult = (result) => {
        if (result == []) return (<div><h2>No results found</h2></div>)
        else
            return (
                <div className="container mt-5">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Ticket No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Deparature City</th>
                                <th scope="col">Destination City</th>
                                <th scope="col">TravalDate</th>
                                <th scope="col">SeatNumber</th>
                                <th scope="col">FareAmmount</th>
                            </tr>
                        </thead>
                        <tbody className="bg-primary">
                            <tr>
                                <th scope="row">{result.ticketId}</th>
                                <td>{result.user}</td>
                                <td>{result.from}</td>
                                <td>{result.to}</td>
                                <td>{result.travalDate}</td>
                                <td>{result.seatNumber}</td>
                                <td>{result.totalAmmount}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
    }

    return (
        <div>
            <div className="bg-danger">
                <div className="container">
                    <div className="p-5">
                        <h2 className="text-center text-white">Get Your Booking Details Here </h2>
                        <div className="row mt-5">
                            <div className="col-4 offset-4">
                                <input type="text" className="form-control" onChange={e => setEmail(e.target.value)} placeholder="Enter Email" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-4 offset-4">
                                <input type="number" className="form-control" onChange={e => setTicketId(e.target.value)} placeholder="Ticket No" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-4 offset-4">
                                <form method="get" onSubmit={e => getData(e)}>
                                    <button className="form-control btn btn-success">Get Info</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {check ? renderResult(result) : null}
            
        </div>
    );
};

export default MyBooking;