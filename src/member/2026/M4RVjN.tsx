import { Sample } from "../Sample"
import M4RVjN from "../../assets/member/M4RVjN.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const M4RVjNMemberPage = () => {
    const bio = "我是 M4RVjN，小時候都在課本塗鴉，現在正努力跟上大家。"

    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2024.12"
        }
    ]

    const raceExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "MyFirstCTF",
            result: "14/80",
            datetime: "2025.05"
        }
    ]

    const participates: MemberParticipateType[] = [
        {
            title: "AIS3 2025 新型態資安暑期課程 – 學員",
            datetime: "2025.07"
        },
        {
            title: "第十屆 AIS3 好厲駭 - 高階學員培訓",
            datetime: "2025.08"
        }
    ]

    const internExperiences: MemberInternType[] = [
        {
            company: "開啟資安系統股份有限公司",
            info: "資安檢測服務處 實習生",
            datetime: "2024.09 - 2025.09"

        }
    ]

    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="黃致程"
            enName="Marvin Huang"
            avatar={M4RVjN}
            institutes={["國立臺北科技大學 資訊安全碩士學位學程 碩零"]}
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
