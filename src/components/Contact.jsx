import React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/contact.css";
import Swal from "sweetalert2";

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const contactRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    useGSAP(() => {
        gsap.from(contactRef.current, {
            opacity: 0,
            y: 50,
            duration: 1.2,
            scrollTrigger: {
                trigger: contactRef.current,
                start: "top 80%", // Se activa cuando el 80% de la sección está en la pantalla
                toggleActions: "play none none none", // Reproduce la animación una vez
            }
        });
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                Swal.fire({
                  icon: "success",
                  title: "¡Mensaje enviado!",
                  text: "Tu mensaje fue enviado con éxito 🚀",
                  confirmButtonColor: "#C9AB81"
                });
                setFormData({ name: "", email: "", message: "" });
            } else {
                const errorData = await response.json();
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: `Hubo un error al enviar el mensaje: ${errorData.error}`,
                  confirmButtonColor: "#C9AB81"
                });
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
              icon: "error",
              title: "Error de conexión",
              text: "No se pudo conectar con el servidor.",
              confirmButtonColor: "#C9AB81"
            });
        }
    };

    return (
        <section id="contact" className="contact">
            <div ref={contactRef} className="contact-content">
                <h2 className="contact-title playfair-text">Contacto</h2>
                <div className="contact-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Su Nombre"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Su E-mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Su Mensaje"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="contact-button">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;