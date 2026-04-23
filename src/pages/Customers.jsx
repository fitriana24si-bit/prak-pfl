import { useState } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customers";

export default function Customers() {

    const [showModal, setShowModal] = useState(false);

    return (
        <div id="dashboard-container">

            <PageHeader
                title="Customers"
                breadcrumb={["Dashboard", "Customers"]}
            >
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Customer
                </button>
            </PageHeader>

            {/* 🔥 TABLE */}
            <div className="bg-white p-4 rounded shadow">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Loyalty</th>
                        </tr>
                    </thead>

                    <tbody>
                        {customersData.map((c) => (
                            <tr key={c.id} className="border-b">
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                                <td>{c.email}</td>
                                <td>{c.phone}</td>
                                <td>{c.loyalty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* 🔥 MODAL FORM */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
                    <div className="bg-white p-6 rounded w-96">
                        <h2 className="font-bold mb-4">Add Customer</h2>

                        <input placeholder="Name" className="border p-2 w-full mb-2"/>
                        <input placeholder="Email" className="border p-2 w-full mb-2"/>
                        <input placeholder="Phone" className="border p-2 w-full mb-2"/>

                        <select className="border p-2 w-full mb-4">
                            <option>Bronze</option>
                            <option>Silver</option>
                            <option>Gold</option>
                        </select>

                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}