import { Sample } from "../Sample"
import Ian from "../../assets/member/Ian.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const IanMemberPage = () => {
    const bio = <div className="d-flex flex-column gap-3">
        <p> -諾貝爾文學獎讀者 </p>
        <p> -畢業於國立臺灣大學所在國的大專院校 </p>
	<p> -精通IOS、Windows等系統的開關機 </p>
	<p> -曾參與PUBG、召喚峽谷等戰役 </p>
	<p> -前Netflix會員 </p>
	<p> -現任Youtube Music月費會員 </p>
	<p> -Twitch,YT皆沒訂閱過羅傑 </p>
	<p> 不是好傑寶，但是是資安新手，努力學習中...</p>
    </div>
    const certificates: MemberCertificateType[] = []
    const competitionExperiences: MemberCompetitionExperienceType[] = []
    const participates: MemberParticipateType[] = []
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="林鈺翔"
            enName="Lin, Yu-Siang"
            avatar={Ian}
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
