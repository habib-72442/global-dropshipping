import Link from "next/link";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

/* ============================================================
   Product Details — Global Drop Shipping
   - Image: aspect-square container (guaranteed to render)
   - Shared design system: .container-x .card .badge .btn-primary
   - Breadcrumb + category badge + rating + price + trust row
   - Fully responsive
   ============================================================ */

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  const originalPrice = Math.round(product.price * 1.4);
  const discount = Math.round(
    ((originalPrice - product.price) / originalPrice) * 100
  );

  return (
    <main className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="container-x">
        {/* ---------- Breadcrumb ---------- */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="transition hover:text-brand-700">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="transition hover:text-brand-700">
            Products
          </Link>
          <span>/</span>
          <span className="font-medium text-gray-900">
            {product.name}
          </span>
        </nav>

        {/* ---------- Main card ---------- */}
        <div className="card overflow-hidden">
          <div className="grid gap-0 md:grid-cols-2">
            {/* ============ LEFT: Image ============ */}
            <div className="bg-brand-50 p-6 sm:p-8">
              <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Thumbnail strip (decorative — same image) */}
              <div className="mt-4 flex justify-center gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-16 w-16 overflow-hidden rounded-lg border-2 bg-white ${
                      i === 0 ? "border-brand-600" : "border-transparent"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={`${product.name} view ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ============ RIGHT: Info ============ */}
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              {/* Category */}
              <span className="badge w-fit bg-brand-50 text-brand-700">
                {product.category}
              </span>

              {/* Name */}
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mt-3 flex items-center gap-2">
                <span className="text-lg text-accent-500">
                  {"★".repeat(product.rating)}
                  <span className="text-gray-300">
                    {"★".repeat(5 - product.rating)}
                  </span>
                </span>
                <span className="text-sm text-gray-400">
                  ({product.rating}.0) · In Stock
                </span>
              </div>

              {/* Price */}
              <div className="mt-5 flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-brand-600">
                  ${product.price}
                </span>
                <span className="text-xl text-gray-400 line-through">
                  ${originalPrice}
                </span>
                <span className="badge bg-green-100 text-green-700">
                  -{discount}%
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 leading-relaxed text-gray-600">
                {product.description}
              </p>

              {/* Divider */}
              <hr className="my-6 border-gray-100" />

              {/* Trust badges */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <TrustBadge
                  icon={<TruckIcon className="h-5 w-5" />}
                  title="Free Shipping"
                  subtitle="Orders over $50"
                />
                <TrustBadge
                  icon={<ShieldIcon className="h-5 w-5" />}
                  title="Secure Payment"
                  subtitle="100% protected"
                />
                <TrustBadge
                  icon={<RefreshIcon className="h-5 w-5" />}
                  title="Easy Returns"
                  subtitle="30-day policy"
                />
              </div>

              {/* Add to cart (DEFINITELY renders) */}
              <div className="mt-8">
                <AddToCartButton product={product} fullWidth />
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Back link ---------- */}
        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="btn btn-outline"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </main>
  );
}

/* ============================================================
   Small sub-components
   ============================================================ */
function TrustBadge({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="truncate text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}

/* ============================================================
   Icons (inline SVG)
   ============================================================ */
type IconProps = { className?: string };

function TruckIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function RefreshIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}
