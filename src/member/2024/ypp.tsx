import { Sample } from "../Sample"
import ypp from "../../assets/member/ybb.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType, MemberPresentationType } from "../../type/MemberCertificateType"

export const YPPMemberPage = () => {
    const bio = (
        <div className="d-flex flex-column gap-3">
            <span className="text-nowrap">
                You can contact me via <a href="mailto:ypp0x7@gmail.com">ypp0x7@gmail.com</a>
            </span>
        </div>
    );
    const certificates: MemberCertificateType[] = [
        {
            title: "Google Cybersecurity Certificate",
            datetime: "2025.06"
        },
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2025.05.17"
        },

    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
               
        {
            title: "Pascal 2026",
            result: "121/855 Team(Name: NTUT_Is1ab)",
            datetime: "2026.02.01 - 2026.02.03"
        },
        {
            title: "knightctf 2026",
            result: "426/890 Team(Name: NTUT_Is1ab)",
            datetime: "2026.01.20 - 2026.01.21"
        },
        
        {
            title: "AEGIS 2025 決賽",
            result: "10/10 Team(Name: 在小小的實驗室裡挖阿挖阿挖)",
            datetime: "2025/11/22 - 2025/11/23"
        },

        {
            title: "AEGIS 2025 初賽",
            result: "7/40 Team(Name: 在小小的實驗室裡挖阿挖阿挖)",
            datetime: "2025.09.27"
        },
        {
            title: "AIS3 Pre-exam 2025",
            result: "45/344 Team(Name: ypp)",
            datetime: "2025.05.24 - 2025.05.26"
        },
        {
            title: "WHYCTF 2025",
            result: "188/1806 Team(Name: NTUT_Is1ab)",
            datetime: "2025.08.09 - 2025.08.12"
        },
        {
            title: "DawgCTF 2025",
            result: "223/760 Team(Name: NTUT_Is1ab)",
            datetime: "2025.04.18 - 2025.04.20"
        },
        
        {
            title: "DEFCON CTF Qualifier 2025",
            result: "31/195 Team(Name: 星爆牛炒竹狐)",
            datetime: "2025.04.12 - 2025.04.14"
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
            result: "305/10460 Team(Name: NTUT_Is1ab)",
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
            result: "51/509",
            datetime: "2025.01.13 - 2025.01.16"
        },
        {
            title: "CGGC 2024",
            result: "19/64 Team(Name: CGGC一日遊)",
            datetime: "2024.11.02-2024.11.03"
        },
        {
            title: "AEGIS CTF 神盾盃預賽",
            result: "-",
            datetime: "2024.09.14"
        },
        {
            title: "idekCTF 2024",
            result: "263/1070Team(Name: NTUT_Is1ab)",
            datetime: "2024.08.19"
        }
    ]
    const participates: MemberParticipateType[] = [
                {
            title: "DEVCORE CONFERENCE 2026",
            datetime: "2026.03.14"
        }, 
               {
            title: "2025 HITCON CTF Ｘ 菁英人才交流活動",
            datetime: "2025.11.11"
        }, 
        {
            title: "SITCON 2025",
            datetime: "2025.03.08"
        },
        {
            title: "2024 HITCON CTF Ｘ 菁英人才交流活動",
            datetime: "2024.11.09"
        },     
        {
            title: "DEVCORE CONFERENCE 2025",
            datetime: "2025.03.15"
        },        
        {
            title: " 奧義社群論壇 - CyCraft C++ 讀書會",
            datetime: "2025.03.22"
        },
        {
            title: "Bak3 C00kie 寒假特訓營 - 助教",
            datetime: "2026.01.27 - 2026.01.28"
        },
        {
            title: "Google 資安人才培育計畫 - 學員",
            datetime: "2025.02.01 - 2025.06.30"
        },
        {
        title: "AIS3 CLUB 北區黑客松 2025 - 助教",
        datetime: "2025.05.03 - 2025.05.04"
        },
        {
        title: "11th AIS3 新型態資安實務暑期課程學員",
        datetime: "2025.07.28 - 2025.08.03"
        },
        {
            title: "HITCON 2025 活動組志工",
            datetime: "2025.08.15 - 2025.08.16"
        },
        {
        title: "10th AIS3 好厲駭（高階培訓 & 導師深度輔導）- 學員",
        datetime: "2025.08.22 - now"
        },

    ]
    const presentations: MemberPresentationType[] = [
            {
                title: "SymQEMU: Compilation-based symbolic execution for binaries",
                authors: "Sebastian Poeplau,Aurelien Francillon",
                journal: "Network and Distributed System Security (NDSS) Symposium,2021",
                datetime: "2025.02"
            },
            {
                title: "Predictive Context-sensitive Fuzzing",
                authors: "Pietro Borrello,Andrea Fioraldi,Daniele Cono D’Elia,Davide Balzarotti,Leonardo Querzoni,Cristiano Giuffrida",
                journal: "Network and Distributed System Security (NDSS) Symposium,2024",
                datetime: "2025.09"
            }
        ]
    const internExperiences: MemberInternType[] = [
        {
            company: "中國信託商業銀行",
            info: "軟體開發實習生",
            datetime: "2023.02 - 2023.06"
        }
    ]

    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="黃奕評"
            enName="Huang, Yi-Ping"
            avatar={ypp}
            institutes={["國立臺北科技大學 資訊安全碩士學位學程"]}
            bio={bio}
            experiences={competitionExperiences}
            participates={participates}
            intern={internExperiences}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
            certificates={certificates}
            presentations={presentations}

        ></Sample>
    )
}
