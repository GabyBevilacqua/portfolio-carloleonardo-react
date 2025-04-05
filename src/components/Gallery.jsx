import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/gallery.css";

const Gallery = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/obra/${id}`); // Redirige a la página de la obra con el ID
    };

    return (
        <section className="gallery" id="gallery">
            <div className="gallery-content">
                <div className="gallery-grid">
                    <div className="gallery-item"
                        onClick={() => handleClick("obra1")}
                    >
                        <img
                            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1741804386/tucusito01_yt9plq.jpg"
                            alt="Obra 1"
                            className="gallery-image"
                            data-id="obra1"
                        />
                        <h3 className="gallery-item-title">Obra 1</h3>
                    </div>
                    <div className="gallery-item"
                        onClick={() => handleClick("obra5")}
                    >
                        <img
                            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1741804386/arboleda01_lloybq.jpg"
                            alt="Obra 5"
                            className="gallery-image"
                            data-id="obra5"
                        />
                        <h3 className="gallery-item-title">Obra 5</h3>
                    </div>
                    <div className="gallery-item"
                        onClick={() => handleClick("obra13")}
                    >
                        <img
                            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1742578909/IMG_0133_vdrmjp.jpg"
                            alt="Obra 13"
                            className="gallery-image"
                            data-id="obra13"
                        />
                        <h3 className="gallery-item-title">Obra 13</h3>
                    </div>
                    <div className="gallery-item"
                        onClick={() => handleClick("obra14")}
                    >
                        <img
                            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1742578979/retorcida001_st6ja6.jpg"
                            alt="Obra 14"
                            className="gallery-image"
                            data-id="obra14"
                        />
                        <h3 className="gallery-item-title">Obra 14</h3>
                    </div>
                    <div className="gallery-item"
                        onClick={() => handleClick("obra2")}
                    >
                        <img
                            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1741890451/delicadeza03_xej2c4.jpg"
                            alt="Obra 2"
                            className="gallery-image"
                            data-id="obra2"
                        />
                        <h3 className="gallery-item-title">Obra 2</h3>
                    </div>
                    <div className="gallery-item"
                        onClick={() => handleClick("obra3")}
                    >
                        <img
                            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1741893334/mascara01_est8mf.jpg"
                            alt="Obra 3"
                            className="gallery-image"
                            data-id="obra3"
                        />
                        <h3 className="gallery-item-title">Obra 3</h3>
                    </div>
                    <div className="gallery-item"
                        onClick={() => handleClick("obra4")}
                    >
                        <img
                            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1742490538/ahogado01_rogwiy.jpg"
                            alt="Obra 4"
                            className="gallery-image"
                            data-id="obra4"
                        />
                        <h3 className="gallery-item-title">Obra 4</h3>
                    </div>
                    <div className="gallery-item"
                        onClick={() => handleClick("obra6")}
                    >
                        <img
                            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1742491156/001_o9cd4r.jpg"
                            alt="Obra 6"
                            className="gallery-image"
                            data-id="obra6"
                        />
                        <h3 className="gallery-item-title">Obra 6</h3>
                    </div>
                    <div className="gallery-item"
                        onClick={() => handleClick("obra7")}
                    >
                        <img
                            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1742491553/complaciendo_la_locura-01_w5xtfn.jpg"
                            alt="Obra 7"
                            className="gallery-image"
                            data-id="obra7"
                        />
                        <h3 className="gallery-item-title">Obra 7</h3>
                    </div>
                    <div className="gallery-item"
                        onClick={() => handleClick("obra8")}
                    >
                        <img
                            src="https://picsum.photos/id/25/200"
                            alt="Obra 8"
                            className="gallery-image"
                            data-id="obra8"
                        />
                        <h3 className="gallery-item-title">Obra 8</h3>
                    </div>
                    <div className="gallery-item"
                        onClick={() => handleClick("obra9")}
                    >
                        <img
                            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1742416603/aduccion1-03_iayvjr.jpg"
                            alt="Obra 9"
                            className="gallery-image"
                            data-id="obra9"
                        />
                        <h3 className="gallery-item-title">Obra 9</h3>
                    </div>
                    <div className="gallery-item"
                        onClick={() => handleClick("obra10")}
                    >
                        <img
                            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1742143800/lavida05_zigwtm.jpg"
                            alt="Obra 10"
                            className="gallery-image"
                            data-id="obra10"
                        />
                        <h3 className="gallery-item-title">Obra 10</h3>
                    </div>
                    <div className="gallery-item"
                        onClick={() => handleClick("obra11")}
                    >
                        <img
                            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1742138206/falsa07_xbkbpx.jpg"
                            alt="Obra 11"
                            className="gallery-image"
                            data-id="obra11"
                        />
                        <h3 className="gallery-item-title">Obra 11</h3>
                    </div>
                    <div className="gallery-item"
                        onClick={() => handleClick("obra12")}
                    >
                        <img
                            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1742136256/contucion03_gp1kei.jpg"
                            alt="Obra 12"
                            className="gallery-image"
                            data-id="obra12"
                        />
                        <h3 className="gallery-item-title">Obra 12</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Gallery;