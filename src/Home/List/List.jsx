import { NavLink } from "react-router-dom";
//dnd
import update from "immutability-helper";
import { useCallback, useState } from "react";
import axios from "axios";
//
import InlineChange from "../InlineChange/inlineChange";
import "./List.css";
import Card from "../Card/Card";
import ListItem from "./ListItem/ListItem";
import { SERVER_URL } from "../../URL/serverUrl";
const List = ({
  inlineEdit,
  checkeds,
  handleDelete,
  allChecked,
  handleAllSelect,
  handleClose,
  handleCheckSelect,
  handleInputChange,
  handleSave,
  setCurrentId,
  setQuestActive,
  id,
  setId,
  list,
  setList,
  modal,
  setModal,
  currentItem,
  setCurrentItem,
  search,
  cardView,
}) => {
  const handleEditItem = (el) => {
    setModal({
      isOpen: true,
      mode: "edit",
    });
    setCurrentItem(el);
  };
  const handleAdd = () => {
    setCurrentItem({
      id: list.length > 0 ? Number(list[list.length - 1].id) + 1 : 1,
      name: "",
      email: "",
      phone: "",
      avatar:
        "https://e7.pngegg.com/pngimages/36/880/png-clipart-avatar-series-wykop-pl-designer-graphic-artist-designer-face-cartoon.png",
      profession: "",
      
    });
    
    setModal({ isOpen: true, mode: "add" });
  };
  const handleSelect = (evt) => {
    console.log(evt.target.value);
  };
  // react dnd
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setList((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);
  return (
    <div className="container">
      <div className="box">
        <div className="butBox">
          <button onClick={handleDelete} className="delSelBut">
            Delete
          </button>
          {search ? (
            <div className="selectSearch">
              <select
                onChange={handleSelect}
                className="propSelect"
                name=""
                id=""
              >
                <option value="name">Select Property(Name)</option>
                <option value="name">Name</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
                <option value="profession">Profession</option>
              </select>
              <input
                type="text"
                className="searchInput"
                autofocus
                placeholder="Input Text Here"
              />
              <button className="searchBut">Search</button>
            </div>
          ) : (
            ""
          )}

          <button onClick={handleAdd} className="addBut">
            Add
          </button>
        </div>
        <div className="list">
          {!cardView ? (
            <table>
              <tbody>
                <tr className="headTr">
                  <th className="nameTh">
                    <div className="check">
                      <input
                        checked={allChecked}
                        type="checkbox"
                        className="checkbox"
                        onClick={handleAllSelect}
                      />
                    </div>
                    NAME
                  </th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th>PROFESSION</th>
                  <th className="iconsTh"></th>
                </tr>

                {list.map((el, i) => {
                  return inlineEdit &&
                    currentItem.id === el.id &&
                    modal.mode == "edit" ? (
                    <InlineChange
                      key={i}
                      handleContactCancel={handleClose}
                      handleContactChange={handleInputChange}
                      handleContactSave={handleSave}
                      contact={currentItem}
                    />
                  ) : !allChecked ? (
                    <ListItem
                      key={el.id}
                      moveCard={moveCard}
                      el={el}
                      index={i}
                      checkeds={checkeds}
                      handleCheckSelect={handleCheckSelect}
                      handleEditItem={handleEditItem}
                      setQuestActive={setQuestActive}
                      setId={setId}
                      checked={allChecked}
                      i={i}
                    />
                  ) : (
                    <ListItem
                      key={i + 1}
                      moveCard={moveCard}
                      el={el}
                      index={i}
                      checkeds={checkeds}
                      handleCheckSelect={handleCheckSelect}
                      handleEditItem={handleEditItem}
                      setQuestActive={setQuestActive}
                      setId={setId}
                      checked={allChecked}
                      i={i}
                    />
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="containerCardView">
              {list.map((el, i) => (
                <Card
                  key={i + 2}
                  setId={setId}
                  setQuestActive={setQuestActive}
                  handleEditItem={handleEditItem}
                  el={el}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default List;
