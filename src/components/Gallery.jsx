import React from "react";

const Gallery = () => {  
    return (
        <section className="gallery" id="gallery">
            <div className="gallery-content">
                <h2 className="gallery-title">Galería</h2>
                <div className="gallery-grid">
                    <div className="gallery-item">
                        <img src="path/to/image1.jpg" alt="Artwork 1" className="gallery-image" />
                        <h3 className="gallery-item-title">Título de la obra 1</h3>
                    </div>
                    <div className="gallery-item">
                        <img src="path/to/image2.jpg" alt="Artwork 2" className="gallery-image" />
                        <h3 className="gallery-item-title">Título de la obra 2</h3>
                    </div>
                    {/* Add more gallery items as needed */}
                </div>
            </div>
        </section>
    );
}
export default Gallery;