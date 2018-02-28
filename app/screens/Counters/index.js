// @flow
import type { NavigationNavigatorProps, NavigationState } from 'react-navigation';

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Body from '../../components/Body';
import Counter from '../../components/Counter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NavButton from '../../components/NavButton';
import ReduxCounter from '../../components/ReduxCounter';
// import RootNavButton from '../../components/RootNavButton';
// import { withRootNavigatorContext } from '../../hoc/withRootNavigator';
import styles from './styles';

// TODO: Check Component Props Type.
class Counters extends Component<NavigationNavigatorProps<*, NavigationState>> {
	
	componentDidMount() {

		console.log('Counters mounted');
	}

	render() {

		return (
			<View style={styles.container}>
				<Header title="Counters" />
				<Body>
					<Counter />
					<ReduxCounter />
					<ReduxCounter />
				</Body>
				<Footer>
					{/* <RootNavButton 
						route="Counters"
						title="Counters"
					/> */}
					<NavButton
						route="Home"
						title="Home"
					/>
				</Footer>
			</View>
		);
	}
}

// NOTE: Due to the way react-navigator seems to resolve which router should trigger based on the names, this approach may not be necessary.
// export default withRootNavigatorContext(Counters);

export default Counters;