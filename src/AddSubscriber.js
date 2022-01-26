import React, { Component } from 'react';
import Header from './Header';
import './Addsubscriber.css';
import { Link } from 'react-router-dom'; 

class AddSubscriber extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            number: '',

        }
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);

    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({ id: 0, name: '', number: '' }); 
        debugger;
    }
    render() {

        const { name, number } = this.state;
        return (
            <div>
                <Header heading="Add Subscriber" />
                <div className="component-body-container">
                    <Link to="/">
                        <button className="custom-btn">Back</button>
                    </Link>

                    <form className='subscriber-form' onSubmit={this.onFormSubmitted.bind(this)}>
                        <label htmlFor='name' className='label-control' >Name:</label> <br />
                        <input id="name" type="text" className='input-control' name='name' value={this.state.name} onChange={this.inputChangedHandler} /><br /><br />
                        <label htmlFor='number' className='label-control'>Phone:</label> <br />
                        <input id="number" type="text" className='input-control' name='number' value={this.state.number} onChange={this.inputChangedHandler} /><br /><br />
                        <div className='subscriber-info-container'>
                            <span className='subscriber-to-add-heading'>Subcriber to be added: </span><br /><br />
                            <span className='subscriber-info'>Name: {name}</span><br />
                            <span className='subscriber-info'>Phone: {number}</span>

                        </div>

                        <button type='submit' className='custom-btn add-btn'>Add</button>

                    </form>
                </div>
            </div>
        );
    }
}

export default AddSubscriber; 