import React from "react";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-content">
                <h2 className="contact-title">CONTACTO</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Nombre" className="contact-input" required />
                    <input type="email" placeholder="Correo electrónico" className="contact-input" required />
                    <textarea placeholder="Mensaje" className="contact-textarea" required></textarea>
                    <button type="submit" className="contact-button">Enviar</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;