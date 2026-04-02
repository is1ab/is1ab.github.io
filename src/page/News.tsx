import news from "../assets/news.json";

type NewsItemType = {
  people: string;
  description: string;
  extraDescription?: string;
  time: string;
};

function HonorCard({
  people,
  description,
  extraDescription,
  time,
}: NewsItemType) {
  return (
    <div
      className="rounded-4 border p-4"
      style={{
        backgroundColor: "#111",
        borderColor: "#7a1b1b",
      }}
    >
      <div className="d-flex flex-column gap-3">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-3">
          <div className="flex-grow-1">
            <div
              className="fw-bold"
              style={{
                color: "#ffffff",
                fontSize: "1.08rem",
                lineHeight: 1.8,
              }}
            >
              <span style={{ color: "#ff4d4f" }}>👑 賀！</span>{" "}
              <strong>{people}</strong>{" "}
              <span style={{ fontWeight: 400 }}>{description}</span>
            </div>

            {extraDescription ? (
              <div
                className="mt-2"
                style={{
                  color: "#38bdf8",
                  fontSize: "0.98rem",
                  lineHeight: 1.8,
                }}
              >
                {extraDescription}
              </div>
            ) : null}
          </div>

          <div
            className="px-3 py-2 rounded-pill fw-bold text-nowrap"
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              color: "#f3f4f6",
              border: "1px solid rgba(255,255,255,0.16)",
              fontSize: "0.95rem",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {time}
          </div>
        </div>
      </div>
    </div>
  );
}

export function News() {
  const newsItems = news as NewsItemType[];

  return (
    <div className="container py-4" style={{ maxWidth: "1100px" }}>
      <div
        className="p-3 rounded-4 mb-4 text-center"
        style={{ backgroundColor: "#7a1b1b" }}
      >
        <h3 className="fw-bold text-white m-0">榮譽榜 Honors</h3>
      </div>

      <div
        className="rounded-4 border p-4 p-md-5 mb-4"
        style={{
          backgroundColor: "#111",
          borderColor: "#7a1b1b",
        }}
      >
        <div className="d-flex flex-column gap-2">
          <div style={{ color: "#e5e7eb", lineHeight: 1.9, fontSize: "1rem" }}>
            若同學（包含本校五專、大學部、研究所）有意願參加「資安」相關競賽，
          </div>
          <div style={{ color: "#e5e7eb", lineHeight: 1.9, fontSize: "1rem" }}>
            本實驗室有團隊與業師協助，以提供相關課程訓練、解題、來栽培選手，
          </div>
          <div style={{ color: "#e5e7eb", lineHeight: 1.9, fontSize: "1rem" }}>
            歡迎寄信與我聯繫：
            <a
              href="mailto:cysun@ntut.edu.tw"
              className="text-decoration-none ms-1"
              style={{ color: "#ffffff", fontWeight: 700 }}
            >
              cysun@ntut.edu.tw
            </a>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column gap-3">
        {newsItems.map((item, index) => (
          <HonorCard
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
