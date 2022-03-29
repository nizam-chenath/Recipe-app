
import Catogery from "./components/Catogery";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Catogery/>
      <Pages/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
