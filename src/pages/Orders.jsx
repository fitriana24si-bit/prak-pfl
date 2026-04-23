import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../data/orders";

export default function Orders() {

    const [showModal, setShowModal] = useState(false);

    return (
        <div id="dashboard-container">

            <PageHeader
                title="Orders"
                breadcrumb={["Dashboard", "Orders"]}
            >
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Add Order
                </button>
            </PageHeader>

            {/* TABLE */}
            <div className="bg-white p-4 rounded shadow">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {ordersData.map((o) => (
                            <tr key={o.id} className="border-b">
                                <td>{o.id}</td>
                                <td>{o.customer}</td>
                                <td>{o.status}</td>
                                <td>Rp {o.total}</td>
                                <td>{o.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
                    <div className="bg-white p-6 rounded w-96">
                        <h2 className="font-bold mb-4">Add Order</h2>

                        <input placeholder="Customer Name" className="border p-2 w-full mb-2"/>

                        <select className="border p-2 w-full mb-2">
                            <option>Pending</option>
                            <option>Completed</option>
                            <option>Cancelled</option>
                        </select>

                        <input placeholder="Total Price" className="border p-2 w-full mb-2"/>
                        <input type="date" className="border p-2 w-full mb-4"/>

                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-green-500 text-white px-4 py-2 rounded w-full"
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}