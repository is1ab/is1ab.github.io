import { Sample } from "../Sample"
//import Uriah from "../../assets/member/uriah.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const BoboMemberPage = () => {
    const bio = <div className="d-flex flex-column gap-3">
        <p>我是曹凱翔，可以叫我 Bobo</p>
        
    </div>
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2023.12.06"
        },
    
    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "AIS3 Pre-exam 2024",
            result: "隊名 : Bobo ; 排名 : 63/493",
            datetime: "2024.05.25-2024.05.27"
        },
        {
            title: "picoCTF 2024",
            result: "隊名 : ISLAB ; 排名 : 461/6957",
            datetime: "2024.03.13-2024.03.27"
        },
        {
            title: "TSCCTF 2024",
            result: "隊名 : nlnlouo ; 排名 : 43/165",
            datetime: "2024.03.13-2024.03.27"
        },
        {
            title: "T 貓盃",
            result: "",
            datetime: "2023.11.10-2023.11.13"
        },
        {
            title: "CGGC CTF",
            result: "",
            datetime: "2023.12.1-2023.12.2"
        },
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "CraftCon Taiwan 奧義 AI 資安年會",
            datetime: "2024/07/12"
        },
        {
            title: "DEVCORE CONFERENCE 2024",
            datetime: "2024/03/16"
        },
        {
            title: "CYBERSEC 2024",
            datetime: "2024.04.15-2024.04.17"
        },
        {
            title: "HITCON Carnival 2023 攻防演練論壇 & 賽況導覽",
            datetime: "2023/11/14"
        },
        {
            title: "2023神盾盃資安論壇",
            datetime: "2023/11/02"
        },
        {
            title: "CYBERSEC 2022",
            datetime: "2022.09.20-2022.09.22"
        }
    ]
    const internExperiences: MemberInternType[] = [

    ]
    const journals: MemberArticleType[] = [
        
    ]
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="曹凱翔"
            enName="CAO, Kai-Siang"
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