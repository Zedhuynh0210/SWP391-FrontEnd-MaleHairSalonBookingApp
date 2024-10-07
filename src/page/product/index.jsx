import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row, InputNumber, Button, Spin, Image, Pagination, message } from "antd";
import './index.css';
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState({}); // Cart state
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [pageSize] = useState(10); // Products per page (2 rows x 5 products = 10 products per page)
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập

  const api = "https://670027404da5bd237553603f.mockapi.io/Product";

  // Fetch products from mock API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(api);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle quantity change for each product in the cart input
  const handleQuantityChange = (productId, value) => {
    setCart({
      ...cart,
      [productId]: {
        ...(cart[productId] || {}),
        quantity: value || 1, // Default to 1 if no quantity
      },
    });
  };

  // Handle adding product to cart and updating quantity in mock API
  const handleAddToCart = async (product) => {
    const selectedQuantity = cart[product.id]?.quantity || 1;
    
    // Check if the available quantity is sufficient
    if (product.quantity < selectedQuantity) {
      message.error(`Only ${product.quantity} items available in stock.`);
      return;
    }

    // Reduce the quantity in the mock API
    try {
      const updatedProduct = { ...product, quantity: product.quantity - selectedQuantity };
      
      // Make a PUT request to update the product in the mock API
      await axios.put(`${api}/${product.id}`, updatedProduct);

      // Update local state for the product's quantity
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: updatedProduct.quantity } : p
        )
      );

      // Update cart state
      setCart({
        ...cart,
        [product.id]: {
          ...product,
          quantity: selectedQuantity, // Use the selected quantity for the cart
        },
      });

      message.success(`${product.name} added to cart!`);
    } catch (error) {
      console.error("Error updating product quantity:", error);
      message.error("Failed to update product quantity.");
    }
  };

  // Get the products for the current page
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Giả sử bạn có một hàm để kiểm tra trạng thái đăng nhập
  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập dựa trên token
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token");
      const loggedIn = token !== null; // Kiểm tra nếu token tồn tại
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      {isLoggedIn ? <Navbar /> : <Header />}
      <h1>Products</h1>
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <Row gutter={[16, 16]}>
            <Image.PreviewGroup>
              {currentProducts.map((product) => (
                <Col key={product.id} xs={24} sm={12} md={8} lg={4} xl={4}>
                  <Card
                    hoverable
                    cover={
                      <Image
                        alt={product.name}
                        src={product.image}
                        style={{ height: 200, objectFit: "cover" }}
                      />
                    }
                    className="product-card"
                  >
                    <div className="product-content">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <p>Price: ${product.price}</p>
                      <p>Available: {product.quantity} items</p>
                      <p>
                        Quantity:{" "}
                        <InputNumber
                          min={1}
                          max={product.quantity} // Limit max to available stock
                          value={cart[product.id]?.quantity || 1} // Show the current quantity in the cart or default to 1
                          onChange={(value) => handleQuantityChange(product.id, value)}
                        />
                      </p>
                      <Button
                        type="primary"
                        onClick={() => handleAddToCart(product)}
                        disabled={product.quantity === 0} // Disable if out of stock
                      >
                        {product.quantity === 0 ? "Out of Stock" : `Add to Cart (${cart[product.id]?.quantity || 1})`}
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Image.PreviewGroup>
          </Row>

          {/* Pagination component */}
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={products.length}
            onChange={handlePageChange}
            style={{ textAlign: "center", marginTop: "20px" }}
            showSizeChanger={false} // Hide size changer
          />
        </>
      )}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Product;
