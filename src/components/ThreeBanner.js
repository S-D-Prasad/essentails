import React from 'react';
import { Card } from 'antd';
import pet_care from '../assets/TopCategories/pet_care.png';
import baby_care from '../assets/TopCategories/baby_care.png';
import hair_care from '../assets/TopCategories/hair_care.png';

const ThreeBanner = () => {
    const categories = [
        { name: 'Pet Care', image: pet_care, url: '/pet-care' },
        { name: 'Baby Care', image: baby_care, url: '/baby-care' },
        { name: 'Hair Care', image: hair_care, url: '/hair-care' },
        { name: 'Pet Care', image: pet_care, url: '/pet-care' },
        { name: 'Baby Care', image: baby_care, url: '/baby-care' },
        { name: 'Hair Care', image: hair_care, url: '/hair-care' },
        // Add more categories as needed
    ];

    const cardStyle = {
        background: '#fff',
        position: 'relative',
        overflow: 'visible',
        width: 'auto',
        height: 'auto',
        borderRadius: '50%',
        transition: 'opacity 0.3s ease-in-out', // Add opacity transition
    };

    const imageStyle = {
        objectFit: 'contain',
        width: '150px',
        height: '150px',
        transition: 'transform 0.3s ease-in-out', // Add transform (scale) transition
    };

    const containerStyle = {
        height: '250px', // Set the height of the container
        overflow: 'auto', // Make the container scrollable
    };

    return (
        <div style={containerStyle}>
            <h2>Top Categories</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {categories.map(category => (
                    <a key={category.name} href={category.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Card hoverable style={cardStyle}>
                            <img
                                src={category.image}
                                style={imageStyle}
                                alt={category.name}
                                onMouseEnter={(e) => { e.target.style.opacity = '0.8'; e.target.style.transform = 'scale(1.2)'; }}
                                onMouseLeave={(e) => { e.target.style.opacity = '1'; e.target.style.transform = 'scale(1)'; }}
                            />
                        </Card>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ThreeBanner;
