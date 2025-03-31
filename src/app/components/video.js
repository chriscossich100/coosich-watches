export default function VideoBanner( {watchBlogorVideo}) {
  return (
    <div>
      <iframe
        style={{ width: "100%" }}
        height="500"
        src={watchBlogorVideo}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
