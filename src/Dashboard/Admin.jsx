import Sidebar from "./Sidebar.jsx";
import Widget from "./Widget.jsx";
import Chart from "./Chart.jsx";
import './Dashboard.scss';

const Dashboard = () => {

  return (
    <div className="dashboard">
    <Sidebar />
    <div className="homeContainer">
    <div className="widgets">
            <Widget type="customer" />
            <Widget type="order" />
            <Widget type="earnings" />
            <Widget type="products" />
          </div>

          <div className="charts">
            <Chart title="Last 6 months (Revenue)" aspect={2 / 1} />
          </div>
        </div>
    </div>
  )
}

export default Dashboard;