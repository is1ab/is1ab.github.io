import { useState } from "react";

function YouTubeLiteCard({ videoId, title }) {
  const [loaded, setLoaded] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="col-md-6 py-3">
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
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
