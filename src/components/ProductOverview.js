import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../composable/useApi";

const ProductOverview = (products) => {
  const BASE_URL = "https://teatimeapi-production.up.railway.app/api/data";
  const { id } = useParams();
  const { data, loading, error } = useApi(`${BASE_URL}/${id}`);
  console.log(products);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong: {error.message}</p>}
      {data && (
        <div>
          <img src={data.image} alt={data.name} />
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductOverview;
