import teacherPhoto from "../assets/cys2.png";

type ProfileItem = {
  title: string;
  descriptions: string[];
};

const profileDatas: ProfileItem[] = [
  {
    title: "姓名（Name）",
    descriptions: ["孫勤昱（Chin-Yu Sun）"],
  },
  {
    title: "職稱（Position）",
    descriptions: ["國立臺北科技大學 資訊工程系 助理教授（2022/8 - pres.）"],
  },
  {
    title: "學歷（Degree）",
    descriptions: ["國立清華大學 資訊工程學系博士（Ph. D., National Tsing Hua University, Taiwan）"],
  },
  {
    title: "專長（Expertise）",
    descriptions: [
      "網路安全 – 攻防技術（Network Security and hacking techniques）",
      "密碼學與其相關應用（Cryptography and its applications）",
      "資訊安全（Information Security）",
      "硬體安全（Hardware Security）",
      "量子密碼學（Quantum Cryptography）",
    ],
  },
  {
    title: "辦公室（Office）",
    descriptions: ["宏裕科研大樓 1626室（Hong-Yue Tech. Research Building 1626）"],
  },
  {
    title: "聯繫信箱（Email）",
    descriptions: ["cysun@ntut.edu.tw"],
  },
  {
    title: "聯絡電話（Phone）",
    descriptions: ["+886-2-2771-2171 #4245（研究室）"],
  },
  {
    title: "實驗室（Lab）",
    descriptions: ["資訊安全實驗室 (Information Security Lab.)"],
  },
];

function getValue(keyword: string) {
  return profileDatas.find((item) => item.title.includes(keyword));
}

function renderDescription(text: string) {
  const lower = text.toLowerCase();

  if (lower.includes("@")) {
    const emailMatch = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
    if (emailMatch) {
      const email = emailMatch[0];
      return (
        <a
          href={`mailto:${email}`}
          className="text-decoration-none"
          style={{ color: "#ffffff" }}
        >
          {text}
        </a>
      );
    }
  }

  if (text.includes("+886") || text.includes("#")) {
    const tel = text.replace(/[^\d+#-]/g, "");
    return (
      <a
        href={`tel:${tel}`}
        className="text-decoration-none"
        style={{ color: "#ffffff" }}
      >
        {text}
      </a>
    );
  }

  return <span>{text}</span>;
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div
      className="px-4 py-3 rounded-4 mb-3"
      style={{ backgroundColor: "#7a1b1b" }}
    >
      <h5 className="fw-bold text-white m-0">{title}</h5>
    </div>
  );
}

function InfoMiniCard({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div
      className="h-100 rounded-4 p-4"
      style={{
        backgroundColor: "#111",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="text-secondary small mb-2">{label}</div>
      <div
        className="text-white"
        style={{ lineHeight: 1.8, fontSize: "1rem", wordBreak: "break-word" }}
      >
        {value ? renderDescription(value) : null}
      </div>
    </div>
  );
}

export function Profile() {
  const name = getValue("姓名");
  const position = getValue("職稱");
  const degree = getValue("學歷");
  const expertise = getValue("專長");
  const office = getValue("辦公室");
  const email = getValue("信箱");
  const phone = getValue("電話");
  const lab = getValue("實驗室");

  return (
    <div className="container py-4" style={{ maxWidth: "1100px" }}>
      <div
        className="rounded-4 border p-4 p-md-5 mb-4"
        style={{
          backgroundColor: "#111",
          borderColor: "#7a1b1b",
        }}
      >
        <div className="row g-4 align-items-center">
          <div className="col-12 col-md-4 col-lg-3">
            <div className="d-flex justify-content-center">
              <img
                src={teacherPhoto}
                alt="Chin-Yu Sun"
                className="img-fluid rounded-4"
                style={{
                  width: "100%",
                  maxWidth: "220px",
                  aspectRatio: "4 / 5",
                  objectFit: "cover",
                  border: "2px solid #7a1b1b",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.28)",
                }}
              />
            </div>
          </div>

          <div className="col-12 col-md-8 col-lg-9">
            <div
              className="fw-bold mb-2"
              style={{
                color: "#ff4d4f",
                fontSize: "clamp(2rem, 3vw, 2.8rem)",
                lineHeight: 1.15,
              }}
            >
              孫勤昱
            </div>

            <div
              className="mb-3"
              style={{
                color: "#dddddd",
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                fontStyle: "italic",
              }}
            >
              Chin-Yu Sun
            </div>

            <div
              className="text-white mb-3"
              style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              {position?.descriptions?.[0]}
            </div>

            <div
              className="text-secondary"
              style={{ fontSize: "1rem", lineHeight: 1.9, maxWidth: "780px" }}
            >
              中華民國資訊安全學會 北區副秘書長（2024/12 - pres.）
              國立臺北科技大學 資訊工程系 校外實習委員（2024/8 - pres.）
              國立臺北科技大學 資訊工程系 系學審會委員（2023/8 - pres.）
              國立臺北科技大學 資訊工程系 技優學生輔導小組成員（2023/8 - pres.）
            </div>
          </div>
        </div>
      </div>

      <section className="mb-4">
        <SectionTitle title="聯絡資訊" />
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <InfoMiniCard label="Email" value={email?.descriptions?.[0]} />
          </div>
          <div className="col-12 col-md-4">
            <InfoMiniCard label="Phone" value={phone?.descriptions?.[0]} />
          </div>
          <div className="col-12 col-md-4">
            <InfoMiniCard label="Office" value={office?.descriptions?.[0]} />
          </div>
        </div>
      </section>

      <section className="mb-4">
        <SectionTitle title="學歷" />
        <div
          className="rounded-4 border p-4"
          style={{
            backgroundColor: "#111",
            borderColor: "#7a1b1b",
          }}
        >
          <div
            className="text-white"
            style={{ lineHeight: 1.9, fontSize: "1.05rem" }}
          >
            {degree?.descriptions?.map((description, index) => (
              <div key={`degree-${index}`}>{description}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-4">
        <SectionTitle title="專長" />
        <div
          className="rounded-4 border p-4"
          style={{
            backgroundColor: "#111",
            borderColor: "#7a1b1b",
          }}
        >
          <div className="d-flex flex-wrap gap-3">
            {expertise?.descriptions?.map((description, index) => (
              <span
                key={`expertise-${index}`}
                className="px-3 py-2 rounded-pill"
                style={{
                  backgroundColor: "rgba(6, 147, 227, 0.12)",
                  color: "#9fd4ff",
                  border: "1px solid rgba(6, 147, 227, 0.35)",
                  fontSize: "0.98rem",
                  lineHeight: 1.6,
                }}
              >
                {description}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-4">
        <SectionTitle title="其他資訊" />
        <div className="row g-3">
          {name && (
            <div className="col-12 col-md-6">
              <div
                className="h-100 rounded-4 border p-4"
                style={{
                  backgroundColor: "#111",
                  borderColor: "#7a1b1b",
                }}
              >
                <div className="text-secondary small mb-2">{name.title}</div>
                <div className="text-white" style={{ lineHeight: 1.8 }}>
                  {name.descriptions.map((description, index) => (
                    <div key={`name-${index}`}>{description}</div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {lab && (
            <div className="col-12 col-md-6">
              <div
                className="h-100 rounded-4 border p-4"
                style={{
                  backgroundColor: "#111",
                  borderColor: "#7a1b1b",
                }}
              >
                <div className="text-secondary small mb-2">{lab.title}</div>
                <div className="text-white" style={{ lineHeight: 1.8 }}>
                  {lab.descriptions.map((description, index) => (
                    <div key={`lab-${index}`}>{description}</div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
