export function Rule() {
  const highlights = [
    {
      title: "研究能力",
      desc: "建立閱讀論文、定義問題、設計方法與撰寫碩士論文的能力。",
    },
    {
      title: "實戰能力",
      desc: "透過 CTF、漏洞分析、工具開發與系統實作，培養可驗證的資安技術能力。",
    },
    {
      title: "團隊合作",
      desc: "在實驗室運作、技術分享與知識傳承中，建立專業合作與責任感。",
    },
  ];

  const coreValues = [
    "不是只培養會讀論文的人，也不是只培養會打比賽的人",
    "重視研究、實作與團隊合作三者的平衡",
    "希望學生在兩年內完成碩士學位，同時累積清楚且可驗證的成果",
    "重視主動學習、紀律、成長與長期職涯發展",
  ];

  const tracks = [
    {
      title: "Research Track",
      subtitle: "研究型",
      color: {
        title: "#7dd3fc",
        bg: "rgba(6, 147, 227, 0.10)",
        border: "rgba(6, 147, 227, 0.35)",
      },
      intro: "適合希望深化研究能力、對升學或研究型工作有興趣的學生。",
      goal: "培養獨立研究、文獻閱讀、問題定義、方法設計與論文寫作能力。",
      features: [
        "每週閱讀論文並整理重點",
        "定期 paper presentation 與研究報告",
        "發展研究題目、方法與評估設計",
        "以完整碩士論文與具投稿潛力成果為目標",
      ],
      outcome: "適合希望往博士班、研究單位、或具研發性質工作的學生。",
    },
    {
      title: "CTF Track",
      subtitle: "比賽型",
      color: {
        title: "#fcd34d",
        bg: "rgba(252, 185, 0, 0.10)",
        border: "rgba(252, 185, 0, 0.35)",
      },
      intro: "適合希望提升攻防實戰能力、並以資安業界職涯為目標的學生。",
      goal: "培養漏洞分析、逆向、滲透、 exploit、攻防與技術表達能力。",
      features: [
        "固定 CTF 訓練與技術累積",
        "定期撰寫 writeup、漏洞分析或技術筆記",
        "參與 CTF、攻防演練、漏洞研究或等值活動",
        "將技術成果轉化為可論文化之內容",
      ],
      outcome: "適合希望投入資安實務與攻防演練相關職缺的學生。",
    },
    {
      title: "Project Track",
      subtitle: "專案型",
      color: {
        title: "#fda4af",
        bg: "rgba(255, 77, 79, 0.10)",
        border: "rgba(255, 77, 79, 0.35)",
      },
      intro: "適合希望累積系統設計、工程實作與平台開發能力的學生。",
      goal: "培養需求分析、架構設計、系統實作、測試驗證與成果落地能力。",
      features: [
        "參與系統開發、工具研發或實驗室專案",
        "定期進行技術或專案進度報告",
        "重視設計文件、實作品質與評估方式",
        "將專案成果轉化為可論文化之內容",
      ],
      outcome: "適合希望往資安工程、產品研發、平台開發等方向發展的學生。",
    },
  ];

  const timeline = [
    {
      phase: "入學前 / 開學前",
      items: ["了解實驗室文化與訓練方向", "參與新生說明與預備訓練", "建立基本工具與環境"],
    },
    {
      phase: "碩一上",
      items: ["建立共通核心能力", "培養閱讀、報告與技術整理習慣", "觀察並探索適合的主軌方向"],
    },
    {
      phase: "碩一下",
      items: ["正式確認主軌", "開始主要產出", "提出碩論方向與 proposal 初稿"],
    },
    {
      phase: "碩二",
      items: ["深化主軌成果", "完成碩士論文", "整理作品、交接與銜接就業或升學"],
    },
  ];

  const suitableItems = [
    "願意持續學習、接受要求與回饋的人",
    "願意投入研究、實作或系統開發至少一個主軸的人",
    "願意參與團隊合作與知識分享的人",
    "希望畢業時不只拿到學位，也真的具備專業能力的人",
  ];

  const unsuitableItems = [
    "僅希望取得學位，不想提升能力者",
    "不願投入固定時間訓練或學習者",
    "不願配合基本 meeting、報告與團隊合作者",
    "只想獲得資源，而不願承擔基本責任者",
  ];

  const sectionTitleStyle = {
    color: "#ff6b6b",
    letterSpacing: "0.02em",
  } as const;

  const pageStyle = {
    background:
      "radial-gradient(circle at top, rgba(122,27,27,0.24) 0%, rgba(10,10,10,1) 34%, rgba(6,6,6,1) 100%)",
    minHeight: "100vh",
    color: "#f3f4f6",
  } as const;

  const heroStyle = {
    background:
      "linear-gradient(135deg, rgba(122,27,27,0.95) 0%, rgba(64,13,13,0.95) 56%, rgba(18,18,18,0.96) 100%)",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: "0 24px 60px rgba(0,0,0,0.32)",
  } as const;

  const panelStyle = {
    background: "rgba(17,17,17,0.82)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
    backdropFilter: "blur(4px)",
  } as const;

  const listTextStyle = {
    color: "#e5e7eb",
    lineHeight: 1.85,
    fontSize: "1rem",
  } as const;

  const mutedTextStyle = {
    color: "#cbd5e1",
    lineHeight: 1.8,
    fontSize: "0.98rem",
  } as const;

  const chipStyle = {
    display: "inline-block",
    padding: "0.35rem 0.75rem",
    borderRadius: "999px",
    fontSize: "0.85rem",
    fontWeight: 700,
    backgroundColor: "rgba(255,255,255,0.08)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.08)",
  } as const;

  return (
    <div style={pageStyle}>
      <div className="container py-4 py-md-5" style={{ maxWidth: "1240px" }}>
        {/* Hero */}
        <div className="rounded-5 p-4 p-md-5 mb-4 mb-md-5" style={heroStyle}>
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-8">
              <div className="mb-2">
                <span style={{ ...chipStyle, backgroundColor: "rgba(255,255,255,0.12)" }}>
                  is1ab @ NTUT
                </span>
              </div>
              <h1 className="fw-bold text-white mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}>
                資訊安全實驗室
              </h1>
              <div className="text-white fs-5 mb-3" style={{ opacity: 0.9 }}>
                Information Security Laboratory
              </div>
              <p className="mb-0" style={{ ...mutedTextStyle, color: "rgba(255,255,255,0.88)" }}>
                is1ab 是一個同時重視研究能力、實戰能力與團隊合作能力的資安實驗室。
                我們希望培養的不只是能畢業的學生，而是能帶著作品、能力與清楚方向走向下一階段的學生。
              </p>
            </div>

            <div className="col-12 col-lg-4">
              <div
                className="rounded-4 p-4"
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <div className="fw-bold text-white mb-3">我們重視的三件事</div>
                <div className="d-grid gap-3">
                  <div>
                    <div className="fw-bold" style={{ color: "#ffb4b4" }}>
                      01
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.88)" }}>完成有品質的碩士學位</div>
                  </div>
                  <div>
                    <div className="fw-bold" style={{ color: "#ffb4b4" }}>
                      02
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.88)" }}>建立可驗證的資安專業能力</div>
                  </div>
                  <div>
                    <div className="fw-bold" style={{ color: "#ffb4b4" }}>
                      03
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.88)" }}>在團隊中成長並留下可傳承成果</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="row g-4 mb-4 mb-md-5">
          {highlights.map((item, index) => (
            <div className="col-12 col-lg-4" key={index}>
              <div className="rounded-5 p-4 h-100" style={panelStyle}>
                <h3 className="fw-bold mb-3" style={sectionTitleStyle}>
                  {item.title}
                </h3>
                <div style={listTextStyle}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Core values */}
        <div className="rounded-5 p-4 p-md-5 mb-4 mb-md-5" style={panelStyle}>
          <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
            實驗室理念
          </h3>
          <ul className="mb-0 ps-4" style={listTextStyle}>
            {coreValues.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Tracks */}
        <div className="rounded-5 p-4 p-md-5 mb-4 mb-md-5" style={panelStyle}>
          <div className="mb-4">
            <h3 className="fw-bold mb-2" style={sectionTitleStyle}>
              培養路徑
            </h3>
            <div style={mutedTextStyle}>
              學生會在訓練過程中逐步確認自己的主軌方向。不同主軌有不同重點，但都會回到完整的碩士訓練與成果產出。
            </div>
          </div>

          <div className="row g-4">
            {tracks.map((track, index) => (
              <div className="col-12 col-xl-4" key={index}>
                <div
                  className="rounded-5 p-4 h-100"
                  style={{
                    backgroundColor: track.color.bg,
                    border: `1px solid ${track.color.border}`,
                  }}
                >
                  <div className="fw-bold mb-1" style={{ color: track.color.title, fontSize: "1.4rem" }}>
                    {track.title}
                  </div>
                  <div className="mb-3" style={{ color: "#d1d5db", fontStyle: "italic" }}>
                    {track.subtitle}
                  </div>

                  <div className="mb-3">
                    <div className="fw-bold mb-2 text-white">適合對象</div>
                    <div style={listTextStyle}>{track.intro}</div>
                  </div>

                  <div className="mb-3">
                    <div className="fw-bold mb-2 text-white">培養目標</div>
                    <div style={listTextStyle}>{track.goal}</div>
                  </div>

                  <div className="mb-3">
                    <div className="fw-bold mb-2 text-white">訓練特色</div>
                    <ul className="mb-0 ps-4" style={listTextStyle}>
                      {track.features.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="fw-bold mb-2 text-white">發展方向</div>
                    <div style={listTextStyle}>{track.outcome}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="rounded-5 p-4 p-md-5 mb-4 mb-md-5" style={panelStyle}>
          <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
            培養流程
          </h3>

          <div className="row g-4">
            {timeline.map((phase, index) => (
              <div className="col-12 col-md-6 col-xl-3" key={index}>
                <div
                  className="h-100 rounded-5 p-4"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="fw-bold mb-3"
                    style={{
                      color: "#ff7b7b",
                      fontSize: "1.15rem",
                    }}
                  >
                    {phase.phase}
                  </div>
                  <ul className="mb-0 ps-4" style={listTextStyle}>
                    {phase.items.map((item, i) => (
                      <li key={i} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suitable / unsuitable */}
        <div className="row g-4 mb-4 mb-md-5">
          <div className="col-12 col-xl-6">
            <div className="rounded-5 p-4 p-md-5 h-100" style={panelStyle}>
              <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
                適合加入 is1ab 的學生
              </h3>
              <ul className="mb-0 ps-4" style={listTextStyle}>
                {suitableItems.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-12 col-xl-6">
            <div className="rounded-5 p-4 p-md-5 h-100" style={panelStyle}>
              <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
                可能不適合加入的情況
              </h3>
              <ul className="mb-0 ps-4" style={listTextStyle}>
                {unsuitableItems.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="rounded-5 p-4 p-md-5" style={panelStyle}>
          <div
            className="rounded-4 p-4 p-md-5"
            style={{
              background: "linear-gradient(135deg, rgba(255,107,107,0.10) 0%, rgba(255,255,255,0.03) 100%)",
              border: "1px solid rgba(255,107,107,0.18)",
            }}
          >
            <h3 className="fw-bold mb-3" style={sectionTitleStyle}>
              結語
            </h3>
            <p className="mb-0" style={listTextStyle}>
              is1ab 期待的不是完美的學生，而是願意投入、願意成長、願意承擔責任的人。
              如果你希望在碩士兩年中，不只是完成學位，而是同時累積研究能力、技術能力與清楚成果，
              那麼這裡會是一個適合你的訓練環境。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
