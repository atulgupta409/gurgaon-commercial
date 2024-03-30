import React from "react";
import "./Header.scss";

const Header = (props) => {

    const navbarMenu = [
        {
            id: 1,
            name: "Office Space",
            url: "/"
        },
        {
            id: 2,
            name: "Coworking Space",
            url: "/"
        },
        {
            id: 3,
            name: "Retail Shop",
            url: "/"
        },
        {
            id: 4,
            name: "Pre-Leased Property",
            url: "/"
        },
        {
            id: 5,
            name: "Service Apartment",
            url: "/"
        },
        {
            id: 5,
            name: "Assured Return",
            url: "/"
        }
    ]

    return (
        <header>
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header_phone text-center">
                                <i className="fa-solid fa-phone"></i>{" "}
                                <a href="tel:+919999063322">
                                Call Now: {props.contactInfo.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menu_area">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                        <div className="row w-100 align-items-center">
                            <div className="col-md-3 col-4">
                                <a className="navbar-brand" href="/"><img src={props.logo} alt="Gurgaon Commercial" className="img-fluid" /></a>
                            </div>
                            <div className="col-md-9 col-8">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        {navbarMenu.map((navItem) =>
                                            <li className="nav-item">
                                                <a className="nav-link" href={navItem.url}>{navItem.name}</a>
                                            </li> 
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
