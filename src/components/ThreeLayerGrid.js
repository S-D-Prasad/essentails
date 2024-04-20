import React from 'react';
import { Card } from 'antd';

const ThreeGridLayout = ({ children }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {React.Children.map(children, (child, index) => (
                <div key={index}>
                    <Card style={{ width: '100%', height: '100%', }}>
                        {child}
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default ThreeGridLayout;
