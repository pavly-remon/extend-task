import {FC, useState} from "react";
import Input from "@/components/Input.tsx";
import "@/styles/pages/ProductForm.scss";
import Dropdown from "@/components/Dropdown.tsx";
import useFetch from "@/hooks/useFetch.ts";
import {Product} from "@/store/shopSlice.ts";
import LoadingGIF from "@/components/Loading.tsx";
import Error from "@/components/Error.tsx";
import {useNavigate} from "react-router-dom";

const EditProduct: FC = () => {
    const navigate = useNavigate();
    const url = "http://localhost:3000/products"
    const [id, setId] = useState<number | null>();
    const [name, setName] = useState<string>();
    const [price, setPrice] = useState<number | null>(0);
    const [description, setDescription] = useState<string>();
    const [category, setCategory] = useState<string>();
    const [imageUrl, setImageUrl] = useState<string>();
    const {data, loading, error} = useFetch<Product[]>(url, {});
    const idList = data?.map(item => item.id.toString()) || [];

    const handleSelect = (value: string | null) => {
        if (value === null) {
            setId(value);

        } else {

            const product = data?.find(p => p.id === parseInt(value));
            setId(product!.id);
            setName(product!.name);
            setPrice(product!.price);
            setDescription(product!.description);
            setCategory(product!.category);
            setImageUrl(product!.imgUrl);
        }
    };
    const handleEdit = async (e) => {
        e.preventDefault();
        const product = {id, name, price, description, imgUrl: imageUrl, category};

        const response = await fetch(`${url}/${product.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        const data = await response.json();
        console.log("Product created:", data);
    };
    const handleDelete = async (e) => {
        e.preventDefault();
        navigate(0);
        if(id === null){
            alert("Select an id to delete")
            return;
        }
        const response = await fetch(`${url}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const data = await response.json();
        console.log("Product created:", data);
    };
    if (loading) return <LoadingGIF/>;
    if (error) return <Error msg={error}/>;
    return (
        <>
            <form className="add-product-form" onSubmit={handleEdit}>
                <Dropdown label="Choose Product..." options={idList} onSelect={handleSelect}/>
                <Input placeholder="Product Name" onChange={(e) => setName(e.target.value)} required={true} defaultValue={name}/>
                <Input defaultValue={price} placeholder="Product Price" type="number" onChange={(e) => setPrice(e.target.value)} required={true}/>
                <Input defaultValue={category} placeholder="Product Category" onChange={(e) => setCategory(e.target.value)} required={true}/>
                <Input defaultValue={imageUrl} placeholder="Product Image" onChange={(e) => setImageUrl(e.target.value)}/>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Product Description" required={true}></textarea>
                <div className="flex gap-4">

                    <button className="submit" type="submit">Edit Product</button>
                    <button className="delete" onClick={handleDelete}>Delete Product</button>
                </div>
            </form>
        </>
    );
};

export default EditProduct;
