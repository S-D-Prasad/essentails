import React, { useState, useEffect } from "react";
import { Input, Button, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./SearchBar.css"; // Import your CSS file for additional styling
import ProductsMenu from "./ProductsMenu";

const { Search } = Input;

const SearchBar = ({ onSearch }) => {
  const placeholderTexts = [
    "Search Curd.....",
    "Search Rice.....",
    "Search Butter.....",
    "Search Milk.....",
  ];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % placeholderTexts.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [placeholderTexts.length]);

  const handleSearch = (value) => {
    // Perform the search operation using the provided callback function
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="search-bar-container">
      <Row justify="space-between" align="middle" className="row-container">
        <Col>
          <h2 style={{ margin: "0 20px",color:'white',border:'3px dashed white' }}>ESSENTIALS</h2>
        </Col>
        <Col span={6}>
          <Input
            prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder={placeholderTexts[currentPlaceholderIndex]}
          />
        </Col>
        <Col>
          <Button type="primary">Login</Button>
          <Button style={{ marginLeft: 8 }}>Register</Button>
        </Col>
      </Row>
      
        <ProductsMenu/>
      
    </div>
  );
};

export default SearchBar;
