import React, { useState } from "react";

import { useSettings, useSettingsDispatch } from "../../Context/Context";
import { resetToDefault } from "../../Context/Actions/actions";
import "./Settings.css";
import { HANDLE_SAVE } from "../../Context/Actions/types";
const Settings = () => {
  const settings = useSettings();
  const dispatch = useSettingsDispatch();
  const [nonSavedSettings, setNonSavedSettings] = React.useState(settings);
  const handleInlineRadioChange = () => {
    //payload can be empty
    setNonSavedSettings({ ...nonSavedSettings, inlineEdit: true });
  };

  const handleModalRadioChange = () => {
    setNonSavedSettings({ ...nonSavedSettings, inlineEdit: false });
  };
  const handleCardVeiwChange = () => {
    setNonSavedSettings({ ...nonSavedSettings, cardView: true });
  };
  const handleListVeiwChange = () => {
    setNonSavedSettings({ ...nonSavedSettings, cardView: false });
  };
  const handleSearchYes = () => {
    setNonSavedSettings({ ...nonSavedSettings, search: true });
  };

  const handleSearchNo = () => {
    setNonSavedSettings({ ...nonSavedSettings, search: false });
  };

  const resetSettings = () => {
    dispatch(resetToDefault);
  };
  const handleSaveSettings = () => {
    dispatch({ type: HANDLE_SAVE, payload: { ...nonSavedSettings } });
    alert("Changes were happily Saved");
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
                checked={nonSavedSettings.cardView}
              />
            </div>
            <div>
              <label>List</label>
              <input
                type="radio"
                name="view"
                onChange={handleListVeiwChange}
                checked={!nonSavedSettings.cardView}
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
        <div className="controlChangesSettings">
          <button onClick={resetSettings} className="resetBut cancel">
            Cancel
          </button>
          <button onClick={handleSaveSettings} className="resetBut save">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
