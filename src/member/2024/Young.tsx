import { Sample } from "../Sample"
import Young from "../../assets/logo.png"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const YoungMemberPage = () => {
    const bio = "HI~ 我是李宇揚，可以叫我Young，資安小白努力探索學習中，還請大家多多指教!"
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2024.06.21"
        }
    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = []
    const participates: MemberParticipateType[] = []
    const internExperiences: MemberInternType[] = [
        {
            company: "凌群電腦股份有限公司",
            info: "弱點掃描、惡意攻擊流量模擬",
            datetime: "2023.08 - 2024.06"
        }
    ]
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="李宇揚"
            enName="Li, Yu-Yang"
            avatar={Young}
            institutes={["國立臺北科技大學 資訊安全碩士學位學程 碩零"]}
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

