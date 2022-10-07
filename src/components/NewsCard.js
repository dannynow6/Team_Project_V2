import React, { useState, useEffect } from 'react'; 
import { Card, CardImg, CardTitle, CardText, CardGroup } from 'reactstrap'; 
import axios from 'axios'; 

//Write api call in JSX inline - Randy did same - View Docs for info 
// Create a News Card from API Info 

const NewsCard = () => {
    const [data, setData] = useState(null); 

    const url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2022-10-07&sortBy=popularity&apiKey=19b1550cea254216bcee7c1ddd7a51b7';

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error)
        });
    }, []);

    if (!data) return null; 

    return (
        <div>
            <CardGroup>
                <Card>
                    <CardImg width='90%' src={data[0].urlToImage}/>
                    <CardTitle>{data[0].title}</CardTitle>
                    <CardText>{data[0].description}</CardText>
                </Card>
            </CardGroup>
        </div>
    );
};

export default NewsCard; 