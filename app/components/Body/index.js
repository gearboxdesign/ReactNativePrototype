// @flow
import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

type TProps = {
	children?: React.ChildrenArray<React.Element<*>>,
}

const Body: React.StatelessFunctionalComponent<TProps> = (props) => {

	return (
		<View style={ styles.container }>
			{ props.children }
		</View>
	);
}

export default Body;