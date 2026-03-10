import React from "react";
import Chart from "react-apexcharts";

const StackedBarChart = ({ data, categories, colors, height = 250 }) => {
    // Prepare series data for ApexCharts stacked bar chart
    const series = categories.map((category) => ({
        name: category.label,
        data: data.map((item) => item[category.key] || 0),
    }));

    // Prepare categories (x-axis labels)
    const xAxisCategories = data.map((item) => item.label);

    const options = {
        chart: {
            type: "bar",
            stacked: true,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 4,
                borderRadiusApplication: "end",
            },
        },
        colors: categories.map((category) => colors[category.key]),
        xaxis: {
            categories: xAxisCategories,
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
        dataLabels: {
            enabled: false,
        },
    };

    return (
        <div className="w-full">
            <Chart options={options} series={series} type="bar" height={height} />
        </div>
    );
};

export default StackedBarChart;
