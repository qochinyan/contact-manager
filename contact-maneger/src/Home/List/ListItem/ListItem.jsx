import { NavLink } from "react-router-dom";
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'

const ListItem = ({moveCard,el,i, id,checkeds, handleCheckSelect, handleEditItem,setQuestActive, setId,checked,index}) => {
    // react dnd
    
const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
}

  const ref = useRef(null)
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))
  return (
    <tr key={i} className={`itemTr ${checkeds[el.id] || checked ? "checkedTr" : ""} `}>
      <td className="nameTd">
        <div className="flexName">
          <div className="check">
            <input
              type="checkbox"
              id={i}
              onClick={() => handleCheckSelect(el.id)}
              className="checkbox"
              checked={checked}
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
        <NavLink to={`/contacts/${el.id}`}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/709/709724.png"
            alt=""
            className="eye"
          />
        </NavLink>
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
};
export default ListItem;
