import './index.css'
import SideNavbar from '../SideNavbar'

const Organization = () => (
  <div className="organization-container">
    <SideNavbar />
    <div className="organizations">
      <h1 className="com-head">
        Carbon Cell works with companies and market leaders from all industries
      </h1>
      <div className="industries-container">
        <div>
          <img
            src="https://carboncell.io/assets/img/corporate/1.png"
            alt="Airline"
            className="industries"
          />
        </div>
        <div>
          <img
            src="https://carboncell.io/assets/img/corporate/2.png"
            alt="supply chain"
            className="industries"
          />
        </div>
        <div>
          <img
            src="https://carboncell.io/assets/img/corporate/3.png"
            alt="IT"
            className="industries"
          />
        </div>
        <div>
          <img
            src="https://carboncell.io/assets/img/corporate/4.png"
            alt="energy"
            className="industries"
          />
        </div>
        <div>
          <img
            src="https://carboncell.io/assets/img/corporate/5.png"
            alt="Shipping & Transport"
            className="industries"
          />
        </div>
        <div>
          <img
            src="https://carboncell.io/assets/img/corporate/6.png"
            alt="Automotive"
            className="industries"
          />
        </div>
        <div>
          <img
            src="	https://carboncell.io/assets/img/corporate/7.png"
            alt="Finance & Banking"
            className="industries"
          />
        </div>
        <div>
          <img
            src="	https://carboncell.io/assets/img/corporate/8%20(1).png"
            alt="Oil & Gas"
            className="industries"
          />
        </div>
      </div>
    </div>
  </div>
)

export default Organization
