import news from "../assets/news.json";

type NewsItemType = {
  people: string;
  description: string;
  extraDescription?: string;
  time: string;
};

function HonorTimelineItem({
  people,
  description,
  extraDescription,
  time,
}: NewsItemType) {
  return (
    <div className="position-relative">
      <div
        className="rounded-4 border p-4 p-md-4"
        style={{
          backgroundColor: "#111",
          borderColor: "rgba(255,255,255,0.10)",
        }}
      >
        <div className="row g-3 align-items-start">
          <div className="col-12 col-md-2 col-lg-2">
            <div className="d-flex flex-md-column align-items-start gap-2">
              <span
                className="px-3 py-2 rounded-pill fw-bold"
                style={{
                  backgroundColor: "rgba(255, 77, 79, 0.12)",
                  color: "#ff6b6b",
                  border: "1px solid rgba(255, 77, 79, 0.28)",
                  fontSize: "0.9rem",
                  whiteSpace: "nowrap",
                }}
              >
                榮譽
              </span>

              <div
                className="fw-bold"
                style={{
                  color: "#e5e7eb",
                  fontSize: "0.95rem",
                  letterSpacing: "0.02em",
                }}
              >
                {time}
              </div>
            </div>
          </div>

          <div className="col-12 col-md-10 col-lg-10">
            <div className="d-flex flex-column gap-2">
              <div
                style={{
                  color: "#ffffff",
                  fontSize: "1.08rem",
                  lineHeight: 1.85,
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "#ff4d4f", fontWeight: 800 }}>👑 賀！</span>{" "}
                <span style={{ fontWeight: 800 }}>{people}</span>{" "}
                <span>{description}</span>
              </div>

              {extraDescription ? (
                <div
                  className="rounded-3 px-3 py-2"
                  style={{
                    backgroundColor: "rgba(56, 189, 248, 0.08)",
                    border: "1px solid rgba(56, 189, 248, 0.18)",
                    color: "#7dd3fc",
                    fontSize: "0.96rem",
                    lineHeight: 1.8,
                  }}
                >
                  {extraDescription}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function News() {
  const newsItems = news as NewsItemType[];

  return (
    <div className="container py-4" style={{ maxWidth: "1120px" }}>
      <div
        className="p-3 rounded-4 mb-4 text-center"
        style={{ backgroundColor: "#7a1b1b" }}
      >
        <h3 className="fw-bold text-white m-0">榮譽榜 Honors</h3>
      </div>

      <div
        className="rounded-4 border p-4 p-md-5 mb-4"
        style={{
          background:
            "linear-gradient(180deg, rgba(122,27,27,0.16), rgba(255,255,255,0.02))",
          borderColor: "rgba(255,255,255,0.10)",
        }}
      >
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-8">
            <div
              className="fw-bold mb-3"
              style={{
                color: "#ffffff",
                fontSize: "clamp(1.3rem, 2vw, 1.8rem)",
                lineHeight: 1.4,
              }}
            >
              鼓勵學生參與資安競賽與實戰培訓
            </div>

            <div style={{ color: "#d1d5db", lineHeight: 1.9, fontSize: "1rem" }}>
              若同學（包含本校五專、大學部、研究所）有意願參加「資安」相關競賽，
              本實驗室有團隊與業師協助，可提供相關課程訓練、解題與選手培育資源。
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div
              className="rounded-4 p-4 h-100"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-secondary small mb-2">聯絡方式</div>
              <a
                href="mailto:cysun@ntut.edu.tw"
                className="text-decoration-none fw-bold"
                style={{
                  color: "#ffffff",
                  fontSize: "1.05rem",
                  wordBreak: "break-word",
                }}
              >
                cysun@ntut.edu.tw
              </a>
              <div
                className="mt-2"
                style={{ color: "#9ca3af", lineHeight: 1.8, fontSize: "0.95rem" }}
              >
                歡迎有興趣的同學來信聯繫。
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column gap-3">
        {newsItems.map((item, index) => (
          <HonorTimelineItem
            key={`${item.time}-${item.people}-${index}`}
            people={item.people}
            description={item.description}
            extraDescription={item.extraDescription}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
}
