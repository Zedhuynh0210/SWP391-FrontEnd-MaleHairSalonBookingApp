import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row, Button, Spin, Image, Pagination } from "antd";
import './index.css';
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

function Service() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [pageSize] = useState(8); // Số sản phẩm mỗi trang (2 dòng x 5 sản phẩm = 10 sản phẩm)
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập

  const api = "http://14.225.192.118:8080/api/Category/getall";

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

  // Xác định các sản phẩm hiển thị trên trang hiện tại
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = products
    .filter(service => !service.delete) // Lọc sản phẩm có delete là false
    .slice(indexOfFirstProduct, indexOfLastProduct);

  // Hàm xử lý khi thay đổi trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ padding: "10px" }}>
      {isLoggedIn ? <Navbar /> : <Header />}
      <h1>Services</h1>
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <Row gutter={[12, 12]}>
            <Image.PreviewGroup>
              {currentProducts.map((service) => (
                <Col key={service.id} xs={24} sm={12} md={8} lg={6} xl={6}>
                  <Card
                    style={{backgroundColor: 'lightgray'}}
                    hoverable
                    cover={
                      <Image
                        alt=""
                        src="https://media.istockphoto.com/id/640274128/vi/anh/th%E1%BB%A3-c%E1%BA%AFt-t%C3%B3c-s%E1%BB%AD-d%E1%BB%A5ng-k%C3%A9o-v%C3%A0-l%C6%B0%E1%BB%A3c.jpg?s=612x612&w=0&k=20&c=o82ARZnhqPdFAqU6WOWLnnP-Z7dGi22crXtevsOguAU="
                        style={{ height: 200, objectFit: "cover" }}
                      />
                    }
                    className="product-card"
                  >
                    <div className="product-content">
                      <h3>{service.categoryName}</h3>
                      <p>{service.categoryDescription}</p>
                      <Button type="primary">
                        View Details
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
            pageSize = {5}
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

export default Service;
