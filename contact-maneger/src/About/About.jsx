import "./About.css"
const About = () =>{
    return (
        <div className="aboutCont">
            <div className="aboutText">
                <h2 className="heading">
                    About This Project
                </h2>
                <div className="textAbout">
                    Author of this project is Aren Qochinyan <br />
                    He's learning JavaScript & React.js
                    <br /><br />
                    <span>This is a site about Contacts and Their Management.</span>
                </div>
            </div>
            <div className="aboutImg">
                <img src="https://www.eficode.com/hubfs/Hero%20illustration%20for%20Contact%20Us%20page-01-1.png" alt="" />
            </div>
        </div>
    )
}
export default About