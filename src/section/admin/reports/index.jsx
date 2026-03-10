import React from "react";
import Reports from "./Reports";
import ReportDownloads from "./ReportDownloads";

const IndexReports = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h5 className="font-medium">Reports</h5>
            </div>

            <Reports />
            <ReportDownloads />
        </div>
    );
};

export default IndexReports;
