// app/terms.tsx
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to BookBank. By accessing or using our website, you agree to be
        bound by the following terms and conditions. Please read them carefully.
      </p>
      <h2 className="text-2xl font-bold mb-2">1. Intellectual Property</h2>
      <p className="mb-4">
        All content on this website, including text, graphics, logos, images,
        and software, is the property of BookStore and is protected by
        international copyright laws.
      </p>
      <h2 className="text-2xl font-bold mb-2">2. Product Information</h2>
      <p className="mb-4">
        We strive to provide accurate information about the products available
        on our website. However, we do not warrant that the product
        descriptions, prices, or other content on the site are accurate,
        complete, reliable, current, or error-free.
      </p>
      <h2 className="text-2xl font-bold mb-2">3. Ordering and Payment</h2>
      <p className="mb-4">
        By placing an order on our website, you agree to pay for the products or
        services ordered. We reserve the right to refuse or cancel any order at
        any time and for any reason.
      </p>
      <h2 className="text-2xl font-bold mb-2">4. Shipping and Delivery</h2>
      <p className="mb-4">
        We will make every effort to deliver your order in a timely manner.
        However, we are not responsible for delays caused by circumstances
        beyond our control, such as adverse weather conditions or carrier
        delays.
      </p>
      <h2 className="text-2xl font-bold mb-2">5. Returns and Refunds</h2>
      <p className="mb-4">
        If you are not satisfied with your purchase, please refer to our{" "}
        <Link href="/returns">
          <span className="text-red-600 hover:underline">Returns Policy</span>
        </Link>{" "}
        for information on how to return items and receive a refund.
      </p>
      <h2 className="text-2xl font-bold mb-2">6. User Conduct</h2>
      <p className="mb-4">
        You agree to use our website only for lawful purposes and in a manner
        that does not infringe upon the rights of others or restrict or inhibit
        their use and enjoyment of the site.
      </p>
      <h2 className="text-2xl font-bold mb-2">7. Modification of Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these terms and conditions at any time.
        Any changes will be posted on this page, and your continued use of the
        site after such changes will constitute your acceptance of the modified
        terms.
      </p>
      <p>
        If you have any questions about these terms and conditions, please{" "}
        <Link href="/contact">
          <span className="text-red-600 hover:underline">contact us</span>
        </Link>
        .
      </p>
    </div>
  );
}
