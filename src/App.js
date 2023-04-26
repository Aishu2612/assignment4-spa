import logo from "./images/logo.png";
import "./css/App.css";
import BlogPosts from "./components/BlogPosts";
import News from './components/News';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="siteLogo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="siteTitle">
          Assignment 4 - Single Page Application - Blog Posts
        </div>
      </header>
   
      <div className="site-content">
        <div className="site-mainsection">
          <div><BlogPosts /></div>
        </div>
        <div className="site-asidesection">
          <div><button className="home-btn" onClick={() => window.location.reload(false)}>Home</button></div>
          <News />
          <br/>
          <br/>
        
        </div>
      </div>

    </div>
  );
}

export default App;
