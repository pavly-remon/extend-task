import { FC, useState } from "react";

const AddProduct: FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price, description, imageUrl, category };

    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });

    const data = await response.json();
    console.log("Product created:", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Product Price" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Product Description"></textarea>
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Product Category" />
      <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Product Image URL" />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
