import is1ab2025 from "../assets/activities/2025_is1ab_新生盃.png";
import gold2025 from "../assets/activities/2025_金盾獎.jpg";
import hackathon2025 from "../assets/activities/2025_AIS3_黑客松.jpg";
import aegisfinal2025 from "../assets/activities/2025_神盾盃決賽.jpg";

type ActivityItemType = {
  time: string;
  title: string;
  notes?: string[];
  images: string[];
};

function ActivityCard({
  item,
  featured = false,
}: {
  item: ActivityItemType;
  featured?: boolean;
}) {
  return (
    <div
      className="rounded-4 border p-4"
      style={{
        backgroundColor: "#111",
        borderColor: "rgba(255,255,255,0.10)",
      }}
    >
      <div className="row g-4 align-items-start">
        <div className="col-12 col-lg-2">
          <div className="d-flex flex-lg-column align-items-start gap-2">
            <span
              className="px-3 py-2 rounded-pill fw-bold"
              style={{
                backgroundColor: featured
                  ? "rgba(255, 77, 79, 0.14)"
                  : "rgba(255,255,255,0.06)",
                color: featured ? "#ff6b6b" : "#e5e7eb",
                border: featured
                  ? "1px solid rgba(255, 77, 79, 0.28)"
                  : "1px solid rgba(255,255,255,0.10)",
                fontSize: "0.92rem",
                whiteSpace: "nowrap",
              }}
            >
              {featured ? "最新活動" : "活動"}
            </span>

            <div
              className="fw-bold"
              style={{
                color: "#ffffff",
                fontSize: "1rem",
                letterSpacing: "0.01em",
              }}
            >
              {item.time}
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-10">
          <div className="d-flex flex-column gap-3">
            <div
              className="fw-bold"
              style={{
                color: "#ffffff",
                fontSize: "1.35rem",
                lineHeight: 1.5,
              }}
            >
              {item.title}
            </div>

            {item.notes && item.notes.length > 0 ? (
              <div className="d-flex flex-column gap-2">
                {item.notes.map((note, index) => (
                  <div
                    key={index}
                    className="rounded-3 px-3 py-2"
                    style={{
                      backgroundColor: "rgba(56, 189, 248, 0.08)",
                      border: "1px solid rgba(56, 189, 248, 0.18)",
                      color: "#7dd3fc",
                      fontSize: "0.96rem",
                      lineHeight: 1.8,
                    }}
                  >
                    {note}
                  </div>
                ))}
              </div>
            ) : null}

            <div className="row g-3">
              {item.images.map((img, index) => (
                <div
                  key={index}
                  className={item.images.length === 1 ? "col-12" : "col-12 col-md-6"}
                >
                  <img
                    src={img}
                    alt={`${item.title}-${index + 1}`}
                    className="img-fluid rounded-4"
                    style={{
                      width: "100%",
                      height: "100%",
                      maxHeight: "520px",
                      objectFit: "cover",
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Activities() {
  const activities: ActivityItemType[] = [
    {
      time: "2025.11.23",
      title: "2025 神盾盃資安競賽決賽",
      images: [aegisfinal2025],
    },
    {
      time: "2025.10.18",
      title: "2025 資安技能金盾初賽",
      images: [gold2025],
    },
    {
      time: "2025.09.15",
      title: "2025 is1ab 新生盃",
      images: [is1ab2025],
    },
    {
      time: "2025.08.15",
      title: "HITCON CMT 2025",
      images: [
        "https://drive.google.com/thumbnail?id=1AdZbm0KkppfzooqJ2jp-tMBRVeINB-R7&sz=w1200",
        "https://drive.google.com/thumbnail?id=1A6JBMKkfNFeQfLssvF5DmFajsfNaVMTK&sz=w1200",
        "https://drive.google.com/thumbnail?id=1u_O3Kii-NsOE_6bF19IUiiK3L21L0foO&sz=w1200",
      ],
    },
    {
      time: "2025.07.28",
      title: "2025 AIS3 新型態資安暑期課程",
      images: [
        "https://drive.google.com/thumbnail?id=1nW4NGygr_16Y93etH7l6-mMz8dyfmPMB&sz=w1200",
        "https://drive.google.com/thumbnail?id=1d133d1uNoMwPjv2am-L5vdohhj9XuYfs&sz=w1200",
      ],
    },
    {
      time: "2025.05.03",
      title: "2025 AIS3 Club 北區高中職程式安全黑客松工作坊",
      images: [hackathon2025],
    },
    {
      time: "2025.02.07",
      title: "AIS3 EOF CTF 2025 Final",
      images: [
        "https://drive.google.com/thumbnail?id=1xw2zg76QZGzFgUaNnbrb-X_mZ4blyKm2&sz=w1200",
        "https://drive.google.com/thumbnail?id=1qmqxe37jXBu-f9Z1j1FiU1s2oatEUgRk&sz=w1200",
      ],
    },
    {
      time: "2024.11.23",
      title: "CTF 種子培訓工作坊 獲金獎",
      images: [
        "https://drive.google.com/thumbnail?id=1PaI1q2ZsJ-ZYb9Bny_qC0wldeI28XipR&sz=w1200",
      ],
    },
    {
      time: "2024.10.12",
      title: "資安技能金盾獎競賽 2024 初賽",
      images: [
        "https://drive.google.com/thumbnail?id=1SgKriQhuqAJcFEwTkiPYwfiHP0lnAukt&sz=w1200",
        "https://drive.google.com/thumbnail?id=1k4FmtOMN7ZarHTWcO21Yub3mhFHJIvFJ&sz=w1200",
      ],
    },
    {
      time: "2024.04.27",
      title: "尋找資安女婕思（決賽）",
      notes: ["地點：臺南工業局沙崙資安服務基地"],
      images: [
        "https://drive.google.com/thumbnail?id=1cCYXbABWN5iwEQAzlUE3T_m4TKTev4C8&sz=w1200",
        "https://drive.google.com/thumbnail?id=1nNHcaqCG09UlzrngE_V3EpYwTyZ8rd-U&sz=w1200",
        "https://drive.google.com/thumbnail?id=1GmBs6XNTuTnJDPUIyOjZSGo45nLDM7lJ&sz=w1200",
        "https://drive.google.com/thumbnail?id=1uf6vptHMCvgUr1XoQrRgIoNNW-8K4loi&sz=w1200",
        "https://drive.google.com/thumbnail?id=1yKOkoovnrws5AKuXma7cTLJ1bJyXHpQ4&sz=w1200",
      ],
    },
    {
      time: "2024.01.21",
      title: "實驗室尾牙：旭集和食集錦 SUNRISE",
      images: [
        "https://drive.google.com/thumbnail?id=1vFuyeIm8p5VD4k4cv1sTfhU6X9J7i8lh&sz=w1200",
        "https://drive.google.com/thumbnail?id=1tFaOtpgW44YZR_KTg8VIqkAbVSmdLuVx&sz=w1200",
        "https://drive.google.com/thumbnail?id=1z9d2b27Myzkm8qCHuvhtOtysF9N5oTzp&sz=w1200",
      ],
    },
    {
      time: "2023.07.22",
      title: "第四屆的奧義學院實習生發表會＆AI 資安社群論壇",
      images: [
        "https://drive.google.com/thumbnail?id=1U-tNyCVfOmSYE04DhK0_N3ldPQRTUwCJ&sz=w1200",
        "https://drive.google.com/thumbnail?id=1d9m8BnlOPMjzwVASp8uefOHr2lsiSoOy&sz=w1200",
      ],
    },
    {
      time: "2023.07.17",
      title: "2023 ICCE-TW 會議",
      notes: ["Next Generation Cyberseucrity – Session Chair", "學生論文發表"],
      images: [
        "https://drive.google.com/thumbnail?id=1yiEEUdSiLAN3KWsShPzjtmp7QDmSfik7&sz=w1200",
        "https://drive.google.com/thumbnail?id=10oIneb4zj9dSslUC33p902vGavLlZNWc&sz=w1200",
      ],
    },
    {
      time: "2023.05.06",
      title: "2023 尋找資安女婕思（決賽）",
      notes: ["地點：臺南工業局沙崙資安服務基地"],
      images: [
        "https://drive.google.com/thumbnail?id=15TaJYXuUWz28ksNQIgD4OX33T-Lv_sOn&sz=w1200",
      ],
    },
    {
      time: "2023.01.21",
      title: "實驗室尾牙：豐 Food 海陸百匯",
      images: [
        "https://drive.google.com/thumbnail?id=1K8KTOhV-obkkhd5sZl8q5w2V_Z_2J2Qa&sz=w1200",
        "https://drive.google.com/thumbnail?id=1J8OgQPHjn9lR9XzgtfCQQoJfR6MG-Pk5&sz=w1200",
        "https://drive.google.com/thumbnail?id=15WvGOpe1sUNYyK9zjRgQJaH3Ers1RSnu&sz=w1200",
      ],
    },
  ];

  return (
    <div className="container py-4" style={{ maxWidth: "1180px" }}>
      <div
        className="p-3 rounded-4 mb-4 text-center"
        style={{ backgroundColor: "#7a1b1b" }}
      >
        <h3 className="fw-bold text-white m-0">歷史活動</h3>
      </div>

      <div className="d-flex flex-column gap-4">
        {activities.map((item, index) => (
          <ActivityCard
            key={`${item.time}-${item.title}-${index}`}
            item={item}
            featured={index < 2}
          />
        ))}
      </div>
    </div>
  );
}
