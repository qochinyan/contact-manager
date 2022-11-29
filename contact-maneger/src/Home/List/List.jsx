import { useState } from "react";
import InlineChange from "../InlineChange/inlineChange";
import "./List.css";
import Card from "../Card/Card";

const List = ({
  cardView,
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
    console.log(list);
  };
  console.log("is "+ cardView);
  return (
    <div className="container">
      <div className="box">
        <div className="butBox">
          <button onClick={handleDelete} className="delSelBut">
            Delete
          </button>
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
                    handleContactCancel={handleClose}
                    handleContactChange={handleInputChange}
                    handleContactSave={handleSave}
                    contact={currentItem}
                  />
                ) : !allChecked ? (
                  <tr
                    key={i}
                    className={`itemTr ${checkeds[el.id] ? "checkedTr" : ""} `}
                  >
                    <td className="nameTd">
                      <div className="flexName">
                        <div className="check">
                          <input
                            type="checkbox"
                            id={i}
                            onClick={() => handleCheckSelect(el.id)}
                            className="checkbox"
                          />
                        </div>
                        <div className="name">
                          <div className="img">
                            <img src={el.avatar} alt="" className="avatar" />
                          </div>
                          {el.name}
                        </div>
                      </div>
                    </td>
                    <td className="emailTd">
                      <div className="email">{el.email}</div>
                    </td>
                    <td className="phoneTd">
                      <div
                        className="phone"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          padding: "20px 0",
                        }}
                      >
                        {[...el.phone].map((el) => (
                          <div>{el}</div>
                        ))}
                      </div>
                    </td>
                    <td className="proffTd">
                      <div
                        className="proff"
                        style={{
                          backgroundColor:
                            el.profession === "Web Designer"
                              ? "rgb(222, 28, 103)"
                              : "rgb(20, 162, 36)",
                        }}
                      >
                        {el.profession}
                      </div>
                    </td>
                    <td>
                      <img
                        className="edit"
                        id={i}
                        onClick={() => handleEditItem(el)}
                        src="https://cdn-icons-png.flaticon.com/512/4007/4007772.png"
                        alt=""
                      />
                      <img
                        onClick={() => {
                          setQuestActive(true);
                          setId(i);
                        }}
                        className="remove"
                        src="https://cdn-icons-png.flaticon.com/512/7263/7263521.png"
                        alt=""
                      />
                    </td>
                  </tr>
                ) : (
                  <tr key={i} className="itemTr checkedTr">
                    <td className="nameTd">
                      <div className="flexName">
                        <div className="check">
                          <input type="checkbox" className="checkbox" checked />
                        </div>
                        <div className="name">
                          <div className="img">
                            <img src={el.avatar} alt="" className="avatar" />
                          </div>
                          {el.name}
                        </div>
                      </div>
                    </td>
                    <td className="emailTd">
                      <div className="email">{el.email}</div>
                    </td>
                    <td className="phoneTd">
                      <div
                        className="phone"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          padding: "20px 0",
                        }}
                      >
                        <div>{el.phone[0]}</div>
                        <div>{el.phone[1]}</div>
                      </div>
                    </td>
                    <td className="proffTd">
                      <div
                        className="proff"
                        style={{
                          backgroundColor:
                            el.profession === "Web Designer"
                              ? "rgb(222, 28, 103)"
                              : "rgb(20, 162, 36)",
                        }}
                      >
                        {el.profession}
                      </div>
                    </td>
                    <td>
                      <img
                        className="edit"
                        id={i}
                        onClick={() => handleEditItem(el)}
                        src="https://cdn-icons-png.flaticon.com/512/4007/4007772.png"
                        alt=""
                      />
                      <img
                        onClick={() => {
                          setQuestActive(true);
                          setId(i);
                        }}
                        className="remove"
                        src="https://cdn-icons-png.flaticon.com/512/7263/7263521.png"
                        alt=""
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          ) : (
          <div className="containerCardView">
            {list.map((el)=><Card el={el}/>)
            }
          </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default List;
