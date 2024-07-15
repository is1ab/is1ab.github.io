import { Sample } from "../Sample"
import logo from "../../assets/member/Guan4Tou2.png"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const Guan4Tou2MemberPage = () => {
    const bio = "我超弱"
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2024.06.01"
        },
    ]
    const raceExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "Diver OSINT CTF",
            result: "200th",
            datetime: "2024.06.09"
        },
        {
            title: "離島盃資安競賽 大專/碩組",
            result: "4th",
            datetime: "2024.05.25"
        },
        {
            title: "資安大會 CyberRange",
            result: "15th",
            datetime: "2024.05.16"
        },
        {
            title: "picoCTF",
            result: "377th",
            datetime: "2024.03.12-2024.03.26"
        },
        {
            title: "KnightCTF",
            result: "158th",
            datetime: "2024.01.23"
        },
        {
            title: "TSCCTF",
            result: "50th",
            datetime: "2024.01.20"
        },
        {
            title: "AIS3 pre-exam",
            result: "",
            datetime: "2023"
        },
        {
            title: "AIS3 pre-exam",
            result: "",
            datetime: "2022"
        },
        {
            title: "TFCCTF",
            result: "",
            datetime: "2022.07.29 - 2022.07.31"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "錄取 2022 AIS3 新型態資安暑期課程",
            datetime: "2022.07.25 - 2022.07.31"
        },
        {
            title: "錄取 2023 AIS3  新型態資安暑期課程",
            datetime: "2023.07.24 - 2023.07.30"
        },
        {
            title: "HITCON HackDoor",
            datetime: "2019.08.17"
        },
        {
            title: "金融資安 Mentor 實務教學",
            datetime: "2023.8.24 - 2023.8.25"
        },
        {
            title: "雲嘉資安體驗營",
            datetime: "2022.03.26"
        },
        {
            title: "資訊安全暑訓營 MyFirstSecurity Summer Camp",
            datetime: "2019.07.16 - 2019.07.19"
        },
        {
            title: "TDOH Conf 駭客地下城 會眾",
            datetime: "2019.11.30"
        },
        {
            title: "TDOH Conf 駭客地下城 會眾",
            datetime: "2017.10.14"
        },
        {
            title: "CraftCon Taiwan 奧義AI 資安年會 會眾",
            datetime: "2024.07.12"
        },
        {
            title: "資安大會 CyberSec 會眾",
            datetime: "2024.04.15 - 2024.04.17"
        },
        {
            title: "DEVCORE CONFERENCE 2024 會眾",
            datetime: "2024.03.16"
        },
        {
            title: (
            <div>
                
                <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00018">ZD-2024-00018</a> 
                &nbsp;
                臺南市私立長榮高級中學資料庫注入漏洞
            </div>
            )
            ,
            datetime: "2024.04.18"
        }
    ]
    const internExperiences: MemberInternType[] = [
        {
            company: "保華資安股份有限公司",
            info: "資安實習生",
            datetime: "2024.06 - now"
        },
    ]
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []

    return (
        <Sample
            zhName="吳冠廷"
            enName="GUAN-TING WU"
            avatar={logo}
            institutes={["國立臺北科技大學 資訊工程所 資訊安全實驗室"]}
            bio={bio}
            experiences={raceExperiences}
            certificates={certificates}
            participates={participates}
            intern={internExperiences}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
        ></Sample>
    )
}