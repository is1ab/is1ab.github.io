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
      <h3 style={{ color: "red" }}>{title}</h3>

      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%", // 16:9
          backgroundColor: "#111",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {!loaded ? (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label={`播放 ${title}`}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
              padding: 0,
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <img
              src={thumbnail}
              alt={title}
              loading="lazy"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "72px",
                height: "72px",
                borderRadius: "999px",
                backgroundColor: "rgba(0,0,0,0.65)",
                color: "#fff",
                fontSize: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ▶
            </div>

            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                color: "#fff",
                padding: "10px 12px",
                textAlign: "left",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        )}
      </div>
    </div>
  );
}

export function OOPL_2025() {
  const videos: YouTubeLiteCardProps[] = [
    { title: "#1 推箱子", videoId: "laPKN_hNAds" },
    { title: "#2 植物大戰殭屍", videoId: "54DPezZiEIg" },
    { title: "#3 雪人兄弟", videoId: "BZr6w2DVpQE" },
    { title: "#4 Pico Park", videoId: "yOhditHyBEQ" },
  ];

  return (
    <div className="d-flex flex-column gap-3">
      <h4 className="text-center" style={{ color: "red" }}>
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
