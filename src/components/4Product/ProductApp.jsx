import React, { useState } from "react";

const initialProduct = {
  title: "Product 1",
  description: "Product 1 description",
  image: {
    small: "",
    medium: "",
    big: "",
  },
};

export default function ProductApp() {
  const [product, setProduct] = useState(initialProduct);

  const updateProduct = (property, value) => {
    setProduct({
      ...product,
      // title: "Product 2",
      [property]: value, // whe can add dynamic attribute
    });
  };

  return (
    <div>
      <button onClick={() => updateProduct("title", "new title")}>
        Update
      </button>
      <p>{product.title}</p>
      <p>{product.description}</p>

      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
}
