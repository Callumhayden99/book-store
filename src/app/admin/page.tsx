"use client"

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="bg-green-500 text-white p-4 mb-4">
        <h2 className="text-2xl font-bold">You have successfully logged in!</h2>
      </div>
      <div>{message}</div>
    </div>
  );
}
