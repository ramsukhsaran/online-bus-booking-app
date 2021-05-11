import React, { Component } from 'react';
import axios from 'axios'

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state={
            totalTicket:this.props.totalTicket,
            transitions_Id:Date.now(),
            fareAmmount:this.props.fare,
            serviceTax:this.props.serviceTax,
            user:'',
            nextTicket:true


        }
      this.submitPay=this.submitPay.bind(this)
        
    }
    handleChange(e) {
        this.setState({user:e.target.value})
    }
   submitPay = async(e)=>{
       e.preventDefault()
       let url =`http://localhost:5050/payment`
       const paymentData={
           transaction_id:this.state.transitions_Id,
           user:this.state.user,
           ammount:(this.props.fare + this.props.serviceTax)*this.props.totalTicket
       }
       //api call to save payment
     await  axios.post(url,paymentData)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    
    
   }
 
    render() {
        return (
            <div className="container mt-4">
                <div className="card-header bg-primary">
                    <h3 className='text-white float-right'>Transaction ID:{this.state.transitions_Id}</h3>
                    <h3 className="text-white">Ammount:&#8377;{(this.props.fare + this.props.serviceTax)*this.props.totalTicket}</h3>

                </div>
                <div className="card-body bg-white">
                    <div className="row p-2">
                        <div className="col-4">
                            <h6>Card Type</h6>
                        </div>
                        <div className="col-4">
                            <input type="radio" name="card" value="card" /> Visa &nbsp;&nbsp;
                            <input type="radio" name="card" value="master" />MasterCard
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-4">
                            <h6>Card Number</h6>
                        </div>
                        <div className="col-6">
                            <input type="number" className="form-control" name="cardNumber"  />
                        </div>

                    </div>
                    <div className="row p-2">
                        <div className="col-4">
                            <h6>Card Holder Name</h6>
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" name="user" onChange={e => this.handleChange(e)}/>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-4">
                            <h6>CVV</h6>
                        </div>
                        <div className="col-2">
                            <input type="number" className="form-control" min="3" max="3" />
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col-4">
                            <h6>Expiary Date</h6>
                        </div>
                        <div className="col-5">
                            <select className="form-control">
                                <option>Month</option>
                                <option>Jan</option>
                                <option>Feb</option>
                                <option>Mar</option>
                                <option>Apr</option>
                                <option>May</option>
                                <option>Jun</option>
                                <option>Jul</option>
                                <option>Aug</option>
                                <option>Sep</option>
                                <option>Oct</option>
                                <option>Nov</option>
                                <option>Dec</option>
                            </select> &nbsp;
                            <select className="form-control">
                                <option>Year</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                                <option>2031</option>
                            </select>
                        </div>

                    </div>
                    <div className="row p-2">
                        <div className="col-4">

                        </div>
                        <div className="col-4">
                            <button onClick={e=>this.submitPay(e)}  className="btn btn-dark form-control">Pay</button>
                        </div>
                        <div className="col-4">
                            <a href="/"><button  className="btn btn-danger form-control">Cancel</button></a>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Payment;