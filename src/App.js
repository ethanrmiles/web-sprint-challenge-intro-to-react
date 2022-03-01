import react, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'


const App = () => {
const [data, setData] = useState();


useEffect(() => {
  axios.get('https://swapi.dev/api/people')
  .then(res => setData(res.data))
  .catch(err => console.error(err))
}, [])
console.log(data)

  return (
    <div className="App">
      <h1 className="Header">Star-Wars Characters:</h1>
      <h3>Click the 'Show More' button to learn about your favorite characters</h3>
      
      <div className='character-list'>
                    {
                        data?.map(char => {
                          return <Character characters={char} key={char.id} />
                        })
                    }
                </div>
      
    </div>
  );
}

export default App;
