import { Sample } from "../Sample"
import Jason from "../../assets/member/jason.png"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const JasonMemberPage = () => {
    const bio = "蟹man！！我什麼都沒有，但我會加油慢慢更新的，謝謝！"
    const certificates: MemberCertificateType[] = [

    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [

    ]
    const participates: MemberParticipateType[] = [

    ]
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="黃廷翰"
            enName="Huang, Ting-Han"
            avatar={Jason}
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

