export default function Testimonials() {
  const reviews = [
    {
      name: "Ali Khan",
      comment: "Amazing products and super fast delivery!",
    },
    {
      name: "Sara Ahmed",
      comment: "Excellent quality and great customer support.",
    },
    {
      name: "John Smith",
      comment: "Highly recommended for online shopping.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          What Our Customers Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-xl border p-6 shadow-md"
            >
              <p className="text-gray-600 italic">
                "{review.comment}"
              </p>

              <h3 className="mt-6 text-xl font-bold">
                {review.name}
              </h3>

              <p className="text-yellow-500">
                ⭐⭐⭐⭐⭐
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}