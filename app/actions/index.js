// @flow
import type { TStoreState } from '../store';

type TGetState = () => TStoreState;
type TDispatch = (action: TAction | TThunkAction | TAsyncAction) => any;
type TDispatchAsync = (action: TAsyncAction) => any;

export type TAction = {
	+type: string
};

export type TAsyncAction = {
	+error?: any,
	+data?: {}
} & TAction;

export type TThunkAsyncAction = (dispatch: TDispatchAsync, getState: TGetState) => Promise<any> | void;
export type TThunkAction = (dispatch: TDispatch, getState: TGetState) => any;

export function asyncAction(type: string, dispatch:TDispatchAsync) {

	dispatch({ type });

	setTimeout(() => {

		dispatch({
			data: { example: 'example' },
			type
		});

	}, 5000);

}