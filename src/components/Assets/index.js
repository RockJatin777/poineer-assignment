import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {FaEuroSign, FaPoundSign} from 'react-icons/fa'
import {AiOutlineStock} from 'react-icons/ai'
import {IoIosInformationCircleOutline} from 'react-icons/io'
import {BiDollar} from 'react-icons/bi'

import SideNavbar from '../SideNavbar'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Assets extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    assetData: [],
  }

  componentDidMount() {
    this.getAssetData()
  }

  onClickRetry = () => {
    this.getAssetData()
  }

  getAssetData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const response = await fetch(
      'https://api.coindesk.com/v1/bpi/currentprice.json',
    )
    if (response.ok === true) {
      const responseData = await response.json()
      this.setState({
        apiStatus: apiStatusConstants.success,
        assetData: responseData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderAssets = () => {
    const {assetData} = this.state
    const priceData = assetData.bpi
    console.log(priceData)
    return (
      <div className="asset-container">
        <h1 className="disclaimer">{assetData.disclaimer}</h1>
        <div className="asset-title-container">
          <h2>Assets</h2>
          <p>Today</p>
        </div>
        <div className="asset-card-container">
          <div className="asset-card">
            <div className="symbol-container">
              <FaEuroSign className="symbol" />
              <p>{priceData.EUR.code}</p>
            </div>
            <p>{priceData.EUR.description}</p>
            <div className="symbol-container">
              <p>
                {priceData.EUR.rate} <FaEuroSign size={12} />
              </p>
              <AiOutlineStock size={20} />
            </div>
            <div className="symbol-container">
              <IoIosInformationCircleOutline size={30} />
              <button className="button" type="button">
                Trade
              </button>
            </div>
          </div>
          <div className="asset-card">
            <div className="symbol-container">
              <BiDollar className="symbol" />
              <p>{priceData.USD.code}</p>
            </div>
            <p>{priceData.USD.description}</p>
            <div className="symbol-container">
              <p>
                {priceData.USD.rate} <BiDollar size={12} />
              </p>
              <AiOutlineStock size={20} />
            </div>
            <div className="symbol-container">
              <IoIosInformationCircleOutline size={30} />
              <button className="button" type="button">
                Trade
              </button>
            </div>
          </div>
          <div className="asset-card">
            <div className="symbol-container">
              <FaPoundSign className="symbol" />
              <p>{priceData.GBP.code}</p>
            </div>
            <p>{priceData.GBP.description}</p>
            <div className="symbol-container">
              <p>
                {priceData.GBP.rate} <FaPoundSign size={12} />
              </p>
              <AiOutlineStock size={20} />
            </div>
            <div className="symbol-container">
              <IoIosInformationCircleOutline size={30} />
              <button className="button" type="button">
                Trade
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderLoaderView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="failure-view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button
        type="button"
        className="retry-button"
        onClick={this.onClickRetry}
      >
        Retry
      </button>
    </div>
  )

  renderAssetView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderAssets()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="asset-app-container">
        <SideNavbar />
        {this.renderAssetView()}
      </div>
    )
  }
}

export default Assets
