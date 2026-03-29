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

export function OOPL_2024() {
  const videos: YouTubeLiteCardProps[] = [
    { title: "#1 貓咪大戰爭", videoId: "Bb6ux2hoFPo" },
    { title: "#2 推箱子", videoId: "ytFvYNvEOW0" },
    { title: "#3 They crawled from Uranus", videoId: "2WUOA5ck-ns" },
    { title: "#4 Jumping Frog", videoId: "sBpbBMIdeYw" },
    { title: "#5 淘金礦工 Gold Miner", videoId: "8izo9X4ZdQ0" }, 
    { title: "#6 東方紅魔鄉", videoId: "hAmqBIKF29U" },  
    { title: "#7 Candy Crush", videoId: "tPFcQoSho3Y" },
    { title: "#8 雷電 Raiden", videoId: "BXp1YJP-3Ks" },
    { title: "#12 冰火姊弟", videoId: "gCyHimbEtQ8" },
    { title: "#13 冰火姊弟", videoId: "SwZG6OKOS2M" },
    { title: "#15 快打磚塊", videoId: "Fkp6e27nuyA" },
    { title: "#17 PICO PARK", videoId: "mgOJhJoSbXU" },
    { title: "#18 TETR", videoId: "oxp1jpHja8Y" },
    { title: "#21 明日方舟", videoId: "eRVHAblXi1s" },
    { title: "#22 小朋友下樓梯", videoId: "wSTPT73RYi4" },
    { title: "#23 Sky Scraper Escape", videoId: "K4P0SpATuuI" },
    { title: "#25 元氣騎士", videoId: "MDQgh2Zf2WI" },
    { title: "#26 Dicey Dungeons", videoId: "1mc5X-eaLBQ" },
    { title: "#27 推冰塊", videoId: "V5-vb4ZCaLw" },

  ];

  return (
    <div className="d-flex flex-column gap-3">
      <h4 className="text-center" style={{ color: "red" }}>
        112-1 物件導向程式設計實習 Object-Oriented Programming Labs
      </h4>

      <div className="p-3 w-100" style={{ backgroundColor: "#7a1b1b" }}>
        <h5 className="fw-bold text-white m-0">助教團隊</h5>
      </div>

      <div className="row g-3 py-3">
        {[
          { name: "黃漢軒", email: "xuan910625.cs13@nycu.edu.tw" },
          { name: "黃政", email: "t110590003@ntut.org.tw" },
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
          { label: "修課人數", value: "92", unit: "人" },
          { label: "及格人數", value: "79", unit: "人" },
          { label: "通過率", value: "85.86", unit: "%" },
          { label: "最高分數", value: "100", unit: "分" },
          { label: "最低分數", value: "2", unit: "分" },
          { label: "平均分數", value: "86.16", unit: "分", highlight: true },
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

