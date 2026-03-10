import React, { useState } from "react";
import CardOutline from "../../../components/UI/card/CardOutline";
import { SmartSelect } from "../../../components/UI/Form/Dropdown";
import DateNavigation from "../../../components/UI/DateNavigation";
import Chart from "react-apexcharts";

const RevenueChart = () => {
    const [period, setPeriod] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());

    // Format date range string
    const getDateRangeString = (date) => {
        const month = date.toLocaleString('en-US', { month: 'long' });
        const year = date.getFullYear();
        const startDay = date.getDate();
        const endDay = startDay + 6;
        return `${month} ${year}, ${startDay}-${endDay}th`;
    };

    // Date navigation handlers
    const handlePrevPeriod = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() - 7);
        setCurrentDate(newDate);
    };

    const handleNextPeriod = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 7);
        setCurrentDate(newDate);
    };

    const periodOptions = [
        { label: "week", value: "week" },
        { label: "month", value: "month" },
        { label: "year", value: "year" },
    ];

    // Sample data for the chart
    const categories = ["JUN 8", "JUN 15", "JUN 22", "JUN 29", "JUL 6", "JUL 13", "JUL 21"];

    // ApexCharts configuration
    const chartOptions = {
        chart: {
            type: 'area',
            height: 300,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.1,
                stops: [0, 90, 100],
            },
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'right',
            fontSize: '12px',
            fontFamily: 'inherit',
            markers: {
                width: 12,
                height: 12,
                radius: 12,
            },
            itemMargin: {
                horizontal: 12,
                vertical: 8,
            },
        },
        colors: ['#10b981', '#f59e0b', '#8b5cf6', '#ef4444'],
        xaxis: {
            categories: categories,
            labels: {
                style: {
                    fontSize: '12px',
                    fontFamily: 'inherit',
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '12px',
                    fontFamily: 'inherit',
                },
                formatter: (value) => `$${value}`,
            },
        },
        grid: {
            borderColor: '#e5e7eb',
            strokeDashArray: 4,
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 10,
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (value) => `$${value}`,
            },
        },
    };

    const chartSeries = [
        {
            name: 'Net Profit',
            data: [1200, 2100, 1800, 1400, 2800, 1000, 2200],
        },
        {
            name: 'Accrued Payout',
            data: [1500, 1800, 2500, 2200, 4200, 1200, 2800],
        },
        {
            name: 'Total Income',
            data: [4500, 3200, 3000, 2800, 5000, 5500, 3000],
        },
        {
            name: 'Total Payout',
            data: [3000, 1400, 1200, 1400, 2200, 4500, 800],
        },
    ];

    return (
        <CardOutline border="border-none" shadow="shadow-lg" className="p-6">
            {/* Header with Date Range and Period Selector */}
            <div className="flex items-center justify-between mb-6 flex-wrap">
                <DateNavigation
                    title={getDateRangeString(currentDate)}
                    onPrev={handlePrevPeriod}
                    onNext={handleNextPeriod}
                />

                <SmartSelect
                    options={periodOptions}
                    value={period}
                    onChange={setPeriod}
                    placeholder="week"
                    width="w-24"
                    rounded="rounded-lg"
                    backgroundColor="bg-gray-100"
                />
            </div>

            {/* ApexCharts Area Chart */}
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="area"
                height={300}
            />
        </CardOutline>
    );
};

export default RevenueChart;
