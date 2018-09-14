import React, { Component } from 'react';
import TopNav from './TopNav';
import Filters from './Filters';
import RestaurantCard from './RestaurantCard';
import NewRestaraunt from './NewRestaraunt';
import './App.css';


class App extends Component {
    state = {
        response: [],
        office: "Vancouver",
        sortBy: "Price",
    }

    componentDidMount() {
		this.callApi()
			.then(res => this.setState({ response: res }))
			.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('http://localhost:5000/restaurants');
		const body = await response.json();
		if (response.status !== 200) {
			throw Error(body.message);
		}
		return body;
    }

    updateOffice = (office) => {
        this.setState({
            office
        });
    }

    updateSortBy = (sortBy) => {
        this.setState({
            sortBy
        });
    }

    _generateTheCards = () => {
        const response = this.state.response;
        const filtered = response.map((restaurant) => {
            if (restaurant.office === this.state.office) {
                return (
                    <RestaurantCard
                        name={restaurant.name}
                        distance={restaurant.distance}
                        foodType={restaurant.foodType}
                        avgPrice={restaurant.avgPrice}
                        other={restaurant.other}
                    />
                );
            }
        }).filter((restaurant) => restaurant);

        if (0 < filtered.length) {
            switch(this.state.sortBy) {
                case 'Distance':
                    return this.sortByDistance(filtered);
                    break;
                case 'Price':
                    return this.sortByPrice(filtered);
                    break;
            }
        }
    }

    sortByDistance = (restaurants) => {
        const sortedRestaurants = restaurants.sort((a, b) => {
            return a.props.distance > b.props.distance;
        });

        return sortedRestaurants;
    }

    sortByPrice = (restaurants) => {
        const sortedRestaurants = restaurants.sort((a, b) => {
            return a.props.avgPrice.length > b.props.avgPrice.length;
        });

        return sortedRestaurants;
    }

    render() {
        return (
            <div className="App">
                <TopNav />
                <Filters
                    updateOffice={this.updateOffice}
                    updateSortBy={this.updateSortBy}
                />
                <div style={{ padding: 16 }} >
                    {this._generateTheCards()}
                </div>
                <NewRestaraunt />
            </div>
        );
    }
}

export default App;
