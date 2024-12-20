import { useEffect, useState } from "react";

export const Students = () => {
  const [form, setForm] = useState({
    name: "",
    cohort: "",
    courses: "",
    date: "",
    last_login: "",
    status: "",
  });

  const [students, setStudents] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setStudents(JSON.parse(storedData));
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAddStudent = (e: any) => {
    e.preventDefault();
    const newStudent = { ...form };

    const updatedStudents = [...students, newStudent];

    localStorage.setItem("formData", JSON.stringify(updatedStudents));

    setStudents(updatedStudents);

    setForm({
      name: "",
      cohort: "",
      courses: "",
      date: "",
      last_login: "",
      status: "",
    });
  };

  return (
    <>
      <div className="absolute top-[16px] left-[16px]">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-[149px] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#E9EDF1] text-sm font-bold leading-[22px] text-[#3F526E] hover:bg-gray-50 focus:outline-none"
        >
          AY 2024-25
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={toggleDropdown}
          className="ml-[9px] inline-flex justify-center w-[149px] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#E9EDF1] text-sm font-bold leading-[22px] text-[#3F526E] hover:bg-gray-50 focus:outline-none"
        >
          CSE 9
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={handleAddStudent}
          className="ml-[600px] inline-flex justify-center w-[197px] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#E9EDF1] text-sm font-bold leading-[22px] text-[#3F526E] hover:bg-gray-50 focus:outline-none"
        >
          + Add New Student
        </button>
      </div>

      <div className="w-full absolute top-[92px]">
        <table className="min-w-full table-auto border-separate ">
          <thead className="b">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-300">
                Student Name
              </th>
              <th className="px-4 py-2 text-left border-b border-gray-300">
                Cohort
              </th>
              <th className="px-4 py-2 text-left border-b border-gray-300">
                Courses
              </th>
              <th className="px-4 py-2 text-left border-b border-gray-300">
                Date joined
              </th>
              <th className="px-4 py-2 text-left border-b border-gray-300">
                Last Login
              </th>
              <th className="px-4 py-2 text-center border-b border-gray-300">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-left border-b border-gray-300">
                  {student.name}
                </td>
                <td className="px-4 py-2 text-left border-b border-gray-300">
                  {student.cohort}
                </td>
                <td className="px-4 py-2 text-left border-b border-gray-300">
                  {student.courses}
                </td>
                <td className="px-4 py-2 text-left border-b border-gray-300">
                  {student.date}
                </td>
                <td className="px-4 py-2 text-left border-b border-gray-300">
                  {student.last_login}
                </td>
                <td className="px-4 py-2 text-center border-b border-gray-300">
                  {student.status ? (
                    <span className="text-green-500 text-3xl">●</span>
                  ) : (
                    <span className="text-red-500">●</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
