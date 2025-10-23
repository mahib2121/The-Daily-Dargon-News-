import React from "react";
import { FaEye, FaStar } from "react-icons/fa";

const NewsDetailCard = ({ news }) => {
    const { title, rating, total_view, author, image_url, details } = news;

    return (
        <div className="bg-white shadow-md rounded-2xl overflow-hidden border">
            {/* Title */}
            <h2 className="text-2xl font-bold px-6 pt-6 leading-snug">
                {title}
            </h2>

            {/* Author Section */}
            {author && (
                <div className="flex items-center gap-3 px-6 py-3 border-b">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-800">{author.name}</h3>
                        <p className="text-gray-500 text-sm">
                            {new Date(author.published_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            )}

            {/* Image */}
            <img
                src={image_url}
                alt={title}
                className="w-full h-[400px] object-cover"
            />

            {/* Details */}
            <div className="p-6 text-gray-700 leading-relaxed text-justify">
                {details}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center px-6 pb-6">
                <div className="flex items-center gap-2 text-yellow-500">
                    <FaStar />
                    <span className="text-gray-800 font-medium">
                        {rating?.number ?? "N/A"}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span>{total_view ?? 0}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailCard;



