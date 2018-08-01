import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  static propTypes = {
    saveUser: PropTypes.func,
    history: PropTypes.object,
  }

  handleChangeInput = (e, inputName) => {
    this[inputName] = e.target.value;
  }

  handleContinue = () => {
    const { saveUser, history } = this.props;
    if (this.isValidName(this.firstName.trim()) && this.isValidEmail(this.email.trim())) {
      saveUser({ firstName: this.firstName, email: this.email });
      history.push('/menu');
    }
  }

  isValidName(name) {
    const nameLength = name.length;
    if (nameLength > 2 && nameLength < 20) {
        return true
    }
    return false
  }

  isValidEmail(email) {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase()));
  }

  render() {
    return (
      <div>
        <h2>
          Welcome Guest!
        </h2>
        <p>
          Please enter your name and email here
        </p>
        <div>
          <div>
            <label htmlFor="firstName">
              Name
            </label>
            <input onChange={e => this.handleChangeInput(e, 'firstName')} required type="text" placeholder="your FirstName" />
          </div>
          <div>
            <label htmlFor="email">
              Email
            </label>
            <input onChange={e => this.handleChangeInput(e, 'email')} required type="email" placeholder="your email" />
          </div>
          <button
            type="button"
            onClick={this.handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
