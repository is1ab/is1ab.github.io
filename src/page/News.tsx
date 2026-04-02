import { useMemo, useState } from "react";
import news from "../assets/news.json";

type NewsItemType = {
  people: string;
  description: string;
  extraDescription?: string;
  time: string;
};

function getYearFromTime(time: string) {
  return time.split(".")[0];
}

function HonorTimelineItem({
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
  );
}

export function News() {
  const newsItems = news as NewsItemType[];
  const [selectedYear, setSelectedYear] = useState("全部");

  const years = useMemo(() => {
    const uniqueYears = Array.from(
      new Set(newsItems.map((item) => getYearFromTime(item.time)))
    );
    return uniqueYears.sort((a, b) => Number(b) - Number(a));
  }, [newsItems]);

  const filteredItems = useMemo(() => {
    if (selectedYear === "全部") return newsItems;
    return newsItems.filter((item) => getYearFromTime(item.time) === selectedYear);
  }, [newsItems, selectedYear]);

  const groupedItems = useMemo(() => {
    const groups: Record<string, NewsItemType[]> = {};

    filteredItems.forEach((item) => {
      const year = getYearFromTime(item.time);
      if (!groups[year]) groups[year] = [];
      groups[year].push(item);
    });

    return Object.entries(groups).sort((a, b) => Number(b[0]) - Number(a[0]));
  }, [filteredItems]);

  const scrollToYear = (year: string) => {
    const el = document.getElementById(`year-${year}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="container py-4" style={{ maxWidth: "1120px" }}>
      <div
        className="p-3 rounded-4 mb-4 text-center"
        style={{ backgroundColor: "#7a1b1b" }}
      >
        <h3 className="fw-bold text-white m-0">榮譽榜 Honors</h3>
      </div>

      {/* 上方介紹區：已移除外框 */}
      <div
        className="p-4 p-md-5 mb-4"
        style={{
          background:
            "linear-gradient(180deg, rgba(122,27,27,0.16), rgba(255,255,255,0.02))",
          borderRadius: "1.5rem",
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
            {/* 聯絡方式小框：已移除外框 */}
            <div
              className="p-4 h-100"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                borderRadius: "1.5rem",
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

      <div
        className="rounded-4 border p-4 mb-4"
        style={{
          backgroundColor: "#111",
          borderColor: "rgba(255,255,255,0.10)",
        }}
      >
        <div className="row g-3 align-items-center">
          <div className="col-12 col-lg-4">
            <div className="text-secondary small mb-2">年份篩選</div>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="form-select"
              style={{
                backgroundColor: "#0f0f0f",
                color: "#ffffff",
                borderColor: "rgba(255,255,255,0.12)",
              }}
            >
              <option value="全部">全部年份</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year} 年
                </option>
              ))}
            </select>
          </div>

          <div className="col-12 col-lg-8">
            <div className="text-secondary small mb-2">快速定位</div>
            <div className="d-flex flex-wrap gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => scrollToYear(year)}
                  className="px-3 py-2 rounded-pill fw-bold"
                  style={{
                    backgroundColor:
                      selectedYear === year
                        ? "rgba(255, 77, 79, 0.14)"
                        : "rgba(255,255,255,0.05)",
                    color: selectedYear === year ? "#ff6b6b" : "#e5e7eb",
                    border:
                      selectedYear === year
                        ? "1px solid rgba(255, 77, 79, 0.28)"
                        : "1px solid rgba(255,255,255,0.10)",
                    fontSize: "0.92rem",
                    cursor: "pointer",
                    outline: "none",
                  }}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column gap-4">
        {groupedItems.map(([year, items]) => (
          <section key={year} id={`year-${year}`}>
            <div
              className="px-4 py-3 rounded-4 mb-3"
              style={{
                backgroundColor: "rgba(122,27,27,0.85)",
              }}
            >
              <h4 className="fw-bold text-white m-0">{year} 年</h4>
            </div>

            <div className="d-flex flex-column gap-3">
              {items.map((item, index) => (
                <HonorTimelineItem
                  key={`${item.time}-${item.people}-${index}`}
                  people={item.people}
                  description={item.description}
                  extraDescription={item.extraDescription}
                  time={item.time}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
