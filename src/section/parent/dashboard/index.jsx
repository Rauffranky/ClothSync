import React from "react";
import Button from "../../../components/UI/button";
import ParentDashboardStats from "./dashboard-stats";
import DataTable from "../../../components/UI/table";
import Pagination from "../../../components/UI/pagination";

const ParentDashboard = () => {
    const todayLessonsColumns = [
        { header: "Student", key: "student", align: "left", sorting: true },
        { header: "Order ID", key: "orderId", align: "left", sorting: true },
        { header: "Time", key: "time" },
        { header: "Level", key: "level" },
        { header: "Subject", key: "subject" },
        {
            header: "Session",
            key: "session",
            render: (val) => {
                if (val === "Start Lesson") {
                    return <Button label=" Start Lesson" className="py-1! text-xs rounded-[6px]!" />;
                }
                return <span className="text-primary font-medium text-sm">{val}</span>;
            },
        },
    ];

    const todayLessons = [
        {
            id: 1,
            student: "Troy Adam",
            orderId: "#123",
            time: "15:00",
            level: "GCSE",
            subject: "Math",
            session: "Start Lesson",
        },
        {
            id: 2,
            student: "Troy Adam",
            orderId: "#123",
            time: "15:00",
            level: "GCSE",
            subject: "Math",
            session: "Starting in 2h 00mins",
        },
        {
            id: 3,
            student: "Troy Adam",
            orderId: "#1423",
            time: "15:00",
            level: "GCSE",
            subject: "Math",
            session: "Starting in 3h 00mins",
        },
        {
            id: 4,
            student: "Troy Adam",
            orderId: "#123",
            time: "15:00",
            level: "GCSE",
            subject: "Math",
            session: "Starting in 4h 00mins",
        },
    ];

    const upcomingLessonsColumns = [
        { header: "Student", key: "student", align: "left", sorting: true },
        { header: "Parent", key: "parent", align: "left", sorting: true },
        { header: "Date", key: "date" },
        { header: "Time", key: "time" },
        { header: "Level", key: "level" },
        { header: "Subject", key: "subject" },
    ];

    const upcomingLessons = [
        {
            id: 1,
            student: "Troy Adam",
            parent: "Estelle Adam",
            date: "Monday 14 OCT 2024",
            time: "15:00",
            level: "GCSE",
            subject: "Math",
        },
        {
            id: 2,
            student: "Alex Martin",
            parent: "Estelle Adam",
            date: "Monday 14 OCT 2024",
            time: "15:00",
            level: "GCSE",
            subject: "Math",
        },
        {
            id: 3,
            student: "Ethan whitehouse",
            parent: "Estelle Adam",
            date: "Monday 14 OCT 2024",
            time: "15:00",
            level: "GCSE",
            subject: "Math",
        },
        {
            id: 4,
            student: "Ethan whitehouse",
            parent: "Estelle Adam",
            date: "Monday 14 OCT 2024",
            time: "15:00",
            level: "GCSE",
            subject: "Math",
        },
    ];

    const paymentsColumns = [
        { header: "Date", key: "date", sorting: true, },
        { header: "Lesson ID", key: "lessonId", sorting: true, },
        { header: "Subject", key: "subject" },
        { header: "Amount", key: "amount" },
    ];

    const payments = [
        {
            id: 1,
            date: "28/09/2020",
            lessonId: "#123",
            subject: "Math",
            amount: "£100",
        },
        {
            id: 2,
            date: "28/09/2020",
            lessonId: "#123",
            subject: "Math",
            amount: "£100",
        },
        {
            id: 3,
            date: "28/09/2020",
            lessonId: "#123",
            subject: "Math",
            amount: "£100",
        },
        {
            id: 4,
            date: "28/09/2020",
            lessonId: "#123",
            subject: "Math",
            amount: "£200",
        },
        {
            id: 5,
            date: "28/09/2020",
            lessonId: "#123",
            subject: "Math",
            amount: "£200",
        },
        {
            id: 6,
            date: "28/09/2020",
            lessonId: "#123",
            subject: "Math",
            amount: "£200",
        },
        {
            id: 7,
            date: "28/09/2020",
            lessonId: "#123",
            subject: "Math",
            amount: "£200",
        },
        {
            id: 8,
            date: "28/09/2020",
            lessonId: "#123",
            subject: "Math",
            amount: "£200",
        },
    ];

    return (
        <div className="flex flex-col gap-8 pb-10 mt-5">
            <div className="flex justify-between items-center">
                <h4 className="font-bold">Dashboard</h4>
                <Button label="Change Bank Account" />
            </div>

            {/* Stats */}
            <ParentDashboardStats />

            {/* Dashboard Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Lessons */}
                <div className="lg:col-span-2 flex flex-col gap-8">
                    {/* Today's Lessons */}
                    <div>
                        <h2 className=" font-medium! text-gray-800 mb-4">
                            Today's Lessons
                        </h2>
                        <div padding="p-0" className="overflow-hidden ">
                            <DataTable
                                columns={todayLessonsColumns}
                                rows={todayLessons}
                                selectable={false}
                                headerBg="bg-white"
                                rowBg="bg-table"
                            />
                        </div>
                        <div className="flex justify-end mt-2">
                            <Pagination totalItems={4} itemsPerPage={5} currentPage={1} onPageChange={() => { }} />
                        </div>
                    </div>

                    {/* Upcoming Lessons */}
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
                </div>
                {/* Right Column: Payments */}
                <div>
                    <h2 className="font-medium! text-gray-800 mb-4">Payments</h2>
                    <div padding="p-0" className="overflow-hidden ">
                        <DataTable
                            columns={paymentsColumns}
                            rows={payments}
                            selectable={false}
                            headerBg="bg-white"
                            rowBg="bg-table"
                        />
                    </div>
                    <div className="flex justify-end mt-2">
                        <Pagination totalItems={8} itemsPerPage={5} currentPage={1} onPageChange={() => { }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentDashboard;
