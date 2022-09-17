import './App.css';

const AllQuotes = ({authorQuotes}) => {
	const quoteAuthor = authorQuotes.map(quote => quote.quoteAuthor);
	return (
		<div className="AllQuotes">
			<h2>{quoteAuthor[0]}</h2>
			{
		       authorQuotes.map(quote => <p className="quotes_para">{quote.quoteText}</p>)
		    }
		</div> 
	)
}

export default AllQuotes;

