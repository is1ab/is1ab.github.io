export function Experience() {
  const projects = [
    {
      title: "開發具提示注入緩解功能的強化學習式乳癌重建AI決策輔助系統之研究",
      meta: "校際合作 - 萬芳醫院",
      status: "核定通過",
    },
    {
      title: "建構威脅情資知識圖及攻擊事件自動化辨識技術",
      meta: "資安院計畫",
      status: "結案",
    },
    {
      title: "具網路韌性且可信賴之低軌衛星通訊系統：互聯互通認證、軟體安全、物聯網永續性、保有隱私、假資訊偵測",
      meta: "國科會計畫共同主持人",
      status: "執行中",
    },
    {
      title: "整合多項新穎技術於網路防禦系統以抵抗網路威脅之研究",
      meta: "國科會計畫",
      status: "結案",
    },
    {
      title: "發展精準且有效的偵測技術以抵抗網路威脅之研究",
      meta: "國科會計畫",
      status: "結案",
    },
    {
      title: "建立人工智慧聊天機器人以輔助乳癌術後重建病人醫病共同決策之研究",
      meta: "校際合作 - 萬芳醫院",
      status: "結案",
    },
    {
      title: "半導體資安人才產業共通職能基準資料蒐集",
      meta: "2022 產學案 - 資策會",
      status: "結案",
    },
    {
      title: "深度神經網路下深度神經網路安全模型與工作排成之研究",
      meta: "協助執行國科會計畫",
      period: "2020/8 - 2021/7",
    },
    {
      title: "先進晶片技術之可靠度設計自動化研究－子計畫：三微晶片之可靠度技術研究",
      meta: "協助執行國科會計畫",
      period: "2019/8 - 2020/7",
    },
    {
      title: "仲裁式量子代理盲簽章",
      meta: "協助執行國科會計畫",
      period: "2016/8 - 2017/7",
    },
    {
      title: "數位影像秘密共享之研究及其在移動通訊環境中的應用",
      meta: "協助執行國科會計畫",
      period: "2015/8 - 2015/11",
    },
    {
      title: "安全有效的認證機制及其在電子商務應用之研究",
      meta: "協助執行國科會計畫",
      period: "2014/8 - 2015/7",
    },
    {
      title: "數位影像編輯技術之研究及在多媒體安全之應用",
      meta: "協助執行國科會計畫",
      period: "2011/8 - 2014/7",
    },
  ];

  const getStatusStyle = (status?: string) => {
    if (!status) return null;

    if (status === "核定通過") {
      return {
        backgroundColor: "rgba(252, 185, 0, 0.12)",
        color: "#fcb900",
        border: "1px solid rgba(252, 185, 0, 0.35)",
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
                  className="fw-bold"
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
                    className="px-3 py-2 rounded-pill small fw-bold"
                    style={getStatusStyle(project.status) || {}}
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
