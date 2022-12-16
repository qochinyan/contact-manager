import { useParams } from "react-router-dom";
import axios from "axios";

import { SERVER_URL } from "../URL/serverUrl";
import "./Contact.css";
import { useEffect, useState } from "react";
const Contact = () => {
  const { id } = useParams();
  const [contact,setContact] = useState({})
  useEffect(() => {
    axios.get(`${SERVER_URL}list/${id}`).then((res) => setContact(res.data));
  }, []);
  console.log(typeof contact.phone);

  return (
    <div className="contactContainer">
      <div className="contactPageItem">
        <h2>Contact on View</h2>
            <div className="contactName">
                Name -  <span className="contactNameSpan"> {contact.name}</span> 
            </div>
            <div className="contactPhone">
              Phone - {Array.isArray(contact.phone) ? "is array " : (
                isObject(contact.phone) ? "is object" : "text"
              )}
            </div>
      </div>
    </div>
  );
};
export default Contact;

function isObject (val) {
  return val instanceof Object;
}
