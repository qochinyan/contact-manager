import { createContext, useContext, useReducer } from "react";
import {
  SET_INLINE_EDIT,
  SET_MODAL_EDIT,
  RESET_TO_DEFAULT,
  SET_SEARCH_ON,
  SET_SEARCH_OFF,
  HANDLE_SAVE,
} from "./Actions/types";

const AppContext = createContext(null);
const AppDispatchContext = createContext(null);

const initialSettings = {
  inlineEdit: false,
  cardView: false,
  search: false,
};

export const AppProvider = ({ children }) => {
  const [settings, dispatch] = useReducer(appReducer, initialSettings);
  return (
    <AppContext.Provider value={settings}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};

function appReducer(settings, action) {
  switch (action.type) {
    //action.payload
    case RESET_TO_DEFAULT:
      return {
        ...settings
      };
    // case HANDLE_CANCEL:
    //   return{
    //     ...settings
    //   };    default is replcaing its
    case HANDLE_SAVE:
      return {
        ...action.payload,
      };
    default:
      return {
        ...settings,
      };
  }
}

export function useSettings() {
  return useContext(AppContext);
}

export function useSettingsDispatch() {
  return useContext(AppDispatchContext);
}
