export default function Newsletter() {
  return (
    <section className="bg-blue-700 py-16 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-bold">
          Subscribe to Our Newsletter
        </h2>

        <p className="mt-4 text-lg text-gray-200">
          Get updates about new products, discounts and exclusive offers.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg px-4 py-3 text-black outline-none"
          />

          <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-gray-200">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}