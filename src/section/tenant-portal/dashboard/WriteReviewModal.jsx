import React, { useState } from "react";
import { Star } from "lucide-react";
import Modal from "../../../components/UI/modal";
import Button from "../../../components/UI/button";
import GlobalInput from "../../../components/UI/Form/Input";

const WriteReviewModal = ({ isOpen, onClose, onSubmit }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [review, setReview] = useState("");

    const handleSubmit = () => {
        onSubmit({ rating, review });
        setReview("");
        setRating(0);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={<span className="text-[#2E7D32]">Write Review</span>}
            size="md"
            footer={
                <>
                    <Button
                        label="Cancel"
                        variant="white"
                        onClick={onClose}
                        className="!border-[#2E7D32] !text-[#2E7D32]"
                    />
                    <Button
                        label="Submit Review"
                        variant="primary"
                        onClick={handleSubmit}
                        className="bg-[#2E7D32]"
                    />
                </>
            }
        >
            <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => {
                        const index = i + 1;
                        return (
                            <Star
                                key={index}
                                size={32}
                                className={`cursor-pointer transition-colors ${index <= (hoverRating || rating)
                                        ? "fill-[#FFC107] text-[#FFC107]"
                                        : "fill-translaundry text-gray-300"
                                    }`}
                                onMouseEnter={() => setHoverRating(index)}
                                onMouseLeave={() => setHoverRating(0)}
                                onClick={() => setRating(index)}
                            />
                        );
                    })}
                </div>

                {/* Input Section */}
                <div className="space-y-2">
                    <label className="text-[#57606A] text-sm font-medium">
                        Write Review
                    </label>
                    <GlobalInput
                        multiline={true}
                        rows={6}
                        placeholder="Review here"
                        value={review}
                        onChange={setReview}
                        className="w-full !rounded-xl !bg-white"
                    />
                </div>
            </div>
        </Modal>
    );
};

export default WriteReviewModal;
