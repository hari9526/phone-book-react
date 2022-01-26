import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {

  deleteHandler(msg) {
    alert(msg);
  }

  render() {
    let subscribers = [
      {
        name: 'Hari',
        number: 123123123123,
      },
      {
        name: 'Disny',
        number: 123123123123,
      },
    ];
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {subscribers.map((sub, index) => {
            return (
              <div className="grid-container" key={index}>
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.number}</span>
                <span className="grid-item">
                  <button type="button" className="custom-btn delete-btn" onClick={this.deleteHandler.bind(this, "Delete clicked")}>Delete</button>
                </span>

              </div>
            )
          })}
        </div>
      </div>
    );
  }
}


export default App; 