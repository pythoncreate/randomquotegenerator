// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// list of five quotes here

var quotes = [ 
	{quote: "Glory is fleeting, but obscurity is forever.",
	 source: "Napoleon Bonaparte",
	 year: "1769",
	 tags: "history",
	},
	{quote: "Not everything that can be counted counts, and not everything that counts can be counted.",
	 source: "Albert Einstein",
	 year: "1934",
	 tags: "science",
	},
	{quote: "I'll moider da bum.",
	 source: "Tony Galento",
	 citation: "when asked what he thought of William Shakespeare",
	 year: "1965",
	 tags: "sports, history",
	},
	{quote: "Do, or do not. There is no 'try'.",
	 source: "Yoda",
	 citation: "The Empire Strikes Back",
	 year: "1986",
	 tags: "movies",
	},
	{quote: "There are no facts, only interpretations",
	 source: "Friedrich Nietzsche",
	 year: "1893",
	 tags: "art",
	}

];

// uses random function to generate random number and uses number to index a quote
function getRandomQuote(){
	var randomNumber = Math.floor(Math.random() * quotes.length ) + 1;
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}

// calls getRandomQuote function and uses conditionals to generate the HTML for quote

function printQuote(){
	quote = getRandomQuote();
	var message = '<p class="quote">' + quote.quote + '</p>';
	message += '<p class="source">' + quote.source ;
	if (quote.hasOwnProperty('citation')){
		message += '<span class="citation"> ' + quote.citation + ' </span></p>';
	} else if (quote.hasOwnProperty('year')){
		message += '<span class="year"> ' + quote.year + ' </span></p>';
	} else {
		message += '</p>'
	}

	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = message;
}