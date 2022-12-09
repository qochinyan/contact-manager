import { SET_INLINE_EDIT, SET_MODAL_EDIT, RESET_TO_DEFAULT, SET_SEARCH_ON, SET_SEARCH_OFF,SET_CARD_VEIW,SET_LIST_VEIW} from "./types";

export const setInlineEdit = () => ({ type: SET_INLINE_EDIT, payload: "ok" });

export const setModalEdit = () => ({ type: SET_MODAL_EDIT });

export const resetToDefault = () => ({ type: RESET_TO_DEFAULT });
export const setSearchOn = () => ({ type: SET_SEARCH_ON });
export const setSearchOff = () => ({ type: SET_SEARCH_OFF });
export const setCardVeiw = () => ({ type: SET_CARD_VEIW });
export const setListVeiw = () => ({ type: SET_LIST_VEIW });

    