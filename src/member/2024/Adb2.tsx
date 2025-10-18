import { Sample } from "../Sample"
import Adb2 from "../../assets/member/Adb2.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType, MemberZeroDayType } from "../../type/MemberCertificateType"

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
        },
        {
            title: "iPAS 資訊安全工程師-中級能力鑑定",
            datetime: "2025.10.01"
        }
    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "picoMini by CMU-Africa",
            result: "96/2942 Team(Name: BongoCatCat)",
            datetime: "2025.10.01 - 2025.10.16"
        },
        {
            title: "AEGIS 2025 初賽",
            result: "7/40 Team(Name: 在小小的實驗室裡挖阿挖阿挖)",
            datetime: "2025.09.27"
        },
        {
            title: "WHYCTF 2025",
            result: "188/1806 Team(Name: NTUT_Is1ab)",
            datetime: "2025.08.09 - 2025.08.12"
        },
        {
            title: "AIS3 Pre-exam 2025",
            result: "14/344",
            datetime: "2025.05.24 - 2025.05.26"
        },
        {
            title: "BYUCTF 2025",
            result: "477/1074 Team(Name: NTUT_Is1ab)",
            datetime: "2025.05.17 - 2025.05.18"
        },
        {
            title: " DEF CON CTF Qualifier 2025",
            result: "31/195 Team(Name: 星爆牛炒竹狐)",
            datetime: "2025.04.12 - 2025.04.14"
        },
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
            result: "N/A",
            datetime: "2024.10.12"
        },
        {
            title: "AEGIS 2024 初賽",
            result: "N/A",
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
            title: "HITCON CTF 2025 決賽現場 - 竹狐(但我沒貢獻所以放這)",
            datetime: "2025.10.17 - 2025.10.18"
        },
        {
            title: "ACM CCS 2025 - 工作人員",
            datetime: "2025.10.12 - 2025.10.17"
        },
        {
            title: "HITCON AI Freetalk 2025 - 會眾",
            datetime: "2025.09.12"
        },
        {
            title: "第十屆臺灣好厲駭 ( 高階培訓 ) - 學員",
            datetime: "2025.08 - now"
        },
        { 
            title: "HITCON CMT 2025 - 會眾",
            datetime: "2025.08.15 - 2025.08.16"
        },
        {
            title: "11th AIS3 進階資安攻防競技 - 學員",
            datetime: "2025.07.28 - 2025.08.03"
        },
        {
            title: "114 年度教育體系資安攻防演練 - 攻擊手",
            datetime: "2025.07.01 - 2025.09.11"
        },
        {
            title: "AIS3 CLUB 北區黑客松 2025 - 助教",
            datetime: "2025.05.03 - 2025.05.04"
        },
        {
            title: "114 年度國家資通安全研究院攻防演練 - 攻擊手",
            datetime: "2025.04.21 - 2025.07.30"
        },
        {
            title: "SITCON 2025 - 會眾",
            datetime: "2025.03.08"
        },
        {
            title: "第九屆臺灣好厲駭 ( 高階培訓 ) - 學員",
            datetime: "2024.08 - 2025.08"
        },
        {
            title: "Google 資安人才培育計畫 - 學員",
            datetime: "2024.07.01 - 2024.12.31"
        },
        {
            title: "第三十四屆全國資訊安全會議 CISC 2024 - 工作人員",
            datetime: "2024.08.29 - 2024.08.30"
        },
        {
            title: "HITCON CMT 2024 - 會眾",
            datetime: "2024.08.23 - 2024.08.24"
        },
        {
            title: "資安科技沙龍 : 與 Google 資訊安全副總裁對談 - 會眾",
            datetime: "2024.08.22"
        },
        {
            title: "10th AIS3 進階資安攻防競技 - 學員",
            datetime: "2024.07.29 - 2024.08.04"
        },
        {
            title: "CYBERSEC 2024 臺灣資安大會 - 會眾",
            datetime: "2024.05.14"
        },
        {
            title: "SITCON 2024 - 會眾",
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
    const zeroday: MemberZeroDayType[] = [
                {
                    id: ( 
                        <div>
                            <a href="https://zeroday.hitcon.org/vulnerability/ZD-2025-00696">ZD-2025-00696</a> 
                        </div>
                    ),
                    title: "ITSA 程式自學平臺 RCE",
                    datetime: "2025.07.14"
                }
        ]

    return (
        <Sample
            zhName="陳彥宇"
            enName="Yan-Yu, Chen"
            avatar={Adb2}
            institutes={["國立臺北科技大學 資訊工程所 碩二"]}
            bio={bio}
            experiences={competitionExperiences}
            certificates={certificates}
            participates={participates}
            intern={internExperiences}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
            zeroday={zeroday}
        ></Sample>
    )
}
