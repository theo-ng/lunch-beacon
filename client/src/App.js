import React, { Component } from 'react';
import TopNav from './TopNav';
import Filters from './Filters';
import RestaurantCard from './RestaurantCard';
import NewRestaraunt from './NewRestaraunt';
import './App.css';


class App extends Component {
    state = {
        response: {}
    }

    componentDidMount() {
		this.callApi()
			.then(res => this.setState({ response: res.express }))
			.catch(err => console.log(err));
	}
	
	callApi = async () => {
		const response = await fetch('/restaurants');
		const body = await response.json();
        console.log(body);
		if (response.status !== 200) {
			throw Error(body.message);
		}
		return body;
    }
    
    render() {
        return (
            <div className="App">
                <TopNav />
                <Filters />
                <div
                    style={{
                        padding: 16
                    }}
                >
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                </div>
                <NewRestaraunt />
            </div>
        );
    }
}

export default App;
