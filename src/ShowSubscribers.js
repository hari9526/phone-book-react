import React, { Component } from 'react';
import Header from './Header.js';
import './ShowSubscribers.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      subscriberList: [],
    }
  }

  deleteHandler(msg) {
    alert(msg);
  }

  componentDidMount() {  
    const newSubscribers = {
      id: 0,
      name: 'Hari',
      number: 123123123123,
    };
    let subscriberListCopy = this.state.subscriberList;
    subscriberListCopy.push(newSubscribers);
    this.setState({ subscriberList: subscriberListCopy });
  }

  render() {
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {this.state.subscriberList.map((sub, index) => {
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