import is1ab2025 from "../assets/activities/2025_is1ab_新生盃.png";
import gold2025 from "../assets/activities/2025_金盾獎.jpg";
import hackathon2025 from "../assets/activities/2025_AIS3_黑客松.jpg";
import aegisfinal2025 from "../assets/activities/2025_神盾盃決賽.jpg";

type ActivityCategory = "比賽" | "資安活動" | "實驗室聚餐";

type ActivityItemType = {
  time: string;
  title: string;
  category: ActivityCategory;
  notes?: string[];
  images: string[];
};

const activities: ActivityItemType[] = [
  {
    time: "2025.11.23",
    title: "2025 神盾盃資安競賽決賽",
    category: "比賽",
    images: [aegisfinal2025],
  },
  {
    time: "2025.10.18",
    title: "2025 資安技能金盾初賽",
    category: "比賽",
    images: [gold2025],
  },
  {
    time: "2025.09.15",
    title: "2025 is1ab 新生盃",
    category: "比賽",
    images: [is1ab2025],
  },
  {
    time: "2025.08.15",
    title: "HITCON CMT 2025",
    category: "資安活動",
    images: [
      "https://drive.google.com/thumbnail?id=1AdZbm0KkppfzooqJ2jp-tMBRVeINB-R7&sz=w1200",
      "https://drive.google.com/thumbnail?id=1A6JBMKkfNFeQfLssvF5DmFajsfNaVMTK&sz=w1200",
      "https://drive.google.com/thumbnail?id=1u_O3Kii-NsOE_6bF19IUiiK3L21L0foO&sz=w1200",
    ],
  },
  {
    time: "2025.07.28",
    title: "2025 AIS3 新型態資安暑期課程",
    category: "資安活動",
    images: [
      "https://drive.google.com/thumbnail?id=1nW4NGygr_16Y93etH7l6-mMz8dyfmPMB&sz=w1200",
      "https://drive.google.com/thumbnail?id=1d133d1uNoMwPjv2am-L5vdohhj9XuYfs&sz=w1200",
    ],
  },
  {
    time: "2025.05.03",
    title: "2025 AIS3 Club 北區高中職程式安全黑客松工作坊",
    category: "資安活動",
    images: [hackathon2025],
  },
  {
    time: "2025.02.07",
    title: "AIS3 EOF CTF 2025 Final",
    category: "比賽",
    images: [
      "https://drive.google.com/thumbnail?id=1xw2zg76QZGzFgUaNnbrb-X_mZ4blyKm2&sz=w1200",
      "https://drive.google.com/thumbnail?id=1qmqxe37jXBu-f9Z1j1FiU1s2oatEUgRk&sz=w1200",
    ],
  },
  {
    time: "2024.11.23",
    title: "CTF 種子培訓工作坊 獲金獎",
    category: "比賽",
    images: [
      "https://drive.google.com/thumbnail?id=1PaI1q2ZsJ-ZYb9Bny_qC0wldeI28XipR&sz=w1200",
    ],
  },
  {
    time: "2024.10.12",
    title: "資安技能金盾獎競賽 2024 初賽",
    category: "比賽",
    images: [
      "https://drive.google.com/thumbnail?id=1SgKriQhuqAJcFEwTkiPYwfiHP0lnAukt&sz=w1200",
      "https://drive.google.com/thumbnail?id=1k4FmtOMN7ZarHTWcO21Yub3mhFHJIvFJ&sz=w1200",
    ],
  },
  {
    time: "2024.04.27",
    title: "尋找資安女婕思（決賽）",
    category: "比賽",
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
    category: "實驗室聚餐",
    images: [
      "https://drive.google.com/thumbnail?id=1vFuyeIm8p5VD4k4cv1sTfhU6X9J7i8lh&sz=w1200",
      "https://drive.google.com/thumbnail?id=1tFaOtpgW44YZR_KTg8VIqkAbVSmdLuVx&sz=w1200",
      "https://drive.google.com/thumbnail?id=1z9d2b27Myzkm8qCHuvhtOtysF9N5oTzp&sz=w1200",
    ],
  },
  {
    time: "2023.07.22",
    title: "第四屆的奧義學院實習生發表會＆AI 資安社群論壇",
    category: "資安活動",
    images: [
      "https://drive.google.com/thumbnail?id=1U-tNyCVfOmSYE04DhK0_N3ldPQRTUwCJ&sz=w1200",
      "https://drive.google.com/thumbnail?id=1d9m8BnlOPMjzwVASp8uefOHr2lsiSoOy&sz=w1200",
    ],
  },
  {
    time: "2023.07.17",
    title: "2023 ICCE-TW 會議",
    category: "資安活動",
    notes: ["Next Generation Cyberseucrity – Session Chair", "學生論文發表"],
    images: [
      "https://drive.google.com/thumbnail?id=1yiEEUdSiLAN3KWsShPzjtmp7QDmSfik7&sz=w1200",
      "https://drive.google.com/thumbnail?id=10oIneb4zj9dSslUC33p902vGavLlZNWc&sz=w1200",
    ],
  },
  {
    time: "2023.05.06",
    title: "2023 尋找資安女婕思（決賽）",
    category: "比賽",
    notes: ["地點：臺南工業局沙崙資安服務基地"],
    images: [
      "https://drive.google.com/thumbnail?id=15TaJYXuUWz28ksNQIgD4OX33T-Lv_sOn&sz=w1200",
    ],
  },
  {
    time: "2023.01.21",
    title: "實驗室尾牙：豐 Food 海陸百匯",
    category: "實驗室聚餐",
    images: [
      "https://drive.google.com/thumbnail?id=1K8KTOhV-obkkhd5sZl8q5w2V_Z_2J2Qa&sz=w1200",
      "https://drive.google.com/thumbnail?id=1J8OgQPHjn9lR9XzgtfCQQoJfR6MG-Pk5&sz=w1200",
      "https://drive.google.com/thumbnail?id=15WvGOpe1sUNYyK9zjRgQJaH3Ers1RSnu&sz=w1200",
    ],
  },
];

