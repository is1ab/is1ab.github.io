import { Sample } from "../Sample"
import MOBSPhoto from "/src/assets/member/MOBS.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType,MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const MOBSMemberPage = () => {
    const bio = "大家好，我是MOBS。" 
    const certificates: MemberCertificateType[] = []
    const raceExperiences: MemberCompetitionExperienceType[] = []
    const participates: MemberParticipateType[] = []
    const internExperiences: MemberInternType[] = []

    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="施震瑋"
            enName="MOBS"
            avatar={MOBSPhoto}
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