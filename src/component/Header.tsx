import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <header
      style={{
        width: "100%",
        background:
          "linear-gradient(180deg, #05070b 0%, #0a0f17 55%, #0b1119 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 12% 18%, rgba(255,140,0,0.10) 0%, rgba(255,140,0,0.04) 18%, transparent 42%), radial-gradient(circle at 78% 22%, rgba(0,153,255,0.08) 0%, rgba(0,153,255,0.03) 18%, transparent 38%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "28px",
          paddingBottom: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0px",
            flexWrap: "wrap",
          }}
        >
          <div
            onClick={() => navigate("/")}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "flex-start",
              gap: "0px",
              minWidth: 0,
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                  marginBottom: "6px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    color: "#ff0000",
                    textTransform: "uppercase",
                  }}
                >
                  1nform@tion $ecur!ty 1ab
                </span>

                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.14)",
                    background: "rgba(255,255,255,0.03)",
                    color: "#c9d4e5",
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  NTUT · CSIE
                </span>
              </div>

              <h1 className="header-title"
                style={{
                  margin: 0,
                  fontSize: "clamp(2rem, 4.2vw, 3.2rem)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "0.02em",
                }}
              >
                資訊安全實驗室
              </h1>

              <div
                style={{
                  width: "72px",
                  height: "3px",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(90deg, #ff0000 0%, rgba(255,154,47,0.22) 100%)",
                  marginTop: "12px",
                  marginBottom: "12px",
                }}
              />

              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.74)",
                  fontSize: "0.98rem",
                  lineHeight: 1.7,
                  letterSpacing: "0.02em",
                }}
              >
                國立臺北科技大學 資訊工程學系
                <span style={{ color: "rgba(255,255,255,0.32)", margin: "0 10px" }}>
                  /
                </span>
                研究 · 實戰 · 專題
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
