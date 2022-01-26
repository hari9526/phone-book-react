import React, { Component } from 'react'; 
import AddSubscriber from './AddSubscriber';

class PhoneDirectory extends Component{
    constructor() {
        super(); 
        this.state = {
            subscribersList: [], 
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
                <AddSubscriber addSubscriberHandler={ this.addSubscriberHandler}/>
            </div>
        )
    }

}


export default PhoneDirectory; 