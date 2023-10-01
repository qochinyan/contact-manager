import "./modal.css"

const Modal = ({inlineEdit, handleInputChange, handleClose, handleSave, modal, setModal, setList, list, setCurrentId, currentItem, setCurrentItem }) => {

    return (
        <div className={modal.isOpen && !inlineEdit || modal.isOpen && modal.mode === "add" ? 'modal active' : 'modal'} onClick={handleClose}>
            <div className="modalBox" onClick={evt => evt.stopPropagation()}>
                <div className="head">
                    <h1>{modal.mode === "edit" ? "Edit Contact Here" : modal.mode === "add" ? "Add New Contact" : ""}</h1>
                </div>
                <div className="content">
                    <label >Name</label><input placeholder="Type your Name" className="myInput" name="name" value={currentItem.name} onChange={handleInputChange} type="text" />
                    <label >Email</label><input placeholder="Type your Email" className="myInput" name="email" value={currentItem.email} onChange={handleInputChange} type="text" />
                    <label >Number</label>{modal.mode === "edit" ? [...currentItem.phone].map((el,i) => <input placeholder="Type your Number" id={i} className="myInput" name="phone" value={el} onChange={handleInputChange} type="text" />) : <input placeholder="Type your Number" className="myInput" name="phone" onChange={handleInputChange} type="text" />}
                    <label >Profession</label><input placeholder="Type your Profession" className="myInput" name="profession" value={currentItem.profession} onChange={handleInputChange} type="text" />
                </div>
                <div className="submitDiv"><button className="but" onClick={handleSave}>Save</button></div>
                <div className="close" onClick={handleClose}>X</div>
            </div>
        </div>
    )
}
export default Modal
