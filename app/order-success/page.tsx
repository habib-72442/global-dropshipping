export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="rounded-3xl bg-white p-10 text-center shadow-xl">

        <div className="text-6xl">
          🎉
        </div>

        <h1 className="mt-6 text-4xl font-extrabold text-gray-900">
          Order Placed Successfully!
        </h1>


        <p className="mt-4 text-lg text-gray-600">
          Thank you for shopping with GlobalDropshipping.
        </p>


        <a
          href="/"
          className="mt-8 inline-block rounded-xl bg-black px-8 py-3 font-bold text-white hover:bg-gray-800"
        >
          Continue Shopping
        </a>


      </div>

    </main>
  );
}