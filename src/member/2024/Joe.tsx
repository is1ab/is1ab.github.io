import { Sample } from "../Sample"

import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const JoeMemberPage = () => {
    const bio = "嗨，各位好，我是楊閔恩，可以叫我Joe，目前就讀於國立臺北科技大學資訊工程學系碩士班，研究方向為資訊安全，目前專注於Web的部分，希望未來能在這個領域有所貢獻。"
    const certificates: MemberCertificateType[] = []
    const competitionExperiences: MemberCompetitionExperienceType[] = []
    const participates: MemberParticipateType[] = [
        {
            title: "NISRA Enlightened 2021",
            datetime: "2021.08.09"
        },
        {
            title: "HITCON Carnival 2023",
            datetime: "2023.11.14"
        },
        {
            title: "CYBERSEC 2024",
            datetime: "2024.05.14"
        }
    ]
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="楊閔恩"
            enName="Yang, Min-En"
            
            institutes={["國立臺北科技大學 資訊工程所 碩零"]}
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

