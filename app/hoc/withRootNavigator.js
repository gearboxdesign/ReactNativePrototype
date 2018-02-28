// @flow
// NOTE: Due to the way react-navigator seems to resolve which router should trigger based on the names, this approach may not be necessary.
import type { HOC } from 'recompose';
import type { NavigationNavigatorProps, NavigationScreenProp, NavigationState } from 'react-navigation';

import PropTypes from 'prop-types';
import { compose, getContext, mapProps, withContext } from 'recompose';

export type TRootNavigatorContext = {
	rootNavigation: NavigationScreenProp<NavigationState>
}

const contextShape = { rootNavigation: PropTypes.object };

// TODO: Check HOC Enhanced Props Type.
export const withRootNavigatorContext: HOC<*, NavigationNavigatorProps<*, NavigationState>> = withContext(
	contextShape,
	({ navigation }): TRootNavigatorContext => ({ rootNavigation: navigation })
);

export const withRootNavigator: HOC<*, *> = getContext(contextShape);