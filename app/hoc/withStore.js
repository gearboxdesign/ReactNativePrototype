// @flow
import type { TStore } from '../store';

import type { HOC } from 'recompose';
import type { TAction } from '../actions';
import type { TStoreState } from '../store';

import PropTypes from 'prop-types';
import { compose, lifecycle, getContext, mapProps, withContext } from 'recompose';

export type TStoreContext = {
	store: TStore
}

const contextShape = { store: PropTypes.object };

// TODO: HOC Enhanced Prop Type.
export function withStoreContext(
	mapStore: (state: TStoreState, dispatch: (action: TAction) => *) => *,
	shouldComponentUpdate?: (newState: TStoreState, prevState: TStoreState) => boolean
): HOC<*, *> {

	let prevState:TStoreState;

	return compose(
		getContext({ store: PropTypes.object }),
		lifecycle({
			componentDidMount() {

				const { store } = this.props;
				const { getState, subscribe } = store;

				prevState = getState();

				this.unsubscribeFromStore = subscribe(() => {

					const newState:TStoreState = getState();

					if (shouldComponentUpdate) {

						if (shouldComponentUpdate(newState, prevState)) {
							this.forceUpdate();
						}

						return;
					}

					prevState = newState;

					this.forceUpdate();
				});
			},
			componentWillUnmount() {
				this.unsubscribeFromStore();
			}
		}),
		mapProps(({ store: { getState, dispatch }, ...rest }) => Object.assign(mapStore(getState(), dispatch), rest))
	);
};

export function withStore(store: TStore): HOC<*, *> {

	return withContext(contextShape, (): TStoreContext => ({ store }));
}