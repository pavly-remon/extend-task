import {FC, useState} from "react";
import Input from "@/components/Input.tsx";
import "@/styles/pages/ProductForm.scss";

const AddProduct: FC = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const clearInputs = () => {
        setName("");
        setPrice(0);
        setDescription("");
        setCategory("");
        setImageUrl("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = {name, price, description, imageUrl, category};

        const response = await fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        const data = await response.json();
        clearInputs();

    };

    return (
        <form className="add-product-form" onSubmit={handleSubmit}>
            <Input placeholder="Product Name" onChange={(e) => setName(e.target.value)} required={true}/>
            <Input placeholder="Product Price" type="number" onChange={(e) => setPrice(e.target.value)} required={true}/>
            <Input placeholder="Product Category" onChange={(e) => setCategory(e.target.value)} required={true}/>
            <Input placeholder="Product Image" onChange={(e) => setImageUrl(e.target.value)}/>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Product Description" required={true}></textarea>
            <button className="submit" type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
