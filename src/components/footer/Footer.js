import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss"

const Footer = (props) => {

    const corporateLinks = [
        {id:1, name:"Home", url: "/"},
        {id:2, name:"New Launch", url: "/"},
        {id:3, name:"New Projects", url: "/"},
        {id:4, name:"Serviced Apartments in Gurgaon", url: "/"}
    ]

    const keywordsLinks = [
        {id:1, name:"Commercial Property", url: "/"},
        {id:2, name:"New Commercial Projects", url: "/"},
        {id:3, name:"Best Value Properties", url: "/"},
        {id:4, name:"Assured Return Property", url: "/"}
    ]

  return (
    <footer className='main_footer'>
        <div className="top_footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4 className="footer_title">Corporate Links</h4>
                        <ul className='footer_nav'>
                            {corporateLinks.map((navItem) => 
                                <li className='nav_item'><Link to={navItem.url}>{navItem.name}</Link></li>
                            )}
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer_title">Keywords</h4>
                        <ul className='footer_nav'>
                            {keywordsLinks.map((navItem) => 
                                <li className='nav_item'><Link to={navItem.url}>{navItem.name}</Link></li>
                            )}
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer_title">Like us on Facebook</h4>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer_title">Get in Touch</h4>
                        <div className="footer_info">
                            <p>{props.contactInfo.address}</p>
                            <p>{props.contactInfo.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bottom_footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="copywrite_text">© 2018-2019. An invention by <Link to="https://alexandro.in/coworking-space-in-gurgaon.php" target="_blank" rel="author"><strong>Alexandro.in</strong></Link></p>
                    </div>
                    <div className="col-md-6">
                        <p className="footer_cofynd"><Link to="http://cofynd.com/" target="_blank">Cofynd.com</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
