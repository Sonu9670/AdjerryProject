import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./AddService.css";
import axios from "axios";
import { Link } from "react-router-dom";

const AddService = () => {
  const navigate = useNavigate();
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [pincode, setPincode] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState({});

  const handleCheckboxChange = (productId, categoryId) => {
    setSelectedProducts((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const handleSubmit = () => {
    const selectedProductIds = Object.keys(selectedProducts).filter(
      (id) => selectedProducts[id]
    );

    if (!selectedProductIds.length) {
      alert("Please select at least one product");
      return;
    }

    axios
      .post("/api/add-services",
        { pincode, products: selectedProductIds },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      )
      .then((response) => {
        alert(response.data.message);
        navigate("/my-services");
      })
      .catch((err) => {
        alert(`Error: ${err.response?.data?.message || err.message}`);
      });
  };


  const handleSearch = () => {
    if (pincode.trim() !== "") {

      fetch('/api/check-retailer-pincode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ pincode })
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.data) {
            setShowCheckboxes(false);
            alert(`If pincode already exists, don't show checkboxes`);
          } else {
            setShowCheckboxes(true);
          }
        })
        .catch((error) => {
          console.error('Error checking pincode:', error);
          setShowCheckboxes(false); // Default action if there's an error
        });
    }
  };


  useEffect(() => {
    // Fetch orders on component mount
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProducts(response.data);
      } catch (err) {
        setError(
          err.response ? err.response.data.message : "Error fetching orders"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading Service & Products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="add-container">
      <nav className="add-box-7850">
        <div className="add-box-7851">
          <input
            type="text"
            placeholder="Enter your Pincode Where you are provide services."
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <button onClick={handleSearch}>Add</button>
        </div>
        {showCheckboxes && (
          products && products.length !== 0 ? (
            <div className="categories-add">
              {Object.entries(products).map(([categoryId, category]) => (
                <section className="category-add" key={categoryId}>
                  <h2 className="add-title">{category.category_name}</h2>
                  <div className="add-products-grid">
                    {category.items.map((product) => (
                      <div className="add-card-9231" key={product.id}>
                        <label htmlFor={`product-${product.id}`} style={{ cursor: "pointer" }}>
                          <img src={product.image} alt={product.name} width="100" height="100" className="add-product-image" />
                        </label>
                        <div className="add-content-4913">
                          <h3 className="add-product-name">{product.name}</h3>
                          <p className="add-product-description">{product.description}</p>
                        </div>
                        <input
                          type="checkbox"
                          id={`product-${product.id}`}
                          checked={!!selectedProducts[product.id]}
                          onChange={() => handleCheckboxChange(product.id, categoryId)}
                          aria-label={`Select ${product.name}`}
                        />
                      </div>

                    ))}
                  </div>
                </section>
              ))}
              <Link to="/retailer/my-services">
  <button class="add-333" onClick={handleSubmit}>Add</button>
              </Link>
              
               
              
            </div>
          ) : (
            <p className="no-orders">Enter your Pincode.</p>
          )
        )}
      </nav>
    </div>
  );
};

export default AddService;
