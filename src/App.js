import './App.css';
import './style.css';
import imageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:'100vw'}}>
        <h1 className='title red'>Your name here</h1>
        <br />
        <div className="image_container">
          <img src={imageInSrc}  className="image"/>
          
          <img src="/imageInPublic.jpg" className="image"/>
        </div>
      </div>
      <video width="320" height="240" controls>
        <source src="/myVideo.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
