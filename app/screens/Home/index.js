// @flow
import type { NavigationNavigatorProps, NavigationState } from 'react-navigation';

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import NavButton from '../../components/NavButton';
import Header from '../../components/Header';
import styles from './styles';

// TODO: Check Component Props Type.
class Home extends Component<NavigationNavigatorProps<*, NavigationState>> {
	
	componentDidMount() {

		console.log('Home mounted');
	}
	
	render() {

		return (
			<View style={ styles.container }>
				<Header title="Home" />
				<Body>
					<NavButton
						route="Async"
						title="Async"
					/>
					<NavButton
						route="Counters"
						title="Counters"
					/>
				</Body>
			</View>
		);
	}
}

export default Home;