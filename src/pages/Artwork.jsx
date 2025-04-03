import React from "react";

const Artwork = () => {
    return (
        <section className="artwork" id="artwork">
            <div className="artwork-content">
                <h2 className="artwork-title">Título de la obra</h2>
                <img src="path/to/artwork.jpg" alt="Artwork" className="artwork-image" />
                <p className="artwork-description">Descripción de la obra.</p>
            </div>
        </section>
    );
}

export default Artwork;