import './Home.css';
import List from "../List/List";
import Quest from "../Quester/Quest"
import { useState, useEffect } from "react"
import Modal from "../Modal/modal"

function Home({inlineEdit}) {

  const [id, setId] = useState(0)
  const [myList, setMyList] = useState([]);
  const [questActive, SetQuestActive] = useState(false)
  const [modal, setModal] = useState({ isOpen: false, mode: "" })
  const [currentId, setCurrentId] = useState(null)
  const [currentItem, setCurrentItem] = useState({})
  const [selectedContacts, setSelectedContacts] = useState({})
  const [allChecked, setAllChecked] = useState(false)
  //fetches json-server
  const url = "http://localhost:3010/list"
  useEffect(() => {
    const getList = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setMyList(data))
    }
    (function () { getList() })()
  }, [])


  const handleClose = () => {
    setModal({
      isOpen: false,
      mode: ""
    })
  }
  const handleSave = () => {
    const newList = JSON.parse(JSON.stringify(myList))
    if (modal.mode === "edit") {
      const itemIndex = newList.findIndex((item) => item.id === currentItem.id)
      newList[itemIndex] = currentItem;
    } else {
      newList.push(currentItem)
    }
    setMyList(newList)
    setModal({
      isOpen: false,
      mode: ""
    })
  }
  const handleInputChange = (evt) => {
    const updatedContact = { ...currentItem }
    if (Array.isArray(updatedContact[evt.target.name])) {
      let arr = [...updatedContact[evt.target.name]]
      arr[evt.target.id] = evt.target.value
      updatedContact[evt.target.name] = arr
      console.log(myList);
    }
    else {
      updatedContact[evt.target.name] = evt.target.value
    }
    setCurrentItem(updatedContact)
  }

  const handleCheckSelect = (itemId) => {
    const updatedSelectedContacts = { ...selectedContacts }
    if (itemId in updatedSelectedContacts) {
      delete updatedSelectedContacts[itemId]
    } else {
      updatedSelectedContacts[itemId] = itemId
    }
    if ((Object.keys(updatedSelectedContacts).length === myList.length)) {
      setAllChecked(true)
    }
    setSelectedContacts(updatedSelectedContacts)
  }

  const handleAllSelect = (evt) => {
    let updatedSelectedContacts = { ...selectedContacts }
    if (evt.target.checked) {
      for (let i of myList) {
        updatedSelectedContacts[id] = i.id
      }
    } else {
      updatedSelectedContacts = {}
    }
    setSelectedContacts(updatedSelectedContacts)
    setAllChecked(evt.target.checked)
  }
  const handleDelete = () => {
    if (allChecked) {
      setMyList([])
    } else {
      let updatedList = [...myList]
      updatedList = updatedList.filter((el, i) => !Object.values(selectedContacts).includes(el.id))
      setMyList(updatedList)
    }

  }
  return (
    <div className="Home">
      <Quest active={questActive} setQuestActive={SetQuestActive} id={id} setId={setId} setList={setMyList} list={myList} />
      <List inlineEdit={inlineEdit} checkeds={selectedContacts} handleDelete={handleDelete} allChecked={allChecked} handleAllSelect={handleAllSelect} handleCheckSelect={handleCheckSelect} handleClose={handleClose} handleInputChange={handleInputChange} handleSave={handleSave} currentItem={currentItem} setCurrentItem={setCurrentItem} setCurrentId={setCurrentId} modal={modal} setModal={setModal} active={questActive} setQuestActive={SetQuestActive} list={myList} id={id} setId={setId} setList={setMyList} />
      <Modal inlineEdit={inlineEdit} handleClose={handleClose} handleInputChange={handleInputChange} handleSave={handleSave} list={myList} setList={setMyList} currentItem={currentItem} setCurrentItem={setCurrentItem} modal={modal} setModal={setModal} currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  );
}

export default Home;
