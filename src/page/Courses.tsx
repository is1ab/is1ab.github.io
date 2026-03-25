import { ActivityCard } from "../component/ActivityCard"
import SP from "../assets/activities/secureprogrammaing.png"
import OOP from "../assets/activities/objectorientedprogramming.png"
import OOPL from "../assets/activities/objectorientedprogramminglabs.png"

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
            description: "物件導向程式設計是軟體開發中的核心方法之一，對於建構具備良好結構、可維護性、延展性與重用性的程式系統具有重要意義。良好的物件導向設計能力，不僅有助於學生理解程式設計中的抽象化、封裝、繼承與多型等關鍵概念，也能奠定未來進行大型軟體開發與團隊協作的基礎。本課程旨在使學生熟悉物件導向程式設計之環境、方法與原則，並透過一系列實作主題，逐步建立以 C++ 為核心的物件導向開發能力。課程內容涵蓋 C++ 設計環境、類別與物件、建構者與解構者、繼承、虛擬函式與多型、運算子溢載、例外處理、泛型程式設計、標準模板程式庫，以及期末專題設計等重要主題。本課程特別強調實作導向與專案式學習。學生將於學期中以分組方式進行實際開發，每組以兩人為限，合作製作一個遊戲程式。透過遊戲復刻或遊戲系統實作，學生得以將物件導向設計觀念具體應用於程式開發流程中，從需求分析、類別設計、模組分工到功能實作，實際體會物件導向方法在專案中的應用價值。"
        },
        {
            imgSrc: SP,
            title: "安全程式設計",
            subTitle: "Secure Programming",
            description: "安全程式設計是資訊安全領域中的關鍵技術。不良的「程式設計習慣」和「不考慮安全保護的程式設計」很容易導致可有心人士所利用。本課程除了建立安全程式設計的基礎知識外，特別著重於同學的實務能力、漏洞測試、與安全程式開發能力。同時，透過分享最新的論文研究與相關技術報告，協助研究生在研究階段獲取最新的領域知識。"
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
