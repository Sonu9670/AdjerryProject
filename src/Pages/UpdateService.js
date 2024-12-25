import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import "./AddService.css";
import axios from "axios";
import { Link } from "react-router-dom";

const UpdateService = () => {
    const navigate = useNavigate();
    const { pincode } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState({});

    const handleCheckboxChange = (productId) => {
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
            .post("/api/update-services",
                { pincode, products: selectedProductIds },
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
            )
            .then((response) => {
                alert(response.data.message);
                navigate("/retailer/my-services");
            })
            .catch((err) => {
                alert(err.response?.data?.message || err.message);
            });
    };


    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const responseByPincode = await axios.get(`/api/getProductByPincode/${pincode}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                const productMap = {};
                responseByPincode.data.product.forEach((prod) => {
                    handleCheckboxChange(prod)
                });

                const responseAllProducts = await axios.get("/api/products", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                setProducts(responseAllProducts.data);
            } catch (err) {
                setError(
                    err.response ? err.response.data.message : "Error fetching data"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchInitialData();
    }, [pincode]);

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
                        readonly
                    />
                </div>
                {products && products.length !== 0 ? (
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
                        <button class="add-333" onClick={handleSubmit}>Update</button>
                    </div>
                ) : (
                    <p className="no-orders">Enter your Pincode.</p>
                )}
            </nav>
        </div>
    );
};

export default UpdateService;
