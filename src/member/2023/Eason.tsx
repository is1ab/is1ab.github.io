import { Sample } from "../Sample"
//import Uriah from "../../assets/member/uriah.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const EasonMemberPage = () => {
    const bio = <div className="d-flex flex-column gap-3">
        <p>我是許貽昇，可以叫我 Eason</p>
        
    </div>
    const certificates: MemberCertificateType[] = []
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        /*{
            title: "picoCTF 2024",
            result: "299/69579 (<5%) SOLO",
            datetime: "2024.03-2024.03"
        }*/
    ]
    const participates: MemberParticipateType[] = [
        /*
        {
            title: "參與「基於 API 呼叫序列的深度學習模型用於勒索病毒偵測（大專生計畫編號:113-2813-C-027-054-E）」大學部專題擔任顧問一職",
            datetime: "2023.09-now"
        },
        {
            title: "參與「Practice Tools for Simple Design」大學部專題擔任顧問一職",
            datetime: "2023.09-now"
        },
        {
            title: "參與維護實驗室新網頁",
            datetime: "2024.06-2024.06"
        },
        {
            title: "參與維護實驗室新系統",
            datetime: "2024.02-2024.06"
        },
        */
    ]
    const internExperiences: MemberInternType[] = [

    ]
    const journals: MemberArticleType[] = [
        
    ]
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="許貽昇"
            enName="HSU, YI-SHENG"
            //avatar={Uriah}
            institutes={["國立臺北科技大學 資訊安全學位學程 碩一"]}
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