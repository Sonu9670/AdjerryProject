import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./MyService.css"
import axios from "axios";

const MyService = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch orders on component mount
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/getMyRetailerProduct", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setData(response.data);
      } catch (err) {
        setError(
          err.response ? err.response.data.message : "Error fetching products"
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
    <div>
      <section className="category-MyService">
        <h2 className="MyService-title">My Service</h2>
        {data && data.length !== 0 ? (
          <div className="categories-MyService">
            {Object.entries(data).map(([categoryId, category]) => (
              <section className="category-MyService" key={categoryId}>
                <div>
                  <h2 className="MyService-title">{category.pincode}</h2>
                  <Link to={`/retailer/update-services/${category.pincode}`} className="btn" >Update</Link>
                </div>
                <div className="MyService-products-grid">
                  {category.product.map((object) => (
                    <div className="MyService-card-9231" key={object.id}>
                      <label htmlFor={`product-${object.id}`} style={{ cursor: "pointer" }}>
                        <img src={object.image} alt={object.name} width="100" height="100" className="MyService-product-image" />
                      </label>
                      <div className="MyService-content-4913">
                        <h3 className="MyService-product-name">{object.name}</h3>
                        <p className="MyService-product-description">{object.description}</p>
                      </div>
                    </div>

                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <p className="no-orders">No Services Found.</p>
        )}
      </section>
    </div>
  )
}

export default MyService
