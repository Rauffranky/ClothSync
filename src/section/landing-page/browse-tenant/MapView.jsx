import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import CardOutline from "../../../components/UI/card/CardOutline";

// Custom marker icon creation function
const createCustomIcon = (imageUrl) => {
    return L.divIcon({
        html: `
            <div class="flex flex-col items-center hover:scale-110 transition-transform duration-300">
                <div class="relative">
                    <!-- Profile Pin Shape -->
                    <div class="w-12 h-12 rounded-full border-4 border-white shadow-lg overflow-hidden relative z-10 bg-white">
                        <img src="${imageUrl}" alt="Tenant" class="w-full h-full object-cover" />
                    </div>
                    <!-- Pin Indicator -->
                    <div class="w-0 h-0 border-l-[12px] border-l-translaundry border-r-[12px] border-r-translaundry border-t-[16px] border-t-white mx-auto -mt-2 shadow-sm relative z-0"></div>
                    <!-- Inner accent for pin -->
                    <div class="w-0 h-0 border-l-[8px] border-l-translaundry border-r-[8px] border-r-translaundry border-t-[12px] border-t-[#2E7D32] mx-auto -mt-[14px] relative z-20"></div>
                </div>
            </div>
        `,
        className: "custom-tenant-marker",
        iconSize: [48, 64],
        iconAnchor: [24, 64],
    });
};

const MapView = ({ tenants = [] }) => {
    // London coordinates
    const position = [51.505, -0.09];

    // Simulated coordinates for tenants in London area (Leaflet uses [lat, lng])
    const markers = [
        { position: [51.52877, -0.24168], image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
        { position: [51.53877, -0.14168], image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
        { position: [51.51877, -0.34168], image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
        { position: [51.54877, -0.04168], image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    ];

    return (
        <CardOutline padding="p-0" rounded="rounded-[24px]" border="border-none" shadow="shadow-lg" className="overflow-hidden relative h-[600px] w-full">
            <style>
                {`
                    .custom-tenant-marker {
                        background: translaundry;
                        border: none;
                    }
                    .leaflet-container {
                        width: 100%;
                        height: 100%;
                        z-index: 1;
                    }
                `}
            </style>

            <MapContainer center={position} zoom={11} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {markers.map((marker, idx) => (
                    <Marker
                        key={idx}
                        position={marker.position}
                        icon={createCustomIcon(marker.image)}
                    >
                    </Marker>
                ))}
            </MapContainer>
        </CardOutline>
    );
};

export default MapView;
