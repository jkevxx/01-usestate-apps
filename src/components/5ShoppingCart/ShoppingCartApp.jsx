import React, { useState } from "react";

const initialCart = [
  { id: 1, title: "Product 1", description: "Desc 1" },
  { id: 2, title: "Product 2", description: "Desc 2" },
];

function ShoppingCartApp() {
  const [cart, setCart] = useState(initialCart);

  const deleteProduct = (productId) => {
    console.log(productId);
    const changeCart = cart.filter((product) => product.id !== productId);
    setCart(changeCart);
  };

  const addProduct = (newProduct) => {
    newProduct.id = Date.now();
    //if you want to add first newProduct change order [...cart, newProduct] otherwise [newProduct, ...cart]
    const changedCart = [newProduct, ...cart];
    setCart(changedCart);
    console.log(newProduct);
  };

  const updateProduct = (editProduct) => {
    const changedCart = cart.map((product) =>
      product.id === editProduct.id ? editProduct : product
    );
    setCart(changedCart);
  };

  return (
    <div>
      <button
        onClick={() =>
          addProduct({ title: "Product 3", description: "Desc 3" })
        }
      >
        Add
      </button>

      <button
        onClick={() =>
          updateProduct({
            id: 1,
            title: "New title",
            description: "new description",
          })
        }
      >
        Update
      </button>

      {cart.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.description}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
          <br />
        </div>
      ))}

      <br />
      <br />
      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
}

export default ShoppingCartApp;
