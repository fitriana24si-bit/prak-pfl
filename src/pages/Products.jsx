import { useState } from "react";

// 🔥 TAMBAHAN: Import Link
import { Link } from "react-router-dom";

import PageHeader from "../components/PageHeader";
import productsData from "../data/products";

export default function Products() {

    const [showModal, setShowModal] = useState(false);

    return (
        <div id="dashboard-container">

            <PageHeader
                title="Products"
                breadcrumb={["Dashboard", "Products"]}
            >
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-purple-500 text-white px-4 py-2 rounded"
                >
                    Add Product
                </button>
            </PageHeader>

            {/* 🔥 TABLE */}
            <div className="bg-white p-4 rounded shadow">
                <table className="w-full text-left">

                    <thead>
                        <tr className="border-b">
                            <th>ID</th>
                            <th>Title</th>
                            <th>Code</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>

                    <tbody>
                        {productsData.map((item) => (
                            <tr key={item.id} className="border-b">

                                <td>{item.id}</td>

                                {/* 🔥 TAMBAHAN: Dynamic Route Link */}
                                <td>
                                    <Link
                                        to={`/products/${item.id}`}
                                        className="text-purple-500 hover:underline"
                                    >
                                        {item.title}
                                    </Link>
                                </td>

                                <td>{item.code}</td>
                                <td>{item.category}</td>
                                <td>{item.brand}</td>
                                <td>Rp {item.price}</td>
                                <td>{item.stock}</td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

            {/* 🔥 MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

                    <div className="bg-white p-6 rounded w-96">

                        <h2 className="font-bold mb-4">
                            Add Product
                        </h2>

                        <input placeholder="Product Name" className="border p-2 w-full mb-2"/>
                        <input placeholder="Code" className="border p-2 w-full mb-2"/>
                        <input placeholder="Category" className="border p-2 w-full mb-2"/>
                        <input placeholder="Brand" className="border p-2 w-full mb-2"/>
                        <input placeholder="Price" className="border p-2 w-full mb-2"/>
                        <input placeholder="Stock" className="border p-2 w-full mb-4"/>

                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-purple-500 text-white px-4 py-2 rounded w-full"
                        >
                            Save
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
}