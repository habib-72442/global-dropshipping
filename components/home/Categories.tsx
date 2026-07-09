export default function Categories() {
  const categories = [
    "Electronics",
    "Fashion",
    "Home & Living",
    "Beauty",
    "Sports",
    "Accessories",
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold text-gray-800">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-3 text-4xl">📦</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {category}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}