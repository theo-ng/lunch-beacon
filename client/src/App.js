import React, { Component } from 'react';
import TopNav from './TopNav';
import Filters from './Filters';
import RestaurantCard from './RestaurantCard';
import NewRestaraunt from './NewRestaraunt';
import './App.css';


class App extends Component {
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
