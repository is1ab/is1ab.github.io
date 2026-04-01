export function Rule() {
  const tracks = [
    {
      title: "Research Track",
      subtitle: "研究型",
      color: {
        title: "#7dd3fc",
        bg: "rgba(6, 147, 227, 0.10)",
        border: "rgba(6, 147, 227, 0.35)",
      },
      goal: "培養研究能力與論文產出能力。",
      requirements: [
        "每週閱讀論文並整理重點。",
        "每月進行一次 paper presentation。",
        "持續發展研究題目與方法。",
      ],
      milestones: [
        "碩一上：完成文獻整理與研究方向探索。",
        "碩一下：完成研究 proposal。",
        "碩二上：完成論文初稿或投稿版本。",
      ],
      graduation: ["至少完成一篇研究論文，以投稿為目標，不強制接受。"],
      resources: ["高強度研究指導。", "論文共同作者機會。", "學術推薦信。", "視成果提供國際交流機會。"],
    },
    {
      title: "CTF Track",
      subtitle: "比賽型",
      color: {
        title: "#fcd34d",
        bg: "rgba(252, 185, 0, 0.10)",
        border: "rgba(252, 185, 0, 0.35)",
      },
      goal: "培養實戰能力與產業就業競爭力。",
      requirements: [
        "每週投入固定 CTF 訓練時間（建議 10 小時以上）。",
        "定期撰寫技術 writeup。",
        "每月進行一次技術分享。",
        "每學期參與 CTF 競賽或實戰活動。",
        "參與社團活動。",
      ],
      graduation: [
        "持續參與國內外資安競賽或實戰活動。",
        "至少完成 1 項具技術深度之專題成果（如 exploit、工具、分析報告等）。",
        "參與 AIS3、臺灣好厲駭、漏洞回報或其他等值活動。",
      ],
      resources: ["CTF 與訓練相關補助。", "推薦信（就業推薦）。", "資安企業實習。"],
    },
    {
      title: "Project Track",
      subtitle: "專案型",
      color: {
        title: "#fda4af",
        bg: "rgba(255, 77, 79, 0.10)",
        border: "rgba(255, 77, 79, 0.35)",
      },
      goal: "培養實務經驗、系統設計與開發能力。",
      requirements: [
        "參與實驗室計畫或系統開發。",
        "每月進行一次技術或系統相關報告。",
        "配合專案進度交付成果。",
      ],
      graduation: [
        "完成一項具完整設計與實作之系統或專案。",
        "須將專案成果轉化為碩士論文，內容應包含問題定義、方法、實作與評估。",
      ],
      notes: ["專案參與不等同於論文成果，仍需符合碩士論文之基本學術要求。"],
      resources: ["穩定獎助金或專案補助。", "產業推薦信。", "企業實習。"],
    },
  ];

  const timeline = [
    {
      phase: "入學前 / 碩一上",
      items: ["選擇 Track。", "建立基礎能力（CTF / 程式 / 研究方法）。", "開始參與實驗室任務。"],
    },
    {
      phase: "碩一下",
      items: ["確立主軌方向。", "提出論文 proposal。", "開始主要產出（研究 / 比賽 / 專案）。"],
    },
    {
      phase: "碩二上",
      items: ["深化主軌成果（投稿 / 比賽 / 系統）。", "完成論文初稿。"],
    },
    {
      phase: "碩二下",
      items: ["完成論文與口試。", "完成工作或升學規劃。", "進行經驗傳承。"],
    },
  ];

  const labRoles = [
    ["Lab Manager", "協調整體運作、工作分配、重要事項追蹤與溝通。"],
    ["財務 / 採購管理", "經費申請、核銷、採購與款項管理。"],
    ["設備管理", "硬體設備、貴重物品、公有財產管理。"],
    ["系統 / 網路管理", "IP 分配、NAS / 伺服器維護、帳號權限管理與備份。"],
    ["場地管理", "實驗安全規範、危害評估與環境衛生管理。"],
    ["活動 / 公關", "維護實驗室網頁、活動接洽、合作單位聯繫與新人接待。"],
    ["教學支援（TA）", "協助課程教學、作業輔導、課堂支援與學生協助。"],
  ];

  const resourceRules = ["推薦信", "補助（比賽 / 出國 / 計畫）", "指導時間與優先度", "對外機會（實習 / 合作）"];

  const guidanceRules = [
    "若學生長期未達基本要求或 KPI，將進行個別面談與改善計畫。",
    "若學生無法配合實驗室基本運作，將視情況調整 Track 或工作內容。",
    "若經多次輔導仍無改善，指導教授得依系所規定重新評估指導關係與畢業時程。",
    "碩士班期間，學生應以研究訓練、實驗室任務與專業能力養成為優先。",
    "原則上不建議從事與研究訓練無直接相關，且可能影響學習、研究進度與實驗室運作之外部兼職工作。",
    "校內工讀、研究助理或其他經指導教授同意之校內工作，不在此限。",
    "如學生擬參與校外實習，應以與資安、資訊技術或職涯發展高度相關者為原則，並須事先取得指導教授同意。",
    "未經同意，不得自行安排可能影響研究進度之長期校外兼職或實習。",
  ];

  const cultureItems = ["學術倫理。", "誠信（嚴禁作弊、抄襲、造假等行為）。", "守時與責任感。", "團隊合作與互助。", "主動學習與持續精進。"];

  const unsuitableItems = ["僅希望取得學位而無意提升能力者。", "不願投入時間學習或訓練者。", "無法配合基本團隊運作與責任者。"];

  const sectionTitleStyle = {
    backgroundColor: "#7a1b1b",
  } as const;

  const panelStyle = {
    backgroundColor: "#111",
    border: "1px solid rgba(255,255,255,0.08)",
  } as const;

  const listTextStyle = {
    color: "#e5e7eb",
    lineHeight: 1.9,
    fontSize: "1rem",
  } as const;

  return (
    <div className="container py-4" style={{ maxWidth: "1180px" }}>
      <div className="rounded-4 p-4 text-center mb-4" style={sectionTitleStyle}>
        <h2 className="fw-bold text-white m-0">Lab Handbook</h2>
        <div className="text-white mt-2" style={{ opacity: 0.9 }}>
          資訊安全實驗室（is1ab）運作規範
        </div>
      </div>

      <div className="rounded-4 p-4 p-md-5 mb-4" style={panelStyle}>
        <h4 className="fw-bold mb-3" style={{ color: "#ff4d4f" }}>
          核心原則
        </h4>
        <ul className="mb-0 ps-4" style={listTextStyle}>
          <li>本實驗室採「貢獻導向」運作。</li>
          <li>投入程度與可獲得之資源、機會、指導強度成正比。</li>
          <li>每位學生最終都需能回答：「我的貢獻是什麼？」</li>
        </ul>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12 col-lg-6">
          <div className="rounded-4 p-4 h-100" style={panelStyle}>
            <h4 className="fw-bold mb-3" style={{ color: "#ff4d4f" }}>
              基本要求
            </h4>
            <ul className="mb-0 ps-4" style={listTextStyle}>
              <li>每週 Group Meeting 必須實體出席。</li>
              <li>每月至少一次研究或技術分享。</li>
              <li>需維持最低貢獻（依 KPI 制度）。</li>
              <li>必須參與部分實驗室公共事務（實驗室運作、教學 TA、系統維護、資安社團等）。</li>
              <li>完成碩士論文並通過口試。</li>
              <li>研究訓練與專業能力養成具有延續性，非僅限於學期期間，學生需自行管理進度。</li>
              <li>知識及技術良好傳承。</li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="rounded-4 p-4 h-100" style={panelStyle}>
            <h4 className="fw-bold mb-3" style={{ color: "#ff4d4f" }}>
              運作與考核機制
            </h4>
            <ul className="mb-0 ps-4" style={listTextStyle}>
              <li>每位學生需選擇一個主軌（Research / CTF / Project）。</li>
              <li>每位學生亦需承擔至少一項實驗室貢獻角色（如實驗室運作、課程助教、社團等）。</li>
              <li>貢獻與產出將影響資源分配、指導強度與推薦機會。</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-4 p-4 p-md-5 mb-4" style={panelStyle}>
        <h4 className="fw-bold mb-4" style={{ color: "#ff4d4f" }}>
          KPI 制度
        </h4>

        <div className="row g-4">
          {tracks.map((track, index) => (
            <div className="col-12 col-lg-4" key={index}>
              <div
                className="h-100 rounded-4 p-4"
                style={{
                  backgroundColor: track.color.bg,
                  border: `1px solid ${track.color.border}`,
                }}
              >
                <div className="fw-bold mb-1" style={{ color: track.color.title, fontSize: "1.35rem" }}>
                  {track.title}
                </div>
                <div className="mb-3" style={{ color: "#d1d5db", fontStyle: "italic" }}>
                  {track.subtitle}
                </div>

                <div className="mb-3">
                  <div className="fw-bold mb-2 text-white">目標</div>
                  <div style={listTextStyle}>{track.goal}</div>
                </div>

                <div className="mb-3">
                  <div className="fw-bold mb-2 text-white">基本要求</div>
                  <ul className="mb-0 ps-4" style={listTextStyle}>
                    {track.requirements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {"milestones" in track && track.milestones && (
                  <div className="mb-3">
                    <div className="fw-bold mb-2 text-white">Milestone</div>
                    <ul className="mb-0 ps-4" style={listTextStyle}>
                      {track.milestones.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-3">
                  <div className="fw-bold mb-2 text-white">
                    {track.title === "CTF Track" ? "畢業條件（能力導向）" : "畢業條件"}
                  </div>
                  <ul className="mb-0 ps-4" style={listTextStyle}>
                    {track.graduation.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {"notes" in track && track.notes && (
                  <div className="mb-3">
                    <div className="fw-bold mb-2 text-white">說明</div>
                    <ul className="mb-0 ps-4" style={listTextStyle}>
                      {track.notes.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <div className="fw-bold mb-2 text-white">資源</div>
                  <ul className="mb-0 ps-4" style={listTextStyle}>
                    {track.resources.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-4 p-4 p-md-5 mb-4" style={panelStyle}>
        <h4 className="fw-bold mb-4" style={{ color: "#ff4d4f" }}>
          碩士兩年培養流程
        </h4>

        <div className="row g-4">
          {timeline.map((phase, index) => (
            <div className="col-12 col-md-6 col-xl-3" key={index}>
              <div
                className="h-100 rounded-4 p-4"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="fw-bold mb-3" style={{ color: "#ff4d4f" }}>
                  {phase.phase}
                </div>
                <ul className="mb-0 ps-4" style={listTextStyle}>
                  {phase.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-4 p-4 p-md-5 mb-4" style={panelStyle}>
        <h4 className="fw-bold mb-4" style={{ color: "#ff4d4f" }}>
          實驗室職位制度
        </h4>

        <div className="row g-4">
          {labRoles.map(([title, desc], index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div
                className="h-100 rounded-4 p-4"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="fw-bold mb-2 text-white">{title}</div>
                <div style={listTextStyle}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12 col-lg-6">
          <div className="rounded-4 p-4 h-100" style={panelStyle}>
            <h4 className="fw-bold mb-3" style={{ color: "#ff4d4f" }}>
              資源分配原則
            </h4>
            <div className="mb-2 text-white">以下資源採貢獻導向分配：</div>
            <ul className="mb-0 ps-4" style={listTextStyle}>
              {resourceRules.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="rounded-4 p-4 h-100" style={panelStyle}>
            <h4 className="fw-bold mb-3" style={{ color: "#ff4d4f" }}>
              實驗室文化
            </h4>
            <ul className="mb-0 ps-4" style={listTextStyle}>
              {cultureItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-4 p-4 p-md-5 mb-4" style={panelStyle}>
        <h4 className="fw-bold mb-3" style={{ color: "#ff4d4f" }}>
          輔導與調整機制
        </h4>
        <ul className="mb-0 ps-4" style={listTextStyle}>
          {guidanceRules.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-4 p-4 p-md-5 mb-4" style={panelStyle}>
        <h4 className="fw-bold mb-3" style={{ color: "#ff4d4f" }}>
          不適合加入本實驗室的學生
        </h4>
        <ul className="mb-0 ps-4" style={listTextStyle}>
          {unsuitableItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
