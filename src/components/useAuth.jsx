import { useEffect, useState } from "react";
import API from "../api/api";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {

            const res = await API.get("/auth/me");

            setUser(res.data.user);

        } catch {
            setUser(null);
        }

        setLoading(false);
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchUser();
    }, []);

    return { user, loading, setUser };
};

export default useAuth;