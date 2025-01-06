import { Sample } from "../Sample"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const JunAnMemberPage = () => {
    const bio = "我是郭竣安。"
    const certificates: MemberCertificateType[] = []
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "AIS3 Pre-exam CTF 2024",
            result: "隊名：4153_nu11ptr，排名 : 60/493",
            datetime: "2024.05.25 ~ 2024.05.27"
        },
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "第九屆臺灣好厲駭 高階學員培訓",
            datetime: "2024.08 ~ now"
        },
        {
            title: "HITCON CMT 2024",
            datetime: "2024.08.23 ~ 2024.08.24"
        },
        {
            title: "2024 AIS3 新型態資安暑期課程",
            datetime: "2024.07.29 ~ 2024.08.04"
        },
        {
            title: "CYBERSEC 2024 臺灣資安大會",
            datetime: "2024.05.14 ~ 2024.05.16"
        },
        {
            title: "DEVCORE CONFERENCE 2024",
            datetime: "2024.03.16"
        },
        {
            title: "HITCOM CMT 2023",
            datetime: "2023.08.18 ~ 2023.08.19"
        }
    ]
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="郭竣安"
            enName="Kuo, Chun-An"
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