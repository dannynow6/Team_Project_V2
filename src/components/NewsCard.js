import React, { useState, useEffect } from 'react'; 
import { Card, CardImg, CardTitle, CardText, CardGroup } from 'reactstrap'; 
import axios from 'axios'; 

//Write api call in JSX inline - Randy did same - View Docs for info 
// Create a News Card from API Info 

const NewsCard = () => {
    const [data, setData] = useState(null); 
    const [error, setError] = useState(null);
    const options = {
        method: 'GET',
        url: 'https://api.newscatcherapi.com/v2/search',
        params: {q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1'},
        headers: {
            'x-api-key': 'ZHJFBnjR4Mbm12VCSNFCLTu0jx8g3RSCuC4pjHlvQWU'
        }
    };

    useEffect(() => {
        axios.request(options).then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
            setError(error);
        });
    }, [axios, options]);

    if (error) return `Error. ${error}`;
    if (!data) return null;  
    
    return (
        <div>
            <CardGroup>
                <Card>
                    <CardTitle>{data[0].title}</CardTitle>
                    <CardText>{data[0].description}</CardText>
                </Card>
            </CardGroup>
        </div>
    );
};

export default NewsCard; 