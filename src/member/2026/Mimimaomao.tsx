import { Sample } from "../Sample"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const MimimaomaoMemberPage = () => {
 const bio = "Mimimaomao"
 const certificates: MemberCertificateType[] = [
     {
         title: "Cisco Certified Network Associate (CCNA)",
         datetime: "2020.09"
     },
 ]


 const competitionExperiences: MemberCompetitionExperienceType[] = [
     {
         title: "HITCON Cyber Range 2024 企業組",
         result: "排名: Quals #9, Final #7",
         datetime: "2024"
     },
     {
         title: "全國技能競賽分區賽-資訊與網路技術",
         result: "排名: 3",
         datetime: "2024"
     },
     {
         title: "HITCON CTF 2025 Quals",
         result: "排名: 7 (TW)",
         datetime: "2025"
     },
     {
         title: "InfoSec Taiwan CTF 2025 大專組",
         result: "排名: 6",
         datetime: "2025"
     }, 
     {
         title: "神盾盃 2025",
         result: "排名: Quals #6, Final #9",
         datetime: "2025"
     },                   
 ]
 
 const participates: MemberParticipateType[] = [
        {
            title: "第十屆臺灣好厲駭 高階學員培訓",
            datetime: "2025.09 ~ now"
        },
        {
            title: "逢甲大學黑客社 10th 網管",
            datetime: "2023.08 ~ 2024.07"
        },
        {
            title: "逢甲大學黑客社 11th 網管",
            datetime: "2024.08 ~ 2025.07"
        },
 ]       
 const internExperiences: MemberInternType[] = [
     {
         company: "逢甲大學資通安全研究中心",
         info: "資安檢測人員",
         datetime: "2024.04 - now"
     },
     {
         company: "逢甲大學雲創學院",
         info: "雲端開發工程師",
         datetime: "2024.12 - now"
     },     
 ]


 const journals: MemberArticleType[] = []
 const conferences: MemberArticleType[] = []
 const techConfs: MemberArticleType[] = []
 return (
     <Sample
         zhName="賴要宏"
         enName="YAO-HUNG, LAI"
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