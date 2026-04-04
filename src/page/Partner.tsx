export function Partner() {
  const partnerDatas = [
    {
      organization: "國立清華大學 資訊工程系",
      name: "黃婷婷",
      title: "教授",
      website: "https://www.cs.nthu.edu.tw/~tingting/",
      descriptions: ["硬體安全"],
    },
    {
      organization: "鈦昇科技股份有限公司",
      name: "吳曉玲",
      title: "博士",
      website: "",
      descriptions: ["通訊安全、密碼學"],
    },
    {
      organization: "國立宜蘭大學 資訊工程系",
      name: "曾國鈞",
      title: "助理教授",
      website: "https://sites.google.com/view/kctseng",
      descriptions: ["量子密碼學（先進安全計算實驗室）"],
    },
    {
      organization: "新北市立三重商工 資料處理科",
      name: "林易民",
      title: "老師",
      website: "https://www.scvs.ntpc.edu.tw/p/404-1000-802.php",
      descriptions: [
        "暨教育部 商業與管理群科中心委員",
        "網頁安全、系統安全強化、資安事件分析、培訓網路安全職類選手",
      ],
    },
    {
      organization: "國立清華大學 資訊工程系",
      name: "吳中浩",
      title: "教授",
      website: "http://www.allenwuuw.com/",
      descriptions: ["人工智慧、AI Art"],
    },
    {
      organization: "大連理工大學 軟件學院",
      name: "郭成",
      title: "教授",
      website: "http://faculty.dlut.edu.cn/2012011156/zh_CN/index.htm",
      descriptions: ["通訊安全、密碼學"],
    },
  ];

  const renderName = (name: string, website: string) => {
    if (!website) {
      return <span>{name}</span>;
    }

    return (
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none"
        style={{ color: "#ffffff" }}
      >
        {name}
      </a>
    );
  };

  return (
    <div className="container py-4" style={{ maxWidth: "1180px" }}>
      <div
        className="p-3 rounded-4 mb-4 text-center"
        style={{ backgroundColor: "#7a1b1b" }}
      >
        <h3 className="fw-bold text-white m-0">合作夥伴 Partners</h3>
      </div>

      <div className="row g-4">
        {partnerDatas.map((data, index) => (
          <div className="col-12 col-md-6 col-xl-4" key={`${data.name}-${index}`}>
            <div
              className="h-100 rounded-4 border p-4"
              style={{
                backgroundColor: "#111",
                borderColor: "rgba(255,255,255,0.10)",
              }}
            >
              <div className="d-flex flex-column gap-3 h-100">
                <div>
                  <div
                    className="mb-2"
                    style={{
                      color: "#9ca3af",
                      fontSize: "0.92rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {data.organization}
                  </div>

                  <div
                    className="fw-bold"
                    style={{
                      color: "#ff4d4f",
                      fontSize: "1.35rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {renderName(data.name, data.website)}
                  </div>

                  <div
                    className="mt-1"
                    style={{
                      color: "#e5e7eb",
                      fontSize: "1rem",
                    }}
                  >
                    {data.title}
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-2">
                  {data.descriptions.map((description, descIndex) => (
                    <span
                      key={`${data.name}-desc-${descIndex}`}
                      className="px-3 py-2 rounded-pill"
                      style={{
                        backgroundColor: "rgba(56, 189, 248, 0.08)",
                        border: "1px solid rgba(56, 189, 248, 0.18)",
                        color: "#7dd3fc",
                        fontSize: "0.92rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {description}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
