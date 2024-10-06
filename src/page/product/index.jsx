import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row, InputNumber, Button, Spin, Image, Pagination } from "antd";
import './index.css';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState({});
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [pageSize] = useState(10); // Số sản phẩm mỗi trang (2 dòng x 5 sản phẩm = 10 sản phẩm)

  const api = "https://670027404da5bd237553603f.mockapi.io/Product";

  // Hàm fetch sản phẩm từ mock API
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

  // Hàm xử lý khi thay đổi số lượng sản phẩm
  const handleQuantityChange = (productId, value) => {
    setCart({
      ...cart,
      [productId]: value || 0, 
    });
  };

  // Xác định các sản phẩm hiển thị trên trang hiện tại
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Hàm xử lý khi thay đổi trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ padding: "10px" }}>
    <Navbar/>
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
                      <p>
                        Quantity:{" "}
                        <InputNumber
                          min={1}
                          max={100}
                          value={cart[product.id] || 1}
                          onChange={(value) => handleQuantityChange(product.id, value)}
                        />
                      </p>
                      <Button type="primary">
                        Add to Cart ({cart[product.id] || 1})
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
            showSizeChanger={false} // Ẩn tùy chọn thay đổi kích thước
          />
        </>
      )}
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default Product;
