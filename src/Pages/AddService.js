import React, { useState, useEffect } from "react";
import "./AddService.css";
import axios from "axios";

const AddService = () => {
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [pincode, setPincode] = useState("");
 const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (pincode.trim() !== "") {
      setShowCheckboxes(true);
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
                      <lable htmlFor={`product-${product.id}`}> 
                        <img src={product.image} alt={product.name} width="100" height="100" className="add-product-image"/>
                        </lable>
                        <div className="add-content-4913">
                          <h3 className="add-product-name">{product.name}</h3>
                          <p className="add-product-description">{product.description}</p>
                          <p className="add-price-1342">Starting at Rs {product.price}</p>
                        </div>
                        <input type="checkbox" id={`product-${product.id}`} />
                      </div>
                       
                    ))}
                  </div>
                </section>
              ))}
                <button class="add-333">Add</button>
            </div>
          ) : (
          <p className="no-orders">No Products found.</p>
          )
      )}
      </nav>
    </div>
  );
};

export default AddService;
