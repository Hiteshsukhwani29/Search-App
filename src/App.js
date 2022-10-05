import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Searchbar from "./components/Searchbar";
import Logo from "./assets/logo.png";
import { useState } from "react";

function App() {
  const [SearchIsFocused, setSearchIsFocused] = useState(false);
  const [IsHomePage, setIsHomePage] = useState(true);
  const [SearchText, setSearchText] = useState("");
  
  // const { pathname } = useLocation();
  // if(pathname==="search"){
    if(IsHomePage===true){
  var divImage = {
    backgroundImage : `url("https://i.imgur.com/9xbFw8i.jpg")`
  };
}
else{
  var divImage = {
    backgroundImage : "none",
    backgroundColor: "#ffffff"
  };
}
// }
  return (
    <BrowserRouter>
    <>
      <div className="App" style={divImage}>
      <div
        className="home-img-container"
        onClick={(e) => setSearchIsFocused(false)}
      >
        <img src={Logo} />
      </div>
      <Searchbar
      SearchText={SearchText}
      setSearchText={setSearchText}
        SearchIsFocused={SearchIsFocused}
        setSearchIsFocused={setSearchIsFocused}
      />
        <Routes>
        <Route path="/" element={<Home SearchIsFocused={SearchIsFocused}
        setSearchIsFocused={setSearchIsFocused} setIsHomePage={setIsHomePage} />} />
        <Route path="/search/:id" element={<SearchPage  setIsHomePage={setIsHomePage} />} />
        </Routes>
      </div>
      </>
    </BrowserRouter>
  );
}

export default App;
