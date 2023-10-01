import "./Quest.css";
import { SERVER_URL as url } from "../../URL/serverUrl";
import axios from "axios";
const Quest = ({ active, setQuestActive, list, setList, id }) => {
  return (
    <div className={active ? "quester active" : "quester"}>
      <dir className="box1" onClick={(evt) => evt.stopPropagation()}>
        <h3 className="sure">Are You Sure?</h3>
        <div className="buts">
          <div>
            <button
              className="yes"
              onClick={() => {
                setQuestActive(false);
                axios.delete(`${url}contacts/${id}.json`);
                let newList = list.filter((el)=>el.id!==id)
                setList(newList)
              }}
            >
              YES
            </button>
          </div>
          <div>
            <button className="no" onClick={() => setQuestActive(false)}>
              NO
            </button>
          </div>
        </div>
      </dir>
    </div>
  );
};
export default Quest;
