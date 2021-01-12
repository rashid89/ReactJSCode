import React, { useState } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import Welcome from './Welcome';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  // App "actions" (functions that modify state)
  signIn(username, password) {
    // This is where you would call Firebase, an API etc...
    // calling setState will re-render the entire app (efficiently!)
    this.setState({
      user: {
        username,
        password,
      }
    })
  }

  signOut() {
    // clear out user from state
    this.setState({ user: null })
  }

  render() {
   
    return (
      <div>
        <h1 className="header">Login Application</h1>
        <div className="body-form">


          {
            (this.state.user) ?
              <Welcome
                user={this.state.user}
                onSignOut={this.signOut.bind(this)} />
              :
              <LoginForm
                onSignIn={this.signIn.bind(this)}
              />
          }
        </div>
      </div>
    )

  }

}


export default App;
