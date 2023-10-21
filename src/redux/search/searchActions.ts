export const SET_SEARCH = 'SET_SEARCH';

interface SetSearchAction {
    type: typeof SET_SEARCH;
    payload: string | null;
}

export function setSearchActionCreator(search: string) : SetSearchAction {
    return {type: SET_SEARCH, payload: search }
}

export type SetSearchActions = SetSearchAction;