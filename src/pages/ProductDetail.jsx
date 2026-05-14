// 🔥 TAMBAHAN: Import useParams
import { useParams } from "react-router-dom";

// 🔥 TAMBAHAN: Import useEffect & useState
import { useEffect, useState } from "react";

// 🔥 TAMBAHAN: Import axios
import axios from "axios";

export default function ProductDetail() {

    // 🔥 TAMBAHAN: Ambil ID dari URL
    const { id } = useParams();

    // 🔥 TAMBAHAN: State product
    const [product, setProduct] = useState(null);

    // 🔥 TAMBAHAN: State error
    const [error, setError] = useState(null);

    // 🔥 TAMBAHAN: Fetch data berdasarkan ID
    useEffect(() => {

        axios
            .get(`https://dummyjson.com/products/${id}`)

            .then((response) => {

                if (response.status !== 200) {
                    setError(response.message);
                    return;
                }

                setProduct(response.data);
            })

            .catch((err) => {
                setError(err.message);
            });

    }, [id]);

    // 🔥 TAMBAHAN: Error handling
    if (error)
        return (
            <div className="text-red-600 p-4">
                {error}
            </div>
        );

    // 🔥 TAMBAHAN: Loading
    if (!product)
        return (
            <div className="p-4">
                Loading...
            </div>
        );

    return (

        <div className="p-6">

            {/* 🔥 CARD DETAIL PRODUCT */}
            <div className="bg-white rounded-xl shadow-lg max-w-lg mx-auto p-6">

                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="rounded-xl mb-4 w-full h-48 object-cover"
                />

                <h2 className="text-3xl font-bold mb-4">
                    {product.title}
                </h2>

                <p className="text-gray-600 mb-2">
                    Kategori: {product.category}
                </p>

                <p className="text-gray-600 mb-2">
                    Brand: {product.brand}
                </p>

                <p className="text-gray-800 font-bold text-2xl">
                    Harga: Rp {product.price * 1000}
                </p>

            </div>

        </div>
    );
}