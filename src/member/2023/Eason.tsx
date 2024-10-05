import { Sample } from "../Sample"
//import Uriah from "../../assets/member/uriah.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const EasonMemberPage = () => {
    const bio = <div className="d-flex flex-column gap-3">
        <p>我是許貽昇，可以叫我 Eason</p>
        
    </div>
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2023.12.31"
        },
        {
            title: "Certiport Information Technology Specialist Network Security",
            datetime: "2022"
        },
        {
            title: "Cisco Certified Network Associate",
            datetime: "2022.1.20"
        },
        {
            title: "Microsoft Technology Associate Networking",
            datetime: "2021.06.10"
        },
        {
            title: "Techficiency Quotient Certification LINUX System Administration",
            datetime: "2020.12.29"
        },
        {
            title: "Techficiency Quotient Certification JAVA8",
            datetime: "2020.12.28"
        }
    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "Secure Code Warrior - 線上資安戰士挑戰賽",
            result: "",
            datetime: "2024.06.14-2024.06.17"
        },
        {
            title: "AIS3 Pre-exam 2024",
            result: "隊名 : Eason ; 排名 : 34/493",
            datetime: "2024.05.25-2024.05.27"
        },
        {
            title: "My First CTF 2024",
            result: "隊名:大頭番薯衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝衝",
            datetime: "2024.05.25"
        },
        {
            title: "資安大會 CyberRange	",
            result: "",
            datetime: "2024.05.16"
        },
        {
            title: "picoCTF 2024",
            result: "隊名 : PaLuPaLu ; 排名 : 377/6957",
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
        {
            title: "Asian Robotic Athletic Competition",
            result: "佳作",
            datetime: "2020.11.21"
        }
    ]
    const participates: MemberParticipateType[] = [
        
        {
            title: "CraftCon Taiwan 奧義AI資安年會",
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