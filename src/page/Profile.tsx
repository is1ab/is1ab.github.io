import datas from "../assets/profile.json";

type ProfileItem = {
  title: string;
  descriptions: string[];
};

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

export function Profile() {
  const profileDatas = datas as ProfileItem[];

  return (
    <div className="container py-4" style={{ maxWidth: "1100px" }}>
      <div
        className="p-3 rounded-3 mb-4"
        style={{ backgroundColor: "#7a1b1b" }}
      >
        <h4 className="text-center fw-bold text-white m-0">簡介</h4>
      </div>

      <div className="d-flex flex-column gap-3">
        {profileDatas.map((data, index) => {
          const isExpertise = data.title.includes("專長");

          return (
            <div
              key={`${data.title}-${index}`}
              className="rounded-4 border p-3 p-md-4"
              style={{
                backgroundColor: "#111",
                borderColor: "#7a1b1b",
              }}
            >
              <div className="row g-3 align-items-start">
                <div className="col-12 col-md-4 col-lg-3">
                  <div
                    className="fw-bold"
                    style={{
                      color: "#ff4d4f",
                      fontSize: "1.1rem",
                    }}
                  >
                    {data.title}
                  </div>
                </div>

                <div className="col-12 col-md-8 col-lg-9">
                  {isExpertise ? (
                    <div className="d-flex flex-wrap gap-2">
                      {data.descriptions.map((description, descIndex) => (
                        <span
                          key={`${data.title}-desc-${descIndex}`}
                          className="px-3 py-2 rounded-pill"
                          style={{
                            backgroundColor: "rgba(6, 147, 227, 0.12)",
                            color: "#9fd4ff",
                            border: "1px solid rgba(6, 147, 227, 0.35)",
                            fontSize: "0.95rem",
                            lineHeight: 1.6,
                          }}
                        >
                          {description}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="d-flex flex-column gap-2">
                      {data.descriptions.map((description, descIndex) => (
                        <div
                          key={`${data.title}-desc-${descIndex}`}
                          style={{
                            color: "#ffffff",
                            fontSize: "1rem",
                            lineHeight: 1.8,
                            wordBreak: "break-word",
                          }}
                        >
                          {renderDescription(description)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
