import { Sample } from "../Sample"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const WillyMemberPage = () => {
    const bio = "我是趙尉丞。"
    const certificates: MemberCertificateType[] = []
    const raceExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "113年度資安技能金盾獎",
            result: "",
            datetime: "2024.10.12"
        },
    ]
    const participates: MemberParticipateType[] = []
    const internExperiences: MemberInternType[] = [
        {
            company: "台灣松下電器股份有限公司 資訊系統社",
            info: "資安檢測工具運用及演練、網頁程式修改對應",
            datetime: "2024.07 - 2024.08"
        }
    ]
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="趙尉丞"
            enName="Chao, Wei Cheng"
            institutes={["國立臺北科技大學 資訊工程所 資訊安全實驗室 碩零"]}
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