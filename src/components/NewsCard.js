import React from 'react'; 
import { Card, CardImg, CardTitle, CardText, CardGroup } from 'reactstrap'; 
import NewsImg from '../assets/img/cryptonews.jpg'; 
import NewsImg2 from '../assets/img/police.jpg'; 
import NewsImg3 from '../assets/img/bankweathers.jpg'; 
//import axios from 'axios'; 

//Write api call in JSX inline - Randy did same - View Docs for info 
// Create a News Card from API Info 

const NewsCard = () => {
    return (
        <div>
            <CardGroup className='mx-3'>
                <Card>
                    <CardImg src={NewsImg}></CardImg>
                    <CardTitle className='h3'>News Headline</CardTitle>
                    <CardText className='text-muted'>Description of News Article</CardText>
                </Card>
                <Card className='px-2'>
                    <CardImg src={NewsImg2}></CardImg>
                    <CardTitle className='h3'>News Headline</CardTitle>
                    <CardText className='text-muted'>Description of News Article</CardText>
                </Card>
                <Card>
                    <CardImg src={NewsImg3}></CardImg>
                    <CardTitle className='h3'>News Headline</CardTitle>
                    <CardText className='text-muted'>Description of News Article</CardText>
                </Card>
            </CardGroup>
        </div>
    )
};

export default NewsCard; 

/*
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
*/