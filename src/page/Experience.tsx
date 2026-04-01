export function Experience() {
  const projects = [
    {
      title: "透過驗證鏈(CoVe)框架提升乳癌術後重建決策輔助聊天機器人的準確性與安全性",
      meta: "校際合作 - 萬芳醫院（計畫主持人）",
      period: "2026/1 - 2026/12",
      status: "執行中",
    },
    {
      title: "Sunbird-Taipei Tech DCIM Technology Research Center(2/5)",
      meta: "企業產學計畫案 - 美商太陽鳥軟體股份有限公司（共同計畫主持人）",
      period: "2025/10 - 2026/9",
      status: "執行中",
    },
    {
      title: "低軌衛星通訊系統之安全防護與韌性強化：安全防禦架構、異常行為與假訊息偵測、隱私強化、備援技術(1/2)",
      meta: "國科會計畫（共同計畫主持人）",
      period: "2025/8 - 2026/7",
      status: "執行中",
    },
    {
      title: "開發具提示注入緩解功能的強化學習式乳癌重建AI決策輔助系統之研究",
      meta: "校際合作 - 萬芳醫院（計畫主持人）",
      period: "2025/1 - 2025/12",
      status: "結案進行中",
    },
    {
      title: "具網路韌性且可信賴之低軌衛星通訊系統：互聯互通認證、軟體安全、 物聯網永續性、保有隱私、假資訊偵測(2/2)",
      meta: "國科會計畫（共同計畫主持人）",
      period: "2024/6 - 2025/5",
      status: "結案",
    },
    {
      title: "建構威脅情資知識圖及攻擊事件自動化辨識技術",
      meta: "政府產學計畫案 - 國家資通安全研究院（計畫主持人）",
      period: "2023/11 - 2024/11",
      status: "結案",
    },
    {
      title: "整合多項新穎技術於網路防禦系統以抵抗網路威脅之研究",
      meta: "國科會計畫（計畫主持人）",
      period: "2023/8 - 2024/7",
      status: "結案",
    },
    {
      title:
        "具網路韌性且可信賴之低軌衛星通訊系統：互聯互通認證、軟體安全、物聯網永續性、保有隱私、假資訊偵測(1/2)",
      meta: "國科會計畫（共同計畫主持人）",
      period: "2023/6 - 2024/5",
      status: "結案",
    },
    {
      title: "建立人工智慧聊天機器人以輔助乳癌術後重建病人醫病共同決策之研究",
      meta: "校際合作 - 萬芳醫院（計畫主持人）",
      period: "2023/1 - 2023/12",
      status: "結案",
    },
    {
      title: "半導體資安人才產業共通職能基準資料蒐集",
      meta: "產學計畫案 - 財團法人資訊工業策進會（共同計畫主持人）",
      period: "2022/11 - 2022/12",
      status: "結案",
    },
    {
      title: "發展精準且有效的偵測技術以抵抗網路威脅之研究",
      meta: "國科會計畫（計畫主持人）",
      period: "2022/10 - 2023/9",
      status: "結案",
    },
    {
      title: "深度神經網路下深度神經網路安全模型與工作排成之研究",
      meta: "協助執行國科會計畫",
      period: "2020/8 - 2021/7",
      status: "協助",
    },
    {
      title: "先進晶片技術之可靠度設計自動化研究－子計畫：三微晶片之可靠度技術研究",
      meta: "協助執行國科會計畫",
      period: "2019/8 - 2020/7",
      status: "協助",
    },
    {
      title: "仲裁式量子代理盲簽章",
      meta: "協助執行國科會計畫",
      period: "2016/8 - 2017/7",
      status: "協助",
    },
    {
      title: "數位影像秘密共享之研究及其在移動通訊環境中的應用",
      meta: "協助執行國科會計畫",
      period: "2015/8 - 2015/11",
      status: "協助",
    },
    {
      title: "安全有效的認證機制及其在電子商務應用之研究",
      meta: "協助執行國科會計畫",
      period: "2014/8 - 2015/7",
      status: "協助",
    },
    {
      title: "數位影像編輯技術之研究及在多媒體安全之應用",
      meta: "協助執行國科會計畫",
      period: "2011/8 - 2014/7",
      status: "協助",
    },
  ];

  const getStatusStyle = (status?: string) => {
    if (!status) return null;

    if (status === "協助") {
      return {
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        color: "#f3f4f6",
        border: "1px solid rgba(255, 255, 255, 0.18)",
      };
    }

    if (status === "結案") {
      return {
        backgroundColor: "rgba(0, 208, 132, 0.12)",
        color: "#00d084",
        border: "1px solid rgba(0, 208, 132, 0.35)",
      };
    }

    if (status === "執行中") {
      return {
        backgroundColor: "rgba(6, 147, 227, 0.12)",
        color: "#53b7ff",
        border: "1px solid rgba(6, 147, 227, 0.35)",
      };
    }

    if (status === "結案進行中") {
      return {
        backgroundColor: "rgba(6, 147, 227, 0.12)",
        color: "#53b7ff",
        border: "1px solid rgba(6, 147, 227, 0.35)",
      };
    }

    return {
      backgroundColor: "rgba(255,255,255,0.06)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.12)",
    };
  };

  return (
    <div className="experience container py-4" style={{ maxWidth: "1100px" }}>
      <div
        className="p-3 rounded-4 mb-4 text-center"
        style={{ backgroundColor: "#7a1b1b" }}
      >
        <h3 className="fw-bold text-white m-0">計畫經歷 Project</h3>
      </div>

      <div className="d-flex flex-column gap-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-4 border p-4"
            style={{
              backgroundColor: "#111",
              borderColor: "#7a1b1b",
            }}
          >
            <div className="d-flex flex-column gap-3">
              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-3">
                <div
                  className="fw-bold flex-grow-1"
                  style={{
                    color: "#ffffff",
                    fontSize: "1.1rem",
                    lineHeight: 1.7,
                  }}
                >
                  {project.title}
                </div>

                {project.status && (
                  <span
                    className="px-3 py-2 rounded-pill fw-bold text-nowrap d-inline-flex align-items-center justify-content-center"
                    style={{
                      ...(getStatusStyle(project.status) || {}),
                      fontSize: "0.95rem",
                      whiteSpace: "nowrap",
                      minWidth: "88px",
                      flexShrink: 0,
                    }}
                  >
                    {project.status}
                  </span>
                )}
              </div>

              <div
                className="d-flex flex-column flex-md-row gap-3"
                style={{ fontSize: "0.98rem", lineHeight: 1.8 }}
              >
                <div style={{ color: "#9ca3af" }}>
                  <span className="fw-bold">類型：</span>
                  {project.meta}
                </div>

                {project.period && (
                  <div style={{ color: "#9ca3af" }}>
                    <span className="fw-bold">期間：</span>
                    {project.period}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr />
    </div>
  );
}
