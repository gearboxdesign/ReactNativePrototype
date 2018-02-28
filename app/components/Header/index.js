// @flow
import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

type TProps = {
	title: string
}

const Header: React.StatelessFunctionalComponent<TProps> = (props) => {

	return (
		<View style={ styles.container }>
			<Text style={ styles.text }>{ props.title }</Text>
		</View>
	);
}

export default Header;