import React, { Component } from "react";
import App from "./App";
import './App.css';

class LoginForm extends React.Component {
  
    // Using a class based component here because we're accessing DOM refs
   
    handleSignIn(e) {
      e.preventDefault()
      let username = this.refs.username.value
      let password = this.refs.password.value
      this.props.onSignIn(username, password)
    }
    
    render() {
      return (
        <form onSubmit={this.handleSignIn.bind(this)}>
          <h2>Sign in</h2>
          <input type="text" ref="username" placeholder="enter you username" />
          <input type="password" ref="password" placeholder="enter password" />
          <button type="submit" value="Login" >Login</button>

          <div className="message">
               <div><input type="checkbox" /> Remember ME</div>
               <div><a href="#">Forgot your password</a></div>
             </div>
        </form>
      )
    }
  
  }

  export default LoginForm;