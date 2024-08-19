import { Sample } from "../Sample"
import Cliff from "../../assets/member/Cliff.gif"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const CliffMemberPage = () => {
    const bio = "這裡什麼都沒有，這個用戶非常懶。"
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2023.07.31"
        }
    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "AIS3 2024 Pre-exam",
            result: "錄取",
            datetime: "2024.06.28"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "AIS3 情資運用與惡意程式分析",
            datetime: "2024.07.28 - 2024.08.04"
        }
    ]
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="何亞翰"
            enName="Ho, Ya-Han"
            avatar={Cliff}
            institutes={["國立臺北科技大學 資訊工程所 畢業"]}
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

