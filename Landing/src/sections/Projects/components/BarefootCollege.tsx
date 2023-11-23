import sakhi from "../../../assets/sakhi.svg"
import dashboard from "../../../assets/dashboard.svg"
import behance from "../../../assets/behance.svg"

export default function BarefootCollege() {
    return(
        <div className="single-project-description">
                        <h2 style={{color: "#CDA1FF", fontFamily: "Rubrik-Bold"}}>Barefoot Suite</h2>
                        <h4>
                            A suite of apps developed to assist <span>Barefoot College International</span>’s 
                            mission in empowering illiterate woman around the world.
                            <br/>
                            <br/>
                            Barefoot College is an <span>Indian-based NGO</span> that operates in the poorest 
                            countries of the world where marginalized women face problems as 
                            <span>limited education, economic hardships, gender inequality and limited 
                            access to electricity.</span>
                            <br/>
                            <br/>
                            Thanks to a 6-months training, Barefoot College teaches these rural 
                            women the basics of electronics, allowing them to build, maintain and 
                            eventually sell solar powered products. They become <span>Solar Mamas.</span>
                        </h4>
                        <div style={{display: "flex", alignItems: "center", paddingTop: "5%"}}>
                            <img className="single-project-icon" src={sakhi} alt="SakhiApp's icon"/>
                            <h2 style={{color: "#CDA1FF", fontFamily: "Rubrik-Bold", paddingLeft: "3%"}}>Sakhi</h2>
                        </div>
                        <h4>
                            <span>Sakhi</span> is an inclusive field sales transaction and customer 
                            management tool for Solar Mamas. This app operates in an <span>offline mode</span>, 
                            functioning even without an internet connection. However, when Solar 
                            Mamas visit a Barefoot College facility, they have the possibility to sync 
                            their data with Dashboard.
                        </h4>
                        <div style={{display: "flex", alignItems: "center", paddingTop: "5%"}}>
                            <img className="single-project-icon" src={dashboard} alt="DashboardApp's icon"/>
                            <h2 style={{color: "#CDA1FF", fontFamily: "Rubrik-Bold", paddingLeft: "3%"}}>Dashboard</h2>
                        </div>
                        <h4>
                            <span>Dashboard</span> is an internal sales management tool for Barefoot staff 
                            and Ground Partners, people with different responsibilities inside 
                            the organization, so each of them have different versions of the app based 
                            on their tasks.
                        </h4>
                        <div className="footer__info-links" style={{
                            marginTop: "2vh",
                        }}>
                            <a href="https://www.behance.net/gallery/172661547/Barefoot-Suite-iOS-iPadOS-applications" target="_blank"><img src={behance} alt="Project's Behance page" style={{paddingLeft: "0px"}}/></a>
                        </div>
                    </div>
    )
}