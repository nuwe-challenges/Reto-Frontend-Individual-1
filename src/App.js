import Navbar from "components/Navbar";
import Header from "Pages/Header";
import General from "Pages/General";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-son">
        <Header />
        <General />
      </div>
    </div>
  );
}
