// @flow
import type { NavigationNavigatorProps, NavigationState } from 'react-navigation';
import type { HOC } from 'recompose';
import type { TExampleAsyncState } from '../../reducers/exampleAsyncReducer';

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { compose, setDisplayName } from 'recompose';
import { getExampleAsync } from '../../actions/exampleAsyncActions';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NavButton from '../../components/NavButton';
// import RootNavButton from '../../components/RootNavButton';
// import { withRootNavigatorContext } from '../../hoc/withRootNavigator';
import { withStoreContext } from '../../hoc/withStore';
import styles from './styles';

type TProps = {
	isLoading: boolean,
	data: TExampleAsyncState,
	// TODO: Check dispatch result profile.
	getData: () => any
} & TEnhancedProps;

type TEnhancedProps = NavigationNavigatorProps<*, NavigationState>;

// TODO: Check Component Props Type.
class Async extends Component<TProps> {

	componentDidMount() {

		console.log('Async mounted');

		this.props.getData();
	}

	render() {

		console.log(this.props.data);
		console.log(this.props.isLoading);

		return (
			<View style={styles.container}>
				<Header title="Async" />
				<Body>
					<Text>{ this.props.isLoading.toString() }</Text>
				</Body>
				<Footer>
					{/* <RootNavButton 
						route="Async"
						title="Async"
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
// export default withRootNavigatorContext(Async);

const enhance: HOC<*, TEnhancedProps> = compose(
	setDisplayName('Async'),
	withStoreContext(({ exampleAsync }, dispatch) => {

		return {
			data: exampleAsync.data,
			isLoading: exampleAsync.state.isLoading,
			getData: () => { dispatch(getExampleAsync()); }
		};

	})
);

export default enhance(Async);