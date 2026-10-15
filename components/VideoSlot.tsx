type VideoSlotProps = {
  youtubeId?: string;
  videoSrc?: string; // fichier vidéo local (public/videos/…), format vertical
  poster?: string; // image affichée avant lecture de videoSrc
  title?: string;
  vertical?: boolean; // format 9:16 (YouTube Shorts)
};

// Accepte un identifiant seul ou une URL YouTube complète (watch, youtu.be, embed, shorts).
function extractYoutubeId(value: string): string {
  const match = value.match(
    /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/))([\w-]{11})/
  );
  return match ? match[1] : value.trim();
}

export default function VideoSlot({ youtubeId, videoSrc, poster, title, vertical }: VideoSlotProps) {
  if (youtubeId) {
    const id = extractYoutubeId(youtubeId);

    return (
      <div className={vertical ? "video-embed video-embed--vertical" : "video-embed"}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  if (videoSrc) {
    return (
      <div className="video-embed video-embed--vertical">
        <video src={videoSrc} poster={poster} title={title} controls playsInline preload="metadata" />
      </div>
    );
  }

  return <div className="video-slot">Vidéo à venir</div>;
}
