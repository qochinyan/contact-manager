import "./inlineChange.css";

const InlineChange = ({
        contact,
        handleContactChange,
        handleContactSave,
        handleContactCancel
    }) => {
  return (
    <tr className="inline-edit-container">
     <td> <input type='checkbox' disabled={true} />
      <input
        name='name'
        value={contact.name}
        onChange={handleContactChange}
      /></td>
     <td> <input
        name='email'
        value={contact.email}
        onChange={handleContactChange}
      /></td>
      <td><input
        name='phone'
        value={contact.phone}
        onChange={handleContactChange}
      /></td>
      <td><input
        name='profession'
        value={contact.profession}
        onChange={handleContactChange}
      /></td>
      <div className="imgs">
        <img className="editInline" src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png" onClick={handleContactSave} alt="" />
        <img className="cancelInline" src="https://cdn-icons-png.flaticon.com/512/8816/8816685.png" onClick={handleContactCancel} alt="" />
      </div>
      
      </tr>
  );
};

export default InlineChange;
