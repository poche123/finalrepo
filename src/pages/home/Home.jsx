import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/chartleft/Chartleft";
import Chart from "../../components/chartright/Chartright";
import Table from "../../components/table/Table";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="dashboardtitle">Incidents Overview</div> 
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          
        </div>
        <div className="charts">
          <Featured title="Incidents Raised By Category and Month" aspect={2 / 1}/>
          <Chart title="Incidents Closed By Category and Month" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Total Incidents by Incident Type</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
