import React, { Component } from 'react'

class header extends Component {
   
    render() {
        return (
          <header>
            <h1 style={headerStyle}>My Simple Contact</h1>
          </header>
        );
    }
    
}
 const headerStyle = {
    background: "teal",
    textAlign: 'center',
    color: '#fff',
 };

export default header
