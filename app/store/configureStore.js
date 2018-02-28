// @flow
import type { StoreCreator, Middleware } from 'redux';
import type { TAction } from '../actions';
import type { TStore, TStoreState } from './';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import counter from '../reducers/counterReducer';
import exampleAsync from '../reducers/exampleAsyncReducer';

// NOTE: Ensures logger middleware only runs in development node.
// const logger = createLogger({ predicate: () => __DEV__ });

export default function configureStore(initialState: TStoreState | any = {}): TStore {

	const reducers = Object.assign({
		counter,
		exampleAsync
	});

	const middlewares: Array<Middleware<TStoreState, TAction>> = [
		// logger,
		thunk
	];

	return createStore(
		combineReducers(reducers),
		initialState,
		applyMiddleware(...middlewares)
	);
}