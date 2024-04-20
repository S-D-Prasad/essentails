import React from 'react';
import { Card, Row, Col, Typography } from 'antd';

const { Text,Title } = Typography;

const AtStorePlaceCard = () => {
    return (
        <Card  hoverable style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)',background:'#d36786' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '30px', fontSize: '24px' }}>Only At Essentials.</Title>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={12} lg={12}>
                    <Row gutter={[16, 16]} justify="center">
                        <Col span={24}>
                            <Card hoverable style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                            <h3>Competitive Pricing</h3>
                                    <Text style={{ fontSize: '16px' }}>We're committed to bringing our customers wholesale pricing they can rely on. Every day.</Text>
                                 </Card>
                        </Col>
                        <Col span={24}>
                            <Card hoverable style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                            <h3>No Price Fluctuations</h3>
                                    <Text style={{ fontSize: '16px' }}>You can confidently order products whenever you need them and be assured that the price is the same. Every day.</Text>
                                </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={12} lg={12}>
                    <Row gutter={[16, 16]} justify="center">
                        <Col span={24}>
                            <Card hoverable style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                            <h3>Transparent Pricing</h3>
                                    <Text style={{ fontSize: '16px' }}>Customer feedback has told us that you love visible pricing! So, you can now see our pricing inc GST when you login to your account or when you visit one of our stores.</Text>
                                  </Card>
                        </Col>
                        <Col span={24}>
                            <Card hoverable style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                            <h3>Committed Supplier Partners</h3>
                                    <Text style={{ fontSize: '16px' }}>We work closely with our Network of suppliers to price our products competitively and introduce exciting new ones.</Text>
                                </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    );
};

export default AtStorePlaceCard;
