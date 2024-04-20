import React, { useState } from 'react';
import { Layout, Menu, Row, Col } from 'antd';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const UsefulLinks = () => {
    const [selectedMenu, setSelectedMenu] = useState('usefulLinks');
    const [selectedCategory, setSelectedCategory] = useState(null);

    const linksData = {
        usefulLinks: [
            'About',
            'Careers',
            'Blog',
            'Press',
            'Lead',
            'Value',
            'Privacy',
            'Terms',
            'FAQs',
            'Security',
            'Mobile',
            'Contact',
            'Partner',
            'Express',
            'Seller',
            'Spotlight',
            'Warehouse',
            'Deliver'
        ],
        categoriesLinks: [
            {
                title: 'Frequently Visited Categories',
                links: [
                    'Vegetables & Fruits',
                    'Dairy & Breakfast',
                    'Munchies',
                    'Cold Drinks & Juices',
                    'Instant & Frozen Food',
                    'Tea, Coffee & Health Drinks',
                    'Bakery & Biscuits',
                    'Sweet Tooth',
                    'Atta, Rice & Dal',
                    'Dry Fruits, Masala & Oil'
                ]
            },
            {
                title: 'Explore All Categories',
                links: [
                    'Sauces & Spreads',
                    'Chicken, Meat & Fish',
                    'Paan Corner',
                    'Organic & Premium',
                    'Baby Care',
                    'Pharma & Wellness',
                    'Cleaning Essentials',
                    'Home & Office',
                    'Personal Care',
                    'Ice Creams & Frozen Desserts'
                ]
            },
            {
                title: 'More Categories',
                links: [
                    'Pet Care',
                    'Beauty & Cosmetics',
                    'Books',
                    'Toys & Games',
                    'Print Store',
                    'See All..',
                ]
            }
        ],
        socialMediaLinks: [
            'Instagram',
            'Facebook',
            'Twitter',
            // ... add other social media links here
        ]
    };


    const handleMenuClick = ({ key }) => {
        setSelectedMenu(key);
        setSelectedCategory(null);
    };


    const handleCategoryClick = (category) => {
        setSelectedMenu('categoriesLinks');
        setSelectedCategory(category);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    selectedKeys={[selectedMenu]}
                    onClick={handleMenuClick}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key="usefulLinks">Useful Links</Menu.Item>
                    <Menu.Item key="categoriesLinks">Category Links</Menu.Item>
                    <Menu.Item key="socialMediaLinks">Social Links</Menu.Item>

                </Menu>
            </Sider>
            <Layout>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 20,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    {selectedMenu === 'usefulLinks' && (
                        <Row gutter={[16, 16]}>
                            {linksData.usefulLinks.map((link, index) => (
                                <Col key={index} xs={24} sm={12} md={8} lg={6}>
                                    {link}
                                </Col>
                            ))}
                        </Row>
                    )}
                    {selectedMenu === 'categoriesLinks' && (
                        <Row gutter={[16, 16]}>
                            {linksData.categoriesLinks.map((categorySection, sectionIndex) => (
                                <Col key={sectionIndex} xs={24} sm={12} md={8} lg={6}>
                                    <h3>{categorySection.title}</h3>
                                    {categorySection.links.map((link, index) => (
                                        <p key={index} onClick={() => handleCategoryClick(index)}>
                                            {link}
                                        </p>
                                    ))}
                                    {selectedMenu === 'socialMediaLinks' && (
                                        <Row gutter={[16, 16]}>
                                            {linksData.socialMediaLinks.map((socialLink, index) => (
                                                <Col key={index} xs={24} sm={12} md={8} lg={6}>
                                                    {socialLink}
                                                </Col>
                                            ))}
                                        </Row>
                                    )}
                                </Col>
                            ))}
                        </Row>
                    )}
                </Content>
            </Layout>
        </Layout >
    );
};

export default UsefulLinks;