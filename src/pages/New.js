import React, { useState } from 'react';
import { Row, Col, Card, Pagination, Typography, Modal, Carousel, Image } from 'antd';
import productsData from '../data';
import 'antd/dist/reset.css';
import '../Home.css';

const { Title, Paragraph } = Typography;

const New = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4; // Number of products per page
  const newProducts = productsData.products.filter(product => product.category === 'New');

  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = newProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setSelectedImageIndex(0); // Reset the image index when a new product is selected
    setModalVisible(true);
  };

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };

  const handleCarouselChange = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="new-products-container" style={{ alignItems: 'center', padding: '20px' }}>
      <Title level={2} style={{ textAlign: 'center', padding: '10px' }}>New Products</Title>
      <Row gutter={[8, 8]}>
        {currentProducts.map(product => (
          <Col key={product.id} xs={24} sm={12} md={12} lg={6}>
            <Card
              hoverable

              style={{ height: '100%' }}
              cover={<Image src={product.images[0]} alt={`Product ${product.name}`} height={450} width={400} />}
            >
              <Card.Meta title={product.name} description={product.description} onClick={() => handleImageClick(product)} />
              <Paragraph className="product-price">Price: ${product.price}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
      {newProducts.length > pageSize && (
        <div className="pagination-container" style={{ textAlign: 'center', marginTop: '20px' }}>
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={newProducts.length}
            onChange={handlePaginationChange}
            showSizeChanger={false}
          />
        </div>
      )}
      <Modal
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
        centered
        width={800}
        height={800}
      >
        {selectedProduct && (
          <div className="modal-content">
            <Row justify="center">
              <Col span={16}>
                <Carousel
                  accessibility
                  keyboard
                  autoplay
                  className="product-carousel"
                  dots={{ className: 'carousel-dots' }}
                  initialSlide={selectedImageIndex}
                  beforeChange={handleCarouselChange}
                  color='black'
                >
                  {selectedProduct.images.map((image, index) => (
                    <div key={index}>
                      <Image src={image} alt={`Product ${selectedProduct.name}`} />
                    </div>
                  ))}
                </Carousel>
              </Col>
              <Col span={8} style={{ marginTop: '20px' }}>
                <div className="product-details">
                  <Title level={4}>{selectedProduct.name}</Title>
                  <Paragraph>{selectedProduct.description}</Paragraph>
                  <Paragraph className="product-price">Price: ${selectedProduct.price}</Paragraph>
                </div>
                <Row gutter={[8, 8]} justify="center">
                  {selectedProduct.images.map((image, index) => (
                    <Col key={index}>
                      <div
                        className={index === selectedImageIndex ? 'active-thumbnail' : 'thumbnail'}
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index}`}
                          width={50}
                          height={50}
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default New;
