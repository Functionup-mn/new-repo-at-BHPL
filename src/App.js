import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Student from './Components/Student';
import movies from './movies.json'
import Movie from './Components/Movie';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Student name="MNadeem" age={23}/>
      <Student name="MAbdullah" age={34}/>
      <Footer/> */}
      <div className="main">
        {
         movies.map((element, index) => {
          return(                                                   
             <Movie key={index}
                    title={element.Title}
                    year={element.Year}
                    time={element.Runtime}
                    img={element.Poster}
              />
          )
         })
        }
      </div>
    </div>
  );
}

export default App;
