import { Card, CardImg, CardTitle, CardText } from 'reactstrap'; 


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