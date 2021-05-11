import React, { useState, useEffect } from 'react';
import Book from './Book'

const SearchResults = (props) => {
    let [routeId, setrouteId] = useState('')
    const renderResult = (responseData) => {
        return responseData.map(response => {
            return (
                <tr>
                    <td>{response.operatorName}</td>
                    <td>{response.busType}</td>
                    <td>{response.route}</td>
                    <td>{response.avaliable}</td>
                    <td>{response.departureTime}</td>
                    <td>{response.arrivalTime}</td>
                    <td>{response.fare}</td>
                    <td><a href='#'><button className="btn btn-primary" onClick={e => setrouteId(response.routeId)} >Select</button></a></td>
                </tr>
            )
        })
    }

    return (
        <div>

            {routeId ? <Book  routeId={routeId} travalDate={props.travalDate}/> : (
                <div>
                    <div className=" container card-header font-weight-bold bg-info text-white"><h2>Select Bus</h2></div>
                    <table className="container table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">OperatorName</th>
                                <th scope="col">BusType</th>
                                <th scope="col">Route</th>
                                <th scope="col">Avaliable</th>
                                <th scope="col">DeparatureTime</th>
                                <th scope="col">ArrivalTime</th>
                                <th scope="col">FareAmmount</th>
                            </tr>
                        </thead>
                        <tbody className="bg-success">
                            {renderResult(props.responseData)}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    );
};

export default SearchResults;