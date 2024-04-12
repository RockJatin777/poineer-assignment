import {Component} from 'react'
import {Link} from 'react-router-dom'

import {IoHomeOutline, IoCubeOutline} from 'react-icons/io5'
import {CgOrganisation} from 'react-icons/cg'
import {FiAlignJustify} from 'react-icons/fi'

import './index.css'

class SideNavBar extends Component {
  state = {
    tab: localStorage.getItem('tab'),
  }

  onClickTabHome = () => {
    this.setState({tab: 'Home'})
    localStorage.setItem('tab', 'Home')
  }

  onClickTabOrganization = () => {
    this.setState({tab: 'Organization'})
    localStorage.setItem('tab', 'Organization')
  }

  onClickTabAssets = () => {
    this.setState({tab: 'Assets'})
    localStorage.setItem('tab', 'Assets')
  }

  render() {
    const {tab} = this.state

    return (
      <>
        <nav className="navbar-small-device">
          <img
            src="https://i.ibb.co/vj35gkr/Screenshot-2024-04-11-004558-removebg-preview.jpg"
            alt="carbon cell logo"
            className="logo"
          />
          <ul className="nav-items-small-devices">
            <Link className="link" to="/">
              <li
                onClick={this.onClickTabHome}
                className={tab === 'Home' ? 'nav-items-bg' : 'nav-items'}
              >
                <IoHomeOutline size={25} />
              </li>
            </Link>
            <Link className="link" to="/organization">
              <li
                onClick={this.onClickTabOrganization}
                className={
                  tab === 'Organization' ? 'nav-items-bg' : 'nav-items'
                }
              >
                <CgOrganisation size={25} />
              </li>
            </Link>
            <Link className="link" to="/assets">
              <li
                onClick={this.onClickTabAssets}
                className={tab === 'Assets' ? 'nav-items-bg' : 'nav-items'}
              >
                <IoCubeOutline size={25} />
              </li>
            </Link>
          </ul>
        </nav>
        <nav className="navbar">
          <div className="logo-container">
            <img
              src="https://i.ibb.co/vj35gkr/Screenshot-2024-04-11-004558-removebg-preview.jpg"
              alt="carbon cell logo"
              className="logo"
            />
            <FiAlignJustify size={25} />
          </div>
          <ul className="nav-items-container">
            <Link className="link" to="/">
              <li
                onClick={this.onClickTabHome}
                className={tab === 'Home' ? 'nav-items-bg' : 'nav-items'}
              >
                <IoHomeOutline size={25} />
                <p className="nav-items-tab">Home</p>
              </li>
            </Link>
            <Link className="link" to="/organization">
              <li
                onClick={this.onClickTabOrganization}
                className={
                  tab === 'Organization' ? 'nav-items-bg' : 'nav-items'
                }
              >
                <CgOrganisation size={25} />
                <p className="nav-items-tab">Organization</p>
              </li>
            </Link>
            <Link className="link" to="/assets">
              <li
                onClick={this.onClickTabAssets}
                className={tab === 'Assets' ? 'nav-items-bg' : 'nav-items'}
              >
                <IoCubeOutline size={25} />
                <p className="nav-items-tab">Assets</p>
              </li>
            </Link>
          </ul>
        </nav>
      </>
    )
  }
}

export default SideNavBar
