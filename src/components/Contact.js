import React, { Component } from 'react'

class Contact extends Component {
  formLabel = () => {
    return {
      textAlign: 'left',
      marginRight: '10px',
      flex: '1',
    };
  };

  inputForm = () => {
    return {
      flex: '10',
      marginBottom: '10px',
      padding: '0px 10px',
    };
  };

  formGroup = () => {
    return {
      display: 'flex',
      margin: '0px 15px',
    };
  };

  buttonGroup = () => {
    return {
      display: 'flex',
      margin: '10px 15px',
      justifyContent: 'flex-end',
    };
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.AddContact(
      this.state.firstname,
      this.state.middlename,
      this.state.lastname,
      this.state.contact_no,
      this.state.email,
    );

    this.setState({
      firstname: '',
      middlename: '',
      lastname: '',
      contact_no: '',
      email: '',
    });
  };

  state = {
    firstname: '',
    middlename: '',
    lastname: '',
    contact_no: '',
    email: '',
  };

  onChange = (e) => {
    // this.setState({ firstname: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeNumberOnly = (e) => {
    // this.setState({ firstname: e.target.value });
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  render() {
    return (
      <form autoComplete='off' onSubmit={this.onSubmit}>
        <div style={this.formGroup()}>
          <label style={this.formLabel()}>Firstname: </label>
          <input
            onChange={this.onChange}
            style={this.inputForm()}
            type='text'
            name='firstname'
            value={this.state.firstname}
            placeholder='Input firstname here...'
          />
        </div>
        <div style={this.formGroup()}>
          <label style={this.formLabel()}>Middlename: </label>
          <input
            onChange={this.onChange}
            style={this.inputForm()}
            type='text'
            name='middlename'
            value={this.state.middlename}
            placeholder='Input middlename here...'
          />
        </div>
        <div style={this.formGroup()}>
          <label style={this.formLabel()}>Lastname: </label>
          <input
            onChange={this.onChange}
            style={this.inputForm()}
            type='text'
            name='lastname'
            value={this.state.lastname}
            placeholder='Input middlename here...'
          />
        </div>
        <div style={this.formGroup()}>
          <label style={this.formLabel()}>Contact No.: </label>
          <input
            onChange={this.onChangeNumberOnly}
            style={this.inputForm()}
            type='text'
            name='contact_no'
            value={this.state.contact_no}
            placeholder='Input contact number here...'
          />
        </div>
        <div style={this.formGroup()}>
          <label style={this.formLabel()}>Email: </label>
          <input
            onChange={this.onChange}
            style={this.inputForm()}
            type='email'
            name='email'
            value={this.state.email}
            placeholder='Input email here...'
          />
        </div>
        <div style={this.buttonGroup()}>
          <button
            type='submit'
            className='myBtn'
            style={{ flex: '.1', padding: '5px' }}
          >
            Save
          </button>
        </div>
      </form>
    );
  }
}


export default Contact
