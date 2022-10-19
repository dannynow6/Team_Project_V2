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
                    <CardText className='text-muted bg-light'>Description of News Article</CardText>
                </Card>
                <Card className='px-2'>
                    <CardImg src={NewsImg2}></CardImg>
                    <CardTitle className='h3'>News Headline</CardTitle>
                    <CardText className='text-muted bg-light'>Description of News Article</CardText>
                </Card>
                <Card>
                    <CardImg src={NewsImg3}></CardImg>
                    <CardTitle className='h3'>News Headline</CardTitle>
                    <CardText className='text-muted bg-light'>Description of News Article</CardText>
                </Card>
            </CardGroup>
        </div>
    )
};

export default NewsCard; 
