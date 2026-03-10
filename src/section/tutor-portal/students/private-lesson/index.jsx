import React, { useState } from "react";
import StudentTable from "./student-table";
import StudentDetails from "./student-details";
import CardOutline from "../../../../components/UI/card/CardOutline";
import RescheduleModal from "../../components/RescheduleModal";

const mockStudents = [
  {
    id: 1,
    firstName: "Tomy",
    lastName: "Adam",
    parents: "Mr. Alex Jones",
    pastLessons: [
      { date: "29/09/2025", time: "15:00", subject: "Math" },
      { date: "16/09/2025", time: "15:00", subject: "Math" },
      { date: "10/09/2025", time: "15:00", subject: "Math" },
    ],
    futureLessons: [
      { date: "29/09/2025", time: "15:00", subject: "Math" },
      { date: "16/09/2025", time: "15:00", subject: "Math" },
      { date: "10/09/2025", time: "15:00", subject: "Math" },
    ],
    notes: [
      { date: "29/09/2025", note: "Needs help with basic principles" },
      { date: "16/09/2025", note: "Good progress, but still needs work" },
      { date: "10/09/2025", note: "Good progress, but still needs work" },
    ],
  },
  {
    id: 2,
    firstName: "Tomy",
    lastName: "Adam",
    parents: "Mr. Alex Jones",
    pastLessons: [],
    futureLessons: [],
    notes: [],
  },
  // Adding more just to fill the table like in image
  ...Array(7)
    .fill(0)
    .map((_, i) => ({
      id: i + 3,
      firstName: "Tomy",
      lastName: "Adam",
      parents: "Mr. Alex Jones",
      pastLessons: [],
      futureLessons: [],
      notes: [],
    })),
];

const PrivateLessonSection = () => {
  const [selectedStudentId, setSelectedStudentId] = useState(1);
  const selectedStudent = mockStudents.find((s) => s.id === selectedStudentId);

  return (
    <div className="mt-5">
      <h4 className="font-bold">Private Lessons</h4>
      <CardOutline
        className="bg-[#F2F2F2]! mt-2 shadow-inner-full p-2! "
        border="border-none"
      >
        <div className="flex flex-col lg:flex-row gap-6 h-full">
          {/* Left Side: Table */}
          <div className="flex-1 overflow-hidden">
            <StudentTable
              students={mockStudents}
              selectedStudentId={selectedStudentId}
              onSelectStudent={(id) => setSelectedStudentId(id)}
            />
          </div>

          {/* Right Side: Details */}
          <div className="w-full lg:w-[500px] xl:w-[600px]">
            <StudentDetails student={selectedStudent} />
          </div>
        </div>
      </CardOutline>
    </div>
  );
};

export default PrivateLessonSection;
