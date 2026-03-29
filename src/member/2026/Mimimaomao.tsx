import { Sample } from "../Sample"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"
import mimimaomao from "../../assets/member/mimimaomao.png"

export const MimimaomaoMemberPage = () => {
 const bio = "我是 Mimimaomao 主要專注於資訊安全與雲端領域，平時會參與 CTF 與競賽，熟悉 Forensics、藍隊等技術方向，同時也具備 AWS 雲端實務經驗，如 : Lambda、CloudFront、IAM 與資料加密等。未來希望深入研究雲端安全與攻防技術。"
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
     {
         title: "LA CTF 2026",
         result: "排名: 241/955",
         datetime: "2026"
     },
     {
         title: "Nullcon Goa HackIM 2026 CTF",
         result: "排名: 154/637",
         datetime: "2026"
     },
     {
         title: "0xfun CTF 2026",
         result: "排名: 121/1352",
         datetime: "2026"
     },               
     {
         title: "全國技能競賽分區賽-雲端運算",
         result: "排名: 6(佳作)",
         datetime: "2026"
     },                        
 ]
 
 const participates: MemberParticipateType[] = [
        {
            title: "第十屆臺灣好厲駭 高階學員培訓",
            datetime: "2025.09 ~ now"
        },
        {
            title: "國立宜蘭高商-網路安全/資訊與網路技術-職類 指導老師",
            datetime: "2024.08 ~ now"
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
         avatar={mimimaomao}         
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