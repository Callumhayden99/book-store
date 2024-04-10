"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        // Redirect to the login page if the user doesn't have a valid token
        router.push("/login");
        return;
      }
      try {
        const response = await fetch("/api/admin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setMessage(data.message);
        } else {
          // Redirect to the login page if the token is invalid
          router.push("/login");
        }
      } catch (error) {
        console.error("Error:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl text-red-600 font-bold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-red-600 text-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Welcome, Admin!
            </h2>
            <p className="text-gray-800">{message}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Recent Orders
            </h2>
            <p className="text-gray-800">
              Here you can view and manage the recent orders placed by customers.
              You can update the order status, track shipments, and handle any
              customer inquiries related to their orders.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Inventory Management
            </h2>
            <p className="text-gray-800">
              In this section, you can manage your book inventory. You can add
              new books, update book details, and track the stock levels. Keep
              your inventory up to date to ensure a smooth purchasing experience
              for your customers.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              User Management
            </h2>
            <p className="text-gray-800">
              Here you can manage the user accounts registered on your website.
              You can view user details, update user roles, and handle any user-related
              issues or inquiries. Ensure that your users have a seamless experience
              while using your platform.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Sales Analytics
            </h2>
            <p className="text-gray-800">
              Stay on top of your sales performance with our analytics dashboard.
              Monitor your sales trends, revenue, and popular products. Use these
              insights to make data-driven decisions and optimize your business
              strategies.
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 BookBank. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}