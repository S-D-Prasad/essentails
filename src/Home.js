import React from 'react';
import './Home.css';
import SiteNavigation from './components/SiteNavigation';
import { Layout, Row, Col } from 'antd';
import { CodeOutlined,CopyrightOutlined } from '@ant-design/icons';
const { Footer } = Layout;

const Home = () => {
    return (
        <div className="home-container">
            <SiteNavigation />
            <Footer style={{ background: '#e80545', color: '#fff', textAlign: 'center' }}>
                <Row justify="space-between" align="middle">
                    <Col span={8} style={{ textAlign: 'left' }}>
                    <CopyrightOutlined />2024 ESSENTIALS. All Rights Reserved.
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                    <CodeOutlined />   poweredby@codejutsutech
                    </Col>
                </Row>
            </Footer>
        </div>
    );
};

export default Home;
