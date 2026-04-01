export function Rule() {
  const principles = [
    "先完成學位，再追求加值成果。競賽、專案、實習與社團都不能取代碩士論文與學位進度。",
    "本實驗室不走單一路線，而採取：共通核心訓練、主軌培養、有限度公共任務三者並行。",
    "實驗室不是補習班，也不是打工場所；加入者需對自己的成果與團隊角色負責。",
    "資源依投入、紀律、產出與團隊貢獻進行配置，不採平均分配。",
    "管理重視透明與可預期，盡量避免只靠臨時裁量與個人情緒運作。",
  ];

  const commonCore = [
    "基本研究閱讀能力",
    "基本報告與表達能力",
    "基本技術紀錄與文書整理能力",
    "基本專案管理與進度回報能力",
    "基本團隊合作與知識傳承能力",
  ];

  const baseRequirements = [
    "每週 Group Meeting 原則上必須出席",
    "每月至少一次研究、技術或專案分享",
    "需固定提交進度摘要，延遲時須主動說明原因與補救計畫",
    "每學期需承擔一項公共任務",
    "所有成果需留下可交接之文件或紀錄",
    "必須完成碩士論文並通過口試",
  ];

  const frameworkCards = [
    {
      title: "共通核心訓練",
      subtitle: "Core Curriculum",
      color: "#ff6b6b",
      bg: "rgba(255, 107, 107, 0.10)",
      border: "rgba(255, 107, 107, 0.32)",
      items: [
        "所有學生必修，不因主軌而免除",
        "碩一上以建立研究、表達、紀錄、回報能力為主",
        "目標是避免只會比賽、不會研究；或只會研究、不會實作",
      ],
    },
    {
      title: "主軌制度",
      subtitle: "Primary Track",
      color: "#7dd3fc",
      bg: "rgba(125, 211, 252, 0.10)",
      border: "rgba(125, 211, 252, 0.32)",
      items: [
        "碩一上結束前完成能力盤點",
        "碩一下正式確認一個主軌",
        "主軌代表主要投入方向，但不免除論文與基本責任",
      ],
    },
    {
      title: "公共任務制度",
      subtitle: "Service Role",
      color: "#fcd34d",
      bg: "rgba(252, 211, 77, 0.10)",
      border: "rgba(252, 211, 77, 0.32)",
      items: [
        "每學期原則上一人一項任務",
        "任務以有限度、可交付、可驗證為原則",
        "公共任務與資源配置、可信任度、推薦支持連動",
      ],
    },
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
      positioning: "適合希望深化研究能力、對升學或研究型工作有興趣的學生。",
      goals: [
        "建立文獻閱讀與問題定義能力",
        "發展研究方法與評估設計能力",
        "產出具投稿潛力之研究成果",
      ],
      requirements: [
        "每週固定閱讀論文並整理重點",
        "每月至少一次 paper presentation 或研究進度報告",
        "持續整理 related work、研究缺口與方法設計",
        "配合時程完成 proposal、實驗與論文撰寫",
      ],
      outcomes: [
        "完整碩士論文",
        "至少一份具投稿潛力之研究稿件、技術報告或論文初稿",
        "完整文獻整理與研究紀錄",
      ],
      notes: ["研究型主軌不是只看論文，仍需具備清楚表達、回報與交接能力。"],
    },
    {
      title: "CTF Track",
      subtitle: "比賽型",
      color: {
        title: "#fcd34d",
        bg: "rgba(252, 185, 0, 0.10)",
        border: "rgba(252, 185, 0, 0.35)",
      },
      positioning: "適合希望提升實戰技術、攻防能力，並以資安實務職涯為目標的學生。",
      goals: [
        "建立可驗證之實戰能力",
        "透過競賽與技術分析累積深度作品",
        "將比賽或漏洞成果轉化為碩論題目與技術報告",
      ],
      requirements: [
        "每週投入固定且可追蹤的訓練時間",
        "定期撰寫 writeup、技術分析或漏洞筆記",
        "每月至少一次技術分享",
        "每學期參與 CTF、攻防演練、漏洞研究或等值活動",
        "提早將成果轉成可研究化、可論文化的內容",
      ],
      outcomes: [
        "完整碩士論文",
        "至少一類代表性成果：writeup、漏洞分析報告、工具、exploit 或技術研究紀錄",
        "可驗證之競賽、實戰或技術累積紀錄",
      ],
      notes: [
        "比賽成績本身不等同於碩士論文成果。",
        "若只參賽、不整理、不抽象化、不做評估，則不足以形成合格碩論。",
        "CTF Track 仍需完成研究閱讀、proposal 與論文寫作訓練。",
      ],
    },
    {
      title: "Project Track",
      subtitle: "專案型",
      color: {
        title: "#fda4af",
        bg: "rgba(255, 77, 79, 0.10)",
        border: "rgba(255, 77, 79, 0.35)",
      },
      positioning: "適合希望累積工程落地、系統設計與工具開發能力，並以業界實作為目標的學生。",
      goals: [
        "建立需求分析、系統設計、實作與驗證能力",
        "產出具完整功能與評估之專案成果",
        "將專案成果轉化為可論文化的碩士研究",
      ],
      requirements: [
        "參與實驗室專案、系統開發或指定技術題目",
        "每月至少一次專案進度報告",
        "配合時程完成設計文件、實作、測試與評估",
        "專案需留下可維護、可展示、可交接之紀錄",
      ],
      outcomes: [
        "完整碩士論文",
        "一項具完整設計、實作、驗證與文件之系統或專案",
        "可展示之工程成果與交接文件",
      ],
      notes: [
        "專案完成不等同於論文完成。",
        "若只有開發、沒有問題定義、方法說明與評估設計，則不足以形成合格碩論。",
      ],
    },
  ];

  const timeline = [
    {
      phase: "入學前 / 開學前",
      badge: "Phase 0",
      items: [
        "參與新生說明與預備訓練",
        "了解實驗室制度與畢業要求",
        "建立基礎環境與工具鏈",
        "開始參與 Group Meeting（必要時可線上）",
        "此階段不正式選 Track，只做能力觀察與基礎準備",
      ],
    },
    {
      phase: "碩一上",
      badge: "Phase 1",
      items: [
        "完成共通核心訓練",
        "每週 meeting、每月短報告",
        "完成至少一次正式投影片報告",
        "完成至少一次 written summary / 文獻整理 / writeup",
        "參與一項小型公共任務",
        "與教授完成期中與期末檢視",
      ],
    },
    {
      phase: "碩一下",
      badge: "Phase 2",
      items: [
        "正式確認主軌",
        "確立碩論主題方向",
        "完成 proposal 初版",
        "完成主軌第一個正式成果",
        "參與一項公共任務",
      ],
    },
    {
      phase: "碩二上",
      badge: "Phase 3",
      items: [
        "持續完成主軌主要產出",
        "完成碩論主要章節初稿",
        "完成一次正式口頭進度審查",
        "完成一項知識傳承或帶領後進任務",
      ],
    },
    {
      phase: "碩二下",
      badge: "Phase 4",
      items: [
        "完成論文定稿與口試",
        "完成技術、文件、環境與帳號交接",
        "整理畢業成果",
        "完成就業或升學銜接準備",
      ],
    },
  ];

  const kpiStructure = [
    {
      title: "A. 共通 KPI",
      items: ["Meeting 出席", "進度回報", "報告與文件紀錄", "回應與執行紀律"],
    },
    {
      title: "B. 主軌 KPI",
      items: [
        "Research：論文閱讀、文獻整理、實驗進度、研究稿件",
        "CTF：訓練時數、writeup、技術分享、比賽/漏洞成果、論文化進度",
        "Project：需求分析、設計文件、實作進度、測試驗證、論文化進度",
      ],
    },
    {
      title: "C. 團隊貢獻 KPI",
      items: ["公共任務完成度", "知識傳承", "協作態度與可靠度"],
    },
  ];

  const kpiGrades = [
    ["A", "穩定且具主動性"],
    ["B", "達到基本要求"],
    ["C", "需改善"],
    ["D", "嚴重落後或不適任"],
  ];

  const serviceRoles = [
    {
      title: "教學支援類",
      examples: ["課程助教", "作業輔導", "實作課支援"],
    },
    {
      title: "基礎設施類",
      examples: ["伺服器 / NAS 維護", "網路與帳號管理", "設備與場地管理", "網站維護"],
    },
    {
      title: "組織與對外類",
      examples: ["新生接待", "活動協助", "社團或對外交流支援", "文件整理與傳承維護"],
    },
  ];

  const resourceRules = [
    "獎助金",
    "比賽補助",
    "設備使用權",
    "出差、交流或活動支持",
    "企業合作或實習推薦",
    "推薦信",
    "教授額外指導時間與優先支持",
  ];

  const recommendationRules = [
    "長期穩定投入且紀律良好者",
    "對研究、技術或團隊有明確成果者",
    "能如實展現能力、值得對外背書者",
  ];

  const workStudyRules = [
    {
      main: "碩士班期間，學生應以研究訓練、主軌發展與實驗室責任為優先。",
      sub: [
        "原則上不建議從事與專業成長無明確關聯，且可能嚴重影響研究、修課、論文與實驗室運作之長期校外兼職。",
        "校內工讀不在此限，但仍須兼顧基本要求與學位進度。",
        "如欲參與校外實習或合作，應與資安、資訊技術或職涯發展高度相關，並須事前與教授討論取得同意。",
        "未經同意自行安排長期、重負擔且明顯影響研究進度之校外工作，得列入考核與資源調整依據。",
      ],
    },
  ];

  const unsuitableItems = [
    "僅希望取得學位，不想提升能力者",
    "不願投入固定時間訓練或學習者",
    "不願配合基本 meeting、報告、文件整理與團隊合作者",
    "長期將校外兼職、接案或其他事務置於學位訓練之前者",
    "只想獲得資源，不願承擔基本責任者",
  ];

  const improvementRules = [
    "短期未達要求：先以提醒與面談方式協助調整",
    "持續未達要求：進入改善期，包含明確改善目標、限期補交成果、調整額外活動與任務負載",
    "多次提醒後仍無明顯進步：得重新評估主軌安排、資源支持、指導關係與畢業時程",
  ];

  const professorCommitments = [
    "提供清楚且一致的要求",
    "盡量及早給予回饋與方向修正",
    "在制度範圍內公平配置資源",
    "不以臨時情緒作為主要管理依據",
    "盡量避免讓學生承擔與訓練目標無關、且無明確學習價值之工作",
  ];

  const pageStyle = {
    background:
      "radial-gradient(circle at top, rgba(122,27,27,0.28) 0%, rgba(10,10,10,1) 36%, rgba(6,6,6,1) 100%)",
    minHeight: "100vh",
    color: "#f3f4f6",
  } as const;

  const heroStyle = {
    background:
      "linear-gradient(135deg, rgba(122,27,27,0.96) 0%, rgba(64,13,13,0.96) 55%, rgba(20,20,20,0.96) 100%)",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
  } as const;

  const panelStyle = {
    background: "rgba(17,17,17,0.82)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
    backdropFilter: "blur(4px)",
  } as const;

  const sectionTitleStyle = {
    color: "#ff7b7b",
    letterSpacing: "0.02em",
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
          <div className="d-flex flex-column flex-lg-row justify-content-between gap-4">
            <div style={{ maxWidth: "760px" }}>
              <div className="mb-2">
                <span style={{ ...chipStyle, backgroundColor: "rgba(255,255,255,0.12)" }}>
                  is1ab Lab Handbook v2
                </span>
              </div>
              <h1 className="fw-bold text-white mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}>
                資訊安全實驗室運作手冊
              </h1>
              <div className="text-white fs-5 mb-3" style={{ opacity: 0.9 }}>
                研究能力、實戰能力、團隊合作能力並重的訓練環境
              </div>
              <p className="mb-0" style={{ ...mutedTextStyle, color: "rgba(255,255,255,0.88)" }}>
                本實驗室的目標不是只培養會讀論文的人，也不是只培養會打比賽的人，而是培養能在兩年內完成碩士學位、
                具備清楚專業成果，並能在畢業後進入資安相關職涯的成員。
              </p>
            </div>

            <div className="row g-3 m-0" style={{ minWidth: "280px", maxWidth: "380px" }}>
              {[
                ["Priority 01", "準時且有品質地完成碩士學位"],
                ["Priority 02", "建立可驗證的資安專業能力"],
                ["Priority 03", "維持基本團隊運作與知識傳承"],
              ].map(([title, desc], index) => (
                <div className="col-12" key={index}>
                  <div
                    className="rounded-4 p-3 h-100"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                  >
                    <div className="fw-bold text-white mb-1">{title}</div>
                    <div style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Principles + Basic */}
        <div className="row g-4 mb-4 mb-md-5">
          <div className="col-12 col-xl-7">
            <div className="rounded-5 p-4 p-md-5 h-100" style={panelStyle}>
              <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
                核心原則
              </h3>
              <ul className="mb-0 ps-4" style={listTextStyle}>
                {principles.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-12 col-xl-5">
            <div className="rounded-5 p-4 p-md-5 h-100" style={panelStyle}>
              <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
                所有人都需遵守的基本要求
              </h3>
              <ul className="mb-0 ps-4" style={listTextStyle}>
                {baseRequirements.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3-layer framework */}
        <div className="rounded-5 p-4 p-md-5 mb-4 mb-md-5" style={panelStyle}>
          <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-2 mb-4">
            <div>
              <h3 className="fw-bold mb-2" style={sectionTitleStyle}>
                整體訓練架構
              </h3>
              <div style={mutedTextStyle}>
                本實驗室採三層制度：共通核心訓練、主軌制度、公共任務制度。
              </div>
            </div>
          </div>

          <div className="row g-4">
            {frameworkCards.map((card, index) => (
              <div className="col-12 col-lg-4" key={index}>
                <div
                  className="rounded-5 p-4 h-100"
                  style={{
                    backgroundColor: card.bg,
                    border: `1px solid ${card.border}`,
                  }}
                >
                  <div className="fw-bold mb-1" style={{ color: card.color, fontSize: "1.35rem" }}>
                    {card.title}
                  </div>
                  <div className="mb-3" style={{ color: "#d1d5db", fontStyle: "italic" }}>
                    {card.subtitle}
                  </div>
                  <ul className="mb-0 ps-4" style={listTextStyle}>
                    {card.items.map((item, i) => (
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

        {/* Common core */}
        <div className="rounded-5 p-4 p-md-5 mb-4 mb-md-5" style={panelStyle}>
          <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
            共通核心訓練
          </h3>
          <div className="row g-4">
            <div className="col-12 col-lg-5">
              <div
                className="rounded-4 p-4 h-100"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="fw-bold text-white mb-3">設計目的</div>
                <div style={listTextStyle}>
                  不論最後走研究、比賽還是專案，所有學生都必須先建立基本的研究閱讀、表達、紀錄、回報與合作能力。
                  這一層是為了避免學生在碩二才第一次面對 proposal、論文寫作與正式報告時完全失速。
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div
                className="rounded-4 p-4 h-100"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="fw-bold text-white mb-3">所有學生必修能力</div>
                <div className="row g-3">
                  {commonCore.map((item, index) => (
                    <div className="col-12 col-md-6" key={index}>
                      <div
                        className="rounded-4 p-3 h-100"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <div style={listTextStyle}>{item}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tracks */}
        <div className="rounded-5 p-4 p-md-5 mb-4 mb-md-5" style={panelStyle}>
          <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
            主軌制度
          </h3>
          <div className="mb-4" style={mutedTextStyle}>
            學生於碩一上結束前完成能力盤點，並於碩一下正式確認主軌。主軌代表主要投入方向，
            但不代表可以免除共通核心訓練，也不代表可免除碩士論文基本要求。
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
                    <div className="fw-bold mb-2 text-white">定位</div>
                    <div style={listTextStyle}>{track.positioning}</div>
                  </div>

                  <div className="mb-3">
                    <div className="fw-bold mb-2 text-white">主要目標</div>
                    <ul className="mb-0 ps-4" style={listTextStyle}>
                      {track.goals.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-3">
                    <div className="fw-bold mb-2 text-white">基本要求</div>
                    <ul className="mb-0 ps-4" style={listTextStyle}>
                      {track.requirements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-3">
                    <div className="fw-bold mb-2 text-white">預期成果</div>
                    <ul className="mb-0 ps-4" style={listTextStyle}>
                      {track.outcomes.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="fw-bold mb-2 text-white">重要說明</div>
                    <ul className="mb-0 ps-4" style={listTextStyle}>
                      {track.notes.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="rounded-5 p-4 p-md-5 mb-4 mb-md-5" style={panelStyle}>
          <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
            碩士兩年標準流程
          </h3>
          <div className="row g-4">
            {timeline.map((phase, index) => (
              <div className="col-12 col-md-6 col-xl-4" key={index}>
                <div
                  className="h-100 rounded-5 p-4"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="mb-3">
                    <span
                      style={{
                        ...chipStyle,
                        backgroundColor: "rgba(255,107,107,0.12)",
                        border: "1px solid rgba(255,107,107,0.22)",
                        color: "#ffb4b4",
                      }}
                    >
                      {phase.badge}
                    </span>
                  </div>
                  <div className="fw-bold mb-3" style={{ color: "#ff7b7b", fontSize: "1.18rem" }}>
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

        {/* KPI */}
        <div className="row g-4 mb-4 mb-md-5">
          <div className="col-12 col-xl-8">
            <div className="rounded-5 p-4 p-md-5 h-100" style={panelStyle}>
              <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
                KPI 與考核制度
              </h3>
              <div className="mb-4" style={mutedTextStyle}>
                本實驗室採用「月檢視、學期總評」制度。KPI 的目的不是製造壓力，而是讓學生知道自己是否在正確軌道上，
                並讓教授能及早介入輔導。
              </div>

              <div className="row g-3">
                {kpiStructure.map((block, index) => (
                  <div className="col-12" key={index}>
                    <div
                      className="rounded-4 p-4"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div className="fw-bold text-white mb-2">{block.title}</div>
                      <ul className="mb-0 ps-4" style={listTextStyle}>
                        {block.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="fw-bold text-white mb-2">考核週期</div>
                <ul className="mb-0 ps-4" style={listTextStyle}>
                  <li>每月：學生提交摘要，教授進行簡要檢視</li>
                  <li>每學期期中：進行一次正式檢查</li>
                  <li>每學期末：進行一次總評，作為下學期資源與安排依據</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-4">
            <div className="rounded-5 p-4 p-md-5 h-100" style={panelStyle}>
              <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
                考核分級
              </h3>
              <div className="d-grid gap-3">
                {kpiGrades.map(([grade, desc], index) => (
                  <div
                    key={index}
                    className="rounded-4 p-3"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="fw-bold text-center"
                        style={{
                          width: "52px",
                          minWidth: "52px",
                          padding: "0.55rem 0",
                          borderRadius: "14px",
                          backgroundColor:
                            grade === "A"
                              ? "rgba(34,197,94,0.18)"
                              : grade === "B"
                              ? "rgba(59,130,246,0.18)"
                              : grade === "C"
                              ? "rgba(245,158,11,0.18)"
                              : "rgba(239,68,68,0.18)",
                          color:
                            grade === "A"
                              ? "#86efac"
                              : grade === "B"
                              ? "#93c5fd"
                              : grade === "C"
                              ? "#fcd34d"
                              : "#fca5a5",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {grade}
                      </div>
                      <div style={listTextStyle}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="fw-bold text-white mb-2">未達基本要求的情況</div>
                <ul className="mb-0 ps-4" style={listTextStyle}>
                  <li>長期無故缺席 meeting</li>
                  <li>長期未提交進度或無法說明進度</li>
                  <li>已承諾事項多次未交付</li>
                  <li>主軌成果長期無累積</li>
                  <li>公共任務明顯怠惰</li>
                  <li>論文時程嚴重落後且無改善行動</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Service roles + resources */}
        <div className="row g-4 mb-4 mb-md-5">
          <div className="col-12 col-xl-7">
            <div className="rounded-5 p-4 p-md-5 h-100" style={panelStyle}>
              <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
                公共任務制度
              </h3>
              <div className="mb-4" style={mutedTextStyle}>
                公共任務的目的是維持實驗室正常運作，不是將行政壓力無限制轉嫁給學生。
                因此採「每學期每人原則上一項任務、任務範圍明確、任務可交付、與資源配置連動」的方式運作。
              </div>

              <div className="row g-3">
                {serviceRoles.map((role, index) => (
                  <div className="col-12 col-lg-4" key={index}>
                    <div
                      className="rounded-4 p-4 h-100"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div className="fw-bold text-white mb-3">{role.title}</div>
                      <ul className="mb-0 ps-4" style={listTextStyle}>
                        {role.examples.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="fw-bold text-white mb-2">任務完成標準</div>
                <ul className="mb-0 ps-4" style={listTextStyle}>
                  <li>是否按時完成</li>
                  <li>是否有交接文件</li>
                  <li>是否能獨立或穩定執行</li>
                  <li>是否造成額外管理成本</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-5">
            <div className="rounded-5 p-4 p-md-5 h-100" style={panelStyle}>
              <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
                資源配置與推薦信原則
              </h3>

              <div className="mb-4">
                <div className="fw-bold text-white mb-2">可提供資源</div>
                <ul className="mb-0 ps-4" style={listTextStyle}>
                  {resourceRules.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <div className="fw-bold text-white mb-2">配置依據</div>
                <ul className="mb-0 ps-4" style={listTextStyle}>
                  <li>是否達到基本要求</li>
                  <li>主軌投入程度與產出</li>
                  <li>公共任務完成情況</li>
                  <li>是否具備可信任度與交付能力</li>
                  <li>是否能代表實驗室對外展現成果</li>
                </ul>
              </div>

              <div>
                <div className="fw-bold text-white mb-2">推薦信優先條件</div>
                <ul className="mb-0 ps-4" style={listTextStyle}>
                  {recommendationRules.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Work-study + unsuitable */}
        <div className="row g-4 mb-4 mb-md-5">
          <div className="col-12 col-xl-7">
            <div className="rounded-5 p-4 p-md-5 h-100" style={panelStyle}>
              <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
                兼職、實習與校外工作原則
              </h3>
              <ul className="mb-0 ps-4" style={listTextStyle}>
                {workStudyRules.map((rule, index) => (
                  <li key={index}>
                    {rule.main}
                    <ul className="mt-3 ps-4" style={listTextStyle}>
                      {rule.sub.map((item, i) => (
                        <li key={i} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-12 col-xl-5">
            <div className="rounded-5 p-4 p-md-5 h-100" style={panelStyle}>
              <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
                不適合加入本實驗室的學生
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

        {/* Improvement + commitments */}
        <div className="row g-4">
          <div className="col-12 col-xl-6">
            <div className="rounded-5 p-4 p-md-5 h-100" style={panelStyle}>
              <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
                輔導、改善與調整機制
              </h3>
              <ul className="mb-0 ps-4" style={listTextStyle}>
                {improvementRules.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4" style={mutedTextStyle}>
                本機制的目的在於及早修正，而非事後處罰。
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-6">
            <div className="rounded-5 p-4 p-md-5 h-100" style={panelStyle}>
              <h3 className="fw-bold mb-4" style={sectionTitleStyle}>
                教授的承諾
              </h3>
              <ul className="mb-0 ps-4" style={listTextStyle}>
                {professorCommitments.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>

              <div
                className="rounded-4 p-4 mt-4"
                style={{
                  backgroundColor: "rgba(255,107,107,0.08)",
                  border: "1px solid rgba(255,107,107,0.18)",
                }}
              >
                <div className="fw-bold text-white mb-2">結語</div>
                <div style={listTextStyle}>
                  本實驗室期待的不是完美的學生，而是願意投入、願意成長、願意承擔責任的學生。
                  只要願意學、願意做、願意持續修正，教授會盡力提供資源、方向與支持；
                  但若長期只希望索取資源、不願承擔基本責任，則不適合留在本實驗室。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
