import { useNavigate } from "react-router-dom";

export function Introduction() {
  const navigate = useNavigate();

  const tracks = [
    {
      title: "研究型",
      subTitle: "Research Track",
      color: {
        background: "rgba(6, 147, 227, 0.10)",
        border: "rgba(6, 147, 227, 0.35)",
        title: "#7dd3fc",
      },
      description:
        "適合希望持續投入研究、撰寫論文、參與學術計畫與發展研究能力的學生。",
    },
    {
      title: "比賽型",
      subTitle: "CTF Track",
      color: {
        background: "rgba(252, 185, 0, 0.10)",
        border: "rgba(252, 185, 0, 0.35)",
        title: "#fcd34d",
      },
      description:
        "適合對實戰攻防、資安競賽與技術演練有高度興趣，並希望累積競賽經驗的學生。",
    },
    {
      title: "專案型",
      subTitle: "Project Track",
      color: {
        background: "rgba(255, 77, 79, 0.10)",
        border: "rgba(255, 77, 79, 0.35)",
        title: "#fda4af",
      },
      description:
        "適合希望參與系統開發、實作導向計畫與跨領域合作，強化工程實踐能力的學生。",
    },
  ];

  return (
    <div className="container py-4 introduction" style={{ maxWidth: "1100px" }}>
      <div
        className="p-3 rounded-4 mb-4 text-center"
        style={{ backgroundColor: "#7a1b1b" }}
      >
        <h3 className="fw-bold text-white m-0">簡介</h3>
      </div>

      <div
        className="rounded-4 border p-4 p-md-5"
        style={{
          backgroundColor: "#111",
          borderColor: "#7a1b1b",
        }}
      >
        <div className="d-flex flex-column gap-4">
          <p style={{ fontSize: "1.05rem", lineHeight: 2, color: "#ffffff" }}>
            國立臺北科技大學資訊工程系
            <span style={{ fontWeight: 800 }}> 資訊安全實驗室 </span>
            （is1ab@NTUT）於 2022 年 8 月成立，由
            <a
              className="text-decoration-underline"
              onClick={() => navigate("/Profile")}
              style={{ cursor: "pointer", color: "#ff4d4f" }}
            >
              {" "}
              孫勤昱{" "}
            </a>
            教授領導。本實驗室致力於培養「具備實戰能力與研究能力的資安人才」，提供三種發展路徑：
          </p>

          <div className="pt-2">
            <div className="row g-4">
              {tracks.map((track, index) => (
                <div className="col-12 col-md-4" key={index}>
                  <div
                    className="h-100 rounded-4 border p-4"
                    style={{
                      background: track.color.background,
                      borderColor: track.color.border,
                      minHeight: "260px",
                    }}
                  >
                    <div className="d-flex flex-column h-100">
                      <div
                        className="fw-bold mb-2"
                        style={{
                          color: track.color.title,
                          fontSize: "1.5rem",
                          lineHeight: 1.3,
                        }}
                      >
                        {track.title}
                      </div>

                      <div
                        className="mb-3"
                        style={{
                          color: "#e5e7eb",
                          fontSize: "1rem",
                          fontStyle: "italic",
                        }}
                      >
                        {track.subTitle}
                      </div>

                      <div
                        style={{
                          color: "#d1d5db",
                          lineHeight: 1.9,
                          fontSize: "0.98rem",
                        }}
                      >
                        {track.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-4 text-center"
              style={{
                color: "#d1d5db",
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
            >
            </div>
          </div>
          <p style={{ fontSize: "1.05rem", lineHeight: 2, color: "#ffffff" }}>
          學生需於入學後一個月內選擇主軌，並接受對應要求。
          </p> 
        </div>
      </div>
    </div>
  );
}
