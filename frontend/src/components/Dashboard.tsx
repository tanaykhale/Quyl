import { useState } from "react";

const Dashboard = () => {
  const [form, setForm] = useState({
    name: "",
    cohort: "",
    courses: "",
    date: "",
    last_login: "17. Nov. 2024",
    status: true,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const existingData = JSON.parse(localStorage.getItem("formData") || "[]");

    existingData.push(form);

    localStorage.setItem("formData", JSON.stringify(existingData));

    console.log("Form Data:", existingData);
    alert("Form data saved to localStorage!");

    setForm({
      name: "",
      cohort: "",
      courses: "",
      date: "",
      last_login: "17. Nov. 2024",
      status: true,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 font-sans">
      <form
        className="bg-white shadow-md rounded-lg p-6 w-96"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center font-noto">
          Dashboard
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Cohort</label>
          <input
            type="text"
            name="cohort"
            value={form.cohort}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your cohort"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Courses</label>
          <input
            type="text"
            name="courses"
            value={form.courses}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your courses"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
