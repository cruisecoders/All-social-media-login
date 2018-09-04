import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from './firebase-config.js';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      email: "",
      password: "",
      message: "",
      error: "",
      error1: "",
    }
    this.Signup=this.Signup.bind(this);
    this.Login=this.Login.bind(this);
    this.loginFace=this.loginFace.bind(this);
    this.loginGoogle=this.loginGoogle.bind(this);
    this.loginTwitter=this.loginTwitter.bind(this);
    this.loginGitHub=this.loginGitHub.bind(this);

  }
  Signup()
  {
    if(this.state.email!="" && this.state.password!="")
    {
      firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(()=>{
        this.setState({message: "Signup successful"})
      }).catch(function(error) {
      this.setState({error: "Server does not support"})
      });

    }
    else
    {
      if(this.state.email=="")
      {
        this.setState({error: "Please fill the email"})
      }
      if(this.state.password=="")
      {
        this.setState({error1: "please fill the password"})
      }
    }
  }
  Login()
  {
    if(this.state.email!="" && this.state.password!="")
    {
      firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(()=>{
       this.setState({message: "login successful"}) 
      }).catch(function(error) {
    this.setState({error: "Server does not support"})
   });

    }
    else
    {
      if(this.state.email=="")
      {
        this.setState({error: "Please fill the email"})
      }
      if(this.state.password=="")
      {
        this.setState({error1: "please fill the password"})
      }
    }
  }
  loginFace()
  {
    var provider = new firebase.auth.FacebookAuthProvider();
    var self=this;
    firebase.auth().signInWithPopup(provider).then(function(result) {
      console.log(result)
      var token = result.credential.accessToken;
      var user = result.user;
      self.setState({message:"login successful"});
     }).catch(function(error) {
  
       var errorCode = error.code;
       console.log(errorCode);
       var errorMessage = error.message;
       console.log(errorMessage);
       var email = error.email;
       console.log(email);
       var credential = error.credential;
       console.log(credential);
     
   });
  }
  loginGoogle()
  {
    var provider = new firebase.auth.GoogleAuthProvider();
    var self=this;
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(token)
      console.log(user)
      self.setState({message: "login Successful"})
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code)
      console.log(error.message)
   });

  }
  loginTwitter()
  {
    var self=this;
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
     console.log(token)
      console.log(user)
      self.setState({message: "login Successful"})
   }).catch(function(error) {
      console.log(error.code)
      console.log(error.message)
   });
  }
  loginGitHub()
  {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
    
      console.log(token)
      console.log(user)
      this.setState({message: "login successful"});
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    
      console.log(error.code)
      console.log(error.message)
   });

  }

  render() {
    return (
      <div className="App">
      <h1> LogIN</h1>
      <label>email</label>
      <input value={this.state.email} onChange={ event => this.setState({email: event.target.value})}/><br/><br/>
      {this.state.error}
      <label>Password</label>
      <input value={this.state.password} type="password" onChange={ event => this.setState({password: event.target.value})}/>
      {this.state.error1}<br/>

      <button onClick={this.Signup}> Signin With Email And Password</button><br/>
      <button onClick={this.Login}>Login with Email And Password</button><br/>
      {this.state.message}
      <button onClick={this.loginFace}>Login with Facebook</button><br/>
      <button onClick={this.loginGoogle}>Login With Google</button><br/>
      <button onClick={this.loginTwitter}>Login with Twitter</button><br/>
      <button onClick={this.loginGitHub}>Login with GitHub</button><br/>
      </div>
    );
  }
}

export default App;
