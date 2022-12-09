import React from "react";

import { useSettings, useSettingsDispatch } from "../Context/Context";
import {
  setInlineEdit,
  setModalEdit,
  setSearchOff,
  setSearchOn,
  resetToDefault,
  setCardVeiw,
  setListVeiw,
} from "../Context/Actions/actions";
import "./Settings.css";
const Settings = () => {
  const settings = useSettings();
  const dispatch = useSettingsDispatch();
  const [nonSavedSettings, setNonSavedSettings] = React.useState({settings});
  const handleInlineRadioChange = () => {
    //payload can be empty
    setNonSavedSettings({...nonSavedSettings,inlineEdit:true})
  };

  const handleModalRadioChange = () => {
    setNonSavedSettings({...nonSavedSettings,inlineEdit:false})
  };
  const handleCardVeiwChange = () => {};
  const handleListVeiwChange = () => {};
  const handleSearchYes = () => {};

  const handleSearchNo = () => {};

  const resetSettings =()=>{
    dispatch(resetToDefault)
  }
  const handleSaveSettings = () => {
    console.log("action.payload")
    dispatch(({ type: "HANDLE_SAVE", payload: {...nonSavedSettings} }));
  };
  return (
    <div className="settings-container">
      <div className="setscont">
        <h1>Settings</h1>
        <div className="settingsBlocks">
          <div className="editSets">
            <div>
              <h2>Edit</h2>
              <label>Inline</label>
              <input
                type="radio"
                name="edit"
                onChange={handleInlineRadioChange}
                checked={nonSavedSettings.inlineEdit}
              />
            </div>
            <div>
              <label>Modal</label>
              <input
                type="radio"
                name="edit"
                onChange={handleModalRadioChange}
                checked={!nonSavedSettings.inlineEdit}
              />
            </div>
          </div>
          <div className="viewSets">
            <h2>View</h2>
            <div>
              <label>Card</label>
              <input
                type="radio"
                name="view"
                onChange={handleCardVeiwChange}
                checked={nonSavedSettings.cardVeiw}
              />
            </div>
            <div>
              <label>List</label>
              <input
                type="radio"
                name="view"
                onChange={handleListVeiwChange}
                checked={!nonSavedSettings.cardVeiw}
              />
            </div>
          </div>
          <div className="searchSets">
            <h2>Search</h2>
            <div>
              <label>Yes</label>
              <input
                type="radio"
                name="search"
                onChange={handleSearchYes}
                checked={nonSavedSettings.search}
              />
            </div>
            <div>
              <label>No</label>
              <input
                type="radio"
                name="search"
                onChange={handleSearchNo}
                checked={!nonSavedSettings.search}
              />
            </div>
          </div>
        </div>
        <button onClick={resetSettings} className="resetBut" >
          Reset
        </button>
        <button className="resetBut cancel">Cancel</button>
        <button onClick={handleSaveSettings} className="resetBut save">
          Save
        </button>
      </div>
    </div>
  );
};

export default Settings;
