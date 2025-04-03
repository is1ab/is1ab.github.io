import { Sample } from "../Sample"
import ypp from "../../assets/member/ybb.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const YPPMemberPage = () => {
    const bio = <div className="d-flex flex-column gap-3">
        <p>大學讀 EE，不會 Fourier ; 碩士唸資安，密碼都用 123 </p>
        <p>如果蒐集 flag 的叫 CTFer，那喜歡蒐集 ちいかわ 的是叫 CYSun, Professor 嗎</p>
    </div>
    const certificates: MemberCertificateType[] = [

    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "	SwampCTF 2025",
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
            title: "SITCON 2025",
            datetime: "2025.03.08"
        },
        {
            title: "HITCON CTF Ｘ 菁英人才交流活動",
            datetime: "2024.11.09"
        },
        {
            title: " 2022 AIS3 新型態資安暑期課程",
            datetime: "2022.07.25 - 2022.07.31"
        },        
        {
            title: "DEVCORE CONFERENCE 2025",
            datetime: "2025.03.15"
        },        
        {
            title: " 奧義社群論壇 - CyCraft C++ 讀書會",
            datetime: "2025.03.22"
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
            certificates={certificates}
            participates={participates}
            intern={internExperiences}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
        ></Sample>
    )
}
