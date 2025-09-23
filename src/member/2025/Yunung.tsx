import { Sample } from "../Sample"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const YunungMemberPage = () => {
    const bio = "我是羽農"
    const certificates: MemberCertificateType[] = [
		{
			title: "iPAS 資訊安全工程師-初級能力鑑定",
			datetime: "2025.6.28",
		}
	];

    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "叡揚資安戰士挑戰賽2025",
            result: "校園學生組 - Desktop場(23/73)",
            datetime: "2025.06.23 ~ 2025.06.27"
        },
        
        {
            title: "DownUnderCTF 2025",
            result: "隊名：0.0，排名 : 1490/1667",
            datetime: "2025.07.18 ~ 2025.07.20"
        },
        {
            title: "idekCTF 2025",
            result: "隊名：OMAE WA SHINDEIRU，排名 : 372/843",
            datetime: "2025.08.02 ~ 2025.08.04"
        }
 
    ]

    const participates: MemberParticipateType[] = [
        {
            title: "CYBERSEC 2025 臺灣資安大會",
            datetime: "2025.05.05 ~ 2025.05.07"
        }
    ]
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="鄭羽農"
            enName="Yunung"
            institutes={["國立臺北科技大學 資訊工程碩士學位學程 碩一"]}
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