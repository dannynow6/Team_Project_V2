// NewsCard component that utilizes APIs to pull news headlines info 
// Keep working - see https://developer.nytimes.com/accounts/login


import { useState, useEffect } from 'react'; 
import { Card, CardImg, CardTitle, CardText, CardGroup } from 'reactstrap'; 
import axios from 'axios';

const NewsCardTest = () => {
    const [data, setData] = useState(null); 
    
    const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=bitcoin&api-key=LHVfzKYlAYlQ7YOrpcT0Ev1auyBprZVZ';

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    if (!data) return null;  
    
    return (
        <div>
            <CardGroup>
                <Card>
                    <CardTitle>{data.title}</CardTitle>
                    <CardText>{data.description}</CardText>
                </Card>
            </CardGroup>
        </div>
    );
};

export default NewsCardTest; 
