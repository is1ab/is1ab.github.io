import { Sample } from "../Sample"
import Yusef from "../../assets/member/Yusef.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const YusefMemberPage = () => {
    const bio = (
        <>
            你好，我是唐秉毓
            <br />
            目前研究的方向是自動化滲透測試
            <br />
            也有在學習逆向工程與惡意程式分析
        </>
    )

    const certificates: MemberCertificateType[] = []

    // 競賽經歷，格式範例：
    // { title: "2026 AIS3 pre-exam", result: "50 / 300", datetime: "2026.05" },
    const raceExperiences: MemberCompetitionExperienceType[] = []

    // 參與活動，格式範例：
    // { title: "2026 TeamT5 Camp", datetime: "2026.01" },
    const participates: MemberParticipateType[] = [
        {
            title: "第 21 屆資安技能金盾獎 初賽",
            datetime: "2026.10"
        },
    ]

    // 實習經歷，格式範例：
    // { company: "公司名稱", info: "實習內容", datetime: "2026.01 - 2026.06" },
    const internExperiences: MemberInternType[] = []

    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="唐秉毓"
            enName="Yusef"
            avatar={Yusef}
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
