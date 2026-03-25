import { ActivityCard } from "../component/ActivityCard"
import SP from "../assets/activities/secureprogrammaing.png"
import OOP from "../assets/activities/objectorientedprogramming.png"

export function Course(){
    const ActivityItems = [
        {
            imgSrc: SP,
            title: "安全程式設計",
            subTitle: "Secure Programming",
            description: "安全程式設計是資訊安全領域中的關鍵技術。不良的「程式設計習慣」和「不考慮安全保護的程式設計」很容易導致可有心人士所利用。本課程除了建立安全程式設計的基礎知識外，特別著重於同學的實務能力、漏洞測試、與安全程式開發能力。同時，透過分享最新的論文研究與相關技術報告，協助研究生在研究階段獲取最新的領域知識。"
        },
        {
            imgSrc: OOP,
            title: "物件導向程式設計",
            subTitle: "Object-Oriented Programming",
            description: "這門課將提供學生物件導向設計原理的基礎知識，並加強他們在 C++ 程式設計方面的能力。修習這一門課的學生必須要先有具備程式設計的能力，建議先修習計算機程式設計（I）與計算機程式設計（II）。學生將學習如何利用物件導向的角度撰寫設計要求，同時撰寫單元測試以利於保證軟體品質，學生可從單元測試中監控測試覆蓋率，以利於設計測試案例。同時，這一門課將介紹如何使用 Git 進行版本控制，使用 GitLab 和 Jenkins 進行持續整合（CI）。透過理論講解和實作練習，學生將熟悉物件導向設計原則和 C++ 程式設計，並能夠在開發過程中運用單元測試、Git 和 Jenkins 等工具來提升程式品質和效率。"
        },
        /*{
            imgSrc: ActivityImage2,
            title: "2024 資安技能金盾初賽",
            subTitle: "2024/01/01 - Taipei City",
            description: "為加強學生資安實務技能，透過競賽機制，以實務與時事題型，提升學生解決資安問題能力與實戰經驗，分為初賽與決賽，參賽對象包含國中、高中及大專校院在學學生，每組最多3人，活動富教育意義且對升學有助益。"
        },*/
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
