type AlumniItem = {
  name: string
  joinDate: string
  title: string
  ability?: string
  experience?: string
  certificate?: string
  status?: string
  website?: string
}

type UndergraduateAlumniItem = {
  year: string
  name: string
  title: string
  note: string
}

type OtherStudentItem = {
  name: string
  joinTime: string
  title: string
  status: string
  note: string
}

function SectionHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div
      className="p-3 rounded-3 mb-3"
      style={{ backgroundColor: "#7a1b1b" }}
    >
      <h4 className="fw-bold text-white m-0 text-center">
        {title}{" "}
        <span style={{ fontStyle: "italic", fontWeight: 500 }}>
          ({subtitle})
        </span>
      </h4>
    </div>
  )
}

function AlumniCard({ item }: { item: AlumniItem }) {
  return (
    <div
      className="h-100 p-3 rounded-4 border"
      style={{
        backgroundColor: "#111",
        borderColor: "#7a1b1b",
      }}
    >
      <div className="d-flex flex-column gap-3">
        <div>
          {item.website ? (
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none fw-bold"
              style={{ color: "#ff4d4f", fontSize: "1.15rem" }}
            >
              {item.name}
            </a>
          ) : (
            <div
              className="fw-bold"
              style={{ color: "#ff4d4f", fontSize: "1.15rem" }}
            >
              {item.name}
            </div>
          )}
        </div>

        <div>
          <div className="text-secondary small mb-1">參與時間</div>
          <div className="text-white">{item.joinDate}</div>
        </div>

        <div>
          <div className="text-secondary small mb-1">題目</div>
          <div className="text-light" style={{ lineHeight: 1.8 }}>
            {item.title}
          </div>
        </div>

        {item.ability && (
          <div>
            <div className="text-secondary small mb-1">專長</div>
            <div className="text-white">{item.ability}</div>
          </div>
        )}

        {(item.experience || item.certificate) && (
          <div>
            <div className="text-secondary small mb-1">備註</div>
            {item.experience && (
              <div className="fst-italic mb-1" style={{ color: "#0693e3" }}>
                {item.experience}
              </div>
            )}
            {item.certificate && (
              <div style={{ color: "lightgreen" }}>{item.certificate}</div>
            )}
          </div>
        )}

        {item.status && (
          <div>
            <div className="text-secondary small mb-1">狀態</div>
            <div
              className="px-2 py-1 rounded-3 d-inline-block"
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                color: "#fff",
              }}
            >
              {item.status}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function AlumniSection({
  title,
  subtitle,
  data,
}: {
  title: string
  subtitle: string
  data: AlumniItem[]
}) {
  return (
    <section className="mb-5">
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="row g-3">
        {data.map((item, idx) => (
          <div className="col-12 col-md-6 col-xl-4" key={idx}>
            <AlumniCard item={item} />
          </div>
        ))}
      </div>
    </section>
  )
}

function UndergraduateProjectCard({
  item,
}: {
  item: UndergraduateAlumniItem
}) {
  return (
    <div
      className="h-100 p-3 rounded-4 border"
      style={{
        backgroundColor: "#111",
        borderColor: "#7a1b1b",
      }}
    >
      <div className="d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-start gap-2">
          <div
            className="fw-bold"
            style={{ color: "#ff4d4f", fontSize: "1.1rem" }}
          >
            {item.year} 學年
          </div>
        </div>

        <div>
          <div className="text-secondary small mb-1">成員</div>
          <div className="text-white">{item.name}</div>
        </div>

        <div>
          <div className="text-secondary small mb-1">專題名稱</div>
          <div className="text-light" style={{ lineHeight: 1.8 }}>
            {item.title}
          </div>
        </div>

        {item.note && (
          <div>
            <div className="text-secondary small mb-1">備註</div>
            <div style={{ color: "#0693e3" }}>{item.note}</div>
          </div>
        )}
      </div>
    </div>
  )
}

function OtherStudentCard({ item }: { item: OtherStudentItem }) {
  return (
    <div
      className="h-100 p-3 rounded-4 border"
      style={{
        backgroundColor: "#111",
        borderColor: "#7a1b1b",
      }}
    >
      <div className="d-flex flex-column gap-3">
        <div
          className="fw-bold"
          style={{ color: "#ff4d4f", fontSize: "1.15rem" }}
        >
          {item.name}
        </div>

        <div>
          <div className="text-secondary small mb-1">參與時間</div>
          <div className="text-white">{item.joinTime}</div>
        </div>

        <div>
          <div className="text-secondary small mb-1">主題 / 專長</div>
          <div className="text-light" style={{ lineHeight: 1.8 }}>
            {item.title}
          </div>
        </div>

        <div>
          <div className="text-secondary small mb-1">目前狀態</div>
          <div className="text-white">{item.status}</div>
        </div>

        {item.note && item.note !== "N/A" && (
          <div>
            <div className="text-secondary small mb-1">備註</div>
            <div style={{ color: "#0693e3" }}>{item.note}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export function Alumni() {
  const phdAlumniDatas: AlumniItem[] = [
    {
      name: "陳勝舢",
      joinDate: "2022.07-2026.03",
      title: "應用大型語言模型於網路威脅情資分析之研究",
      ability: "網路威脅情資、人工智慧、藍隊技術",
      experience: "資訊工程博士學位",
      status: "離校中",
      certificate: "與白敦文副校長共同指導",
      website: "/#/Member/2022/ryan",
    },
  ]

  const masterAlumniDatas: AlumniItem[] = [
    {
      name: "許貽昇",
      joinDate: "2023.03-2026.01",
      title: "使用程式碼屬性圖萃取技術於自動化漏洞挖掘與風險路徑分析",
      ability: "PWN 技術",
      experience: "資訊安全碩士學位學程",
      status: "奧義智慧科技股份有限公司-資安研究員 (研發替代役)",
      website: "/#/Member/2023/Eason",
    },
    {
      name: "顏柏耀",
      joinDate: "2023.03-2026.01",
      title: "應用機器學習技術偵測 EDoS 攻擊於雲端微服務成本分析",
      ability: "Reverse 技術",
      experience: "資訊安全碩士學位學程",
      status: "離校",
      website: "/#/Member/2023/Y",
    },
    {
      name: "曹凱翔",
      joinDate: "2023.03-2025.08",
      title: "基於檢索增強生成技術於網路威脅情資之攻擊識別",
      ability: "Web 攻防",
      experience: "資訊安全碩士學位學程",
      status: "世界先進積體電路股份有限公司-資安工程師 (研發替代役)",
      website: "/#/Member/2023/Bobo",
    },
    {
      name: "廖家賢",
      joinDate: "2023.08-2025.08",
      title: "基於Kyber-KEM技術之安全身份認證協定於低軌衛星通訊系統",
      ability: "密碼學",
      experience: "資訊安全碩士學位學程",
      status: "台達電子工程股份有限公司-電動車事業群-資安資深工程師",
      certificate: "與林敬皇助理教授共同指導",
      website: "/#/Member/2023/Salt",
    },
    {
      name: "林幸慧",
      joinDate: "2022.12-2025.08",
      title: "評估低軌衛星環境中電磁脈衝攻擊與其緩解機制之設計",
      ability: "藍隊技術",
      experience: "資訊安全碩士學位學程",
      status: "BCCS 漢昕科技-資安事件調查分析與處理",
      website: "/#/Member/2023/Ravin",
    },
    {
      name: "張家維",
      joinDate: "2022.12-2025.08",
      title: "應用對抗式樣本於 XSS 模糊測試之防禦研究",
      ability: "Web 攻防技術",
      experience: "資訊安全碩士學位學程",
      status: "ABPSecurite 安普新科技",
      website: "/#/Member/2023/CHW",
    },
    {
      name: "陳丹妮",
      joinDate: "2022.09-2024.08",
      title: "輔助乳癌術後重建病人醫病共同決策之人工智慧聊天機器人",
      ability: "人工智慧",
      experience: "美國德州大學阿靈頓分校 雙聯學位",
      certificate: "",
      status: "訊能集思智能科技股份有限公司-產品經理",
    },
    {
      name: "李昆積",
      joinDate: "2022.09-2024.08",
      title: "Prompt Injection 分析與緩解策略之研究 – 以大語言模型聊天機器人為例",
      ability: "Web 攻防技術",
      experience: "資訊工程系 碩士學位",
      certificate: "",
      status: "安碁資訊股份有限公司-滲透測試工程師",
      website: "/#/Member/2022/kunjili",
    },
    {
      name: "何亞翰",
      joinDate: "2022.09-2024.08",
      title: "使用生成式模型於公開來源情報去識別化技術之應用",
      ability: "密碼學、硬體安全",
      experience: "資訊工程系 碩士學位",
      certificate: "",
      status: "財團法人資訊工業策進會-資安科技研究所/資安維運鑑識組",
      website: "/#/Member/2022/Cliff",
    },
  ]

  const undergraduateAlumniStudentTableDatas: UndergraduateAlumniItem[] = [
    {
      year: "114",
      name: "張意昌、吳耀東、林品緯、張睿恩",
      title: "專案型評測系統設計方法",
      note: "通過大專生計畫編號:114-2813-C-027-053-E、榮獲 2025 北科實務專題競賽 佳作",
    },
    {
      year: "114",
      name: "陳奕翔、廖峰瑞、張峻誠、黃政豪",
      title: "透過問題重塑以及微調 LLM 提升程式碼補全能力",
      note: "",
    },
    {
      year: "113",
      name: "陳思群、顏睿寬、許宸瑋",
      title: "結合語言模型與特徵機制之整合式網路入侵偵測告警系統",
      note: "尚未完成實習：顏睿寬",
    },
    {
      year: "113",
      name: "吳奕萱、程邦博、何穎宣",
      title: "基於 API 呼叫序列的深度學習模型用於勒索病毒偵測",
      note: "通過大專生計畫編號:113-2813-C-027-054-E、榮獲 2024 北科實務專題競賽 佳作",
    },
    {
      year: "113",
      name: "黃政、劉硯皓、張庭偉",
      title: "Practice Tools for Simple Design",
      note: "榮獲 2024 北科實務專題競賽 佳作",
    },
    {
      year: "113",
      name: "林蔚、許恩誠、魏名宏",
      title: "透過模擬駭客行為來學習網路攻防觀念之教學用軟體設計",
      note: "尚未完成實習：魏名宏",
    },
    {
      year: "112",
      name: "張洸銘",
      title: "CVE-2023-35936發現以及0-day",
      note: "與陳彥霖老師合作指導",
    },
  ]

  const othersStudentTableDatas: OtherStudentItem[] = [
    {
      name: "黃政",
      joinTime: "2023.04-2025.08",
      title: "程式能力、物件導向程式設計TA",
      status: "N/A",
      note: "N/A",
    },
    {
      name: "陳世昂",
      joinTime: "2024.09-2025.08",
      title: "程式能力、物件導向程式設計TA",
      status: "國立臺北科技大學資訊工程系（大學部）",
      note: "N/A",
    },
    {
      name: "林星主",
      joinTime: "2023.07-pres",
      title: "女婕思選手、藍隊技能、安全程式設計",
      status: "國立清華大學 資訊安全研究所",
      note: "N/A",
    },
    {
      name: "黃漢軒",
      joinTime: "2023.04-pres.",
      title: "系統安全、程式能力、物件導向程式設計TA",
      status: "國立陽明交通大學 資訊安全研究所",
      note: "實習經驗：前中華民國電腦技能基金會實習生",
    },
    {
      name: "張洸銘",
      joinTime: "2022.11-pres.",
      title: "網頁攻防技術、網路安全技術、安全程式設計TA",
      status: "如梭世代股份有限公司",
      note: "實習經驗：如梭世代股份有限公司、DEVCORE戴夫寇爾",
    },
    {
      name: "蔡峻傑",
      joinTime: "2022.09-2024.08",
      title: "含加權要項可驗證分散式聚合函數之低隱私預算差分隱私方案",
      status: "N/A",
      note: "與楊士萱副校長合作指導",
    },
    {
      name: "葉子多",
      joinTime: "2022.09-2023.08",
      title: "聯邦式學習上抗個體資料集成員推理攻擊之防禦強化技術",
      status: "美國賓州州立大學 雙聯學位",
      note: "與楊士萱副校長合作指導",
    },
    {
      name: "李子儀",
      joinTime: "2022.11-2023.11",
      title: "國科會計畫執行、研究討論",
      status: "萬芳醫院",
      note: "N/A",
    },
  ]

  return (
    <div className="container py-4" style={{ maxWidth: "1200px" }}>
      <AlumniSection
        title="博士生"
        subtitle="Ph.D. students"
        data={phdAlumniDatas}
      />

      <AlumniSection
        title="碩士生"
        subtitle="Master students"
        data={masterAlumniDatas}
      />

      <section className="mb-5">
        <SectionHeader title="專題生" subtitle="Undergraduate students" />
        <div className="row g-3">
          {undergraduateAlumniStudentTableDatas.map((item, idx) => (
            <div className="col-12 col-md-6 col-xl-4" key={idx}>
              <UndergraduateProjectCard item={item} />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <SectionHeader title="合作學生" subtitle="Others" />
        <div className="row g-3">
          {othersStudentTableDatas.map((item, idx) => (
            <div className="col-12 col-md-6 col-xl-4" key={idx}>
              <OtherStudentCard item={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
