import { Sample } from "../Sample"
import Stanley from "../../assets/member/Stanley.png"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const StanleyMemberPage = () => {
    const bio = "嗨，我是 Stanley"

    const certificates: MemberCertificateType[] = []

    const raceExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "AIS3 新型態資安暑期課程",
            result: "最佳專題",
            datetime: "2025.07"
        },
        {
            title: "AIS3 pre-exam 初賽",
            result: "57 / 344（16.6%）",
            datetime: "2025.05"
        },
        {
            title: "北科大 is1ab 新生盃 CTF",
            result: "第 3 / 70 名（4.3%）",
            datetime: "2025.09"
        }
    ]

    const participates: MemberParticipateType[] = [
        {
            title: "產學合作計畫 - 駭客組織惡意程式之設計結構暨特徵分析",
            datetime: "2025.01 - 2025.11"
        },
        {
            title: "2025 TeamT5 Camp",
            datetime: "2025.01"
        },
        {
            title: "AIS3 新型態資安暑期課程 – 進階競技攻防組",
            datetime: "2025.07"
        },
        {
            title: "第十屆 AIS3 好厲駭 高階學員培訓",
            datetime: "2025.09 - 現在"
        },
        {
            title: "大同大學 科學開源服務社（副社長／講師／助教）",
            datetime: "2023.08 - 現在"
        },
        {
            title: "SITCON 2026 學生計算機年會 製播組",
            datetime: "2025.09 - 現在"
        }
    ]

    const internExperiences: MemberInternType[] = [
        {
            company: "TeamT5 杜浦數位安全",
            info: "威脅情資研究員，惡意程式分析與威脅情資",
            datetime: "2025.09 - 現在"

        }
    ]

    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="陳威翰"
            enName="Stanley Chen"
            avatar={Stanley}
            institutes={["國立臺北科技大學 資訊工程所 資訊安全實驗室"]}
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
