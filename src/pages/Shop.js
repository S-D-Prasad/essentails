import React, { useState } from 'react';
import { Pagination, Card } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles
import data from '../data';

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Change this number as per your requirement

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.products.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = pageNumber => setCurrentPage(pageNumber);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Shop Page</h1>
      {/* Display products using Ant Design Card */}
      <div className="products" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {currentItems.map(product => (
          <Card
            key={product.id}
            hoverable
            style={{ height: 500, width: 300, margin: '20px 0' }}
            cover={<img alt={product.name} src={product.images[0]} style={{ height: '300px', objectFit: 'cover' }} />}
          >
            <Card.Meta title={product.name} description={product.description} />
            <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Price: ${product.price}</p>
          </Card>
        ))}
      </div>
      {/* Pagination using Ant Design Pagination component */}
      <div className="pagination" style={{ textAlign: 'center', marginTop: '20px' }}>
        <Pagination
          defaultCurrent={1}
          current={currentPage}
          total={data.products.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Shop;
