import React, { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import '../container/App.css';



class App extends Component {
	constructor() {
		super()
		this.state = {
		robots : [],
		searchfield : ''
	 	}
	}


componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => this.setState({robots: users}));
	}	


onSearchChange = (event) => {
	this.setState({searchfield : event.target.value});
}

	render() {
		const { robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		// '!' means equals to 0 or opposite of robots.length
		if (!robots.length) {
			return <h1 className='tc f1 pv6 '> Loading </h1>
		} else {
			return (
		<div className='tc'>
		 	<h1 className='f2'>RobotFriends</h1>
		 		<SearchBox searchChange={this.onSearchChange} />
		 	<div>
		 	<Scroll>
			<CardList robots ={filteredRobots} />
			</Scroll>
			</div>
		</div>
		)
		}
 
}
}

export default App;