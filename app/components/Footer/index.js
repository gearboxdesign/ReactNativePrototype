// @flow
import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

type TProps = {
	children?: React.ChildrenArray<React.Element<*>>,
}

const Footer: React.StatelessFunctionalComponent<TProps> = (props) => {

	return (
		<View style={ styles.container }>
			{ props.children }
		</View>
	);
}

export default Footer;