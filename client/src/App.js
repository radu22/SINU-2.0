import './App.css';
import Login from "./Components/Login";
import BackgroundImagePage from "./Components/BackgroundImagePage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, BrowserRouter
} from "react-router-dom";


function App() {
  return (
      <div>
        <BackgroundImagePage>
            <BrowserRouter>
                <Routes>
                    <Route path="/login"  element={<Login />}/>
                </Routes>
            </BrowserRouter>
        </BackgroundImagePage>
      </div>
  );
}

export default App;
