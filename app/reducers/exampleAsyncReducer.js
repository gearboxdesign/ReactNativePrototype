// @flow
import type { TGetAsyncAction } from '../actions/exampleAsyncActions';
import type { TAsyncState } from './';

import { combineReducers } from 'redux';
import { GET_ASYNC_ACTION } from '../actions/exampleAsyncActions';
import { getAsyncState } from './';

type TAction = TGetAsyncAction;

export type TExampleAsync = {
	+example?: string
} | null;

export type TExampleAsyncState = {
	data: TExampleAsync,
	state: TAsyncState
}

// NOTE: Basic form could exported as a module.
function getData(state: TExampleAsync = null, action: TAction): TExampleAsync {

	const { type, data } = action;

	switch (type) {
		case GET_ASYNC_ACTION: {
			return data || state;
		}
		default: {
			return state;
		}
	}
}

export default combineReducers({
	data: getData,
	state: getAsyncState(GET_ASYNC_ACTION)
})