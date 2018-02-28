// @flow
import type { HOC } from 'recompose';
import type { NavigationScreenProp, NavigationState } from 'react-navigation';

import PropTypes from 'prop-types';
import { Button } from 'react-native';
import { compose, defaultProps, getContext, setDisplayName, withHandlers } from 'recompose';

type TEnhancedProps = {
	title?: string,
	route: string
}

type TNavigatorContext = {
	navigation: NavigationScreenProp<NavigationState>
}

const contextShape = { navigation: PropTypes.object };

const enhance: HOC<*, TEnhancedProps> = compose(
	defaultProps({ title: 'NavButton' }),
	getContext(contextShape),
	withHandlers({
		onPress: ({ navigation: { navigate }, route }: TEnhancedProps & TNavigatorContext) => evt => {
			navigate(route);
		}
	})
);


export default enhance(Button);