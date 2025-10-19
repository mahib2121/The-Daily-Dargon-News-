import React from 'react';

const SocialLogin = () => {
    return (
        <div className="p-4">
            <h2 className="font-bold mb-4 text-lg">Login with Social</h2>

            <div className="flex flex-col gap-3">
                {/* Google Login */}
                <button className="btn bg-white text-black border border-gray-300 hover:bg-gray-100 flex items-center gap-2">
                    <svg
                        aria-label="Google logo"
                        width="18"
                        height="18"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                    </svg>
                    Continue with Google
                </button>

                {/* X (Twitter) Login */}
                <button className="btn bg-black text-white border border-black hover:bg-gray-900 flex items-center gap-2">
                    <svg
                        aria-label="X logo"
                        width="18"
                        height="18"
                        viewBox="0 0 300 271"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="currentColor"
                            d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
                        />
                    </svg>
                    Continue with X
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
