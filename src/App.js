import Navbar from "./component/navbar"
import './App.css';
import Main from "./component/main"
import Data from "./data"

function App() {
  const Mainbody = Data.map((item) => {
    return < Main
      key={item.id}
      {...item}
      />
  })
  return (
    <div>
      <Navbar />
      <section>{Mainbody}</section>
    </div>
  );
}

export default App;
