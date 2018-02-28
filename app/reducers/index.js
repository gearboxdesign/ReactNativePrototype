// @flow
import type { TAsyncAction } from '../actions'

export type TAsyncState = {
	+error ?: any,
	+isLoading: boolean
}

export function getAsyncState<TAction: TAsyncAction>(type: string) {

	return (state: TAsyncState = { isLoading: false }, action: TAction) => {

		const { type, data, error } = action;
	
		switch (type) {
			case type: {
	
				return Object.assign({ isLoading: !(data || error) }, error && { error });
			}
			default: {
				return state;
			}
		}
	}

}
