type RecordItem = {
  title: string;
  organization: string;
  date: string;
};

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="p-3 rounded-4 mb-4 text-center"
      style={{ backgroundColor: "#7a1b1b" }}
    >
      <h3 className="fw-bold text-white m-0">
        {title} <span style={{ fontStyle: "italic", opacity: 0.95 }}>{subtitle}</span>
      </h3>
    </div>
  );
}

function RecordCard({ item }: { item: RecordItem }) {
  return (
    <div
      className="rounded-4 border p-4"
      style={{
        backgroundColor: "#111",
        borderColor: "rgba(255,255,255,0.10)",
      }}
    >
      <div className="row g-3 align-items-start">
        <div className="col-12 col-md-3 col-lg-2">
          <span
            className="px-3 py-2 rounded-pill fw-bold d-inline-block"
            style={{
              backgroundColor: "rgba(255, 77, 79, 0.12)",
              color: "#ff6b6b",
              border: "1px solid rgba(255, 77, 79, 0.28)",
              fontSize: "0.92rem",
              whiteSpace: "nowrap",
            }}
          >
            {item.date}
          </span>
        </div>

        <div className="col-12 col-md-9 col-lg-10">
          <div className="d-flex flex-column gap-2">
            <div
              className="fw-bold"
              style={{
                color: "#ffffff",
                fontSize: "1.12rem",
                lineHeight: 1.75,
              }}
            >
              {item.title}
            </div>

            <div
              className="rounded-3 px-3 py-2"
              style={{
                backgroundColor: "rgba(56, 189, 248, 0.08)",
                border: "1px solid rgba(56, 189, 248, 0.18)",
                color: "#7dd3fc",
                fontSize: "0.96rem",
                lineHeight: 1.8,
              }}
            >
              {item.organization}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Record() {
  const speeches: RecordItem[] = [
    {
      title: "研究分享座談會",
      organization: "財團法人資訊工業策進會 人工智慧研究院",
      date: "2025.08.28",
    },
    {
      title: "ChatGPT與教學：科技結合的新思維與應用",
      organization: "北科大學電資學院 教師經驗分享座談會",
      date: "2023.04.18",
    },
  ];

  const others: RecordItem[] = [
    {
      title: "國語日報 邀訪 ChatGPT 專題",
      organization: "其他紀錄",
      date: "2023.04.21",
    },
  ];

  return (
    <div className="container py-4" style={{ maxWidth: "1100px" }}>
      <SectionHeader title="演講" subtitle="Speech" />
      <div className="d-flex flex-column gap-3 mb-5">
        {speeches.map((item, index) => (
          <RecordCard key={`speech-${index}`} item={item} />
        ))}
      </div>

      <SectionHeader title="其他" subtitle="Others" />
      <div className="d-flex flex-column gap-3">
        {others.map((item, index) => (
          <RecordCard key={`other-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}
