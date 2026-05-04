import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../api/api";

const VerifySuccess = () => {
    const navigate = useNavigate();
    const { setUser } = useAuth();

    useEffect(() => {
        const checkUser = async () => {
            try {
                const res = await API.get("/auth/me");

                setUser(res.data.user);

                setTimeout(() => {
                    navigate("/");
                }, 1000);

            } catch (err) {
                console.log("Verify error:", err);
                navigate("/login");
            }
        };

        checkUser();
    }, [navigate, setUser]);

    return (
        <div className="h-screen flex items-center justify-center bg-black text-white">
            <h1 className="text-2xl animate-pulse">
                Verifying login... 🚀
            </h1>
        </div>
    );
};

export default VerifySuccess;