// @flow
import type { TSetCounterAction } from '../actions/counterActions';

import { SET_COUNTER } from '../actions/counterActions';

type TAction = TSetCounterAction;
type TState = number;

export default function counterReducer(state: TState = 0, action: TAction): TState {
	
	const { type, value } = action;

	switch (type) {
		case SET_COUNTER: {
			return value;
		}
		default: {
			return state;
		}
	}
}