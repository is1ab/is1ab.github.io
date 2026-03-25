import { ActivityCard } from "../component/ActivityCard"
import ActivityImage3 from "../assets/activities/secureprogrammaing.png"

export function Course(){
    const ActivityItems = [
        {
            imgSrc: ActivityImage3,
            title: "安全程式設計",
            subTitle: "Secure Programming",
            description: "安全程式設計是資訊安全領域中的關鍵技術。不良的「程式設計習慣」和「不考慮安全保護的程式設計」很容易導致可有心人士所利用。本課程除了建立安全程式設計的基礎知識外，特別著重於同學的實務能力、漏洞測試、與安全程式開發能力。同時，透過分享最新的論文研究與相關技術報告，協助研究生在研究階段獲取最新的領域知識。"
        },
        /*{
            imgSrc: ActivityImage,
            title: "2024 AIS3 新型態暑期課程",
            subTitle: "2024/01/01 - Taipei City",
            description: "以落實產業資安實務為導向設計課程內容，並引導學員依興趣組成跨校跨級學習小組，製作與展示專題成果。錄取考核分為『Pre-exam資安實務測驗』錄取 110 人及『甄選』錄取 40 人，共錄取 150 人。"
        },
        {
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
