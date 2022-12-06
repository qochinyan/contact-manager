import { useSettings, useSettingsDispatch } from "../Context/Context";
import { setInlineEdit, setModalEdit } from "../Context/Actions/actions";
import "./Settings.css";
const Settings = () => {
  const settings = useSettings();
  const dispatch = useSettingsDispatch();
  console.log(settings);

  const handleInlineRadioChange = () => {
    //payload can be empty
    dispatch(setInlineEdit());
  };

  const handleModalRadioChange = () => {
    dispatch(setModalEdit());
  };

  return (
    <div className="settings-container">
      <h2>Edit</h2>
      <div>
        <label>Inline</label>
        <input
          type="radio"
          name="inlineEdit"
          onChange={handleInlineRadioChange}
          checked={settings.inlineEdit}
        />
      </div>
      <div>
        <label>Modal</label>
        <input
          type="radio"
          name="inlineEdit"
          onChange={handleModalRadioChange}
          checked={!settings.inlineEdit}
        />
      </div>
    </div>
  );
};

export default Settings;
