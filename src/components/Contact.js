import React from "react";
import '../static/css/Contact.css'

class Contact extends React.Component{
    state={
        name:"",
        email:"",
        message:""
    }
    changename = (e) =>{
        this.setState({name:e.target.value});
        console.log(this.state.name);
    }
    changeemail = (e) =>{
        this.setState({email:e.target.value});
        console.log(this.state.email);
    }
    changemsg = (e) =>{
        this.setState({message:e.target.value});
        console.log(this.state.message);
    }
    onsubmitform= (e) =>{
        e.preventDefault();
        var str=`Hello my name is ${this.state.name} my email is ${this.state.email}.I want to say that ${this.state.message}.`;
        alert(str);
    }
    

    render(){
        return(
            <div className="formdiv">
                <form className="form" onSubmit={this.onsubmitform}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Enter email" onChange={this.changename}/>
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={this.changeemail}/>
                    </div>
                    <div className="form-group">
                        <label>Your Message</label>
                        <textarea className="form-control" name="msg" style={{"marginBottom":"40px","height":"150px"}} onChange={this.changemsg}>

                        </textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-danger">Submit</button>
                </form>
            </div>
        );
    }
}
export default Contact;