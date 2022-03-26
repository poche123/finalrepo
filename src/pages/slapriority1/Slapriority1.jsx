import Sidebar from "../../components/sidebar/Sidebar";
import "./slapriority1.scss";
import Widget from "../../components/Slapriority1/Widget1";
import Featured from "../../components/Slapriority1/Chartleft1";
import Chart from "../../components/Slapriority1/Chartright1";
import Table from "../../components/Slapriority1/Table1";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
      <div className="dashboardtitle">Critical Incidents P1 KPIs</div> 
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          
        </div>
        <div className="charts">
          <Featured title="SLA compliance: YES if under 4 hours, NO if over" aspect={2 / 1}/>
          <Chart title="Avergage resolution time per Crítica incident (hours)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Crítica incidents with SLA breached (more than 4 hours to solve)</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
