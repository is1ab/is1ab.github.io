import { Sample } from "../Sample"
import ypp from "../../assets/member/ypp.png"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const YPPMemberPage = () => {
    const bio = "目前什麼都沒有"
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
            zhName="黃奕評"
            enName="Huang, Yi-Ping"
            avatar={ypp}
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

