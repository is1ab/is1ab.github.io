import { Sample } from "../Sample"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"
import Mercury from "../../assets/member/Mercury.jpg"

export const MercuryMemberPage = () => {
    const bio = (
        <>
          Hi, I'm Mercury.
          <br />
          叫我信誌就好
          <br />
          這是我的 blog: <a href="https://mercurynearthemoon.github.io/" target="_blank" rel="noopener noreferrer">https://mercurynearthemoon.github.io/</a>
        </>
      );

    const certificates: MemberCertificateType[] = []

    const raceExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "MyFirstCTF 2024",
            result: "24th / 101",
            datetime: "2024.05"
        },
        {
            title: "Patriot CTF 2024",
            result: "163rd / 1360",
            datetime: "2024.09"
        },
        {
            title: "Iron CTF 2024",
            result: "29th / 1033",
            datetime: "2024.10"
        },
        {
            title: "Hackers N' Hops 2024",
            result: "40th / 341",
            datetime: "2024.11"
        },
        {
            title: "1337up LIVE CTF 2024",
            result: "66th / 1061",
            datetime: "2024.11"
        },
        {
            title: "0xL4ugh CTF",
            result: "104th / 320",
            datetime: "2024.12"
        },
        {
            title: "irisCTF 2025",
            result: "242nd / 1553",
            datetime: "2025.01"
        },
        {
            title: "TSCCTF 2025",
            result: "33rd / 509",
            datetime: "2025.01"
        },
        {
            title: "Pearl CTF 2025",
            result: "44th / 1024",
            datetime: "2025.03"
        },
        {
            title: "PicoCTF 2025",
            result: "231st / 10460",
            datetime: "2025.03"
        },
        {
            title: "AIS3 Pre-Exam 2025",
            result: "142nd / 389",
            datetime: "2025.05"
        },
    ]

    const participates: MemberParticipateType[] = [
        {
            title: "臺北市立大學 請假系統後端開發 + 系統維護",
            datetime: "2023.07 - now"
        },
        {
            title: "HITCON 2023",
            datetime: "2023.08"
        },
        {
            title: "CyberSec 2024",
            datetime: "2024.04"
        },
        {
            title: "臺北市立大學 減碳系統開發後端開發 + 系統維護",
            datetime: "2024.07 - 2025.04"
        },
        {
            title: "AIS3 新型態資安暑期課程 - 跨域資訊安全組",
            datetime: "2024.07"
        },
        {
            title: "HITCON 2024",
            datetime: "2023.08"
        },
        {
            title: "第九屆 AIS3 好厲駭 高階學員培訓",
            datetime: "2024.09 - 2025.07"
        },
        {
            title: "SITCON 2026 學生計算機年會 製播組",
            datetime: "2025.09 - now"
        }
    ]

    const internExperiences: MemberInternType[] = [
        {
            company: "果核數位股份有限公司",
            info: "資安實習生。OWASP Top Ten 2023 web 漏洞研究",
            datetime: "2024.07 - 2024.08"

        },
        {
            company: "QNAP 威聯通股份有限公司",
            info: "資安實習生。Security Bug Bounty 審查、惡意程式逆向分析及資安事件應對",
            datetime: "2025.07 - now"

        }
    ]

    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="黃信誌"
            enName="Mercury Huang"
            avatar={Mercury}
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
