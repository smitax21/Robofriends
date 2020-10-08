import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import '../container/App.css';

import { requestRobots, setSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => requestRobots(dispatch)
	}
}

class App extends Component {

componentDidMount() {
	this.props.onRequestRobots();
	}	
	
	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		// '!' means equals to 0 or opposite of robots.length
		return isPending? 
			<h1 className='tc f1 pv6 '> Loading </h1>:
			(
			<div className='tc'>
				<h1 className='f2'>RobotFriends</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<CardList robots ={filteredRobots} />
				</Scroll>
			</div>
			);
		}
 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);