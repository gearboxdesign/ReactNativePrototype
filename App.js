// @flow
// TODO: Move this module into app/index.js.
import type { TStore } from './app/store';

import PropTypes from 'prop-types';
import * as React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { withStore } from './app/hoc/withStore';
import configureStore from './app/store/configureStore';
import Async from './app/screens/Async';
import Counters from './app/screens/Counters';
import Home from './app/screens/Home';

type TAppProps = {
	rootTag: number
}

const store: TStore = configureStore({ counter: 0 });

// TODO: Pass into own module and abstract keys into constants / types.
const RootNavigator = TabNavigator({
	Home: {
		screen: Home
	},
	Async: {
		screen: Async
	},
	Counters: {
		screen: Counters
	}
});

const App: React.StatelessFunctionalComponent<TAppProps> = (props) => {
	
	return <RootNavigator { ...props } />
}

export default withStore(store)(App);

// import React from 'react';

// import { Text, View, Button } from 'react-native';
// import { TabNavigator, StackNavigator } from "react-navigation";

// class RecentChatsScreen extends React.Component {
// 	render() {
// 		return (
// 			<View>
// 				<Button
// 					onPress={() => this.props.navigation.navigate('Chat')}
// 					title="Go to Chat"
// 				/>
// 				<Button
// 					onPress={() => this.props.navigation.navigate('All')}
// 					title="Go to All"
// 				/>
// 			</View>
// 		);
// 	}
// }

// class AllContactsScreen extends React.Component {
// 	render() {
		
// 		return (
// 			<View>
// 				<Button
// 					onPress={() => this.props.navigation.navigate('Chat')}
// 					title="Go to Chat"
// 				/>
// 				<Button
// 					onPress={() => this.props.navigation.navigate('Recent')}
// 					title="Go to Recent"
// 				/>
// 			</View>
// 		);
// 	}
// }

// class ChatScreen extends React.Component {
// 	render() {
// 		return (
// 			<Text>Chat</Text>
// 		)
// 	}
// }

// const MainScreenNavigator = TabNavigator({
// 	Recent: { screen: RecentChatsScreen },
// 	All: { screen: AllContactsScreen },
// });

// const SimpleApp = StackNavigator({
// 	Home: {
// 		screen: MainScreenNavigator,
// 		navigationOptions: {
// 			title: 'My Chats',
// 		},
// 	},
// 	Chat: { screen: ChatScreen },
// });

// export default SimpleApp;