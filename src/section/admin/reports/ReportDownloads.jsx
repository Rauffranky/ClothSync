import React from "react";
import { Save, FileText, Mail, Printer } from "lucide-react";
import DataTable from "../../../components/UI/table";
import Button from "../../../components/UI/button";

const ReportDownloads = () => {
    const columns = [
        {
            key: "name",
            header: "",
            align: "left",
            render: (val) => <span className="font-medium text-gray-700">{val}</span>
        },
        {
            key: "actions",
            header: "",
            align: "right",
            width: "60%",
            render: (_, row) => (
                <div className="flex items-center justify-end gap-3">
                    <Button
                        variant="white"
                        size="sm"
                        leftIcon={<Save size={16} />}
                        label="Save CSV"
                        className="text-black rounded-md"
                        onClick={() => console.log(`Save CSV: ${row.name}`)}
                    />
                    <Button
                        variant="white"
                        size="sm"
                        leftIcon={<FileText size={16} />}
                        label="Save PDF"
                        className="text-black rounded-md"
                        onClick={() => console.log(`Save PDF: ${row.name}`)}
                    />
                    <Button
                        variant="white"
                        size="sm"
                        leftIcon={<Mail size={16} />}
                        label="Email"
                        className="text-black rounded-md"
                        onClick={() => console.log(`Email: ${row.name}`)}
                    />
                    <Button
                        variant="primary"
                        size="sm"
                        leftIcon={<Printer size={16} />}
                        label="Print"
                        className="px-6! rounded-md"
                        onClick={() => console.log(`Print: ${row.name}`)}
                    />
                </div>
            ),
        }
    ];

    const rows = [
        { id: 1, name: "Laundry List" },
        { id: 2, name: "Tenant List" },
        { id: 3, name: "Cashflow Statement" },
        { id: 4, name: "Booking Trends" },
    ];

    return (
        <div className="mt-8 ">
            <DataTable
                columns={columns}
                // shadow="shadow-md"
                rows={rows}
                className=" shadow-lg"
                selectable={false}
                headerBg="hidden" // Hides the header row
                rowBg="bg-white border-b border-gray-100 last:border-none"
            />
        </div>
    );
};

export default ReportDownloads;
