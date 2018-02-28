// @flow
import type { HOC } from 'recompose';

import * as React from 'react';
import { View, Button } from 'react-native';
import { compose, defaultProps, setDisplayName, withProps, withState, withHandlers } from 'recompose';

import { Text } from 'react-native';
import styles from './styles';

type TProps = {
	counter: number,
	increment: () => void,
	subtitle: number
} & TEnhancedProps;

type TEnhancedProps = {
	title?: string
};

/**
 * NOTE: TProps represents the totality of the combined props, those which are recieved 
 * 	during enhancement combined with those passed to the enhancer itself.
 */
const Counter: React.StatelessFunctionalComponent<TProps>  = (props) => {

	return (
		<View style={ styles.container }>
			<Text style={ styles.title }>{ props.title }</Text>
			<Text>{ props.subtitle }</Text>
			{/* <Text>{ props.a }</Text>
			<Text>{ props.b }</Text> */}
			<Text style={ styles.counter }>{ props.counter }</Text>
			<View style={ styles.actions }>
				<Button title="Increment" onPress={props.increment} />
			</View>
		</View>
	);
}

const enhance: HOC<*, TEnhancedProps> = compose(
	setDisplayName('Counter'),
	defaultProps({
		title: 'Counter'
	}),
	withProps({
		subtitle: '(Local)'
	}),
	withState('counter', 'setCounter', 0),
	withHandlers({
		increment: ({ setCounter }) => () => setCounter(n => n + 1)
	})
	// (Component) => (props) => { return <Component { ...props } a="a" />;  },
	// (Component) => {

	// 	return class WrappedComponent extends React.Component<*> {

	// 		render() {

	// 			return <Component { ...this.props } b="b" />;
	// 		}
	// 	};
	// },
);

export default enhance(Counter);

// Playground
// class MyComponent extends React.Component<TProps> {

// 	static defaultProps = {
// 		text: 'test'
// 	}

// 	render () {
// 		return <div>{this.props.text}</div>;
// 	}
// }

// function myHOC<TProps, AProps>(Component: React.ComponentType<TProps>, additionalProps: AProps): React.ComponentType<TProps> {

// 	// class WrappedComponent extends React.Component<TProps> {

// 	// 	render () {
// 	// 		return <Component { ...Object.assign({}, this.props, additionalProps) } />;
// 	// 	}
// 	// }

// 	// const WrappedComponent: (props: TProps) => React.Element<React.ComponentType<TProps>> = (props) => {

// 	// 	return <Component { ...Object.assign({}, props, additionalProps) } />;
// 	// }

// 	const WrappedComponent:React.StatelessFunctionalComponent<TProps> = (props: TProps) => {

// 		return <Component { ...Object.assign({}, props, additionalProps) } />;
// 	}

// 	const componentName = Component.displayName || Component.name || 'Component';
// 	Component.displayName = `WrappedComponent(${ componentName })`;

// 	return WrappedComponent;
// }

// const Component = myHOC(MyComponent, { bar: 2 });