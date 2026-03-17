import React from "react";
import DataTable from "../../../components/UI/table";
import Pagination from "../../../components/UI/pagination";

const UpcomingLessons = () => {
    const upcomingLessonsColumns = [
        { header: "Student", key: "student", align: "left", sorting: true },
        { header: "Laundry", key: "laundry", align: "left", sorting: true },
        { header: "Date", key: "date" },
        { header: "Time", key: "time" },
        { header: "Level", key: "level" },
        { header: "Subject", key: "subject" },
    ];

    const upcomingLessons = [
        {
            id: 1,
            student: "Troy Adam",
            laundry: "Estelle Adam",
            date: "Monday 14 OCT 2024",
            time: "15:00",
            level: "GCSE",
            subject: "Math",
        },
        {
            id: 2,
            student: "Alex Martin",
            laundry: "Estelle Adam",
            date: "Monday 14 OCT 2024",
            time: "15:00",
            level: "GCSE",
            subject: "Math",
        },
        {
            id: 3,
            student: "Ethan whitehouse",
            laundry: "Estelle Adam",
            date: "Monday 14 OCT 2024",
            time: "15:00",
            level: "GCSE",
            subject: "Math",
        },
        {
            id: 4,
            student: "Ethan whitehouse",
            laundry: "Estelle Adam",
            date: "Monday 14 OCT 2024",
            time: "15:00",
            level: "GCSE",
            subject: "Math",
        },
    ];

    return (
        <div>
            <h2 className=" font-medium! text-gray-800 mb-4">
                Upcoming Lessons
            </h2>
            <div padding="p-0" className="overflow-hidden ">
                <DataTable
                    columns={upcomingLessonsColumns}
                    rows={upcomingLessons}
                    selectable={false}
                    headerBg="bg-white"
                    rowBg="bg-table"
                />
            </div>
            <div className="flex justify-end mt-2">
                <Pagination totalItems={4} itemsPerPage={5} currentPage={1} onPageChange={() => { }} />
            </div>
        </div>
    );
};

export default UpcomingLessons;
