import './Gallery.css'
import GalleryCards from "./GalleryCards";
import { Fade } from "react-awesome-reveal";

const Gallery = () => {
    return (
        <div id="gallery">
            <Fade triggerOnce duration={2000}>
            </Fade>
            <Fade direction="right">
                <GalleryCards />
            </Fade>
        </div>
    )
}

export default Gallery