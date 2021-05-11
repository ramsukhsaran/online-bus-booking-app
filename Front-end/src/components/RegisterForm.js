import React from 'react';
import axios from 'axios'
class RegisterForm extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {},
            disable: true,
            busdata: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
        let disable = this.state.disable
        this.setState({ disable: false })

    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.validateForm()) {
            
            // registering user  with post request ..
            // let url = 'http://localhost:5050/users/register'
            // axios.post(url, this.state.fields)
            //     .then(response => console.log(response.data))
            //     .catch(err => { console.log(err) })
            axios.post('http://localhost:5000/users/login',{email:'ram11@gmail.com',password:'password'})
                 .then(response =>console.log(response.data))
                 .catch(err => { console.log(err)})

            // reseting the form 
                let fields = {};
                fields["username"] = "";
                fields["emailid"] = "";
                fields["mobileno"] = "";
                fields["password"] = "";
                this.setState({ fields: fields });
                console.log('form is submitted')
       }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }

        if (!fields["emailId"]) {
            formIsValid = false;
            errors["emailId"] = "Please enter your email";
        }

        if (typeof fields["emailId"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailId"])) {
                formIsValid = false;
                errors["emailId"] = "*Please enter valid email";
            }
        }

        if (!fields["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobileno"] !== "undefined") {
            if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobileno"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }



    render() {
        return (
            <div className="mt-5">
                <div className="row">
                    <div className="col-4 offset-4 jumbotron">
                        <div className="text-center mt-0"><i class="fa fa-user-plus fa-2x" aria-hidden="true"></i> </div>
                        <form method="post" onSubmit={this.handleSubmit} >
                            <label htmlFor="name">Name</label>
                            <input className="form-control" type="text" id="name" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                            <div style={{ color: 'red' }}>{this.state.errors.username}</div>
                            <label>Email ID:</label>
                            <input className="form-control" type="text" name="emailId" value={this.state.fields.emailid} onChange={this.handleChange} />
                            <div style={{ color: 'red' }}>{this.state.errors.emailid}</div>

                            <label>Mobile No:</label>
                            <input className="form-control" type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} />
                            <div style={{ color: 'red' }}>{this.state.errors.mobileno}</div>
                            <label>Password</label>
                            <input className="form-control" type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                            <div style={{ color: 'red' }}>{this.state.errors.password}</div>
                            <br />
                            <div className="mt-3"><button type="submit" className="btn btn-primary form-control" disabled={this.state.disable}>Register</button></div>
                            <div className="mt-4">Already have an account?<a href="/login">Click Here To Login</a></div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }


}


export default RegisterForm;