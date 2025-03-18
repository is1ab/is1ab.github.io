import { Sample } from "../Sample"
import Young from "../../assets/logo.png"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const YoungMemberPage = () => {
    const bio = "HI~ 我是李宇揚，可以叫我Young，資安小白努力探索學習中，還請大家多多指教!"
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2024.06.21"
        }
    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
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
            institutes={["國立臺北科技大學 資訊安全碩士學位學程 碩一"]}
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

