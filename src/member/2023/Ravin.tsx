import { Sample } from "../Sample"
import logo from "../../assets/member/ravin.png"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const RavinMemberPage = () => {
    const bio = <div className="d-flex flex-column gap-3">
        <p>Hi 我是林幸慧</p>
        <p>Github：<a href="https://github.com/hui-sing" target="_blank">MyGithub</a></p>
        
    </div>
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2024.06.01"
        },
    
    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "AIS3 Pre-exam 2024",
            result: "排名 : 33/493",
            datetime: "2024.05.25-2024.05.27"
        },
        {
            title: "資安大會 CyberRange",
            result: "",
            datetime: "2024.05.16"
        },
        {
            title: "picoCTF 2024",
            result: "排名 : 377/6957",
            datetime: "2024.03.13-2024.03.27"
        },
        {
            title: "TSCCTF 2024",
            result: "",
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
            title: "2024 AIS3 新型態資安暑期課程",
            datetime: "2024/07/29-2024/08/04"
        },
        {
            title: "CraftCon Taiwan 奧義 AI 資安年會",
            datetime: "2024/07/12"
        },
        {
            title: "CYBERSEC 2024",
            datetime: "2024/05/14-2024/05/16"
        },
        {
            title: "SICON 2024",
            datetime: "2024/03/09"
        },
        {
            title: "TeamT5 Security Camp 資安培訓營",
            datetime: "2024/03/09"
        },
        {
            title: "HITCON Girls Workshop 2023",
            datetime: "2023/11/25-2023/11/26"
        },
        {
            title: "HITCON Carnival 2023 攻防演練論壇 & 賽況導覽",
            datetime: "2023/11/14"
        },
        {
            title: "2023神盾盃資安論壇",
            datetime: "2023/11/02"
        },
    ]
    const internExperiences: MemberInternType[] = [
        {
            company: "果核數位股份有限公司",
            info: "資安實習生",
            datetime: "2024.07 - now"
        },
        {
            company: "中華資安國際股份有限公司",
            info: "資安實習生",
            datetime: "2023.04 - 2023.09"
        },
        {
            company: "元盾資安股份有限公司",
            info: "資安實習生",
            datetime: "2022.07 - 2022.08"
        },
    ]
    const journals: MemberArticleType[] = [
        
    ]
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="林幸慧"
            enName="LIN, Sing-Hui"
            avatar={logo}
            institutes={["國立臺北科技大學 資訊安全學位學程 碩二"]}
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
