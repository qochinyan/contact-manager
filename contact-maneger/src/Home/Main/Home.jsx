import { useState, useEffect } from "react";
import axios from "axios";
// context
import { useSettings } from "../../Context/Context";

import "./Home.css";
// comps
import List from "../List/List";
import Quest from "../Quester/Quest";
import Modal from "../Modal/modal";
import { SERVER_URL as url } from "../../URL/serverUrl";
function Home() {
  const [id, setId] = useState(0);
  const [myList, setMyList] = useState([]);
  const [questActive, SetQuestActive] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, mode: "" });
  const [currentId, setCurrentId] = useState(null);
  const [currentItem, setCurrentItem] = useState({});
  const [selectedContacts, setSelectedContacts] = useState({});
  const [allChecked, setAllChecked] = useState(false);
  // context datas
  const settings = useSettings();
  const { inlineEdit, cardView, search } = settings;
  //fetches json-server
  useEffect(() => {
    const getList = () => {
      axios.get(`${url}contacts.json`).then((data) =>{
       const contacts = data.data ? Object.keys(data.data).map(key=>({...data.data[key],id:key})) : []
       setMyList(contacts)
    })
  }
    getList();
  }, []);

  const handleClose = () => {
    setModal({
      isOpen: false,
      mode: "",
    });
  };
  const handleSave = () => {
    const newList = JSON.parse(JSON.stringify(myList));
    if (modal.mode === "edit") {
      const itemIndex = newList.findIndex((item) => item.id === currentItem.id);
      newList[itemIndex] = currentItem;
      axios.put(`${url}contacts/${currentItem.id}.json`,currentItem).then((data) => console.log("oki"));
    } else {
      newList.push(currentItem);
      axios.post(`${url}contacts.json`,currentItem).then((data) => console.log(data));
    }
    setMyList(newList);
    setModal({
      isOpen: false,
      mode: "",
    });
    
  };
  const handleInputChange = (evt) => {
    const updatedContact = { ...currentItem };
    if (Array.isArray(updatedContact[evt.target.name])) {
      let arr = [...updatedContact[evt.target.name]];
      arr[evt.target.id] = evt.target.value;
      updatedContact[evt.target.name] = arr;
      console.log(myList);
    } else {
      updatedContact[evt.target.name] = evt.target.value;
    }
    setCurrentItem(updatedContact);
  };

  const handleCheckSelect = (itemId) => {
    const updatedSelectedContacts = { ...selectedContacts };
    if (itemId in updatedSelectedContacts) {
      delete updatedSelectedContacts[itemId];
    } else {
      updatedSelectedContacts[itemId] = itemId;
    }
    if (Object.keys(updatedSelectedContacts).length === myList.length) {
      setAllChecked(true);
    }
    setSelectedContacts(updatedSelectedContacts);
  };

  const handleAllSelect = (evt) => {
    let updatedSelectedContacts = { ...selectedContacts };
    if (evt.target.checked) {
      for (let i of myList) {
        updatedSelectedContacts[id] = i.id;
      }
    } else {
      updatedSelectedContacts = {};
    }
    setSelectedContacts(updatedSelectedContacts);
    setAllChecked(evt.target.checked);
  };
  const handleDelete = () => {
    let updatedList = [...myList];
    let currId;
    for (let i = 0; i < updatedList.length; i++) {
      if (Object.values(selectedContacts).includes(updatedList[i].id)) {
        currId = updatedList[i].id;
        updatedList.splice(i, 1);
        axios.delete(`${url}/contacts/${currId}.json`);
      }
    }
    setMyList(updatedList);
  };
  return (
    <div className="Home">
      <Quest
        active={questActive}
        setQuestActive={SetQuestActive}
        id={id}
        setId={setId}
        setList={setMyList}
        list={myList}
      />
      <List
        cardView={cardView}
        search={search}
        inlineEdit={inlineEdit}
        checkeds={selectedContacts}
        handleDelete={handleDelete}
        allChecked={allChecked}
        handleAllSelect={handleAllSelect}
        handleCheckSelect={handleCheckSelect}
        handleClose={handleClose}
        handleInputChange={handleInputChange}
        handleSave={handleSave}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        setCurrentId={setCurrentId}
        modal={modal}
        setModal={setModal}
        active={questActive}
        setQuestActive={SetQuestActive}
        list={myList}
        id={id}
        setId={setId}
        setList={setMyList}
      />
      <Modal
        inlineEdit={inlineEdit}
        handleClose={handleClose}
        handleInputChange={handleInputChange}
        handleSave={handleSave}
        list={myList}
        setList={setMyList}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        modal={modal}
        setModal={setModal}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
    </div>
  );
}

export default Home;
