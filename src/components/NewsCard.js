import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'; 

const NewsCard = (props) => {
    return (
        <Card>
            <CardImg />
            <CardTitle>{props.newsheadline.name}</CardTitle>
        </Card>
    );
};

export default NewsCard; 