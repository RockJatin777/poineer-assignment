import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

import SideNavbar from '../SideNavbar'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    populationData: [],
  }

  componentDidMount() {
    this.getPopulationData()
  }

  onClickRetry = () => {
    this.getPopulationData()
  }

  getPopulationData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const response = await fetch(
      'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
    )
    if (response.ok === true) {
      const responseData = await response.json()
      this.setState({
        apiStatus: apiStatusConstants.success,
        populationData: responseData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderHomeView = () => {
    const {populationData} = this.state
    console.log(populationData)
    return (
      <div className="graph-container">
        <h1 className="container-heading">
          Hello, <span className="name">Jitin Gupta</span>
        </h1>
        <p>
          Welcome to <span className="name">Spot trading</span>
        </p>
        <h2 className="chart-heading">Population Analysis of Unites States</h2>
        <ResponsiveContainer width="80%" aspect={1}>
          <LineChart
            width={700}
            height={450}
            data={populationData.data}
            margin={{
              top: 40,
              right: 30,
              left: 20,
              bottom: 50,
            }}
          >
            <CartesianGrid horizontal="true" vertical="" stroke="#243240" />
            <XAxis dataKey="Year" tick={{fill: '#fff'}} />
            <YAxis tick={{fill: '#fff'}} />
            <Tooltip
              contentStyle={{backgroundColor: '#8884d8', color: '#fff'}}
              itemStyle={{color: '#fff'}}
              cursor={false}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="Population"
              stroke="#8884d8"
              strokeWidth="5"
              dot={{fill: '#2e4355', stroke: '#8884d8', strokeWidth: 2, r: 5}}
              activeDot={{
                fill: '#2e4355',
                stroke: '#8884d8',
                strokeWidth: 5,
                r: 10,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
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

  renderLineChart = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeView()
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
      <div className="app-container">
        <SideNavbar />
        {this.renderLineChart()}
      </div>
    )
  }
}

export default Home
