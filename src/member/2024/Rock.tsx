import { Sample } from "../Sample"
import Rock from "../../assets/member/Rock.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType, MemberPresentationType } from "../../type/MemberCertificateType"
export const RockMemberPage = () => {
  const bio = <div className="d-flex flex-column gap-3">
    <p>"Hi, I'm Rock. 大學為外語系畢業，碩士鬼轉資安，正在練功累積實力，希望大家多多交流指教，想練英文或日文也可以隨時來找我聊聊!"</p>
    <p><span style={{ color: 'black' }}> 我其實不太會做研究，但有在努力做研究 </span> <span className="secret-text"></span> </p>
  </div>
 const certificates: MemberCertificateType[] = [
     {
         title: "iPAS 資訊安全工程師-初級能力鑑定",
         datetime: "2023/07/31"
     },
     {
         title: "Google Cybersecurity Professional Certificate",
         datetime: "2023/12/15"
     },
     {
         title: "IELTS 6.5",
         datetime: "2023/06/21"
     },
     {
         title: "JLPT N1",
         datetime: "2022/01/13"
     },
 ]


 const competitionExperiences: MemberCompetitionExperienceType[] = [
     {
         title: "picoCTF 2023",
         result: "排名: N/A",
         datetime: "2023"
     }
 ]
 const participates: MemberParticipateType[] = [
     {
         title: "CYBERSEC 2024 臺灣資安大會",
         datetime: "2024/05/14-2024/05/16"
     }     
 ]
 const internExperiences: MemberInternType[] = [
     {
         company: "叡揚資訊股份有限公司",
         info: "資安實習生",
         datetime: "2024.10 - 2025.03"
     },
     {
         company: "華電聯網股份有限公司",
         info: "軟體中心實習生",
         datetime: "2024.7 - 2024.9"
     },
     {
         company: "財團法人資訊工業策進會",
         info: "資安實習生",
         datetime: "2023.7 - 2023.9"
     }  
 ]
  const presentations: MemberPresentationType[] = [
      {
              title: "Neural Transfer Learning for Repairing Security Vulnerabilities in C Code",
              authors: "Zimin Chen, Steve Kommrusch, Martin Monperrus",
              journal: "IEEE Transactions on Software Engineering, 2022",
              datetime: "2025.02.13"
      }

  ]

 const journals: MemberArticleType[] = []
 const conferences: MemberArticleType[] = []
 const techConfs: MemberArticleType[] = []
 return (
     <Sample
         zhName="李宜鴻"
         enName="Li, Yi-Hong"
         avatar={Rock}
         institutes={["國立臺北科技大學 資訊安全碩士學位學程 碩三/  <br> Master of Computer Science, University of Cincinnati Graduate"]}
         bio={bio}
         presentations={presentations}
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
