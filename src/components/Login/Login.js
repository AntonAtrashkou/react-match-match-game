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
    if (this.firstName.trim() && this.lastName.trim() && this.email.trim()) {
      saveUser({ firstName: this.firstName, lastName: this.lastName, email: this.email });
      // console.log(this.props);
      history.push('/menu');
    }
  }

  render() {
    return (
      <div>
        <h2>
          Welcome Guest!
        </h2>
        <p>
          Please enter your First name, Last Name and email here
        </p>
        <div>
          <div>
            <label htmlFor="firstName">
              Name
            </label>
            <input onChange={e => this.handleChangeInput(e, 'firstName')} id="firstName" type="text" placeholder="your FirstName" />
          </div>
          <div>
            <label htmlFor="lastName">
              LastName
            </label>
            <input onChange={e => this.handleChangeInput(e, 'lastName')} id="lastName" type="text" placeholder="your LastName" />
          </div>
          <div>
            <label htmlFor="email">
              Email
            </label>
            <input onChange={e => this.handleChangeInput(e, 'email')} id="email" type="email" placeholder="your email" />
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
