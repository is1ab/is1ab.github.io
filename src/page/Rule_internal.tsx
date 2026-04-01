export function RuleInternal() {
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
      accent: "#ff8b8b",
      bg: "rgba(255, 122, 122, 0.08)",
      border: "rgba(255, 122, 122, 0.22)",
      items: [
        "所有學生必修，不因主軌而免除",
        "碩一上以建立研究、表達、紀錄、回報能力為主",
        "避免只會比賽、不會研究；或只會研究、不會實作",
      ],
    },
    {
      title: "主軌制度",
      subtitle: "Primary Track",
      accent: "#8dd5ff",
      bg: "rgba(94, 201, 255, 0.08)",
      border: "rgba(94, 201, 255, 0.22)",
      items: [
        "碩一上結束前完成能力盤點",
        "碩一下正式確認一個主軌",
        "主軌代表主要投入方向，但不免除論文與基本責任",
      ],
    },
    {
      title: "公共任務制度",
      subtitle: "Service Role",
      accent: "#ffd76b",
      bg: "rgba(255, 215, 107, 0.08)",
      border: "rgba(255, 215, 107, 0.22)",
      items: [
        "每學期原則上一人一項任務",
        "任務以有限度、可交付、可驗證為原則",
        "與資源配置、可信任度、推薦支持連動",
      ],
    },
  ];

  const tracks = [
    {
      title: "Research Track",
      subtitle: "研究型",
      accent: "#7dd3fc",
      bg: "rgba(125, 211, 252, 0.08)",
      border: "rgba(125, 211, 252, 0.24)",
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
      accent: "#fcd34d",
      bg: "rgba(252, 211, 77, 0.08)",
      border: "rgba(252, 211, 77, 0.24)",
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
      accent: "#fda4af",
      bg: "rgba(253, 164, 175, 0.08)",
      border: "rgba(253, 164, 175, 0.24)",
      positioning: "適合希望累積軟體實作、系統設計與工具開發能力，並以業界實作為目標的學生。",
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
  ] as const;

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
      main: "碩士班期間，學生應以研究訓練、主軌發展與實驗室責任為優先",
      sub: [
        "原則上不建議從事與專業成長無明確關聯，且可能嚴重影響研究、修課、論文與實驗室運作之長期校外兼職",
        "校內工讀不在此限，但仍須兼顧基本要求與學位進度",
        "如欲參與校外實習或合作，應與資安、資訊技術或職涯發展高度相關，並須事前與教授討論取得同意",
        "未經同意自行安排長期、重負擔且明顯影響研究進度之校外工作，得列入考核與資源調整依據",
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
    "及早給予回饋與方向修正",
    "在制度範圍內公平配置資源",
    "不以情緒作為主要管理依據",
    "避免讓學生承擔與訓練目標無關、且無明確學習價值之工作",
  ];

  const pageStyle = {
    minHeight: "100vh",
    color: "#f5f7fb",
    background:
      "radial-gradient(circle at top, rgba(133, 31, 31, 0.22) 0%, rgba(17, 18, 24, 1) 32%, rgba(10, 11, 15, 1) 100%)",
  } as const;

  const shellStyle = {
    maxWidth: "1240px",
  } as const;

  const glassStyle = {
    background: "rgba(20, 24, 31, 0.76)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 18px 50px rgba(0,0,0,0.24)",
    backdropFilter: "blur(10px)",
  } as const;

  const softCardStyle = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
  } as const;

  const heroStyle = {
    background:
      "linear-gradient(135deg, rgba(112, 23, 23, 0.98) 0%, rgba(58, 17, 20, 0.96) 42%, rgba(19, 22, 28, 0.96) 100%)",
    border: "1px solid rgba(255,255,255,0.09)",
    boxShadow: "0 24px 64px rgba(0,0,0,0.32)",
    overflow: "hidden",
    position: "relative",
  } as const;

  const sectionTitleStyle = {
    color: "#fff4f4",
    fontWeight: 800,
    letterSpacing: "0.01em",
    marginBottom: "0.65rem",
  } as const;

  const sectionDescStyle = {
    color: "#b9c0cf",
    lineHeight: 1.8,
    fontSize: "0.98rem",
    marginBottom: 0,
  } as const;

  const bodyTextStyle = {
    color: "#dde3ee",
    lineHeight: 1.8,
    fontSize: "0.98rem",
  } as const;

  const mutedTextStyle = {
    color: "#aeb7c8",
    lineHeight: 1.75,
    fontSize: "0.95rem",
  } as const;

  const chipStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.45rem",
    padding: "0.4rem 0.85rem",
    borderRadius: "999px",
    fontSize: "0.82rem",
    fontWeight: 700,
    color: "#fff",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.10)",
  } as const;

  const numberCardStyle = {
    ...softCardStyle,
    borderRadius: "22px",
    padding: "1rem 1.1rem",
    height: "100%",
  } as const;

  const sectionWrapStyle = {
    ...glassStyle,
    borderRadius: "28px",
    padding: "1.6rem",
  } as const;

  const listResetStyle = {
    marginBottom: 0,
    paddingLeft: "1.15rem",
  } as const;

  const renderList = (items: string[], className = "") => (
    <ul className={className} style={{ ...listResetStyle, ...bodyTextStyle }}>
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div style={pageStyle}>
      <div className="container py-4 py-md-5" style={shellStyle}>
        <section className="rounded-5 p-4 p-md-5 mb-4 mb-md-5" style={heroStyle}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 85% 15%, rgba(255,255,255,0.10), transparent 22%), radial-gradient(circle at 15% 80%, rgba(255,120,120,0.10), transparent 18%)",
              pointerEvents: "none",
            }}
          />
          <div className="position-relative">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-xl-8">
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span style={chipStyle}>is1ab Internal</span>
                  <span style={chipStyle}>Lab Handbook</span>
                  <span style={chipStyle}>Version 2</span>
                </div>

                <h1
                  className="fw-bold text-white mb-3"
                  style={{ fontSize: "clamp(2.1rem, 4vw, 3.8rem)", lineHeight: 1.15 }}
                >
                  資訊安全實驗室
                  <br />
                  運作手冊
                </h1>

                <p
                  className="mb-4"
                  style={{
                    color: "rgba(255,255,255,0.88)",
                    lineHeight: 1.9,
                    fontSize: "1.04rem",
                    maxWidth: "760px",
                  }}
                >
                  本實驗室的目標不是只培養會讀論文的人，也不是只培養會打比賽的人，而是培養能在兩年內完成碩士學位、
                  具備清楚專業成果，並能在畢業後進入資安相關職涯的成員。
                </p>

                <div className="row g-3">
                  {[
                    ["Priority 01", "先完成碩士學位"],
                    ["Priority 02", "建立可驗證能力"],
                    ["Priority 03", "維持團隊與傳承"],
                  ].map(([title, desc]) => (
                    <div className="col-12 col-md-4" key={title}>
                      <div
                        className="h-100"
                        style={{
                          ...numberCardStyle,
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.10)",
                        }}
                      >
                        <div
                          className="mb-2"
                          style={{ color: "#ffb1b1", fontWeight: 800, fontSize: "0.82rem", letterSpacing: "0.06em" }}
                        >
                          {title}
                        </div>
                        <div className="text-white fw-semibold" style={{ lineHeight: 1.55 }}>
                          {desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-12 col-xl-4">
                <div
                  className="rounded-5 p-4 h-100"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  <div className="fw-bold text-white mb-3" style={{ fontSize: "1.15rem" }}>
                    這份手冊在處理什麼
                  </div>
                  <div className="d-grid gap-3">
                    {[
                      ["核心原則", "先定義價值排序與管理方式"],
                      ["訓練架構", "共通核心、主軌、公共任務三層並行"],
                      ["評估邏輯", "以紀律、產出、可信任度作為配置依據"],
                      ["畢業導向", "所有路線最終都必須回到論文與學位完成"],
                    ].map(([title, desc]) => (
                      <div
                        key={title}
                        className="rounded-4 p-3"
                        style={{
                          background: "rgba(0,0,0,0.18)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <div className="fw-semibold text-white mb-1">{title}</div>
                        <div style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, fontSize: "0.94rem" }}>
                          {desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-4 mb-md-5">
          <div className="row g-4">
            <div className="col-12 col-xl-7">
              <div style={{ ...sectionWrapStyle, height: "100%" }}>
                <div className="mb-4">
                  <div style={sectionTitleStyle}>核心原則</div>
                  <p style={sectionDescStyle}>
                    這一段是整份手冊的底層邏輯。它不是活動規範而已，而是整個實驗室在資源配置、角色期待與訓練排序上的基本立場。
                  </p>
                </div>

                <div className="d-grid gap-3">
                  {principles.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-4 p-3 p-md-4"
                      style={{
                        ...softCardStyle,
                        display: "grid",
                        gridTemplateColumns: "56px 1fr",
                        gap: "1rem",
                        alignItems: "start",
                      }}
                    >
                      <div
                        className="fw-bold text-center"
                        style={{
                          width: "56px",
                          height: "56px",
                          lineHeight: "56px",
                          borderRadius: "18px",
                          background: "rgba(255, 122, 122, 0.12)",
                          border: "1px solid rgba(255, 122, 122, 0.18)",
                          color: "#ffb3b3",
                          fontSize: "1rem",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div style={bodyTextStyle}>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-12 col-xl-5">
              <div className="d-grid gap-4 h-100">
                <div style={sectionWrapStyle}>
                  <div className="mb-3">
                    <div style={sectionTitleStyle}>基本要求</div>
                    <p style={sectionDescStyle}>所有學生都適用，屬於最低標準，不因主軌不同而免除。</p>
                  </div>
                  <div className="row g-3">
                    {baseRequirements.map((item, index) => (
                      <div className="col-12" key={index}>
                        <div className="rounded-4 p-3" style={softCardStyle}>
                          <div className="d-flex gap-3">
                            <div style={{ color: "#ff9a9a", fontWeight: 800, minWidth: "20px" }}>•</div>
                            <div style={bodyTextStyle}>{item}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={sectionWrapStyle}>
                  <div className="mb-3">
                    <div style={sectionTitleStyle}>共通核心能力</div>
                    <p style={sectionDescStyle}>這些能力是所有後續研究、競賽與專案能否穩定推進的底盤。</p>
                  </div>
                  <div className="row g-3">
                    {commonCore.map((item, index) => (
                      <div className="col-12 col-md-6" key={index}>
                        <div className="rounded-4 p-3 h-100" style={softCardStyle}>
                          <div className="fw-semibold text-white mb-1" style={{ fontSize: "0.92rem" }}>
                            Core {index + 1}
                          </div>
                          <div style={bodyTextStyle}>{item}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-4 mb-md-5">
          <div style={sectionWrapStyle}>
            <div className="mb-4">
              <div style={sectionTitleStyle}>整體訓練架構</div>
              <p style={sectionDescStyle}>本實驗室不是單一路線培養，而是三層制度一起運作，彼此補位而不是互相取代。</p>
            </div>

            <div className="row g-4">
              {frameworkCards.map((card) => (
                <div className="col-12 col-lg-4" key={card.title}>
                  <div
                    className="rounded-5 p-4 h-100"
                    style={{
                      background: card.bg,
                      border: `1px solid ${card.border}`,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                    }}
                  >
                    <div className="mb-2" style={{ color: card.accent, fontWeight: 800, fontSize: "1.2rem" }}>
                      {card.title}
                    </div>
                    <div className="mb-3" style={{ color: "#b6bfd1", fontStyle: "italic", fontSize: "0.95rem" }}>
                      {card.subtitle}
                    </div>
                    {renderList(card.items)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-4 mb-md-5">
          <div style={sectionWrapStyle}>
            <div className="mb-4">
              <div style={sectionTitleStyle}>共通核心訓練</div>
              <p style={sectionDescStyle}>
                不論最後走研究、比賽還是專案，所有學生都必須先建立基本的研究閱讀、表達、紀錄、回報與合作能力。
                這一層是為了避免學生在碩二才第一次面對 proposal、論文寫作與正式報告時完全失速。
              </p>
            </div>

            <div className="row g-4">
              <div className="col-12 col-lg-4">
                <div className="rounded-5 p-4 h-100" style={softCardStyle}>
                  <div className="fw-bold text-white mb-3" style={{ fontSize: "1.05rem" }}>
                    設計目的
                  </div>
                  <p className="mb-0" style={bodyTextStyle}>
                    先建立共同工作語言與基本訓練能力，降低學生在研究、專案或競賽路線上出現結構性失衡的風險。
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-8">
                <div className="rounded-5 p-4 h-100" style={softCardStyle}>
                  <div className="fw-bold text-white mb-3" style={{ fontSize: "1.05rem" }}>
                    具體能力項目
                  </div>
                  <div className="row g-3">
                    {commonCore.map((item, index) => (
                      <div className="col-12 col-md-6" key={index}>
                        <div
                          className="rounded-4 p-3 h-100"
                          style={{
                            background: "rgba(255,255,255,0.025)",
                            border: "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          <div style={{ color: "#ffbaba", fontWeight: 700, fontSize: "0.85rem" }}>能力 {index + 1}</div>
                          <div className="mt-2" style={bodyTextStyle}>
                            {item}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-4 mb-md-5">
          <div style={sectionWrapStyle}>
            <div className="mb-4">
              <div style={sectionTitleStyle}>主軌制度</div>
              <p style={sectionDescStyle}>
                學生於碩一上結束前完成能力盤點，並於碩一下正式確認主軌。主軌代表主要投入方向，
                但不代表可以免除共通核心訓練，也不代表可免除碩士論文基本要求。
              </p>
            </div>

            <div className="row g-4">
              {tracks.map((track) => (
                <div className="col-12 col-xl-4" key={track.title}>
                  <div
                    className="rounded-5 p-4 h-100"
                    style={{
                      background: track.bg,
                      border: `1px solid ${track.border}`,
                      boxShadow: "0 10px 28px rgba(0,0,0,0.10)",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                      <div>
                        <div style={{ color: track.accent, fontWeight: 800, fontSize: "1.3rem", lineHeight: 1.2 }}>
                          {track.title}
                        </div>
                        <div style={{ color: "#c0c7d6", fontStyle: "italic", marginTop: "0.25rem" }}>
                          {track.subtitle}
                        </div>
                      </div>
                      <span
                        style={{
                          ...chipStyle,
                          padding: "0.32rem 0.7rem",
                          background: "rgba(255,255,255,0.04)",
                        }}
                      >
                        Track
                      </span>
                    </div>

                    <div className="d-grid gap-3">
                      <div className="rounded-4 p-3" style={softCardStyle}>
                        <div className="fw-bold text-white mb-2">定位</div>
                        <div style={bodyTextStyle}>{track.positioning}</div>
                      </div>

                      <div className="rounded-4 p-3" style={softCardStyle}>
                        <div className="fw-bold text-white mb-2">主要目標</div>
                        {renderList(track.goals)}
                      </div>

                      <div className="rounded-4 p-3" style={softCardStyle}>
                        <div className="fw-bold text-white mb-2">基本要求</div>
                        {renderList(track.requirements)}
                      </div>

                      <div className="rounded-4 p-3" style={softCardStyle}>
                        <div className="fw-bold text-white mb-2">預期成果</div>
                        {renderList(track.outcomes)}
                      </div>

                      <div className="rounded-4 p-3" style={softCardStyle}>
                        <div className="fw-bold text-white mb-2">重要說明</div>
                        {renderList(track.notes)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-4 mb-md-5">
          <div style={sectionWrapStyle}>
            <div className="mb-4">
              <div style={sectionTitleStyle}>碩士兩年標準流程</div>
              <p style={sectionDescStyle}>下面這條時間線的目的是讓學生知道自己在不同階段應該達成哪些最低里程碑。</p>
            </div>

            <div className="position-relative">
              <div
                className="d-none d-lg-block"
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: "22px",
                  width: "2px",
                  background: "linear-gradient(to bottom, rgba(255,140,140,0.5), rgba(255,255,255,0.08))",
                }}
              />
              <div className="d-grid gap-4">
                {timeline.map((phase) => (
                  <div key={phase.badge} className="row g-3 align-items-stretch">
                    <div className="col-12 col-lg-3">
                      <div className="d-flex align-items-center gap-3 h-100">
                        <div
                          className="d-none d-lg-flex align-items-center justify-content-center"
                          style={{
                            width: "46px",
                            height: "46px",
                            minWidth: "46px",
                            borderRadius: "999px",
                            background: "rgba(255,122,122,0.14)",
                            border: "1px solid rgba(255,122,122,0.22)",
                            color: "#ffb3b3",
                            fontWeight: 800,
                          }}
                        >
                          ●
                        </div>
                        <div
                          className="rounded-4 p-3 w-100"
                          style={{
                            background: "rgba(255,255,255,0.035)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          <div className="mb-2">
                            <span
                              style={{
                                ...chipStyle,
                                background: "rgba(255, 122, 122, 0.12)",
                                color: "#ffb2b2",
                                border: "1px solid rgba(255, 122, 122, 0.18)",
                              }}
                            >
                              {phase.badge}
                            </span>
                          </div>
                          <div className="fw-bold text-white" style={{ fontSize: "1.08rem", lineHeight: 1.4 }}>
                            {phase.phase}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-lg-9">
                      <div className="rounded-5 p-4 h-100" style={softCardStyle}>
                        {renderList(phase.items)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-4 mb-md-5">
          <div className="row g-4">
            <div className="col-12 col-xl-8">
              <div style={{ ...sectionWrapStyle, height: "100%" }}>
                <div className="mb-4">
                  <div style={sectionTitleStyle}>KPI 與考核制度</div>
                  <p style={sectionDescStyle}>
                    本實驗室採用「月檢視、學期總評」制度。KPI 的目的不是製造壓力，而是讓學生知道自己是否在正確軌道上，
                    並讓教授能及早介入輔導。
                  </p>
                </div>

                <div className="d-grid gap-3">
                  {kpiStructure.map((block) => (
                    <div key={block.title} className="rounded-4 p-4" style={softCardStyle}>
                      <div className="fw-bold text-white mb-2" style={{ fontSize: "1rem" }}>
                        {block.title}
                      </div>
                      {renderList(block.items)}
                    </div>
                  ))}
                </div>

                <div className="rounded-4 p-4 mt-4" style={softCardStyle}>
                  <div className="fw-bold text-white mb-2">考核週期</div>
                  <ul style={{ ...listResetStyle, ...bodyTextStyle, marginBottom: 0 }}>
                    <li className="mb-2">每月：學生提交摘要，教授進行簡要檢視</li>
                    <li className="mb-2">每學期期中：進行一次正式檢查</li>
                    <li>每學期末：進行一次總評，作為下學期資源與安排依據</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-xl-4">
              <div className="d-grid gap-4 h-100">
                <div style={sectionWrapStyle}>
                  <div className="mb-4">
                    <div style={sectionTitleStyle}>考核分級</div>
                    <p style={sectionDescStyle}>分級不是標籤，而是讓資源配置、改善要求與指導強度能更透明。</p>
                  </div>

                  <div className="d-grid gap-3">
                    {kpiGrades.map(([grade, desc]) => {
                      const gradeStyle =
                        grade === "A"
                          ? { bg: "rgba(34,197,94,0.14)", color: "#86efac" }
                          : grade === "B"
                          ? { bg: "rgba(59,130,246,0.14)", color: "#93c5fd" }
                          : grade === "C"
                          ? { bg: "rgba(245,158,11,0.14)", color: "#fcd34d" }
                          : { bg: "rgba(239,68,68,0.14)", color: "#fca5a5" };

                      return (
                        <div key={grade} className="rounded-4 p-3" style={softCardStyle}>
                          <div className="d-flex align-items-center gap-3">
                            <div
                              className="fw-bold text-center"
                              style={{
                                width: "52px",
                                minWidth: "52px",
                                padding: "0.55rem 0",
                                borderRadius: "14px",
                                background: gradeStyle.bg,
                                color: gradeStyle.color,
                                border: "1px solid rgba(255,255,255,0.08)",
                              }}
                            >
                              {grade}
                            </div>
                            <div style={bodyTextStyle}>{desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div style={sectionWrapStyle}>
                  <div className="mb-3">
                    <div style={sectionTitleStyle}>未達基本要求的情況</div>
                  </div>
                  <ul style={{ ...listResetStyle, ...bodyTextStyle, marginBottom: 0 }}>
                    <li className="mb-2">長期無故缺席 meeting</li>
                    <li className="mb-2">長期未提交進度或無法說明進度</li>
                    <li className="mb-2">已承諾事項多次未交付</li>
                    <li className="mb-2">主軌成果長期無累積</li>
                    <li className="mb-2">公共任務明顯怠惰</li>
                    <li>論文時程嚴重落後且無改善行動</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-4 mb-md-5">
          <div className="row g-4">
            <div className="col-12 col-xl-7">
              <div style={{ ...sectionWrapStyle, height: "100%" }}>
                <div className="mb-4">
                  <div style={sectionTitleStyle}>公共任務制度</div>
                  <p style={sectionDescStyle}>
                    公共任務的目的是維持實驗室正常運作，不是將行政壓力無限制轉嫁給學生。任務應有限度、可交付、可驗證，
                    並與可信任度、資源支持與團隊貢獻一起評估。
                  </p>
                </div>

                <div className="row g-3">
                  {serviceRoles.map((role) => (
                    <div className="col-12" key={role.title}>
                      <div className="rounded-4 p-4" style={softCardStyle}>
                        <div className="fw-bold text-white mb-2">{role.title}</div>
                        <div className="d-flex flex-wrap gap-2">
                          {role.examples.map((example) => (
                            <span
                              key={example}
                              style={{
                                ...chipStyle,
                                background: "rgba(255,255,255,0.04)",
                                color: "#dfe6f3",
                              }}
                            >
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-12 col-xl-5">
              <div className="d-grid gap-4 h-100">
                <div style={sectionWrapStyle}>
                  <div className="mb-3">
                    <div style={sectionTitleStyle}>本實驗室之資源包含但不限於：</div>
                  </div>
                  <div className="row g-2">
                    {resourceRules.map((item) => (
                      <div className="col-12 col-md-6" key={item}>
                        <div className="rounded-4 p-3 h-100" style={softCardStyle}>
                          <div style={bodyTextStyle}>{item}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={sectionWrapStyle}>
                  <div className="mb-3">
                    <div style={sectionTitleStyle}>推薦與對外支持原則</div>
                  </div>
                  {renderList(recommendationRules)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-4 mb-md-5">
          <div className="row g-4">
            <div className="col-12 col-xl-6">
              <div style={{ ...sectionWrapStyle, height: "100%" }}>
                <div className="mb-4">
                  <div style={sectionTitleStyle}>工讀、實習與校外工作原則</div>
                  <p style={sectionDescStyle}>原則並不是一概禁止，而是要求優先順序、相關性與事前溝通。</p>
                </div>

                {workStudyRules.map((rule, index) => (
                  <div key={index} className="rounded-4 p-4" style={softCardStyle}>
                    <div className="fw-bold text-white mb-3">{rule.main}</div>
                    {renderList(rule.sub)}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-xl-6">
              <div className="d-grid gap-4 h-100">
                <div style={sectionWrapStyle}>
                  <div className="mb-3">
                    <div style={sectionTitleStyle}>不適合加入本實驗室的情況</div>
                  </div>
                  {renderList(unsuitableItems)}
                </div>

                <div style={sectionWrapStyle}>
                  <div className="mb-3">
                    <div style={sectionTitleStyle}>改善機制</div>
                  </div>
                  {renderList(improvementRules)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-2">
          <div style={sectionWrapStyle}>
            <div className="row g-4 align-items-start">
              <div className="col-12 col-xl-4">
                <div
                  className="rounded-5 p-4 h-100"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,122,122,0.10), rgba(255,255,255,0.03))",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="mb-2" style={{ color: "#ffb1b1", fontWeight: 800, letterSpacing: "0.04em" }}>
                    FACULTY COMMITMENT
                  </div>
                  <div className="fw-bold text-white mb-3" style={{ fontSize: "1.4rem", lineHeight: 1.35 }}>
                    教授的承諾
                  </div>
                  <p className="mb-0" style={mutedTextStyle}>
                    管理不是單向要求。既然學生被要求承擔責任，教授也必須對制度清晰度、公平性與回饋品質負責。
                  </p>
                </div>
              </div>

              <div className="col-12 col-xl-8">
                <div className="row g-3">
                  {professorCommitments.map((item, index) => (
                    <div className="col-12 col-md-6" key={index}>
                      <div className="rounded-4 p-4 h-100" style={softCardStyle}>
                        <div className="mb-2" style={{ color: "#ffb3b3", fontWeight: 800 }}>
                          Commitment {index + 1}
                        </div>
                        <div style={bodyTextStyle}>{item}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
