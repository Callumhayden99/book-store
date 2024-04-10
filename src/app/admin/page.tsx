import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
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

  return <div>{message}</div>;
}
