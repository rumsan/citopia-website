import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Video2 = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  return (
    <section
      className="video bg-img parallaxie"
      style={{ backgroundImage: "url(./img/citopia.jpeg)" }}
    >
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="vimeo"
          autoplay
          isOpen={isOpen}
          videoId="127203262"
          onClose={() => setOpen(false)}
        />
      )}
      <a
        className="vid valign"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <div className="vid-butn">
          <span className="icon">
            <i className="pe-7s-play"></i>
          </span>
        </div>
      </a>
    </section>
  );
};

export default Video2;
