import React from 'react';
import { Card, Typography } from 'antd';

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const CategoryCard = ({ title, description, image }) => {
    return (
        <Card
            hoverable
            style={{ width: 300 }}
            cover={<img alt={title} src={image} />}
        >
            <Meta
                title={<Title level={4}>{title}</Title>}
                description={<Paragraph>{description}</Paragraph>}
            />
        </Card>
    );
};

export default CategoryCard;
