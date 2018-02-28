// @flow
import type { MapDispatchToProps, MapStateToProps, MergeProps } from 'react-redux';
import type { HOC } from 'recompose';
import type { TSetCounterAction } from '../../actions/counterActions';
import type { TAction } from '../../actions/index';
import type { TStoreState } from '../../store/index';

import * as React from 'react';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import { Text } from 'react-native';
import { compose, defaultProps, setDisplayName, withProps } from 'recompose';
import { setCounter } from '../../actions/counterActions';
import { withStoreContext } from '../../hoc/withStore';
import styles from './styles';

type TProps = {
	counter: number,
	increment: () => void,
	subtitle: number
} & TEnhancedProps;

type TEnhancedProps = {
	title?: string
}

const ReduxCounter: React.StatelessFunctionalComponent<TProps> = (props) => {

	return (
		<View style={ styles.container }>
			<Text style={ styles.title }>{ props.title }</Text>
			<Text>{props.subtitle }</Text>
			<Text style={ styles.counter }>{ props.counter }</Text>
			<View style={ styles.actions }>
				<Button title="Increment" onPress={ props.increment } />
			</View>
		</View>
	);
}

// const mapStateToProps: MapStateToProps<TStoreState, *, *> = ({ counter }) => {

// 	return {
// 		counter
// 	};
// };

// const mapDispatchToProps: MapDispatchToProps<TSetCounterAction, *, *> = (dispatch) => {

// 	return {
// 		increment: () => { dispatch(setCounter(10)); }
// 	};
// };

// const mergeProps: MergeProps<*, *, *, *> = ({ counter }, { dispatch }) => {

// 	return {
// 		counter,
// 		increment: () => { dispatch(setCounter(counter + 1)); }
// 	}
// }

const enhance: HOC<*, TEnhancedProps> = compose(
	setDisplayName('ReduxCounter'),
	defaultProps({
		title: 'ReduxCounter'
	}),
	withProps({
		subtitle: '(Global)'
	}),
	withStoreContext(({ counter }, dispatch) => {

		return {
			counter,
			increment: () => { dispatch(setCounter(counter + 1)); }
		};

	}, (newState, prevState) => {
		return newState.counter !== prevState.counter;
	})
	// connect(mapStateToProps, mapDispatchToProps)
	// connect(mapStateToProps, null, mergeProps)
);

export default enhance(ReduxCounter);