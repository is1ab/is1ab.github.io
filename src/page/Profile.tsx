import datas from "../assets/profile.json";
import teacherPhoto from "../assets/cys2.png";

type ProfileItem = {
  title: string;
  descriptions: string[];
};

function getValue(profileDatas: ProfileItem[], keyword: string) {
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
  const profileDatas = datas as ProfileItem[];

  const nameItem = getValue(profileDatas, "姓名");
  const positionItem = getValue(profileDatas, "職稱");
  const degreeItem = getValue(profileDatas, "學歷");
  const expertiseItem = getValue(profileDatas, "專長");
  const officeItem = getValue(profileDatas, "辦公室");
  const emailItem = getValue(profileDatas, "信箱");
  const phoneItem = getValue(profileDatas, "電話");
  const labItem = getValue(profileDatas, "實驗室");

  return (
    <div className="container py-4" style={{ maxWidth: "1100px" }}>
      <div
        className="p-3 rounded-4 mb-4 text-center"
        style={{ backgroundColor: "#7a1b1b" }}
      >
        <h3 className="fw-bold text-white m-0">簡介</h3>
      </div>

      {/* 主卡 */}
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
              {positionItem?.descriptions?.[0]}
            </div>

            <div
              className="text-secondary"
              style={{ fontSize: "1rem", lineHeight: 1.9, maxWidth: "780px" }}
            >
              研究領域涵蓋資訊安全、網路攻防、密碼學、硬體安全與量子密碼學，並致力於安全技術研究與實務應用。
            </div>
          </div>
        </div>
      </div>

      {/* 聯絡資訊 */}
      <section className="mb-4">
        <SectionTitle title="聯絡資訊" />
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <InfoMiniCard
              label="Email"
              value={emailItem?.descriptions?.[0]}
            />
          </div>
          <div className="col-12 col-md-4">
            <InfoMiniCard
              label="Phone"
              value={phoneItem?.descriptions?.[0]}
            />
          </div>
          <div className="col-12 col-md-4">
            <InfoMiniCard
              label="Office"
              value={officeItem?.descriptions?.[0]}
            />
          </div>
        </div>
      </section>

      {/* 學歷 */}
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
            {degreeItem?.descriptions?.map((description, index) => (
              <div key={`degree-${index}`}>{description}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 專長 */}
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
            {expertiseItem?.descriptions?.map((description, index) => (
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

      {/* 其他 */}
      <section className="mb-4">
        <SectionTitle title="其他資訊" />
        <div className="row g-3">
          {nameItem && (
            <div className="col-12 col-md-6">
              <div
                className="h-100 rounded-4 border p-4"
                style={{
                  backgroundColor: "#111",
                  borderColor: "#7a1b1b",
                }}
              >
                <div className="text-secondary small mb-2">{nameItem.title}</div>
                <div className="text-white" style={{ lineHeight: 1.8 }}>
                  {nameItem.descriptions.map((description, index) => (
                    <div key={`name-${index}`}>{description}</div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {labItem && (
            <div className="col-12 col-md-6">
              <div
                className="h-100 rounded-4 border p-4"
                style={{
                  backgroundColor: "#111",
                  borderColor: "#7a1b1b",
                }}
              >
                <div className="text-secondary small mb-2">{labItem.title}</div>
                <div className="text-white" style={{ lineHeight: 1.8 }}>
                  {labItem.descriptions.map((description, index) => (
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
