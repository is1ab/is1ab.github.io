import { Sample } from "../Sample"
import Y from "../../assets/member/Y.png"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const YMemberPage = () => {
    const bio = <div className="d-flex flex-column gap-3">
        <p>你們好，我是顏柏耀，可以叫我「Y」 </p>
        <p>很高興認識你，請多多指教 </p>
    </div>
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2023.12.04"
        }
    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "AIS3 Pre-exam 2024",
            result: "隊名 : Y ; 排名 : 64/493",
            datetime: "2024.05.25 - 2024.05.27"
        },
        {
            title: "My First CTF 2024",
            result: "隊名: Y",
            datetime: "2024.05.25"
        },
        {
            title: "picoCTF 2024",
            result: "Team : ISLAB#NTUT ; Rank : 461/69574",
            datetime: "2024.03.13 - 2024.03.27"
        },
        {
            title: "TSCCTF 2024",
            result: "",
            datetime: "2024.01.19 - 2024.01.22"
        },
        {
            title: "AIS3 EOF CTF 2024",
            result: "",
            datetime: "2024.01.05 - 2024.01.07"
        },
        {
            title: "CGGC 2023",
            result: "",
            datetime: "2023.12.01 - 2023.12.02"
        },
        {
            title: "T貓盃 2023",
            result: "Rank : 佳作",
            datetime: "2023.11.10 - 2023.11.13"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "擔任 第三十四屆全國資訊安全會議 CISC 2024 工作人員",
            datetime: "2024.08.29 - 2024.08.30"
        },
        {
            title: "參與 HITCOM CMT 2024",
            datetime: "2024.08.23 - 2024.08.24"
        },
        {
            title: "錄取 2024 AIS3 新型態資安暑期課程",
            datetime: "2024.07.29 - 2024.08.04"
        },
        {
            title: "參與 2024 CraftCon Taiwan 奧義 AI 資安年會",
            datetime: "2024.07.12"
        },
        {
            title: "參與 資安大會 CyberSec 2024",
            datetime: "2024.05.14 - 2024.05.16"
        },
        {
            title: "DEVCORE CONFERENCE 2024",
            datetime: "2024.03.16"
        },
        {
            title: "參與 HITCON Carnival 2023",
            datetime: "2023.11.14"
        },
        {
            title: "參與 2023 神盾盃資安論壇",
            datetime: "2023.11.02"
        }
    ]
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="顏柏耀"
            enName="Po-Yao Yen"
            avatar={Y}
            institutes={["國立臺北科技大學 資訊安全碩士學位學程 碩二","is1ab 第二期研究生"]}
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