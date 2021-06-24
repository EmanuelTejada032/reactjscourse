import React from 'react';
import './App.css';

import  {Route, Switch}  from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop-page.component';
import SignIn from './pages/signin-signup/signin-signup.component';
import Header from './components/header/header.component'
import {auth, createProfileWithGoogleAuth} from './firebase/firebase.utils'



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({
      //   currentUser: user
      // })
      if(userAuth){
       const userRef = await createProfileWithGoogleAuth(userAuth); //We returned a user ref from createProfile function
       userRef.onSnapshot( snapShot => {
         this.setState({
           currentUser: {
             id: snapShot.id,
             ...snapShot.data()
           }
         }, () => {
           console.log(this.state.currentUser)
         })
        // console.log(snapShot);
       })
      }else{
        this.setState({currentUser: userAuth})
        console.log('This is the value of userAuth', userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
        <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SignIn} />
          </Switch>
        </div>
   );
  }
  
}

export default App;
