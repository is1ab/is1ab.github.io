import { Sample } from "../Sample"
import logo from "../../assets/member/Marco.png"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType,MemberZeroDayType } from "../../type/MemberCertificateType"

export const MarcoMemberPage = () => {
    const bio = <div className="d-flex flex-column gap-3">
    <p>黃昱翔專注於資訊安全工程與攻防實務，具備紅隊與攻擊手角色之實戰經驗，熟悉完整攻擊鏈流程與攻防情境推演。累積多場 CTF 競賽與實戰型攻防演練經驗，技術能力涵蓋 Web 與 Mobile 應用程式安全、OSINT 情資分析、系統層級弱點利用、存取控制繞過與橫向移動等關鍵攻擊面，並於多項具代表性之資安競賽中取得可驗證之成果。長期投入軟體弱點分析與責任式揭露，曾於 HITCON ZeroDay 平台揭露多起高風險與高影響力漏洞，展現成熟的弱點挖掘與風險判斷能力。 - chatGPT</p>
    <p>更多資料在 <a href="https://www.mlgzackfly.tw" target="_blank" rel="noopener noreferrer">個人網站</a></p>
    <p> 可以看看 <a href="https://blog.mlgzackfly.com" target="_blank" rel="noopener noreferrer">部落格</a></p>
    </div>
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2024.06.01"
        },
    ]
    const raceExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "AIS3 EOF CTF 2026 / 隊名：想對名真的好難",
            result: "第 29 名（50%）",
            datetime: "2025"
        },
        {
            title: "InfoSec Taiwan CTF 2025 / 隊名：Archetype",
            result: "第 26 名（48%）",
            datetime: "2025"
        },
        {
            title: "Hack The Tainan - 紅藍軍攻防資安競賽 / 隊名：高端的注入攻擊",
            result: "第 8 名（32%）",
            datetime: "2025"
        },
        {
            title: "AIS3 EOF CTF 進階資安攻防演練 / 隊名：隊名為 20 個字元以內",
            result: "第 7 名（63%）",
            datetime: "2025"
        },
        {
            title: "資安技能金盾獎 / 隊名：隊伍名字要叫啥",
            result: "N/A",
            datetime: "2024"
        },
        {
            title: "TFC CTF 2024 / 隊名：Archetype",
            result: "第 101 名 （10.93%）",
            datetime: "2024"
        },
        {
            title: "叡揚資訊 安全達人養成計劃暨資安戰士挑戰賽 Mobile 組",
            result: "第 12 名",
            datetime: "2024"
        },
        {
            title: "叡揚資訊 安全達人養成計劃暨資安戰士挑戰賽 Web 組",
            result: "第 29 名",
            datetime: "2024"
        },
        {
            title: "AIS3 pre-exam ",
            result: "第 16 名",
            datetime: "2024"
        },
        {
            title: "DIVER OSINT CTF 2024 / 隊名：The Lonely Team",
            result: "第 246 名",
            datetime: "2024"
        },
        {
            title: "2024 離島盃資安競賽 大專組",
            result: "第 5 名",
            datetime: "2024"
        },
        {
            title: "KnightCTF 2024 / 隊名：Ca(t)c7u5",
            result: "第 158 名",
            datetime: "2024"
        },
        {
            title: "資安技能金盾獎 / 隊名：這裡是參加抽獎的地方嗎",
            result: "入圍決賽",
            datetime: "2024"
        }
    ]
    const participates: MemberParticipateType[] = [
    {
        "title": "榮獲 DEVCORE 2025 全國資訊安全獎學金",
        "datetime": "2025"
    },
    {
        "title": "教育部資訊及科技教育司 - 114年度教育體系資安攻防演練 攻防檢測員",
        "datetime": "2025"
    },
    {
        "title": "國家資通安全研究院 - 網路攻防演練 攻擊手",
        "datetime": "2025"
    },
    {
        "title": "CYBERSEC 2025 會眾",
        "datetime": "2025"
    },
    {
        "title": "國家資通安全研究院 - 電商產業外網資安檢測服務 攻擊手",
        "datetime": "2025"
    },
    {
        "title": "SITCON 2025 會眾",
        "datetime": "2025"
    },
    {
        "title": "教育部資訊安全人才培育計畫 - 第九屆臺灣好厲駭 學員（高階培訓）",
        "datetime": "2024"
    },
    {
        "title": "MOPCON 2024 議程組 組員",
        "datetime": "2024"
    },
    {
        "title": "教育部資訊及科技教育司 - AIS3 新型態資安暑期課程 學員（情資運用及防禦組）",
        "datetime": "2024"
    },
    {
        "title": "HITCON 2024 場務組 組員 ",
        "datetime": "2024"
    },
    {
        "title": "教育部資訊及科技教育司 - 113年度教育體系資安攻防演練 攻防檢測員 / 發掘 3 個高衝擊性、1 個中衝擊性以及 9 個低衝擊性之弱點",
        "datetime": "2024"
    },
    {
        "title": "CYBERSEC 2024 會眾",
        "datetime": "2024"
    },
    {
        "title": "SITCON 2024 會眾",
        "datetime": "2024"
    },
    {
        "title": "國家資通安全研究院 - 112年工控資安實戰培訓課程 學員",
        "datetime": "2023"
    },
    {
        "title": "DevFest Kaohsiung 2023 場務組",
        "datetime": "2023"
    },
]

    const internExperiences: MemberInternType[] = [
        {
            company: "AIFT (OneDegree)",
            info: "Security Engineering Intern, Cymetrics",
            datetime: "2025.03 - Present",
        },
    ]
    const journals: MemberArticleType[] = []        
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    const zeroday: MemberZeroDayType[] = [
    {
        id: (
            <div>
                <a href="https://hackerone.com/northerntechhq/thanks?type=team">Northern Tech HackerOne</a>
            </div>
        ),
        title: "Northern Tech HQ BugBounty $200 USD",
        datetime: "2025.11.20"
    },
    {
        id: (
            <div>
                <a href="https://www.cve.org/CVERecord?id=CVE-2025-13468">CVE-2025-13468</a>
            </div>
        ),
        title: "SourceCodester Alumni Management System Delete admin_class.php delete_event authorization",
        datetime: "2025.11.20"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2025-00620">ZD-2025-00620</a>
            </div>
        ),
        title: "馬辣官網 會員系統 Reflected XSS",
        datetime: "2025.08.22"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2025-00615">ZD-2025-00615</a>
            </div>
        ),
        title: "八方雲集 線上教學平台 SQL injection、加密機制失效",
        datetime: "2025.08.06"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-01519">ZD-2024-01519</a>
            </div>
        ),
        title: "國立高雄科技大學 在學證明任意查詢",
        datetime: "2024.12.07"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-01219">ZD-2024-01219</a>
            </div>
        ),
        title: "允將建設 管理系統 SQL injection",
        datetime: "2024.12.03"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-01014">ZD-2024-01014</a>
            </div>
        ),
        title: "路易莎 會員資料洩漏",
        datetime: "2024.10.29"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00979">ZD-2024-00979</a>
            </div>
        ),
        title: "王品集團 API 存取控制缺陷",
        datetime: "2024.11.28"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00883">ZD-2024-00883</a>
            </div>
        ),
        title: "皇愷有限公司 冷凍控制器管理系統 - EGOi 權限管理不當",
        datetime: "2024.10.28"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00882">ZD-2024-00882</a>
            </div>
        ),
        title: "皇愷有限公司 冷凍控制器管理系統 - EGOi RCE",
        datetime: "2024.10.06"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00801">ZD-2024-00801</a>
            </div>
        ),
        title: "埃立思科技股份有限公司 EMC 數位會員平台",
        datetime: "2024.09.15"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00785">ZD-2024-00785</a>
            </div>
        ),
        title: "Chin Fah Machinery sqli",
        datetime: "2024.09.06"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00777">ZD-2024-00777</a>
            </div>
        ),
        title: "臺北醫學大學 ckfinder 後臺未關閉",
        datetime: "2024.07.22"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00042">ZD-2024-00042</a>
            </div>
        ),
        title: "國立高雄大學 學生宿舍留言系統 存取控制缺陷",
        datetime: "2024.04.18"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00019">ZD-2024-00019</a>
            </div>
        ),
        title: "四海一家飯店 sqli 導致 RCE",
        datetime: "2024.03.27"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00017">ZD-2024-00017</a>
            </div>
        ),
        title: "牧陽能控股份有限公司 資訊洩漏達成 RCE",
        datetime: "2024.01.29"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00016">ZD-2024-00016</a>
            </div>
        ),
        title: "台北區 50 嵐 ckfinder 後臺未關閉",
        datetime: "2024.03.26"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00014">ZD-2024-00014</a>
            </div>
        ),
        title: "國立高雄科技大學 LFI",
        datetime: "2024.02.20"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00005">ZD-2024-00005</a>
            </div>
        ),
        title: "國立高雄大學 學生資訊洩漏",
        datetime: "2024.01.26"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2023-01040">ZD-2023-01040</a>
            </div>
        ),
        title: "加雲聯網 .DS_Store 洩漏",
        datetime: "2024.03.03"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2023-01039">ZD-2023-01039</a>
            </div>
        ),
        title: "擎億股份有限公司網址參數存在 SQL injection 取得 SQL shell",
        datetime: "2024.03.03"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2023-00087">ZD-2023-00087</a>
            </div>
        ),
        title: "國立高雄科技大學 任意檔案上傳漏洞",
        datetime: "2023.03.23"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2023-00086">ZD-2023-00086</a>
            </div>
        ),
        title: "國立高雄科技大學 圖書推薦系統 敏感資料洩漏、權限控管問題",
        datetime: "2023.03.23"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2022-00649">ZD-2022-00649</a>
            </div>
        ),
        title: "國立高雄科技大學圖書館 任意上傳檔案",
        datetime: "2022.10.14"
    },
    {
        id: (
            <div>
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2021-00264">ZD-2021-00264</a>
            </div>
        ),
        title: "國立高雄科技大學圖書館漏洞",
        datetime: "2021.07.30"
    }
]

    return (
        <Sample
            zhName="黃昱翔"
            enName="Marco"
            avatar={logo}
            institutes={["國立臺北科技大學 資訊安全碩士學位學程 碩二"]}
            bio={bio}
            experiences={raceExperiences}
            certificates={certificates}
            participates={participates}
            intern={internExperiences}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
            zeroday={zeroday}
        ></Sample>
    )
}
