const connection = require('../database/conn');

const Retailer = {};

Retailer.getAll = (callback) => {
    const query = `
        SELECT 
            retailer.*, 
            users.first_name AS first_name, 
            users.last_name AS last_name, 
            users.profle AS profle, 
            users.email AS user_email, 
            users.phone AS user_phone 
        FROM retailer
        JOIN users ON retailer.user_id = users.id
    `;

    connection.query(query, (err, results) => {
        callback(err, results);
    });
};

Retailer.addservices = (retailerData, callback) => {
    const { user_id, pincode, products } = retailerData;

    if (!products || !products.length) {
        return callback(new Error("No products provided."));
    }

    const checkPincodeQuery = `
        SELECT * FROM \`retailer\` 
        WHERE \`user_id\` = ? AND \`pincode\` = ?
    `;

    connection.query(checkPincodeQuery, [user_id, pincode], (err, results) => {
        if (err) {
            console.error("Error checking pincode:", err.message);
            return callback(err);
        }

        if (results.length > 0) {
            // Pincode already exists for the user
            return callback(null, { message: 'Pincode already added for this user.' });
        }

        const insertQuery = `
            INSERT INTO \`retailer\` (\`user_id\`, \`pincode\`, \`product\`)
            VALUES (?, ?, ?)
        `;

        const productJson = JSON.stringify(products); 

        connection.query(insertQuery, [user_id, pincode, productJson], (err, results) => {
            if (err) {
                console.error("Error creating retailer entries:", err.message);
                return callback(err);
            }

            callback(null, {
                message: `${products.length} products added successfully for pincode ${pincode}.`,
                insertedProducts: products,
            });
        });
    });
};

Retailer.checkUserPincode = (userId, pincode, callback) => {
    const query = `
        SELECT * FROM \`retailer\` 
        WHERE \`user_id\` = ? AND \`pincode\` = ?
    `;

    connection.query(query, [userId, pincode], (err, results) => {
        if (err) {
            console.error('Error checking user pincode:', err.message);
            return callback(err);
        }

        if (results.length > 0) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    });
};


module.exports = Retailer;