function ActivityGallery({
  images,
  title,
  featured = false,
}: {
  images: string[];
  title: string;
  featured?: boolean;
}) {
  if (images.length === 1) {
    return (
      <div className="activity-single-image">
        <img src={images[0]} alt={title} />
      </div>
    );
  }

  const galleryClass = featured
    ? "activity-gallery featured-grid"
    : "activity-gallery normal-grid";

  return (
    <div className={galleryClass}>
      {images.map((img, index) => (
        <div
          className={`activity-gallery-item ${
            index === 0 && images.length % 2 === 1 ? "activity-gallery-item-large" : ""
          }`}
          key={`${title}-${index}`}
        >
          <img src={img} alt={`${title}-${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

function getCategoryClass(category: ActivityCategory) {
  switch (category) {
    case "比賽":
      return "activity-pill activity-pill-competition";
    case "資安活動":
      return "activity-pill activity-pill-cyber";
    case "實驗室聚餐":
      return "activity-pill activity-pill-gathering";
    default:
      return "activity-pill";
  }
}

function FeaturedActivity({ item }: { item: ActivityItemType }) {
  return (
    <section className="featured-activity-card">
      <div className="featured-activity-copy">
        <div className={getCategoryClass(item.category)}>{item.category}</div>

        <div className="featured-meta">
          <span className="featured-date">{item.time}</span>
        </div>

        <h2>{item.title}</h2>

        {item.notes && item.notes.length > 0 && (
          <div className="activity-notes">
            {item.notes.map((note, index) => (
              <div className="activity-note" key={index}>
                {note}
              </div>
            ))}
          </div>
        )}

        <p>
          這裡收錄著實驗室一路走來參與的競賽、培訓、論壇與交流活動。
          每一次並肩努力、每一段為夢想全力以赴的時光，都成了值得珍藏的回憶。
        </p>
      </div>

      <div className="featured-activity-visual">
        <ActivityGallery images={item.images} title={item.title} featured />
      </div>
    </section>
  );
}

function TimelineCard({ item }: { item: ActivityItemType }) {
  return (
    <article className="timeline-item">
      <div className="timeline-rail">
        <div className="timeline-dot" />
        <div className="timeline-date">{item.time}</div>
      </div>

      <div className="timeline-card">
        <div className="timeline-card-head">
          <div className={getCategoryClass(item.category)}>{item.category}</div>
          <h3>{item.title}</h3>
        </div>

        {item.notes && item.notes.length > 0 && (
          <div className="activity-notes">
            {item.notes.map((note, noteIndex) => (
              <div className="activity-note" key={noteIndex}>
                {note}
              </div>
            ))}
          </div>
        )}

        <ActivityGallery images={item.images} title={item.title} />
      </div>
    </article>
  );
}

export function Activities() {
  const [featured, ...rest] = activities;

  return (
    <section className="activities-page">
      <style>{`
        .activities-page {
          --bg: #06080d;
          --panel: rgba(255,255,255,0.04);
          --panel-strong: rgba(255,255,255,0.06);
          --border: rgba(255,255,255,0.1);
          --text: #f5f7fb;
          --muted: #a7b0c0;
          --accent: #7c1220;
          --accent-2: #b91c1c;
          --cyan: #67e8f9;
          --shadow: 0 18px 50px rgba(0,0,0,0.28);
          background:
            radial-gradient(circle at top left, rgba(185, 28, 28, 0.18), transparent 28%),
            radial-gradient(circle at top right, rgba(59, 130, 246, 0.08), transparent 22%),
            linear-gradient(180deg, #070a10 0%, #04060a 100%);
          color: var(--text);
          padding: 48px 20px 88px;
        }

        .activities-shell {
          max-width: 1240px;
          margin: 0 auto;
        }

        .activities-hero {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 24px;
          align-items: end;
          margin-bottom: 32px;
        }

        .activities-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #ffd9dc;
          background: rgba(185, 28, 28, 0.12);
          border: 1px solid rgba(255, 95, 109, 0.25);
          margin-bottom: 18px;
        }

        .activities-title {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3.6rem);
          line-height: 1.08;
          letter-spacing: -0.03em;
          font-weight: 800;
        }

        .activities-subtitle {
          margin: 18px 0 0;
          max-width: 760px;
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.9;
        }

        .activities-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .stat-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          border: 1px solid var(--border);
          border-radius: 22px;
          padding: 18px;
          box-shadow: var(--shadow);
          backdrop-filter: blur(8px);
        }

        .stat-card strong {
          display: block;
          font-size: 1.5rem;
          line-height: 1;
          margin-bottom: 8px;
          font-weight: 800;
        }

        .stat-card span {
          color: var(--muted);
          font-size: 0.92rem;
        }

        .featured-activity-card {
          display: grid;
          grid-template-columns: minmax(300px, 0.9fr) minmax(0, 1.1fr);
          gap: 26px;
          background: linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.03));
          border: 1px solid var(--border);
          border-radius: 30px;
          padding: 28px;
          box-shadow: var(--shadow);
          backdrop-filter: blur(8px);
          overflow: hidden;
          position: relative;
          margin-bottom: 34px;
        }

        .featured-activity-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(185,28,28,0.08), transparent 40%, transparent 70%, rgba(34,211,238,0.04));
          pointer-events: none;
        }

        .featured-activity-copy {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .featured-meta {
          margin: 16px 0 10px;
        }

        .featured-date {
          font-size: 1rem;
          font-weight: 700;
          color: #fca5a5;
          letter-spacing: 0.08em;
        }

        .featured-activity-copy h2 {
          margin: 0 0 14px;
          font-size: clamp(1.7rem, 3vw, 2.8rem);
          line-height: 1.18;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .featured-activity-copy p {
          margin: 18px 0 0;
          color: var(--muted);
          line-height: 1.9;
          font-size: 0.98rem;
        }

        .featured-activity-visual {
          position: relative;
          z-index: 1;
        }

        .activity-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
        }

        .activity-pill-competition {
          background: rgba(185, 28, 28, 0.14);
          color: #ffd5da;
          border: 1px solid rgba(255, 95, 109, 0.28);
        }

        .activity-pill-cyber {
          background: rgba(34, 211, 238, 0.12);
          color: #c8f7ff;
          border: 1px solid rgba(103, 232, 249, 0.24);
        }

        .activity-pill-gathering {
          background: rgba(250, 204, 21, 0.12);
          color: #fff1b8;
          border: 1px solid rgba(250, 204, 21, 0.24);
        }

        .activity-notes {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 14px;
        }

        .activity-note {
          padding: 10px 14px;
          border-radius: 14px;
          background: rgba(34, 211, 238, 0.08);
          border: 1px solid rgba(103, 232, 249, 0.2);
          color: #bdf3ff;
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .activity-single-image,
        .activity-gallery-item {
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.03);
        }

        .activity-single-image img,
        .activity-gallery-item img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s ease;
        }

        .activity-single-image:hover img,
        .activity-gallery-item:hover img {
          transform: scale(1.03);
        }

        .activity-single-image {
          min-height: 300px;
          max-height: 620px;
        }

        .activity-single-image img {
          min-height: 300px;
          max-height: 620px;
        }

        .activity-gallery {
          display: grid;
          gap: 14px;
        }

        .featured-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          auto-rows: 250px;
        }

        .featured-grid .activity-gallery-item-large {
          grid-row: span 2;
        }

        .normal-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          auto-rows: 220px;
        }

        .normal-grid:has(.activity-gallery-item:nth-child(3):last-child) .activity-gallery-item:first-child {
          grid-column: span 2;
        }

        .timeline-wrap::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 164px;
          width: 1px;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.14) 0%,
            rgba(255,255,255,0.05) 100%
          );
          z-index: 0;
        }
        
        .timeline-dot {
          width: 14px;
          height: 14px;
          border-radius: 999px;
          background: linear-gradient(180deg, #f87171, #991b1b);
          box-shadow: 0 0 0 6px rgba(185, 28, 28, 0.12);
          position: absolute;
          left: 164px;
          top: 20px;
          transform: translateX(-50%);
          z-index: 2;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 190px minmax(0, 1fr);
          gap: 28px;
          position: relative;
        }

        .timeline-rail {
          position: relative;
          padding-top: 12px;
          min-height: 100%;
        }

        .timeline-dot {
          width: 14px;
          height: 14px;
          border-radius: 999px;
          background: linear-gradient(180deg, #f87171, #991b1b);
          box-shadow: 0 0 0 6px rgba(185, 28, 28, 0.12);
          position: absolute;
          left: 98px;
          top: 18px;
          transform: translateX(-50%);
          z-index: 2;
        }

        .timeline-date {
          display: inline-block;
          max-width: 140px;
          padding: 8px 14px;
          border-radius: 12px;
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.08);
          color: #f4f4f5;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          position: relative;
          z-index: 3;
          white-space: nowrap;
        }

        .timeline-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03));
          border: 1px solid var(--border);
          border-radius: 26px;
          padding: 22px;
          box-shadow: var(--shadow);
        }

        .timeline-card-head {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 18px;
        }

        .timeline-card-head h3 {
          margin: 0;
          font-size: clamp(1.2rem, 2vw, 1.65rem);
          line-height: 1.35;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        @media (max-width: 991px) {
          .activities-hero {
            grid-template-columns: 1fr;
          }

          .featured-activity-card {
            grid-template-columns: 1fr;
          }

          .timeline-wrap::before {
            display: none;
          }

          .timeline-item {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .timeline-rail {
            padding-top: 0;
          }

          .timeline-dot {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .activities-page {
            padding: 32px 14px 72px;
          }

          .activities-stats {
            grid-template-columns: 1fr;
          }

          .featured-activity-card,
          .timeline-card {
            padding: 18px;
            border-radius: 22px;
          }

          .featured-grid,
          .normal-grid {
            grid-template-columns: 1fr;
            auto-rows: 220px;
          }

          .featured-grid .activity-gallery-item-large,
          .normal-grid .activity-gallery-item:first-child {
            grid-column: auto;
            grid-row: auto;
          }

          .activity-single-image,
          .activity-single-image img {
            min-height: 220px;
            max-height: 420px;
          }

          .timeline-date {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="activities-shell">
        <header className="activities-hero">
          <div>
            <div className="activities-kicker">Activities Archive</div>
            <h1 className="activities-title">歷史活動</h1>
            <p className="activities-subtitle">
              一路走來，大家因為相同的熱情聚在一起，在一次次挑戰中努力、成長，也在彼此陪伴中慢慢靠近自己的夢想。
              這些照片記錄下的不只是活動本身，更是那些一起奮鬥、一起歡笑的珍貴時光。
            </p>
          </div>

          <div className="activities-stats">
            <div className="stat-card">
              <strong>{activities.length}</strong>
              <span>活動紀錄</span>
            </div>
            <div className="stat-card">
              <strong>2023–2025</strong>
              <span>時間跨度</span>
            </div>
            <div className="stat-card">
              <strong>一起走過</strong>
              <span>共同回憶</span>
            </div>
          </div>
        </header>

        {featured && <FeaturedActivity item={featured} />}

        <div className="timeline-wrap">
          {rest.map((item, index) => (
            <TimelineCard
              key={`${item.time}-${item.title}-${index}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;
