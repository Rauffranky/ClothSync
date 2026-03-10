import React from "react";
import TutorCard from "../../tutor-portal/dashboard/TutorCard";
import SocialIcons from "../../../components/UI/SocialIcons";

const tutors = [
    {
        id: 1,
        name: "Ms. Alice",
        rating: 5,
        reviews: 12,
        subject: "GCSE Physics",
        studentsTutored: 13,
        location: "Warburton, UK",
        methods: { online: true, inPerson: true },
        description:
            "Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur.",
        price: 547,
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        isTopTutor: true,
        isVerified: true,
    },
    {
        id: 2,
        name: "Mr. John",
        rating: 5,
        reviews: 12,
        subject: "GCSE Physics",
        studentsTutored: 13,
        location: "Manchester, UK",
        methods: { online: true, inPerson: false },
        description:
            "Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur.",
        price: 547,
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        isTopTutor: true,
        isVerified: true,
    },
    {
        id: 3,
        name: "Ms. Amelia",
        rating: 5,
        reviews: 12,
        subject: "GCSE English",
        studentsTutored: 13,
        location: "Los Angeles, USA",
        methods: { online: false, inPerson: true },
        description:
            "Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur. Vivamus. Lorem ipsum dolor sit amet consectetur.",
        price: 547,
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        isTopTutor: true,
        isVerified: true,
    },
];

const AllTutors = () => {
    const [favorites, setFavorites] = React.useState(() => {
        try {
            const saved = localStorage.getItem("favoriteTutors");
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    });

    const toggleFavorite = (id) => {
        setFavorites((prev) => {
            const newFavorites = prev.includes(id)
                ? prev.filter((favId) => favId !== id)
                : [...prev, id];
            localStorage.setItem("favoriteTutors", JSON.stringify(newFavorites));
            return newFavorites;
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">

                <h4 className="font-bold my-4">All Tutors</h4>
                <div className="flex gap-2 items-center">
                    <h6>Share your profile:</h6>
                    <SocialIcons />
                </div>
            </div>
            {tutors.map((tutor) => (
                <TutorCard
                    key={tutor.id}
                    tutor={tutor}
                    isFavorite={favorites.includes(tutor.id)}
                    onToggleFavorite={toggleFavorite}
                />
            ))}
        </div>
    );
};

export default AllTutors;