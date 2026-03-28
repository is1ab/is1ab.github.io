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
    { title: "#6 超級瑪莉歐", videoId: "P7z0_l-20Nw" },
    { title: "#7 Arkanoid", videoId: "Ub7ujTLzSkE" },
    { title: "#8 LINE POP2", videoId: "XHcvAJtkjbQ" },
    { title: "#9 StreetFighter2", videoId: "O0-6IK6S8dQ" },
    { title: "#10 超級瑪莉歐", videoId: "XHkqqkJC4ww" },
    { title: "#11 Slay the Spire", videoId: "XV8XC-iT5PU" },
    { title: "#12 冰火姐弟", videoId: "t9KLGEF88u0" },
    { title: "#15 Dead Cells", videoId: "bTPk2EICwvU" },
    { title: "#16 像素探險", videoId: "0cSFS_ESCHQ" },
    { title: "#17 Helltaker", videoId: "vXxkwkVXeFc" },
    { title: "#18 Bloons Tower Defense 3", videoId: "T9QNXvGoIfM" },
    { title: "#19 沙威瑪傳奇", videoId: "5_GH_TfVqAY" },
    { title: "#20 黃金礦工", videoId: "yMarf-kNIkg" },
    { title: "#21 Celeste Pico-8", videoId: "hH6onAsK5Ow" },
    { title: "#22 冰火姐弟", videoId: "CBtPHynjq-k" },
    { title: "#23 Raiden V", videoId: "OtveSSCT5gY" },
    { title: "#24 魔塔", videoId: "LslHtGoy_wo" },
    { title: "#25 弓箭傳說", videoId: "xvRnfvhhz-E" },
    { title: "#27 壞壞冰淇淋", videoId: "i5H0XvVr9jw" },
    { title: "#28 要塞守護", videoId: "QrT6H2gMbCs" },
    { title: "#29 貓利歐 Cat Mario", videoId: "mS1RqoxvgCo" },
    { title: "#30 小朋友下樓梯", videoId: "g2Ito6cd91Y" },
    { title: "#31 Rabbit and Steel", videoId: "RVeaaazQheM" },
    { title: "#32 SCP Roguelike", videoId: "wxYOaH_ceoM" },
    { title: "#33 Dino Shift", videoId: "XKKt7C5M2ig" },
    { title: "#34 Helltaker", videoId: "bflfTjVDzi0" },
    { title: "#35 I Wanna Be The Boshy", videoId: "uKUJtmAFQcQ" },
    { title: "#36 イニシエダンジョン", videoId: "9JW75WmcZj0" },
    { title: "#37 Flappy Bird Go", videoId: "ltLw5K6TD8s" },
    { title: "#39 元氣騎士", videoId: "LZhon1BUfaY" },
    { title: "#40 超級瑪莉歐", videoId: "lWxqEgSVthI" },
    { title: "#41 Jetpack Joyride", videoId: "y3yFGmxWhbA" },
    { title: "#42 倉庫番", videoId: "tLQgQC-pIkI" },
    { title: "#43 植物大戰殭屍", videoId: "UxZ2-Vs2tzw" },
    { title: "#45 VVVVVV Demo", videoId: "qOoaAq9HqYU" },
    { title: "#46 植物大戰殭屍", videoId: "6xeqeABhcvE" },
    { title: "#48 Angry Birds", videoId: "XS8yBWl7c9A" },
    { title: "#49 惡魔城 Castlevania", videoId: "k_43rDtv_Qs" },
    { title: "#50 Bloons Tower Defense 2", videoId: "pXl74VS701E" },
    { title: "#51 超級瑪莉歐", videoId: "aCL4wka4cNI" },
    { title: "#52 超級瑪莉歐", videoId: "T1_pv5pJkD8" },
    { title: "#55 Helltaker", videoId: "Q3FFleOX7EA" },
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
