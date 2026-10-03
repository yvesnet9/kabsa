type VideoSlotProps = {
  youtubeId?: string;
  title?: string;
};

// Accepte un identifiant seul ou une URL YouTube complète (watch, youtu.be, embed, shorts).
function extractYoutubeId(value: string): string {
  const match = value.match(
    /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/))([\w-]{11})/
  );
  return match ? match[1] : value.trim();
}

export default function VideoSlot({ youtubeId, title }: VideoSlotProps) {
  if (!youtubeId) {
    return <div className="video-slot">Vidéo à venir</div>;
  }

  const id = extractYoutubeId(youtubeId);

  return (
    <div className="video-embed">
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
