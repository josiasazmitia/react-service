import { useState } from "react";
import { useRouter } from "next/router";
import { register } from "../services/authService";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        direccionEnvio: "",
        fechaNacimiento: ""  // 📌 Esto debe ser YYYY-MM-DD
    });

    const router = useRouter();
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Datos enviados:", formData);  // 📌 Verificar en consola
            await register(formData);
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            router.push("/login");
        } catch (error) {
            setError("Error en el registro. Intenta nuevamente.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Registro</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded"/>
                    <input type="text" name="apellido" placeholder="Apellido" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded"/>
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded"/>
                    <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded"/>
                    <input type="text" name="direccionEnvio" placeholder="Dirección de Envío" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded"/>
                    <input type="date" name="fechaNacimiento" onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded"/>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Registrarse</button>
                </form>
            </div>
        </div>
    );
}