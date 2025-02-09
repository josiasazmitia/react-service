import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getToken, logout } from "../services/authService";

export default function DashboardPage() {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = getToken();
        if (!token) {
            router.push("/login");
        } else {
            setAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    if (!authenticated) return null;

    return (
        <div>
            <h2>Bienvenido al Dashboard</h2>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
}