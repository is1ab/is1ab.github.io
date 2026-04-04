import { useNavigate } from "react-router-dom";

export default function Header() {
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
      {/* 背景光感 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 12% 18%, rgba(255,140,0,0.14) 0%, rgba(255,140,0,0.06) 18%, transparent 42%), radial-gradient(circle at 78% 22%, rgba(0,153,255,0.10) 0%, rgba(0,153,255,0.04) 18%, transparent 38%)",
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
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          {/* 左側品牌區 */}
          <div
            onClick={() => navigate("/")}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              minWidth: 0,
            }}
          >
            {/* 小型識別方塊 */}
            <div
              aria-hidden="true"
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                flexShrink: 0,
                background:
                  "linear-gradient(135deg, rgba(255,140,0,0.18), rgba(255,140,0,0.05))",
                border: "1px solid rgba(255,140,0,0.35)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.03) inset",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ff9a2f",
                fontWeight: 800,
                fontSize: "0.95rem",
                letterSpacing: "0.08em",
              }}
            >
              IS
            </div>

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
                    color: "#ff9a2f",
                    textTransform: "uppercase",
                  }}
                >
                  Information Security Lab
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

              <h1
                style={{
                  margin: 0,
                  color: "#ffffff",
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
                    "linear-gradient(90deg, #ff9a2f 0%, rgba(255,154,47,0.22) 100%)",
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

          {/* 右側輔助資訊 */}
          <div
            style={{
              minWidth: "220px",
              maxWidth: "320px",
              flex: "1 1 220px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "280px",
                padding: "14px 16px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
              }}
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "#ff9a2f",
                  letterSpacing: "0.18em",
                  fontWeight: 700,
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}
              >
                Lab Identity
              </div>

              <div
                style={{
                  color: "#ffffff",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  marginBottom: "6px",
                  letterSpacing: "0.04em",
                }}
              >
                ISLAB
              </div>

              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.68)",
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                }}
              >
                專注於資訊安全研究、CTF 實戰、產學專題與攻防技術培育。
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
