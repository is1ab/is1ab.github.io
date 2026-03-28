import { useState } from "react";

function YouTubeLiteCard({ videoId, title }) {
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

export function OOPL_2025() {
  const videos = [
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
        <h5 className="fw-bold text-white m-0">助教團隊</h5>
      </div>

      <div className="row g-3 py-3">
        {[
          { name: "黃漢軒", email: "xuan910625.cs13@nycu.edu.tw" },
          { name: "黃政", email: "t110590003@ntut.org.tw" },
          { name: "張意昌", email: "t111590004@ntut.org.tw" },
          { name: "陳世昂", email: "t111590009@ntut.org.tw" },
        ].map((ta, idx) => (
          <div className="col-12 col-md-6" key={idx}>
            <div
              className="h-100 p-3 rounded-3 border"
              style={{
                backgroundColor: "#111",
                borderColor: "#7a1b1b",
              }}
            >
              <div className="d-flex flex-column gap-2">
                <div>
                  <h6 className="mb-1 fw-bold text-white">{ta.name}</h6>
                  <small className="text-secondary">課程助教</small>
                </div>

                <a
                  href={`mailto:${ta.email}`}
                  className="text-decoration-none"
                  style={{ color: "#ffb3b3" }}
                >
                  {ta.email}
                </a>

                <div>
                  <a
                    href={`mailto:${ta.email}`}
                    className="btn btn-sm"
                    style={{
                      backgroundColor: "#7a1b1b",
                      color: "white",
                      border: "none",
                    }}
                  >
                    聯絡助教
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 w-100" style={{ backgroundColor: "#7a1b1b" }}>
        <h5 className="fw-bold text-white m-0">學期成績</h5>
      </div>

      <div className="row g-3 py-3">
        {[
          { label: "修課人數", value: "95", unit: "人" },
          { label: "及格人數", value: "84", unit: "人" },
          { label: "通過率", value: "88.42", unit: "%" },
          { label: "最高分數", value: "100", unit: "分" },
          { label: "最低分數", value: "0", unit: "分" },
          { label: "平均分數", value: "92.07", unit: "分", highlight: true },
        ].map((item, idx) => (
          <div className="col-12 col-sm-6 col-lg-4" key={idx}>
            <div
              className="h-100 p-3 rounded-3 border"
              style={{
                backgroundColor: item.highlight ? "#1a0f0f" : "#111",
                borderColor: "#7a1b1b",
              }}
            >
              <div className="text-secondary small mb-2">{item.label}</div>
              <div className="d-flex align-items-end gap-2">
                <span
                  className="fw-bold text-white"
                  style={{ fontSize: "2rem", lineHeight: 1 }}
                >
                  {item.value}
                </span>
                <span className="text-light mb-1">{item.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

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
