export const SET_MENU_OPEN = 'SET_MENU_OPEN';

interface SetMenuOpenAction {
    type: typeof SET_MENU_OPEN;
    payload: boolean;
}

export function setMenuOpenActionCreator(isMenuOpen: boolean) : SetMenuOpenAction {
    return {type: SET_MENU_OPEN, payload: isMenuOpen }
}

export type SetMenuOpenActions = SetMenuOpenAction;