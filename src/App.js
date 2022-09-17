import {useState} from 'react'
import './App.css';
import RandomQoute from './RandomQoute';
import AllQuotes from './AllQuotes';

function App() {
  const [data,setData] = useState([]);
  const [authorQuotes, setAuthorQuotes] = useState([]);
  const [open,setOpen] = useState(false);

  const fetchApi = () => {
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
    .then(response => response.json())
    .then(data => setData(data?.data))
    .catch(e => console.log(e))
    setOpen(false)
  }

  const getAllQuotes = async () => {
    const currentAuthor = data.map(quote => quote.quoteAuthor);
    const response = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/?author=${currentAuthor}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },})
    const resdata = await response.json()
    const Quotes = resdata?.data;
    setAuthorQuotes(Quotes)
    setOpen(!open);
  }

  return (
    <div className="App">
      <div className="random_btn">
        <button onClick={fetchApi}>random <img src="https://img.icons8.com/ios-glyphs/90/000000/synchronize.png" alt="btn"/></button>
      </div>
      {
         !open ? <RandomQoute data={data} getAllQuotes={getAllQuotes}/>:<AllQuotes authorQuotes={authorQuotes}/>
      }
      
    </div>
  );
}

export default App;
