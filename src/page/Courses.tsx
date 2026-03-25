import { ActivityCard } from "../component/ActivityCard"
import SP from "../assets/activities/secureprogrammaing.png"
import OOP from "../assets/activities/objectorientedprogramming.png"
import OOPL from "../assets/activities/objectorientedprogramminglabs.png"
import OS from "../assets/activities/operatingsystems.png"

export function Course(){
    const ActivityItems = [
        {
            imgSrc: OOP,
            title: "物件導向程式設計",
            subTitle: "Object-Oriented Programming",
            description: "這門課將提供學生物件導向設計原理的基礎知識，並加強他們在 C++ 程式設計方面的能力。修習這一門課的學生必須要先有具備程式設計的能力，建議先修習計算機程式設計（I）與計算機程式設計（II）。學生將學習如何利用物件導向的角度撰寫設計要求，同時撰寫單元測試以利於保證軟體品質，學生可從單元測試中監控測試覆蓋率，以利於設計測試案例。同時，這一門課將介紹如何使用 Git 進行版本控制，使用 GitLab 和 Jenkins 進行持續整合（CI）。透過理論講解和實作練習，學生將熟悉物件導向設計原則和 C++ 程式設計，並能夠在開發過程中運用單元測試、Git 和 Jenkins 等工具來提升程式品質和效率。"
        },
        {
            imgSrc: OOPL,
            title: "物件導向程式設計實習",
            subTitle: "Object-Oriented Programming Labs",
            description: "本課程旨在使學生熟悉物件導向程式設計之環境、方法與原則，並透過一系列實作主題，逐步建立以 C++ 為核心的物件導向開發能力。課程內容涵蓋 C++ 設計環境、類別與物件、建構者與解構者、繼承、虛擬函式與多型、運算子溢載、例外處理、泛型程式設計、標準模板程式庫，以及期末專題設計等重要主題。本課程特別強調實作導向與專案式學習。學生將於學期中以分組方式進行實際開發，每組以兩人為限，合作製作一個遊戲程式。透過遊戲復刻或遊戲系統實作，學生得以將物件導向設計觀念具體應用於程式開發流程中，從需求分析、類別設計、模組分工到功能實作，實際體會物件導向方法在專案中的應用價值。"
        },
        {
            imgSrc: SP,
            title: "<a className="text-decoration-underline" style={{cursor: 'pointer'}} onClick={() => navigate("/rules")}>安全程式設計</a>",
            subTitle: "Secure Programming",
            description: "安全程式設計是資訊安全領域中的關鍵技術。不良的「程式設計習慣」和「不考慮安全保護的程式設計」很容易導致可有心人士所利用。本課程除了建立安全程式設計的基礎知識外，特別著重於同學的實務能力、漏洞測試、與安全程式開發能力。同時，透過分享最新的論文研究與相關技術報告，協助研究生在研究階段獲取最新的領域知識。"
        },
        {
            imgSrc: OS,
            title: "作業系統",
            subTitle: "Operating Systems",
            description: "本課程旨在回顧電腦作業系統之核心基礎知識，涵蓋系統模組與整體運作機制之理解。課程內容包括作業系統架構、行程與執行緒、CPU 排程、死結、記憶體系統、檔案系統、I/O 系統，以及電腦安全相關概念。於各單元主題中，將輔以最新學術論文與技術報告，帶領學生探討作業系統領域之最新發展與應用趨勢。本課程採翻轉教室（Flipped Classroom）教學模式。學生須於課前完成指定影片教材之學習，並於課堂中依據教學規劃積極參與討論與活動，與組員進行有效協作，以深化學習成效。整體課程設計強調高度互動與主動學習，培養學生在進階作業系統議題上的理解能力與分析能力。"
        },
    ]
    return (
        <div className="activities">
            <h4 className="text-center fw-bold">授課內容</h4>
            <div className="d-flex flex-column gap-3">
                {ActivityItems.map((activity) => {
                    return (
                        <ActivityCard
                            imgSrc={activity.imgSrc}
                            title={activity.title}
                            subTitle={activity.subTitle}
                            description={activity.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}
