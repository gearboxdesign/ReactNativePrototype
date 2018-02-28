// @flow
import type { TThunkAsyncAction, TAsyncAction } from './';

import { asyncAction } from './';

export type TGetAsyncAction = TAsyncAction & { +type: 'getAsyncAction' };

export const GET_ASYNC_ACTION = 'getAsyncAction';

export function getExampleAsync(): TThunkAsyncAction {

	return (dispatch, getState) => {
		asyncAction(GET_ASYNC_ACTION, dispatch);	
	};
}