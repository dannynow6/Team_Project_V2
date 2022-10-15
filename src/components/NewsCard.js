import React, { useState, useEffect } from 'react'; 
import { Card, CardImg, CardTitle, CardText, CardGroup } from 'reactstrap'; 
import axios from 'axios'; 

//Write api call in JSX inline - Randy did same - View Docs for info 
// Create a News Card from API Info 

const NewsCard = () => {
    const [data, setData] = useState(null); 
    const [error, setError] = useState(null);

    const url = 'https://newsdata.io/api/1/news?apikey=pub_12049ad5733f7dbd58fb0a01d654a3df99889&q=bitcoin';

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
            setError(error);
        });
    }, []);

    if (error) return `Error. ${error}`;
    if (!data) return null; 
    const title = data[0].title; 
    const description = data[0].description; 
    
    return (
        <div>
            <CardGroup>
                <Card>
                    <CardTitle>{title}</CardTitle>
                    <CardText>{description}</CardText>
                </Card>
            </CardGroup>
        </div>
    );
};

export default NewsCard; 