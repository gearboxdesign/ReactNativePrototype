// @flow
export type TSetCounterAction = { +type: 'setCounter', +value: number };

export const SET_COUNTER = 'setCounter';

export function setCounter(value: number): TSetCounterAction {
	
	return {
		type: SET_COUNTER,
		value
	};
}