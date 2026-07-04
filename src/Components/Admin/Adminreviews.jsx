import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  Trash2,
  MapPin,
  Mail,
  Star,
  MessageSquare,
  Clock,
} from "lucide-react";

const API_URL = "http://localhost:5000/api/reviews";

export default function AdminReviews() {
  const [pendingReviews, setPendingReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const getHeaders = () => {
    const token = localStorage.getItem("adminToken");

    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  };

  useEffect(() => {
    fetchPendingReviews();
  }, []);

  const fetchPendingReviews = async () => {
    try {
      const res = await fetch(`${API_URL}/pending`, {
        headers: getHeaders(),
      });

      if (res.status === 401 || res.status === 400) {
        localStorage.removeItem("adminToken");
        window.location.reload();
        return;
      }

      const data = await res.json();
      setPendingReviews(data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const handleApprove = async (id) => {
    try {
      const res = await fetch(
        `${API_URL}/${id}/approve`,
        {
          method: "PATCH",
          headers: getHeaders(),
        }
      );

      if (res.ok) {
        setPendingReviews((prev) =>
          prev.filter((review) => review._id !== id)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleReject = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this review permanently?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `${API_URL}/${id}`,
        {
          method: "DELETE",
          headers: getHeaders(),
        }
      );

      if (res.ok) {
        setPendingReviews((prev) =>
          prev.filter((review) => review._id !== id)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-white mt-4">
            Loading Reviews...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6">

      {/* Header */}
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">
            Review Management
          </h1>

          <p className="text-gray-400 mt-2">
            Manage and approve customer reviews
          </p>
        </div>

        {/* Stats Card */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">
                  Pending Reviews
                </p>

                <h2 className="text-3xl font-bold text-white">
                  {pendingReviews.length}
                </h2>
              </div>

              <Clock
                className="text-cyan-400"
                size={40}
              />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">
              Status
            </p>

            <h2 className="text-green-400 text-2xl font-bold">
              Active
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">
              Approval Queue
            </p>

            <h2 className="text-yellow-400 text-2xl font-bold">
              Running
            </h2>
          </div>
        </div>

        {/* Empty State */}
        {pendingReviews.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-12 text-center">

            <CheckCircle
              size={70}
              className="mx-auto text-green-400"
            />

            <h2 className="text-3xl text-white font-bold mt-4">
              All Reviews Processed
            </h2>

            <p className="text-gray-400 mt-3">
              There are no pending reviews awaiting approval.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {pendingReviews.map((review) => (
              <div
                key={review._id}
                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row justify-between gap-6">

                  {/* Review Info */}
                  <div className="flex-1">

                    <h2 className="text-2xl font-bold text-white">
                      {review.name}
                    </h2>

                    <div className="flex flex-wrap gap-4 mt-3">

                      <div className="flex items-center gap-2 text-gray-300">
                        <Mail size={16} />
                        {review.email}
                      </div>

                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin size={16} />
                        {review.location}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mt-4">
                      {[...Array(review.rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            size={18}
                            fill="currentColor"
                            className="text-yellow-400"
                          />
                        )
                      )}
                    </div>

                    <div className="mt-5 flex gap-2">
                      <MessageSquare
                        size={18}
                        className="text-cyan-400 mt-1"
                      />

                      <p className="text-gray-200 leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3 justify-center">

                    <button
                      onClick={() =>
                        handleApprove(review._id)
                      }
                      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                    >
                      <CheckCircle size={18} />
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        handleReject(review._id)
                      }
                      className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                    >
                      <Trash2 size={18} />
                      Delete
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}