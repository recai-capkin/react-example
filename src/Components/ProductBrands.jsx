import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductBrands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7225/api/Product/GetAllProductBrand'); // PORT ve URL'i kendi API'nize göre ayarlayın
        setBrands(response.data.data);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
      <h1>Ürün Markaları</h1>
      <ul>
        {brands.map((brand, index) => (
          <li key={index}>
            <h2>{brand.brandName}</h2>
            <p>{brand.description}</p>
            <img src={`https://localhost:7225/api/Product/GetProductBrandImage/${brand.imageUrl}`} alt={brand.brandName} /> {/* PORT ve URL'i kendi API'nize göre ayarlayın */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductBrands;
