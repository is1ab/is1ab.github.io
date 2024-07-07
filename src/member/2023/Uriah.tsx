import { Sample } from "../Sample"
import Uriah from "../../assets/member/uriah.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberRaceExperienceType } from "../../type/MemberCertificateType"

export const UriahMemberPage = () => {
    const bio = "嗨，我是黃漢軒，目前就讀於國立陽明交通大學資訊安全研究所，並參與網路與系統實驗室的專案研究。在大學部時，我就讀國立臺北科技大學資訊工程系，並參與實驗室擔任顧問一職，嘗試開發了實驗室的論文排程系統、開發實驗室新靜態網站、參與兩項論文相關研究、並且擔任兩年的物件導向程式設計實習助教，歡迎認識我！"
    const certificates: MemberCertificateType[] = []
    const raceExperiences: MemberRaceExperienceType[] = []
    const participates: MemberParticipateType[] = []
    const internExperiences: MemberInternType[] = [{
        company: "財團法人電腦技能基金會",
        info: "擔任實習工程師，維護 CodeJudger 專案與 TQC+ 轉骨計畫新網站全端，引入 PR 機制與 CI/CD 開發流程，協助修復 CVSS 高嚴重漏洞。",
        datetime: "2023.07-2024.02"
    }]
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="黃漢軒"
            enName="Huang, Han-Xuan"
            avatar={Uriah}
            institutes={["國立臺北科技大學 資訊工程系 資訊安全實驗室顧問", "國立陽明交通大學 資訊安全研究所 網路與系統實驗室"]}
            bio={bio}
            experiences={raceExperiences}
            certificates={certificates}
            participates={participates}
            intern={internExperiences}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
        ></Sample>
    )
}