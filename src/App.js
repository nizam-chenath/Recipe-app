
import Catogery from "./components/Catogery";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom"
import Search from "./components/Search";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search/>
      <Catogery/>
      <Pages/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
