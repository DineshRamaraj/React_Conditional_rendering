import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  // Conditional Rendering Using If & Else Statement

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button type="button">Logout</button>
    }
    return <button type="button">LogIn</button>
  }

  render() {
    const {isLoggedIn} = this.state

    // Conditional Rendering Using Element Variable

    let authButton
    if (isLoggedIn === true) {
      authButton = <button type="button">Logout</button>
    } else {
      authButton = <button type="button">Login</button>
    }

    // Conditional Rendering Using Ternary Operator

    return (
      <div className="container">
        {/* <Welcome greeting="Hello" name="User" /> */}
        <Welcome greeting="Hello" />
        {/* {this.renderAuthButton()} */}
        {/* {authButton} */}

        {/* Conditional Rendering Using Ternary Operator */}
        {/* {isLoggedIn ? (
          <button type="button">Logout</button>
        ) : (
          <button type="button">Login</button>
        )} */}

        {/* Conditional Rendering Using Logical && Operator */}
        {isLoggedIn && <button type="button">Logout</button>}
        {!isLoggedIn && <button type="button">Login</button>}
      </div>
    )
  }
}

export default App
