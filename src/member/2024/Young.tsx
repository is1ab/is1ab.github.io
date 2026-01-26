import { Sample } from "../Sample"
import Young from "../../assets/logo.png"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const YoungMemberPage = () => {
    const bio = "HI~ 我是李宇揚，可以叫我Young_Lee，資安小白努力探索學習中，還請大家多多指教!"
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2024.06.21"
        },
        {
            title: "Google Cybersecurity Certificate",
            datetime: "2025.06.26"
        },
        {
            title: "iPAS 資訊安全工程師-中級能力鑑定",
            datetime: "2025.10.01"
        },
    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "神盾杯初賽 Aegis 2025",
            result: "7th Team(Name: 在小小的實驗室裡挖阿挖阿挖)",
            datetime: "2025.09.27"
        },
        {
            title: "WHYCTF 2025",
            result: "188/1806 Team(Name: NTUT_Is1ab)",
            datetime: "2025.08.09 - 2025.08.12"
        },
        {
            title: "AIS3 Pre-exam 2025",
            result: "44/344 Team(Name: Young_Lee)",
            datetime: "2025.05.24 - 2025.05.26"
        },
        {
            title: "MyFirst CTF 2025",
            result: "4/80 Team 銀獎(Name: Young_Lee)",
            datetime: "2025.05.24"
        },
        {
            title: "Dawg CTF 2025",
            result: "223/760 Team(Name: NTUT_Is1ab)",
            datetime: "2025.04.18 - 2025.04.20"
        },
        {
            title: "DEF CON CTF Qualifier 2025",
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
            title: "PwnMe CTF Quals 2025",
            result: "349/955 Team(Name: NTUT_Is1ab)",
            datetime: "2025.02.28-2025.03.02"
        },
        {
            title: "TUCTF 2024",
            result: "153/485 Team(Name: NTUT_Is1ab)",
            datetime: "2025.01.24-2025.01.26"
        },
        {
            title: "x3CTF 2025 (feat. mvm)",
            result: "320/527 Team(Name: NTUT_Is1ab)",
            datetime: "2025.01.24-2025.01.26"
        },
        {
            title: "Srdnlen CTF 2025",
            result: "117/847 Team(Name: NTUT_Is1ab)",
            datetime: "2025.01.18-2025.01.19"
        },
        {
            title: "TSCCTF 2025",
            result: "37th Name: Young_Lee",
            datetime: "2025.01.13-2025.01.16"
        },
        {
            title: "Platypwn 2024",
            result: "195/328 Team(Name: NTUT_Is1ab)",
            datetime: "2024.12.07-2024.12.08"
        },
        {
            title: "CTF 種子培訓工作坊",
            result: "金獎",
            datetime: "2024.11.23"
        },
        {
            title: "N1CTF 2024",
            result: "199/260",
            datetime: "2024/11/09"
        },
        {
            title: "CGGC 2024",
            result: "19/64 Team(Name: CGGC一日遊)",
            datetime: "2024.11.02-2024.11.03"
        },
        {
            title: "2024 AEGIS 神盾盃",
            result: "N/A",
            datetime: "2024.09"
        },
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "HITCON AI Freetalk 2025",
            datetime: "2025.09.12"
        },
        {
            title: "HITCON 2025",
            datetime: "2025.08.15 - 2025.08.16"
        },
        {
            title: "CraftCon Taiwan 2025",
            datetime: "2025.07.04"
        },
        {
            title: "114 年度教育體系資安攻防演練 - 攻擊手",
            datetime: "2025.07.01 - 2025.09.11"
        },
        {
            title: "2025 AIS3 Club 北區高中職程式安全黑客松工作坊 - 助教",
            datetime: "2025.05.03 - 2025.05.04"
        },
        {
            title: "CyCraft C++ 讀書會 2025",
            datetime: "2025.03.22"
        },
        {
            title: "DEVCORE CONFERENCE 2025",
            datetime: "2025.03.15"
        },
        {
            title: "SITCON 2025",
            datetime: "2025.03.08"
        },
        {
            title: "HITCON Carnival 2023",
            datetime: "2023.11.14 - 2023.11.15"
        },

    ]
    const internExperiences: MemberInternType[] = [
        {
            company: "凌群電腦股份有限公司",
            info: "弱點掃描、惡意攻擊流量模擬",
            datetime: "2023.08 - 2024.06"
        }
    ]
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="李宇揚"
            enName="Li, Yu-Yang"
            avatar={Young}
            institutes={["國立臺北科技大學 資訊安全碩士學位學程 碩二"]}
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

