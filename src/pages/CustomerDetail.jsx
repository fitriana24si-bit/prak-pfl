import { useParams } from "react-router-dom";
import customersData from "../data/customers";

export default function CustomerDetail() {

    // 🔥 TAMBAHAN: Ambil ID dari URL
    const { id } = useParams();

    // 🔥 TAMBAHAN: Cari customer berdasarkan ID
    const customer = customersData.find(
        (c) => c.id === parseInt(id)
    );

    // 🔥 TAMBAHAN: Jika customer tidak ditemukan
    if (!customer) {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold text-red-500">
                    Customer Not Found
                </h1>
            </div>
        );
    }

    return (
        <div className="p-6">

            {/* 🔥 TAMBAHAN: Judul halaman */}
            <h1 className="text-3xl font-bold mb-4">
                Customer Detail
            </h1>

            {/* 🔥 TAMBAHAN: Card detail customer */}
            <div className="bg-white p-6 rounded shadow space-y-2">

                <p>
                    <strong>ID:</strong> {customer.id}
                </p>

                <p>
                    <strong>Name:</strong> {customer.name}
                </p>

                <p>
                    <strong>Email:</strong> {customer.email}
                </p>

                <p>
                    <strong>Phone:</strong> {customer.phone}
                </p>

                <p>
                    <strong>Loyalty:</strong> {customer.loyalty}
                </p>

            </div>
        </div>
    );
}