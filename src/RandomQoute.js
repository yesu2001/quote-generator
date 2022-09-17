import './App.css';

const RandomQoute = ({data,getAllQuotes}) => {
	return (
		<div>
			{
		        data.map(quote => (
		            <div className="quote_container" key={quote._id}>
		              <div className="quote_desc">
		                <p>{quote.quoteText}</p>
		              </div>   
		              <div className="quote_author" onClick={getAllQuotes}>
		                <h3>{quote.quoteAuthor}</h3>
		                <span>{quote.quoteGenre}</span>
		              </div>
		            </div>
		        ))
		    }
		</div> 
	)
}

export default RandomQoute;

