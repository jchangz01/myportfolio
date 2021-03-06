import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faStrava, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faClipboard, faBars, faTimes  } from '@fortawesome/free-solid-svg-icons'
import '../css/Contact.css'
import navLogo from '../assets/images/portfolio_logo_black.svg'

function NavBar (props) {
    const [menu, toggleMenu] = useState(false);
    const onClick = () => toggleMenu(!menu);

    if (menu === true)
        document.querySelector('body').classList.add('no-scroll')
    else 
        document.querySelector('body').classList.remove('no-scroll')

    return (
        <div id="navbar-container" className="center width-size">
            <nav id="navbar-contents">
                <ul key="About"><a href='/#about'>About</a></ul>
                <ul key="Contact"><a href='/#contact'>Contact</a></ul>
                <ul key="Home"><a href='/#' id="logo"><img id="portfolio-logo" alt="JC" src={navLogo}/></a></ul>
                <ul key="Projects"><a href='/#projects'>Projects</a></ul>
                <ul key="Hire"><a href='/#hire'>Hire Me</a></ul>
            </nav>
            { menu ?
                <React.Fragment>
                    <FontAwesomeIcon icon={faTimes} id="navbar-menu-button" onClick={onClick}/>
                    <div className="white-overlay"></div> 
                </React.Fragment> :
                <FontAwesomeIcon icon={faBars} id="navbar-menu-button" onClick={onClick}/>
            }
            <nav id="navbar-menu-content" className={menu ? "active" : null}>
                <ul key="About"><a href='/#about'>About</a></ul>
                <hr></hr>
                <ul key="Contact"><a href='/#contact'>Contact</a></ul>
                <hr></hr>
                <ul key="Projects"><a href='/#projects'>Projects</a></ul>
                <hr></hr>
                <ul key="Hire"><a href='/#hire'>Hire Me</a></ul>
                <hr></hr>
            </nav>
        </div>
    )
}

function Socials (props) {
    return (
        <div id="contact-main-icon-container">
            <div>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/j.changz/" className="icon-circle instagram"><FontAwesomeIcon className="icon" icon={faInstagram}/></a>
                <h4 className="icon-name">Instagram</h4>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/justin-kyle-chang-31582419b/" className="icon-circle linkedin"><FontAwesomeIcon className="icon" icon={faLinkedin}/></a>
                <h4 className="icon-name">LinkedIn</h4>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/justin.chang.54772/" className="icon-circle facebook"><FontAwesomeIcon className="icon" icon={faFacebook}/></a>
                <h4 className="icon-name">Facebook</h4>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://github.com/jchangz01" className="icon-circle github"><FontAwesomeIcon className="icon" icon={faGithub}/></a>
                <h4 className="icon-name">GitHub</h4>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@j.changz?lang=en" className="icon-circle tiktok"><FontAwesomeIcon className="icon" icon={faTiktok}/></a>
                <h4 className="icon-name">TikTok</h4>
            </div>
            <div>
                <a target="_blank" rel="noreferrer" href="https://www.strava.com/athletes/51901493" className="icon-circle strava"><FontAwesomeIcon className="icon" icon={faStrava}/></a>
                <h4 className="icon-name">Strava</h4>
            </div>
        </div>
    )
}
export default class Contact extends React.Component {
    state = {
        message: "",
        updateKey: 0,
    }

    copyToClipboard = type => {
        var text = (type === "personal" ? "justinklchang@yahoo.com" : "jchangz01@g.ucla.edu")
        var textArea = document.createElement("textarea");
        textArea.value = text;
        
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Fallback: Copying text command was ' + msg);
            this.setState({message: type, updateKey: this.state.updateKey + 1})
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    }

    render() {
        return (
            <div id="content-container">
                <header>
                    <NavBar />
                </header>
                <section>   
                    <div className="width-size fade-in-3" id="contact-main"> 
                        <div className="contact-main-content">
                            <h1 id="contact-main-title">Contact Me</h1>
                            <h2 id="contact-main-subtitle">Get in touch with me now!</h2>
                            <div id="contact-main-email-container">
                                <h3 className="email-content">Personal Email: <span onClick={() => this.copyToClipboard("personal")}>justinklchang@yahoo.com
                                        <FontAwesomeIcon style={{marginLeft: "12px"}} icon={faClipboard}/>
                                    </span>
                                </h3>
                                <h3 className="email-content">School Email: <span onClick={() => this.copyToClipboard("school")}> jchangz01@g.ucla.edu
                                        <FontAwesomeIcon style={{marginLeft: "12px"}} icon={faClipboard}/>
                                    </span>
                                </h3>
                            </div>
                            {this.state.message ? <div key={this.state.updateKey} className="contact-message fade-in-2">Copied to Clipboard</div> : null}
                            <Socials />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}