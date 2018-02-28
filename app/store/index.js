// @flow
import type { TAction } from '../actions';
import type { TExampleAsyncState } from '../reducers/exampleAsyncReducer';

export type TStore = Store<TStoreState, TAction>;

export type TStoreState = {
	+counter: number,
	+exampleAsync: TExampleAsyncState
}
