import Sidebar from "../../components/sidebar/Sidebar";
import "./slapriority3.scss";
import Widget from "../../components/Slapriority3/Widget3";
import Featured from "../../components/Slapriority3/Chartleft3";
import Chart from "../../components/Slapriority3/Chartright3";
import Table from "../../components/Slapriority3/Table3";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
      <div className="dashboardtitle">Media Incidents P3 KPIs</div> 
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          
        </div>
        <div className="charts">
          <Featured title="SLA compliance: YES if under 5 business days, NO if over" aspect={2 / 1}/>
          <Chart title="Avergage resolution time per Media incident (days)" aspect={2 / 1} />
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
