import { Sample } from "../Sample"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const YuericMemberPage = () => {
    const bio = "我是劉章佑。"
    const certificates: MemberCertificateType[] = []
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "2024 CGGC 網路守護者挑戰賽CTF ",
            result: "",
            datetime: "2024.11.02 ~ 2024.11.04"
        },
        {
            title: "113年度資安技能金盾獎",
            result: "",
            datetime: "2024.10.12"
        },
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "第九屆臺灣好厲駭 高階學員培訓",
            datetime: "2024.08 ~ now"
        },
        {
            title: "DEVCORE CONFERENCE 2024",
            datetime: "2024.03.16"
        },
    ]
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="劉章佑"
            enName="Liu, Zhang-Yu"
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