import React from 'react';
import { Card, Row, Col } from 'antd';
import data from '../data'; // Import your data.js file
import UsefulLinks from './UsefulLinks';

const Categories = () => {
    const categories = data.categories;

    const breathingAnimationStyle = `
    @keyframes breathing {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }

    .breathing-animation {
        animation: breathing 10s ease-in-out infinite;
    }
  `;

    const handleCardClick = (categoryId) => {
        console.log('Clicked Category ID:', categoryId);
        // Handle click event for the category card
    };

    return (
        <>
            <div style={{ border: '20px solid white', padding: '20px',backgroundColor:'#d36786' }}>
                <h2 style={{color:'white'}}>Explore all Categories</h2>
                <Card style={{backgroundColor:'#e3c1cb'}}>
                    <style>{breathingAnimationStyle}</style>
                    <Row>                    {categories.map((category) => (
                        <Col key={category.id} xs={12} sm={8} md={6} lg={4} xl={4} style={{ marginBottom: '20px' }}>
                            <Card
                                hoverable
                                onClick={() => handleCardClick(category.id)}
                                style={{ width: '150px', height: '160px', textAlign: 'center' }}
                            >
                                <div className="breathing-animation">
                                    <img alt={category.name} src={category.imageUrl} style={{ width: '100px', height: '150px' }} />
                                </div>
                            </Card>
                        </Col>
                    ))}
                    </Row>

                </Card>
            </div>
            <div>
              
            </div>
        </>
    );
};

export default Categories;
