import { useState } from "react";

type YouTubeLiteCardProps = {
  videoId: string;
  title: string;
};

function YouTubeLiteCard({ videoId, title }: YouTubeLiteCardProps) {
  const [loaded, setLoaded] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="col-12 col-md-6 py-3">
      <h3>{title}</h3>

      <div
        className="ratio ratio-16x9 rounded overflow-hidden position-relative"
        style={{ backgroundColor: "#111", cursor: "pointer" }}
      >
        {!loaded ? (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="w-100 h-100 border-0 p-0 position-relative"
            style={{ background: "none" }}
            aria-label={`播放 ${title}`}
          >
            <img
              src={thumbnail}
              alt={title}
              loading="lazy"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />

            <div
              className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center rounded-circle"
              style={{
                width: 72,
                height: 72,
                backgroundColor: "rgba(0,0,0,0.65)",
                color: "#fff",
                fontSize: 28,
              }}
            >
              ▶
            </div>

            <div
              className="position-absolute bottom-0 start-0 end-0 text-white p-2"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
                textAlign: "left",
              }}
            >
              {title}
            </div>
          </button>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            loading="lazy"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}

export function OOPL_2025() {
  const videos: YouTubeLiteCardProps[] = [
    { title: "#1 推箱子", videoId: "laPKN_hNAds" },
    { title: "#2 植物大戰僵屍", videoId: "54DPezZiEIg" },
    { title: "#3 雪人兄弟", videoId: "BZr6w2DVpQE" },
  ];

  return (
    <div className="d-flex flex-column gap-3">
      <h4 className="text-center">
        113-1 物件導向程式設計實習 Object-Oriented Programming Labs
      </h4>

      <div className="p-3 w-100" style={{ backgroundColor: "#7a1b1b" }}>
        <h5 className="fw-bold text-white m-0">成果展示</h5>
      </div>

      <div className="row">
        {videos.map((video) => (
          <YouTubeLiteCard
            key={video.videoId}
            title={video.title}
            videoId={video.videoId}
          />
        ))}
      </div>
    </div>
  );
}
