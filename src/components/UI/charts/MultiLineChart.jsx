import React from "react";
import Chart from "react-apexcharts";

const MultiLineChart = ({ data, lines, height = 250 }) => {
    // Prepare series data for ApexCharts
    const series = lines.map((line) => ({
        name: line.name,
        data: data.map((item) => item[line.dataKey]),
    }));

    // Prepare categories (x-axis labels)
    const categories = data.map((item) => item.label || item.date);

    const options = {
        chart: {
            type: "line",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            animations: {
                enabled: false, // Static chart, no animations
            },
        },
        colors: lines.map((line) => line.color),
        stroke: {
            curve: "smooth",
            width: 2,
        },
        xaxis: {
            categories: categories,
            labels: {
                style: {
                    fontSize: "12px",
                    colors: "#666",
                },
            },
            axisBorder: {
                color: "#e0e0e0",
            },
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: "12px",
                    colors: "#666",
                },
                formatter: (value) => {
                    if (value >= 1000) {
                        return `${(value / 1000).toFixed(0)}k`;
                    }
                    return value;
                },
            },
            axisBorder: {
                show: false,
            },
        },
        grid: {
            strokeDashArray: 3,
            borderColor: "#f0f0f0",
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (value) => {
                    if (value >= 1000) {
                        return `${(value / 1000).toFixed(1)}k`;
                    }
                    return value;
                },
            },
        },
        legend: {
            position: "bottom",
            horizontalAlign: "left",
            fontSize: "12px",
            markers: {
                width: 12,
                height: 12,
                radius: 2,
            },
            itemMargin: {
                horizontal: 10,
                vertical: 10,
            },
        },
        markers: {
            size: 0,
            hover: {
                size: 4,
            },
        },
    };

    return (
        <div className="w-full">
            <Chart options={options} series={series} type="line" height={height} />
        </div>
    );
};

export default MultiLineChart;
