import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscribersList: [
                {
                    id: 0,
                    name: 'Hari',
                    number: 123123123123,
                },
                {
                    id: 1,
                    name: 'Disny',
                    number: 123123123123,
                },

            ],
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        let size = subscribersList.length;
        if (size > 0)
            newSubscriber.id = subscribersList[size - 1].id + 1;
        else
            newSubscriber.id = 1;
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
        console.log(this.state.subscribersList);
    }


    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<ShowSubscribers subscribersList={this.state.subscribersList} />}>                            
                        </Route>
                        <Route path='/add' element={<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />}>                    
                        </Route>
                    </Routes>
                </Router>
            </div>
        )
    }

}


export default PhoneDirectory; 