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
        "適合希望深入技術領域，並透過實際研究累積競爭力的學生。在 Research Track 中，你將有機會：參與研究計畫並獲得研究津貼補助、以共同作者身份發表論文、出國參加國際研討會（部分補助）。適合對於升學（國/內外博士）、研究機構、資安研究員等有興趣的學生。",
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
        "適合希望透過實戰攻防與資安競賽快速累積技術實力的學生。在 CTF Track 中，你將有機會：參與國/內外 CTF 競賽、代表學校或實驗室參賽以爭取排名與獎金、參與漏洞獎勵（Bug bounty）計劃、與團隊合作解題。適合對資安實務、競賽、滲透工程師、或攻防演練攻擊手有興趣的學生。",
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
        "適合希望透過實際專案累積開發經驗，並與業界接軌的學生。 在 Project Track 中，你將有機會：參與產學合作計畫來獲得穩定的獎助金補助、實習機會、擔任軟體測試或開發系統相關的工程師、累積可用於求職的實務專案經驗。適合希望畢業後進入軟體產業發展的學生。",
    },
  ];

  return (
    <div className="container py-4 introduction" style={{ maxWidth: "1100px" }}>
      
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
            教授領導。本實驗室致力於培養具備「實戰能力」與「研究能力」的資安人才，提供三種發展路徑：
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
          學生需於加入後一個月內選擇主軌，並接受對應要求。
          </p> 
        </div>
      </div>
    </div>
  );
}
