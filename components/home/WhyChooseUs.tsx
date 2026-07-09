export default function WhyChooseUs() {
  const features = [
    {
      icon: "🚚",
      title: "Fast Shipping",
      description: "Worldwide fast and secure delivery.",
    },
    {
      icon: "💰",
      title: "Best Prices",
      description: "Affordable prices with premium quality.",
    },
    {
      icon: "🛡️",
      title: "Secure Payment",
      description: "100% safe and trusted payment methods.",
    },
    {
      icon: "⭐",
      title: "Top Quality",
      description: "High-quality products from trusted suppliers.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Why Choose Us
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>

              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}