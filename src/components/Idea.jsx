import React, { useState } from "react";
import { FaEnvelope, FaCommentDots } from "react-icons/fa";

const Idea = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        let newErrors = {};

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            newErrors.email = "Invalid email format";
        }

        if (!message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setValidated(true);
        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, message }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Email sent successfully", data.message);
                setEmail("");
                setMessage("");
                setErrors({});
            } else {
                console.error("Error sending email", data.message);
            }
        } catch (error) {
            console.error("Error sending email", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[url('img/haveanawesomidea.png')] bg-cover bg-center py-6 min-h-screen flex flex-col items-center justify-center w-screen overflow-hidden">
            <div className="container mx-auto text-center text-white">
                <h1 className="text-6xl font-semibold">
                    Have an Awesome Project Idea? <br />
                    <span className="text-orange-500">Let's Discuss</span>
                </h1>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="mt-8">
                    {/* Email Input */}
                    <div className="flex items-center justify-center">
                        <div className="flex items-center border-2 border-orange-500 rounded-full overflow-hidden">
                            <div className="bg-white w-[4rem] h-[4rem] flex items-center justify-center rounded-full ml-2">
                                <FaEnvelope className="text-orange-500 text-2xl" />
                            </div>
                            <input
                                type="email"
                                className="lg:w-[45rem] h-[6rem] rounded-full pl-4 text-white outline-none"
                                placeholder="Enter Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-orange-500 text-white lg:px-10 px-3  py-6 rounded-full mr-2 disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </div>
                    {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}

                    {/* Message Input */}
                    <div className="flex items-center justify-center mt-6">
                        <div className="flex items-start border-2 border-orange-500 rounded-3xl overflow-hidden w-[50rem]">
                            <div className="bg-white w-[4rem] h-[4rem] flex items-center justify-center rounded-full ml-2 mt-2">
                                <FaCommentDots className="text-orange-500 text-2xl" />
                            </div>
                            <textarea
                                className="lg:w-full  h-[10rem] p-4 text-white outline-none bg-transparent resize-none"
                                placeholder="Enter your message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>
                    {errors.message && <p className="text-red-500 mt-2">{errors.message}</p>}
                </form>
            </div>
        </div>
    );
};

export default Idea;
