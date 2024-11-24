import { Sample } from "../Sample"
import Uriah from "../../assets/member/uriah.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const UriahMemberPage = () => {
    const bio = <div className="d-flex flex-column gap-3">
        <p>嗨，我是黃漢軒，目前就讀於國立陽明交通大學資訊安全研究所，並參與網路與系統實驗室的專案研究。在大學部時，我就讀國立臺北科技大學資訊工程系，並參與實驗室擔任顧問一職，嘗試開發了實驗室的論文排程系統、開發實驗室新靜態網站、參與兩項論文相關研究、並且擔任兩年的物件導向程式設計實習助教，歡迎認識我！</p>
        <p>你可以在這裡找到我的個人網頁：<a href="https://ntut-xuan.github.io" target="_blank">https://ntut-xuan.github.io</a>。</p>
    </div>
    const certificates: MemberCertificateType[] = []
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "picoCTF 2024",
            result: "299/69579 (<5%) SOLO",
            datetime: "2024.03-2024.03"
        },
        {
            title: "動態資料服務節點與 AI 智慧導流技術 - AI/ML 運用於 B5G 智慧導流技術",
            result: "資策會軟體院前瞻技術獎 STI A* Awards",
            datetime: "2024.06-2024.11"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "參與「基於 API 呼叫序列的深度學習模型用於勒索病毒偵測（大專生計畫編號:113-2813-C-027-054-E）」大學部專題擔任顧問一職",
            datetime: "2023.09-2024.06"
        },
        {
            title: "參與「Practice Tools for Simple Design」大學部專題擔任顧問一職",
            datetime: "2023.09-2024.06"
        },
        {
            title: "參與維護實驗室新網頁",
            datetime: "2024.06-2024.06"
        },
        {
            title: "參與維護實驗室新系統",
            datetime: "2024.02-2024.06"
        },
    ]
    const internExperiences: MemberInternType[] = [{
        company: "財團法人電腦技能基金會",
        info: "擔任實習工程師，維護 CodeJudger 專案與 TQC+ 轉骨計畫新網站全端，引入 PR 機制與 CI/CD 開發流程，協助修復 CVSS 高嚴重漏洞。",
        datetime: "2023.07-2024.02"
    }]
    const journals: MemberArticleType[] = [
        {
            authors: "Jong-Yih Kuo, Zhi-Jia Wen, Han-Xuan Huang, and I-Ting Guo",
            title: "The Study on Security Online Judge System Applied Sandbox Technology",
            target: "2022 IEEE/ACIS 23rd International Conference on Software Engineering, Artificial Intelligence, Networking and Parallel/Distributed Computing (SNPD)",
            details: "Taichung, Taiwan, 2022, pp. 168-172",
            doi: "https://doi.org/10.1109/SNPD54884.2022.10051768"
        },
        {
            authors: "Han-Xuan Huang, Tzu-Yi Li, Sheng-Shan Chen, Kuang-Ming Chang, and Chin-Yu Sun*",
            title: "Security Challenges in Online Judges: Understanding and Mitigating CCA Attacks",
            target: "prepared for submission to IEEE Transactions on Network and Service Management",
            details: "2023",
        }
    ]
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="黃漢軒"
            enName="Huang, Han-Xuan"
            avatar={Uriah}
            institutes={["國立臺北科技大學 資訊工程系 資訊安全實驗室顧問", "國立陽明交通大學 資訊安全研究所 網路與系統實驗室"]}
            bio={bio}
            experiences={competitionExperiences}
            certificates={certificates}
            participates={participates}
            intern={internExperiences}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
        ></Sample>
    )
}