export default function PageHeader({ title, breadcrumb, children }) {

    // 🔥 TAMBAHAN: handle breadcrumb (string / array)
    const renderBreadcrumb = () => {
        if (Array.isArray(breadcrumb)) {
            return breadcrumb.join(" / ");
        }
        return breadcrumb;
    };

    return (
        <div className="mb-6">

            <div className="flex justify-between items-center mb-4">
                <div>

                    {/* 🔥 UBAH: dari hardcode → props.title */}
                    <div className="text-xl font-bold">
                        {title || "Dashboard"}
                    </div>

                    {/* 🔥 UBAH: dari hardcode → props.breadcrumb */}
                    <div className="text-gray-400 text-sm">
                        {breadcrumb ? renderBreadcrumb() : "Dashboard / Order List"}
                    </div>

                </div>

                {/* 🔥 UBAH: tombol jadi fleksibel pakai children */}
                {children ? (
                    children
                ) : (
                    <button className="bg-green-500 text-white px-4 py-2 rounded">
                        Add Order
                    </button>
                )}
            </div>

            {/* 🔥 IMPROVISASI 2 - QUICK STATS (TETAP ADA) */}
            <div className="grid grid-cols-3 gap-4">

                <div className="bg-white p-4 rounded shadow">
                    <p className="text-gray-400 text-sm">Total Orders</p>
                    <h2 className="text-xl font-bold">120</h2>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <p className="text-gray-400 text-sm">Customers</p>
                    <h2 className="text-xl font-bold">80</h2>
                </div>

                <div className="bg-white p-4 rounded shadow">
                    <p className="text-gray-400 text-sm">Revenue</p>
                    <h2 className="text-xl font-bold">$2,400</h2>
                </div>

            </div>
        </div>
    );
}