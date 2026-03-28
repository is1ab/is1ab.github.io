export function OOPL_2025() {
  return (
    <div className="d-flex flex-column gap-3">
      <h4 className="text-center">113-1 物件導向程式設計實習 Object-Oriented Programming Labs</h4>
      
      <div className="p-3 w-100" style={{ backgroundColor: "#7a1b1b" }}>
        <h5 className="fw-bold text-white m-0">助教團隊</h5>
      </div>

      <div className="row g-3 py-3">
        {[
          { name: "黃漢軒", email: "xuan910625.cs13@nycu.edu.tw" },
          { name: "黃政", email: "t110590003@ntut.org.tw" },
          { name: "張意昌", email: "t111590004@ntut.org.tw" },
          { name: "陳世昂", email: "t111590009@ntut.org.tw" },
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
          { label: "修課人數", value: "95", unit: "人" },
          { label: "及格人數", value: "84", unit: "人" },
          { label: "通過率", value: "88.42", unit: "%" },
          { label: "最高分數", value: "100", unit: "分" },
          { label: "最低分數", value: "0", unit: "分" },
          { label: "平均分數", value: "92.07", unit: "分", highlight: true },
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

      <div className="row">
      <div className="col-md-6 py-3">
        <h3>#1 推箱子</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/laPKN_hNAds"
            title="#1 推箱子"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#2 植物大戰僵屍</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/54DPezZiEIg"
            title="#2 植物大戰僵屍"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#3 雪人兄弟</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/BZr6w2DVpQE"
            title="#3 雪人兄弟"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#4 Pico Park</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/yOhditHyBEQ"
            title="#4 Pico Park"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#6 超級瑪莉歐</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/P7z0_l-20Nw"
            title="#6 超級瑪莉歐"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#7 Arkanoid</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/Ub7ujTLzSkE"
            title="#7 Arkanoid"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#8 LINE POP2</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/XHcvAJtkjbQ"
            title="#8 LINE POP2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#9 StreetFighter2</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/O0-6IK6S8dQ"
            title="#9 StreetFighter2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#10 超級瑪莉歐</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/XHkqqkJC4ww"
            title="#10 超級瑪莉歐"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#11 Slay the Spire</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/XV8XC-iT5PU"
            title="#11 Slay the Spire"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#12 冰火姐弟</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/t9KLGEF88u0"
            title="#12 冰火姐弟"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#15 Dead Cells</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/bTPk2EICwvU"
            title="#15 Dead Cells"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#16 像素探險</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/0cSFS_ESCHQ"
            title="#16 像素探險"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#17 Helltaker</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/vXxkwkVXeFc"
            title="#17 Helltaker"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#18 Bloons Tower Defense 3</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/T9QNXvGoIfM"
            title="#18 Bloons Tower Defense 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#19 沙威瑪傳奇</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/5_GH_TfVqAY"
            title="#19 沙威瑪傳奇"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#20 黃金礦工</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/yMarf-kNIkg"
            title="#20 黃金礦工"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#21 Celeste Pico-8</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/hH6onAsK5Ow"
            title="#21 Celeste Pico-8"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#22 冰火姐弟</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/CBtPHynjq-k"
            title="#22 冰火姐弟"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#23 Raiden V</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/OtveSSCT5gY"
            title="#23 Raiden V"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#24 魔塔</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/LslHtGoy_wo"
            title="#24 魔塔"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#25 弓箭傳說</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/xvRnfvhhz-E"
            title="#25 弓箭傳說"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#27 壞壞冰淇淋</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/i5H0XvVr9jw"
            title="#27 壞壞冰淇淋"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#28 要塞守護</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/QrT6H2gMbCs"
            title="#28 要塞守護"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#29 貓利歐 Cat Mario</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/mS1RqoxvgCo"
            title="#29 貓利歐 Cat Mario"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#30 小朋友下樓梯</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/g2Ito6cd91Y"
            title="#30 小朋友下樓梯"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#31 Rabbit and Steel</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/RVeaaazQheM"
            title="#31 Rabbit and Steel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#32 SCP Roguelike</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/wxYOaH_ceoM"
            title="#32 SCP Roguelike"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#33 Dino Shift</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/XKKt7C5M2ig"
            title="#33 Dino Shift"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#34 Helltaker</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/bflfTjVDzi0"
            title="#34 Helltaker"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#35 I Wanna Be The Boshy</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/uKUJtmAFQcQ"
            title="#35 I Wanna Be The Boshy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#36 イニシエダンジョン</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/9JW75WmcZj0"
            title="#36 イニシエダンジョン"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#37 Flappy Bird Go</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/ltLw5K6TD8s"
            title="#37 Flappy Bird Go"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#39 元氣騎士</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/LZhon1BUfaY"
            title="#39 元氣騎士"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#40 超級瑪莉歐</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/lWxqEgSVthI"
            title="#40 超級瑪莉歐"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#41 Jetpack Joyride</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/y3yFGmxWhbA"
            title="#41 Jetpack Joyride"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#42 倉庫番</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/tLQgQC-pIkI"
            title="#42 倉庫番"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#43 植物大戰殭屍</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/UxZ2-Vs2tzw"
            title="#41 植物大戰殭屍"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#45 VVVVVV Demo</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/qOoaAq9HqYU"
            title="#45 VVVVVV Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#46 植物大戰殭屍</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/6xeqeABhcvE"
            title="#46 植物大戰殭屍"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#48 Angry Birds</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/XS8yBWl7c9A"
            title="#42 Angry Birds"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#49 惡魔城 Castlevania</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/k_43rDtv_Qs"
            title="#49 惡魔城 Castlevania"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#50 Bloons Tower Defense 2</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/pXl74VS701E"
            title="#50 Bloons Tower Defense 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#51 超級瑪莉歐</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/aCL4wka4cNI"
            title="#51 超級瑪莉歐"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 py-3">
        <h3>#52 超級瑪莉歐</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/T1_pv5pJkD8"
            title="#52 超級瑪莉歐"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    
      <div className="col-md-6 py-3">
        <h3>#55 Helltaker</h3>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/Q3FFleOX7EA"
            title="#55 Helltaker"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
                
    </div>
  );
}
