import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const VerifySuccess = () => {
    const navigate = useNavigate();
    const { setUser } = useAuth();

    useEffect(() => {
        const checkUser = async () => {
            try {
                const res = await fetch("http://localhost:7000/api/auth/me", {
                    credentials: "include"
                });

                if (!res.ok) {
                    throw new Error("Not authenticated");
                }


                const data = await res.json();

                setUser(data.user);


                setTimeout(() => {
                    navigate("/");
                }, 1000);

            } catch {

                navigate("/login");
            }
        };

        checkUser();
    }, [navigate]);

    return (
        <div className="h-screen flex items-center justify-center bg-black text-white">
            <h1 className="text-2xl animate-pulse">
                Verifying login... 🚀
            </h1>
        </div>
    );
};

export default VerifySuccess;




