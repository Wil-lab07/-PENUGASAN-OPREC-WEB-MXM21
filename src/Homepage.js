import {useState, useEffect} from 'react';
import Axios from 'axios';

const Homepage = () => {
    
    const [quote, setQuote] = useState([]);
    const [author, setAuthor] = useState([]);
    const writtenBy = "Written by ";

    const [isLoading, setIsLoading] = useState(true);
    const [isAppear, setIsAppear] = useState(false);

    const getQuote = () => {
        // Axios.get("https://api.quotable.io/random")
        //     .then(res => {
        //         setQuote(res.data.content);
        //         setAuthor(res.data.author);
        //         setIsLoading(false);
        //         setIsAppear(true);
        //     })
        fetch('https://api.quotable.io/random')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setQuote(data.content);
                setAuthor(data.author);
                setIsLoading(false);
                setIsAppear(true);
            })
    }

    useEffect(()=>{
        setTimeout(()=>{
            getQuote();
        }, 1000)
    }, [])

    return (
        <div className="Homepage">
            <div className="content">
                <div className="Header">
                    <img src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt=""/>
                    <h2>Random Quote Generator</h2>
                </div>
                <div className="Main">
                    {isLoading && 
                        <div class = "Loading">
                            <div className="obj"></div>
                            <div className="obj"></div>
                            <div className="obj"></div>
                            <div className="obj"></div>
                        </div>
                    }
                    {isAppear && 
                        <div className="Article">
                            <div className="Quote">
                                <h2>{quote}</h2>
                            </div>
                            <div className="Author">
                                <p>{writtenBy}<span>{author}</span></p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="button">
                <a onClick = {getQuote}>Quote</a>
                <a href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`} target = "_blank">Tweet</a>
            </div>
        </div>
    );
}
 
export default Homepage;