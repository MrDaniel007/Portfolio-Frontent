import { useEffect, useRef, useState } from "react";

export default function Loader({ onFinish }) {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;

    if (!video || !audio) return;

    video.play().catch(() => {});
    audio.volume = 0.8;
    audio.play().catch(() => {});

    video.onended = () => {
      setHide(true);
      audio.pause();
      audio.currentTime = 0;

      setTimeout(() => {
        onFinish();
      }, 2000);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-[1500ms]
        ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      onClick={(e) => e.preventDefault()}
    >
      <video
        ref={videoRef}
        src="/helmet.mp4"
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />
      <audio ref={audioRef} src="/soundPower.mp3" preload="auto" />
    </div>
  );
}