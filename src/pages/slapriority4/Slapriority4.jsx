import Sidebar from "../../components/sidebar/Sidebar";
import "./slapriority4.scss";
import Widget from "../../components/Slapriority4/Widget4";
import Featured from "../../components/Slapriority4/Chartleft4";
import Chart from "../../components/Slapriority4/Chartright4";
import Table from "../../components/Slapriority4/Table4";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
      <div className="dashboardtitle">Baja Incidents P4 KPIs</div> 
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
        </div>
        <div className="charts">
          <Featured title="SLA compliance: YES if under 15 work days, NO if over" aspect={2 / 1}/>
          <Chart title="Avergage resolution time per Alta incidance" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Average Resolution Time By Assigned Organization</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
