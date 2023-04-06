import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import data from "./data.json";

function App() {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Content {...data} />
          </div>
          {/* <!-- Footer --> */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2021</span>
              </div>
            </div>
          </footer>
          {/* <!-- End of Footer --> */}
        </div>
      </div>
    </div>
  );
}

export default App;
