export function OOPL_2026() {
  return (
    <div className="d-flex flex-column gap-3">
      <h4 className="text-center">114-1 物件導向程式設計實習 Object-Oriented Programming Labs</h4>

      <div className="p-3 w-100" style={{ backgroundColor: "#7a1b1b" }}>
        <h5 className="fw-bold text-white m-0">助教團隊</h5>
      </div>

      <div className="row g-3 py-3">
        {[
          { name: "黃漢軒", email: "xuan910625.cs13@nycu.edu.tw" },
          { name: "張意昌", email: "t111590004@ntut.org.tw" },
          { name: "許景喬", email: "t112820018@ntut.org.tw" },
          { name: "陳駿逸", email: "t112590022@ntut.org.tw" },
        ].map((ta, idx) => (
          <div className="col-12 col-md-6" key={idx}>
            <div
              className="h-100 p-3 rounded-3 border"
              style={{
                backgroundColor: "#111",
                borderColor: "#7a1b1b",
              }}
            >
              <div className="d-flex flex-column gap-2">
                <div>
                  <h6 className="mb-1 fw-bold text-white">{ta.name}</h6>
                  <small className="text-secondary">課程助教</small>
                </div>
      
                <a
                  href={`mailto:${ta.email}`}
                  className="text-decoration-none"
                  style={{ color: "#ffb3b3" }}
                >
                  {ta.email}
                </a>
      
                <div>
                  <a
                    href={`mailto:${ta.email}`}
                    className="btn btn-sm"
                    style={{
                      backgroundColor: "#7a1b1b",
                      color: "white",
                      border: "none",
                    }}
                  >
                    聯絡助教
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-3 w-100" style={{ backgroundColor: "#7a1b1b" }}>
        <h5 className="fw-bold text-white m-0">學期成績</h5>
      </div>
      
      <div className="row g-3 py-3">
        {[
          { label: "修課人數", value: "100", unit: "人" },
          { label: "及格人數", value: "-", unit: "人" },
          { label: "通過率", value: "-", unit: "%" },
          { label: "最高分數", value: "-", unit: "分" },
          { label: "最低分數", value: "-", unit: "分" },
          { label: "平均分數", value: "-", unit: "分", highlight: true },
        ].map((item, idx) => (
          <div className="col-12 col-sm-6 col-lg-4" key={idx}>
            <div
              className="h-100 p-3 rounded-3 border"
              style={{
                backgroundColor: item.highlight ? "#1a0f0f" : "#111",
                borderColor: "#7a1b1b",
              }}
            >
              <div className="text-secondary small mb-2">{item.label}</div>
              <div className="d-flex align-items-end gap-2">
                <span
                  className="fw-bold text-white"
                  style={{ fontSize: "2rem", lineHeight: 1 }}
                >
                  {item.value}
                </span>
                <span className="text-light mb-1">{item.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 w-100" style={{ backgroundColor: "#7a1b1b" }}>
        <h5 className="fw-bold text-white m-0">成果展示</h5>
      </div>
      
      <div className="py-3 d-flex flex-column gap-3">
        <li>進行中</li>
      </div>             
    </div>
  );
}
