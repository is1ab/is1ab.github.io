import { Sample } from "../Sample"
import Adb2 from "../../assets/member/Adb2.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const Adb2MemberPage = () => {
    const bio = "SGVsbG8sIEknbSBBZGIyLg=="
    const certificates: MemberCertificateType[] = [
        {
            title: "Google Cybersecurity Certificate",
            datetime: "2024.12.31"
        },
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2024.12.04"
        }
    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "squ1rrel CTF 2025",
            result: "227/611 Team(Name: NTUT_Is1ab)",
            datetime: "2025.04.05 - 2025.04.07"
        },
        {
            title: "SwampCTF 2025",
            result: "219/751 Team(Name: NTUT_Is1ab)",
            datetime: "2025.03.29 - 2025.03.31"
        },
        {
            title: "Cyber Apocalypse CTF 2025: Tales from Eldoria",
            result: "715/8129 Team(Name: NTUT_Is1ab)",
            datetime: "2025.03.21 - 2025.03.26"
        },
        {
            title: "picoCTF 2025",
            result: "305/10460 Team(Name: NTUT Is1ab)",
            datetime: "2025.03.08 - 2025.03.18"
        },
        {
            title: "PwnMe CTF Quals 2025",
            result: "349/955 Team(Name: NTUT_Is1ab)",
            datetime: "2025.03.01 - 2025.03.03"
        },
        {
            title: "TUCTF 2024",
            result: "153/485 Team(Name: NTUT_Is1ab)",
            datetime: "2025.01.25 - 2025.01.27"
        },
        {
            title: "x3CTF 2025 (feat. mvm)",
            result: "320/528 Team(Name: NTUT_Is1ab)",
            datetime: "2025.01.25 - 2025.01.27"
        },
        {
            title: "Srdnlen CTF 2025",
            result: "117/848 Team(Name: NTUT_Is1ab)",
            datetime: "2025.01.19 - 2025.01.20"
        },
        {
            title: "TSCCTF 2025",
            result: "88/509",
            datetime: "2025.01.13 - 2025.01.16"
        },
        {
            title: "Platypwn 2024",
            result: "195/328 Team(Name: NTUT_Is1ab)",
            datetime: "2024.12.07 - 2024.12.08"
        },
        {
            title: "NHNC 2024",
            result: "All: 22/287, Student: 6/61",
            datetime: "2024.11.16 - 2024.11.17"
        },
        {
            title: "CGGC 2024",
            result: "13/64 Team(Name: NTUT_Computer Graphics Garbage Collection)",
            datetime: "2024.11.02 - 2024.11.03"
        },
        {
            title: "資安技能金盾獎競賽 2024 初賽",
            result: "NA",
            datetime: "2024.10.12"
        },
        {
            title: "AEGIS CTF 神盾盃預賽",
            result: "NA",
            datetime: "2024.09.14"
        },
        {
            title: "AIS3 Pre-exam 2024",
            result: "79/493",
            datetime: "2024.05.25 - 2024.05.27"
        },
        {
            title: "picoCTF 2024",
            result: "377/6957 Team(Name: PaLuPaLu)",
            datetime: "2024.03.13 - 2024.03.27"
        },
        {
            title: "TSCCTF 2024",
            result: "31/165",
            datetime: "2024.01.19 - 2024.01.22"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "SITCON 2025",
            datetime: "2025.03.08"
        },
        {
            title: "第九屆臺灣好厲駭 ( 高階培訓 )",
            datetime: "2024.08 - now"
        },
        {
            title: "Google 資安人才培育計畫",
            datetime: "2024.07.01 - 2024.12.31"
        },
        {
            title: "第三十四屆全國資訊安全會議 CISC 2024 工作人員",
            datetime: "2024.08.29 - 2024.08.30"
        },
        {
            title: "HITCON CMT 2024",
            datetime: "2024.08.23 - 2024.08.24"
        },
        {
            title: "資安科技沙龍 : 與 Google 資訊安全副總裁對談",
            datetime: "2024.08.22"
        },
        {
            title: "10th AIS3 進階資安攻防競技",
            datetime: "2024.07.29 - 2024.08.04"
        },
        {
            title: "CYBERSEC 2024 臺灣資安大會",
            datetime: "2024.05.14"
        },
        {
            title: "SITCON 2024",
            datetime: "2024.03.09"
        }
    ]
    const internExperiences: MemberInternType[] = [{
        company: "HourLoop 飛輪電商有限公司",
        info: "負責維護系統前後端，新增使用者需求功能。",
        datetime: "2024.02.19-2024.06.30"
    }]
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="陳彥宇"
            enName="Yan-Yu, Chen"
            avatar={Adb2}
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
