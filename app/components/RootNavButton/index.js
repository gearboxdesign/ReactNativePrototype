// @flow
import type { HOC } from 'recompose';
import type { TRootNavigatorContext } from '../../hoc/withRootNavigator';

import { Button } from 'react-native';
import { compose, defaultProps, withHandlers } from 'recompose';
import { withRootNavigator } from '../../hoc/withRootNavigator';

type TEnhancedProps = {
	title?: string,
	route: string
}

// NOTE: Due to the way react-navigator seems to resolve which router should trigger based on the names, this approach may not be necessary.
const enhance:HOC<*, TEnhancedProps> = compose(
	defaultProps({ title: 'RootNavButton' }),
	withRootNavigator,
	withHandlers({
		onPress: ({ rootNavigation: { navigate }, route }: TEnhancedProps & TRootNavigatorContext) => evt => {
			navigate(route);
		}
	})
);

export default enhance(Button);