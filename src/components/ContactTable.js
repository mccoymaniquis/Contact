import React, { Component } from 'react'

class ContactTable extends Component {
    render() {
      console.log(this.props.contact);
        return (
          <div className='table-header'>
            <table id='mainTable'>
              <thead>
                <tr>
                  <th></th>
                  <th>Firstname</th>
                  <th>Middlename</th>
                  <th>Lastname</th>
                  <th>Contact No.</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {this.props.contact.length === 0 ? (
                  <tr>
                    <td colSpan='6' style={{textAlign: 'center'}}>NO DATA</td>
                  </tr>
                ) : (
                  this.props.contact.map(
                    ({
                      firstname,
                      middlename,
                      lastname,
                      contact_no,
                      email,
                      id,
                    }) => (
                      <tr key={id}>
                        <td><button onClick={this.props.delContact.bind(this , id)}>DELETE</button></td>
                        <td>{firstname}</td>
                        <td>{middlename}</td>
                        <td>{lastname}</td>
                        <td>{contact_no}</td>
                        <td>{email}</td>
                      </tr>
                    )
                  )
                )}
              </tbody>
            </table>
          </div>
        );
    }
}

export default ContactTable
