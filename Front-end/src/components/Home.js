import React, { Component } from 'react';
import axios from 'axios'
import SearchResults from './SearchResults'
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {},
            erros: {},
            responseData: [], // searchresult
            search: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let formData = this.state.formData
        formData[e.target.name] = e.target.value
        this.setState({ formData })
        console.log(this.state.formData)
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.formData)
        // api call to get data from server
        let url = `http://localhost:5050/buses?route=${this.state.formData.from}-${this.state.formData.to}`
        console.log(url)
        axios.get(url)
            .then(response => this.setState({ responseData: response.data }))
            .catch(error => console.log(error))

        setTimeout(() => {
           // reseting form data
            // let formData = {}
            // formData['from'] = ''
            // formData['to'] = ''
            // formData['date'] = ''
            // this.setState({ formData: formData })
            // console.log(formData)
            // console.log(this.state.responseData)
            this.setState({ search: 'xyz' })
        }, 2000)

    }

    render() {
        return (
            <div>
                {this.state.search ? <SearchResults responseData={this.state.responseData}  travalDate={this.state.formData.date} /> : (<div id="bg">
                    <div class="search-bar container">
                        <form method="post" onSubmit={this.handleSubmit}>
                            <div class="row">
                                <div className="col-3">
                                    <input className="form-control" type="text" placeholder="From" name='from' value={this.state.formData.from} onChange={this.handleChange} />
                                </div>
                                <div className="col-3">
                                    <input className="form-control" type="text" placeholder="To" name="to" value={this.state.formData.to} onChange={this.handleChange} />
                                </div>
                                <div className="col-3">
                                    <input className="form-control" type="date" name="date" placeholder="Journey date" value={this.state.formData.date} onChange={this.handleChange} />
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-light form-control">Search Bus</button>
                                    {/* <input className="form-control" id="btn" type="submit" placeholder="Search Bus" /> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>)}

            </div>
        );
    }
}

export default Home;