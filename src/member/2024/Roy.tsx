import { Sample } from "../Sample"
import Uriah from "../../assets/member/uriah.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberRaceExperienceType } from "../../type/MemberCertificateType"

export const RoyMemberPage = () => {
    const bio = ""
    const certificates: MemberCertificateType[] = []
    const raceExperiences: MemberRaceExperienceType[] = []
    const participates: MemberParticipateType[] = []
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="你的中文名字"
            enName="你的英文名字"
            avatar={Uriah}
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