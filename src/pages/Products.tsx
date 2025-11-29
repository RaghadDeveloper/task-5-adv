import { Col, Form, InputGroup, Pagination, Row } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import PrimaryButton from "../components/PrimaryButton";
import { useEffect, useState } from "react";
import axios from "axios";
import type { ProductType } from "../interfaces";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Array<ProductType>>([]);
  const [searchKey, setSearchKey] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const productsToShow = products.filter((product) =>
    product.name.toLowerCase().includes(searchKey.toLowerCase())
  );

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = productsToShow.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(productsToShow.length / productsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchKey]);

  useEffect(() => {
    axios
      .get("https://dashboard-i552.onrender.com/api/items", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div className="w-100">
      <InputGroup className="mb-5 max-w-664 mx-auto ">
        <Form.Control
          placeholder="Search product by name "
          aria-label="Search"
          aria-describedby="basic-addon1"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <InputGroup.Text id="basic-addon1">
          <CiSearch />
        </InputGroup.Text>
      </InputGroup>

      <div className="d-flex justify-content-end mb-5">
        <PrimaryButton
          text="ADD NEW PRODUCT"
          type="button"
          onClick={() => {
            navigate("add-item");
          }}
        />
      </div>

      <Row className="row-gap-5  align-items-center justify-content-center mb-5">
        {currentProducts.map((product) => (
          <Col
            sm={12}
            md={6}
            lg={3}
            key={product.id}
            className="d-flex justify-content-center align-items-center"
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mb-5">
        <Pagination>
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="pagination-btn"
          />

          {[...Array(totalPages).keys()].map((num) => (
            <Pagination.Item
              key={num + 1}
              active={num + 1 === currentPage}
              onClick={() => setCurrentPage(num + 1)}
              className="pagination-btn"
            >
              {num + 1}
            </Pagination.Item>
          ))}

          <Pagination.Next
            disabled={currentPage === totalPages}
            className="pagination-btn"
            onClick={() => setCurrentPage((p) => p + 1)}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default Products;
