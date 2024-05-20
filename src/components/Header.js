import React, { Component } from 'react';
import Scroll from './Scroll';
import config from '../../config';
import arbideLogo from  '../assets/images/arbide_logo.png';
import { Link } from "gatsby"

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };
  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">

              <a className="navbar-brand" href="/">
                <img className="bg-white rounded" height="120" src={arbideLogo} alt={config.siteTitle} />
              </a>
           
              <button
                onClick={_ => this.toggleMenu(!openMenu)}
                className={`navbar-toggler navbar-toggler-right ${
                  openMenu ? '' : 'collapsed'
                }`}
                type="button"
                aria-controls="navbarResponsive"
                aria-expanded={openMenu}
                aria-label="Toggle navigation"
              >
                Menua
                <i className="fas fa-bars"></i>
              </button>
              <div
                className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
                id="navbarResponsive"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/" className='nav-link'>Eskalada taldea</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/bloke-txapelketa" className='nav-link'>Arbide eguna</Link>
                  </li>
                  <li>
                  <Link to="/rokodromoa" className='nav-link'>Rokodromoa</Link>
                  </li>
                  
                  <li className="nav-item">
                  <Link to="/erropak" className='nav-link'>Erropak</Link>
              </li>
                  <li className="nav-item">
                  <Link to="/kontaktua" className='nav-link'>Kontaktua</Link>
                  </li>
                </ul>
              </div>
      
        </div>
      </nav>
    );
  }
}
