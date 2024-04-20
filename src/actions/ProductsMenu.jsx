import React from 'react';
import { Menu, Dropdown, Button, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const sampleData = [
    {
        category: 'Beverages',
        subcategories: [
            {
                name: 'Cold',
                products: ['Coke', 'Pepsi', 'Sprite']
            },
            {
                name: 'Hot',
                products: ['Coffee', 'Tea']
            }
        ]
    },
    {
        category: 'Fruits',
        subcategories: [
            {
                name: 'Citrus',
                products: ['Orange', 'Lemon', 'Lime']
            },
            {
                name: 'Tropical',
                products: ['Banana', 'Mango', 'Pineapple']
            }
        ]
    }
];

const ProductsMenu = () => {

    const handleCatalogueClick = () => {
        // Redirect to catalogue page
        console.log("Catalogue");
    };

    const handleContactUsClick = () => {
        // Redirect to contact us page or any action you want
        console.log("Contact Us");
    };

    const renderSubmenu = (subcategory) => (
        <Menu>
            {subcategory.products.map(product => (
                <Menu.Item key={product}>{product}</Menu.Item>
            ))}
        </Menu>
    );

    const renderMenu = () => (
        <Menu>
            {sampleData.map(({ category, subcategories }) => (
                <SubMenu key={category} title={category}>
                    {subcategories.map(subcategory => (
                        <SubMenu key={subcategory.name} title={subcategory.name}>
                            {renderSubmenu(subcategory)}
                        </SubMenu>
                    ))}
                </SubMenu>
            ))}
        </Menu>
    );

    return (
        <Row justify="center" span={24} style={{background:'#e3c1c'}}>
            <Col span={3} className='btn1' >
                <Dropdown overlay={renderMenu}>
                    <Button type="text" style={{ margin: '10px',fontSize:'18px',color:'white',border:'1px solid white' }}>Products <DownOutlined /></Button>
                </Dropdown>
            </Col>
            <Col span={3}>
                <Button className='btn1' type="text" onClick={handleCatalogueClick} style={{ margin: '10px',marginLeft:'10px',fontSize:'18px',color:'white',border:'1px solid white' }}>Catalogue</Button>
            </Col>
            <Col offset={14} style={{ textAlign: 'right' }}>
                <Button className='btn1' type="text" onClick={handleContactUsClick} style={{ margin: '10px',fontSize:'18px',color:'white',border:'1px solid white' }}>Contact Us</Button>
            </Col>
        </Row>
    );
};

export default ProductsMenu;
