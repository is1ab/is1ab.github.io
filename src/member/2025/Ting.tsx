import { Sample } from "../Sample"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const TingMemberPage = () => {
 const bio = "TingLien"
 const certificates: MemberCertificateType[] = [
     {
         title: "OffSec Certified Professional (OSCP)",
         datetime: "N/A"
     },
     {
         title: "Certified Ethical Hacker (CEH)",
         datetime: "2025/10"
     },
     {
         title: "Cisco Certified Network Professional Enterprise (CCNP)",
         datetime: "2028/02"
     },
     {
         title: "AZ-104: Microsoft Azure Administrator",
         datetime: "2026/07"
     },
     {
         title: "Certified Network Pentester (CNPen)",
         datetime: "N/A"
     },
 ]


 const competitionExperiences: MemberCompetitionExperienceType[] = [
     {
         title: "HITCON Cyber Range 2024",
         result: "排名: 1",
         datetime: "2024"
     }
 ]
 const participates: MemberParticipateType[] = []
 const internExperiences: MemberInternType[] = [
     {
         company: "Cymetrics",
         info: "Intern",
         datetime: "2023.12 - now"
     }
 ]


 const journals: MemberArticleType[] = []
 const conferences: MemberArticleType[] = []
 const techConfs: MemberArticleType[] = []
 return (
     <Sample
         zhName="連羿婷"
         enName="Lien, Li-Ting"
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
