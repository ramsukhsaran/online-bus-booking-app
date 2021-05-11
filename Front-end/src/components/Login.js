import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            disable:true
           
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({ fields })
        let disable=this.state.disable
        this.setState({ disable:false})
       
    }
    handleSubmit(e) {
        e.preventDefault()
        if (this.valid()) {
            let fields = {}
            fields['email'] =''
            fields['password'] =''
            this.setState({ fields: fields })
            console.log('form reseted')
        }
        
    }
    valid = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Please enter your email";
        }

        if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "Please enter valid email";
            }
        }
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Please enter your password";
        }

        this.setState({
            errors: errors
        });
        return formIsValid;

    }


    render() {
        return (
            <div class="mt-5">
                <div className="row">
                    <div className="col-4 offset-4 jumbotron">
                        <div className="text-center mb-3"><i class="fa fa-user fa-2x" aria-hidden="true"></i> </div>
                        <form method="post"  onSubmit={this.handleSubmit} >
                            <label>Email ID:</label>
                            <input className="form-control" type="text" name="email" value={this.state.fields.email} onChange={this.handleChange} />
                            <div style={{ color: 'red' }}>{this.state.errors.email}</div>
                            <label>Password</label>
                            <input className="form-control" type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                            <div style={{ color: 'red' }}>{this.state.errors.password}</div>
                            <br />
                            <div className="mt-3"><button type="submit" className="btn btn-primary form-control"disabled={this.state.disable} >Login</button></div>
                            <br />
                            <div className="mt-3 float-right"><h6>Register ?<a href="/register">Click here</a></h6></div>
                            <h6 className="mt-3">Forget Password? <a href="#">Click Here</a></h6>
                        </form>


                    </div>
                </div>


            </div>
        );
    }
}

export default Login;