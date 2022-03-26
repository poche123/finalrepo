import Sidebar from "../../components/sidebar/Sidebar";
import "./slapriority2.scss";
import Widget from "../../components/Slapriority2/Widget2";
import Featured from "../../components/Slapriority2/Chartleft2";
import Chart from "../../components/Slapriority2/Chartright2";
import Table from "../../components/Slapriority2/Table2";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
      <div className="dashboardtitle">Alta Incidents P2 KPIs</div> 
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          
        </div>
        <div className="charts">
          <Featured title="SLA compliance: YES if under 8 hours, NO if over" aspect={2 / 1}/>
          <Chart title="Avergage resolution time per Alta incident (hours)" aspect={2 / 1} />
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
