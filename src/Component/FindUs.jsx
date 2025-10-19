import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const FindUs = () => {
    return (
        <div>
            <div className="bg-white  p-5 ">
                <h2 className="text-xl font-bold mb-4">Find Us On</h2>

                <div className="flex flex-col gap-3">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 border rounded-lg p-3 hover:bg-blue-50 transition"
                    >
                        <FaFacebookF className="text-blue-600 text-lg" />
                        <span className="font-medium text-gray-700">Facebook</span>
                    </a>

                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 border rounded-lg p-3 hover:bg-blue-50 transition"
                    >
                        <FaTwitter className="text-sky-500 text-lg" />
                        <span className="font-medium text-gray-700">Twitter</span>
                    </a>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 border rounded-lg p-3 hover:bg-pink-50 transition"
                    >
                        <FaInstagram className="text-pink-500 text-lg" />
                        <span className="font-medium text-gray-700">Instagram</span>
                    </a>

                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 border rounded-lg p-3 hover:bg-red-50 transition"
                    >
                        <FaYoutube className="text-red-600 text-lg" />
                        <span className="font-medium text-gray-700">YouTube</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FindUs;