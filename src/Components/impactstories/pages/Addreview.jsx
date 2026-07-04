import { useState } from "react";
import { addReview } from "../services/reviewApi";

export default function AddReview() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    review: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    await addReview(form);

    alert("Review Added");
  };

  return (
    <section className="min-h-screen bg-slate-950 py-20">
      <div className="max-w-2xl mx-auto">
        <form
          onSubmit={submit}
          className="
          bg-white/5
          rounded-3xl
          p-10
          backdrop-blur-md
        "
        >
          <h2 className="text-4xl text-white mb-8">
            Share Your Experience
          </h2>

          <input
            placeholder="Full Name"
            className="w-full p-4 rounded-xl mb-4 bg-slate-900 text-white"
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            placeholder="Email"
            className="w-full p-4 rounded-xl mb-4 bg-slate-900 text-white"
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <textarea
            rows={5}
            placeholder="Your Review"
            className="w-full p-4 rounded-xl mb-4 bg-slate-900 text-white"
            onChange={(e) =>
              setForm({
                ...form,
                review: e.target.value,
              })
            }
          />

          <button
            className="
            bg-cyan-500
            px-8
            py-3
            rounded-xl
            text-white
          "
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
}