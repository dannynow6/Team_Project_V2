import { Card, CardImg, CardTitle, CardText } from 'reactstrap'; 

//Write api call in JSX inline - Randy did same - View Docs for info 

const NewsCard = (props) => {
    return (
        <Card>
            <CardImg width='90%' src={props.news.image}/>
            <CardTitle>{props.newsheadline.name}</CardTitle>
            <CardText>{props.news.text}</CardText>
        </Card>
    );
};

export default NewsCard; 