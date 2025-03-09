import { Sample } from "../Sample"
import PaulWang from "../../assets/member/PaulWang.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const PaulWangMemberPage = () => {
    const bio = "大家好，我是王立翔，研究逆向工程，最近對於行動安全蠻有興趣的，請大家多多指教！"
    const certificates: MemberCertificateType[] = []
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "TSCCTF 2025",
            result: "排名: 137/509",
            datetime: "2025/01/13-2025/01/16"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "HITCON CTF x 菁英人才交流活動",
            datetime: "2024.11.09-2024.11.10"
        },
        {
            title: "SITCON 2025 學生計算機年會",
            datetime: "2025/03/08"
        }
    ]
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="王立翔"
            enName="Wang, Li-Siang"
            avatar={PaulWang}
            institutes={["國立臺北科技大學 資訊工程所 碩一"]}
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
