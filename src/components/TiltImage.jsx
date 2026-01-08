import Tilt from "react-parallax-tilt";

export default function TiltImage({ src, alt }) {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.05}
      transitionSpeed={800}
      className="rounded-2xl shadow-2xl"
    >
      <img src={src} alt={alt} className="rounded-2xl w-full" />
    </Tilt>
  );
}
