import _483 from "../assets/member/483.jpg"
import _Guan4Tou2 from "../assets/member/Guan4Tou2.png"
import _Rock from "../assets/member/Rock.jpg"
import _Young from "../assets/logo.png"
import _Win from "../assets/member/Win.jpg"
import _Adb2 from "../assets/member/Adb2.jpg"
import _WIFI from "../assets/member/WIFI.jpg"
import _PaulWang from "../assets/member/PaulWang.jpg"
import _ypp from "../assets/member/ybb.jpg"
import _RobertLiao from "../assets/member/robertliao.jpg";
import _Marco from "../assets/member/Marco.png"
import _yeyeye from "../assets/member/yeyeye.jpg";
import _M4RVjN from "../assets/member/M4RVjN.jpg"
import _Mercury from "../assets/member/Mercury.jpg"
import _Stanley from "../assets/member/Stanley.png"

// 之後若有其他照片，照這樣繼續加
// import _JunAn from "../../assets/member/JunAn.jpg"
// import _Yueric from "../../assets/member/Yueric.jpg"

type MemberItem = {
  key: string
  name: string
  joinDate?: string
  role?: string
  coAdvisor?: string
  ability?: string
  experience?: string
  certificate?: string
  website?: string
  avatar?: string
}

type UndergraduateGroup = {
  group: string
  members: {
    name: string
    intern: string
  }[]
  note: string
  progress: number
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

function MemberCard({ member }: { member: MemberItem }) {
  const hasJoinInfo = member.joinDate || member.role || member.coAdvisor
  const hasExtraInfo = member.ability || member.experience || member.certificate

  return (
    <div
      className="h-100 p-3 rounded-4 border"
      style={{
        backgroundColor: "#111",
        borderColor: "#7a1b1b",
      }}
    >
      <div className="d-flex flex-column gap-3">
        <div className="d-flex align-items-center gap-3">
          {member.avatar && (
            <img
              src={member.avatar}
              alt={member.name}
              className="rounded-circle"
              style={{
                width: "72px",
                height: "72px",
                objectFit: "cover",
                border: "2px solid #7a1b1b",
                flexShrink: 0,
              }}
            />
          )}

          <div>
            {member.website ? (
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none fw-bold"
                style={{
                  color: "#ff4d4f",
                  fontSize: "1.15rem",
                }}
              >
                {member.name}
              </a>
            ) : (
              <div
                className="fw-bold"
                style={{
                  color: "#ff4d4f",
                  fontSize: "1.15rem",
                }}
              >
                {member.name}
              </div>
            )}
          </div>
        </div>

        {hasJoinInfo && (
          <div>
            <div className="text-secondary small mb-2">加入資訊</div>

            {(member.joinDate || member.role) && (
              <div className="text-white">
                {member.joinDate || ""}
                {member.role ? `（${member.role}）` : ""}
              </div>
            )}

            {member.coAdvisor && (
              <div className="text-light small mt-1">
                －與 <span className="fw-bold">{member.coAdvisor}</span> 老師共同指導
              </div>
            )}
          </div>
        )}

        {hasExtraInfo && (
          <div>
            <div className="text-secondary small mb-2">特殊經歷 / 身份</div>

            {member.ability && (
              <div className="text-white mb-1">{member.ability}</div>
            )}

            {member.experience && (
              <div
                className="mb-1 fst-italic"
                style={{ color: "#0693e3" }}
              >
                {member.experience}
              </div>
            )}

            {member.certificate && (
              <div
                className="d-inline-block px-2 py-1 rounded-pill small"
                style={{
                  backgroundColor: "rgba(144, 238, 144, 0.12)",
                  color: "lightgreen",
                  border: "1px solid rgba(144, 238, 144, 0.35)",
                }}
              >
                {member.certificate}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function MemberSection({
  title,
  subtitle,
  data,
}: {
  title: string
  subtitle: string
  data: MemberItem[]
}) {
  return (
    <section className="mb-5">
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="row g-3">
        {data.map((member) => (
          <div className="col-12 col-md-6 col-xl-4" key={member.key}>
            <MemberCard member={member} />
          </div>
        ))}
      </div>
    </section>
  )
}

function UndergraduateCard({ item }: { item: UndergraduateGroup }) {
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
          style={{
            color: "#ff4d4f",
            fontSize: "1.15rem",
          }}
        >
          {item.group}
        </div>

        <div>
          <div className="text-secondary small mb-2">成員</div>
          <div className="d-flex flex-column gap-1">
            {item.members.map((member, idx) => (
              <div key={idx} className="text-white">
                {member.name}
                {member.intern ? (
                  <span className="ms-2" style={{ color: "#0693e3" }}>
                    {member.intern}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {item.note && (
          <div>
            <div className="text-secondary small mb-1">備註</div>
            <div className="text-light">{item.note}</div>
          </div>
        )}

        <div>
          <div className="text-secondary small mb-1">進度</div>
          <div
            className="fw-bold"
            style={{
              color: "white",
              letterSpacing: "1px",
              fontFamily: "monospace",
            }}
          >
            {"█".repeat(item.progress)}
            <span style={{ color: "#555" }}>
              {"░".repeat(10 - item.progress)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Member() {
  const phdUserTableItem: MemberItem[] = [
    {
      key: "1",
      name: "-",
      experience: "-",
    },
  ]

  const masterUserTableItem: MemberItem[] = [
    {
      key: "2",
      name: "吳冠廷",
      joinDate: "2023.12",
      role: "碩二，資安碩士",
      coAdvisor: "",
      experience: "",
      certificate: "實驗室安全管理、藍隊組長",
      website: "/#/Member/2024/Guan4Tou2",
      avatar: _Guan4Tou2,
    },
    {
      key: "3",
      name: "李宜鴻",
      joinDate: "2024.11",
      role: "碩二，資安碩士",
      coAdvisor: "陳昱圻",
      experience: "美國辛辛那提大學 雙聯學位",
      certificate: "",
      website: "/#/Member/2024/Rock",
      avatar: _Rock,
    },
    {
      key: "4",
      name: "李宇揚",
      joinDate: "2023.12",
      role: "碩二，資安碩士",
      coAdvisor: "",
      experience: "",
      certificate: "",
      website: "/#/Member/2024/Young",
      avatar: _Young,
    },
    {
      key: "5",
      name: "黃廷翰",
      joinDate: "2023.12",
      role: "碩二，資安碩士",
      coAdvisor: "",
      experience: "",
      certificate: "",
      website: "/#/Member/2024/Win",
      avatar: _Win,
    },
    {
      key: "6",
      name: "陳彥宇",
      joinDate: "2024.01",
      role: "碩二，資工碩士",
      coAdvisor: "",
      experience: "",
      certificate: "",
      website: "/#/Member/2024/Adb2",
      avatar: _Adb2,
    },
    {
      key: "7",
      name: "李佳軒",
      joinDate: "2024.01",
      role: "碩二，資安碩士",
      coAdvisor: "",
      experience: "",
      certificate: "",
      website: "/#/Member/2024/WIFI",
      avatar: _WIFI,
    },
    {
      key: "8",
      name: "王立翔",
      joinDate: "2024.04",
      role: "碩二，資工碩士",
      coAdvisor: "",
      experience: "",
      certificate: "REVERSE組長",
      website: "/#/Member/2024/PaulWang",
      avatar: _PaulWang,
    },
    {
      key: "9",
      name: "黃奕評",
      joinDate: "2024.06",
      role: "碩二，資安碩士",
      coAdvisor: "",
      experience: "",
      certificate: "PWN組長",
      website: "/#/Member/2024/ypp",
      avatar: _ypp,
    },
    {
      key: "10",
      name: "廖哲霈",
      joinDate: "2024.08",
      role: "碩二，資工碩士",
      coAdvisor: "郭忠義",
      experience: "",
      certificate: "",
      website: "/#/Member/2024/RobertLiao",
      avatar: _RobertLiao,
    },
    {
      key: "11",
      name: "黃昱翔",
      joinDate: "2025.05",
      role: "碩二，資安碩士",
      coAdvisor: "",
      experience: "",
      certificate: "",
      website: "/#/member/2024/Marco",
      avatar: _Marco,
    },
    {
      key: "13",
      name: "沈柏安",
      joinDate: "2024.12",
      role: "碩一，資安碩士",
      coAdvisor: "",
      experience: "",
      certificate: "實驗室網路管理、WEB組長",
      website: "/#/member/2025/483",
      avatar: _483,
    },
    {
      key: "14",
      name: "郭竣安",
      joinDate: "2025.01",
      role: "碩一，資安碩士",
      coAdvisor: "",
      experience: "",
      certificate: "實驗室財務/採購管理",
      website: "/#/member/2025/JunAn",
    },
    {
      key: "15",
      name: "劉章佑",
      joinDate: "2025.01",
      role: "碩一，資安碩士",
      coAdvisor: "",
      experience: "",
      certificate: "實驗室網站管理",
      website: "/#/member/2025/Yueric",
    },
    {
      key: "16",
      name: "劉業閎",
      joinDate: "2025.03",
      role: "碩一，資工碩士",
      coAdvisor: "",
      experience: "",
      certificate: "實驗室儀器設備管理",
      website: "/#/member/2025/Yeyeye",
      avatar: _yeyeye,
    },
    {
      key: "18",
      name: "楊育誠",
      joinDate: "2025.05",
      role: "碩一，資工碩士",
      coAdvisor: "",
      experience: "執行 SunBird 計畫",
      certificate: "實驗室公關",
      website: "/#/member/2025/Victor",
    },
    {
      key: "19",
      name: "鄭羽農",
      joinDate: "2025.04",
      role: "碩一，資工碩士",
      coAdvisor: "吳牧恩",
      experience: "金融領域",
      certificate: "",
    },
    {
      key: "20",
      name: "黃致程",
      joinDate: "2025.12",
      role: "碩零，資安碩士",
      coAdvisor: "",
      experience: "",
      certificate: "",
      website: "/#/member/2026/M4RVjN",
      avatar: _M4RVjN,
    },
    {
      key: "21",
      name: "黃信誌",
      joinDate: "2025.12",
      role: "碩零，資安碩士",
      coAdvisor: "",
      experience: "前威聯通股份有限公司資安實習生",
      certificate: "",
      website: "/#/member/2026/Mercury",
      avatar: _Mercury,
    },
    {
      key: "22",
      name: "賴要宏",
      joinDate: "2025.12",
      role: "碩零，資安碩士",
      coAdvisor: "",
      experience: "",
      certificate: "",
      website: "/#/member/2026/Mimimaomao",
    },
    {
      key: "23",
      name: "陳威翰",
      joinDate: "2025.12",
      role: "碩零，資安碩士",
      coAdvisor: "",
      experience: "杜浦數位安全股份有限公司實習生",
      certificate: "",
      website: "/#/member/2026/Stanley",
      avatar: _Stanley,
    },
  ]

  const consultantUserTableItem: MemberItem[] = [
    {
      key: "1",
      name: "黃漢軒",
      joinDate: "2023.04",
      role: "",
      coAdvisor: "",
      ability: "國立陽明交通大學 - 資訊安全研究所",
      experience: "",
      certificate: "技術顧問",
      website: "https://github.com/c1ydehhx",
    },
    {
      key: "2",
      name: "林妍蓁",
      joinDate: "2023.06",
      role: "",
      coAdvisor: "",
      ability: "國立臺北科技大學 - 資訊工程學系",
      experience: "網頁攻防技術",
      certificate: "比賽選手",
    },
    {
      key: "3",
      name: "陳昱臻",
      joinDate: "2024.04",
      role: "",
      coAdvisor: "",
      ability: "國立東華大學 - 資訊工程學系",
      experience: "",
      certificate: "比賽選手",
    },
    {
      key: "4",
      name: "白又銘/郭思彤/吳宛軒/黃奕文",
      joinDate: "2024.10",
      role: "",
      coAdvisor: "林易民",
      ability: "",
      experience: "",
      certificate: "比賽選手",
    },
    {
      key: "6",
      name: "林逸凡",
      joinDate: "2025.06",
      role: "",
      coAdvisor: "",
      ability: "國立臺北科技大學 - 資訊工程學系",
      experience: "網頁攻防技術/滲透",
      certificate: "比賽選手",
    },
    {
      key: "7",
      name: "張意昌",
      joinDate: "2024.06",
      role: "",
      coAdvisor: "",
      ability: "國立臺北科技大學 - 資訊工程學系",
      experience: "",
      certificate: "程式能力、物件導向程式設計TA",
    },
  ]

  const undergraduateStudentTableItem: UndergraduateGroup[] = [
    {
      group: "114#1",
      members: [
        {
          name: "林妍蓁",
          intern: "",
        },
        {
          name: "吳哲丞",
          intern: "",
        },
        {
          name: "李馥亘",
          intern: "",
        },
      ],
      note: "保留",
      progress: 7,
    },
    {
      group: "114#2",
      members: [
        {
          name: "林希芸",
          intern: "",
        },
        {
          name: "潘雙永",
          intern: "",
        },
      ],
      note: "參與SunBird計畫（dcTrack 組）",
      progress: 5,
    },
  ]

  return (
    <div className="container py-4" style={{ maxWidth: "1200px" }}>
      <MemberSection
        title="博士生"
        subtitle="Ph.D. students"
        data={phdUserTableItem}
      />

      <MemberSection
        title="碩士生"
        subtitle="Master students"
        data={masterUserTableItem}
      />

      <MemberSection
        title="合作學生"
        subtitle="Others"
        data={consultantUserTableItem}
      />

      <section className="mb-5">
        <SectionHeader title="專題生" subtitle="Undergraduate students" />
        <div className="row g-3">
          {undergraduateStudentTableItem.map((item, idx) => (
            <div className="col-12 col-md-6" key={idx}>
              <UndergraduateCard item={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
