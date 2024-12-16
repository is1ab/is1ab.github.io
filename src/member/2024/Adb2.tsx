import { Sample } from "../Sample"
import Adb2 from "../../assets/member/Adb2.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const Adb2MemberPage = () => {
    const bio = "SGVsbG8sIEknbSBBZGIyLg=="
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2024.12.04"
        }
    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "Platypwn 2024",
            result: "195/328 Team(Name: NTUT_Is1ab)",
            datetime: "2024.12.07-2024.12.08"
        },
        {
            title: "NHNC 2024",
            result: "All: 22/287, Student: 6/61",
            datetime: "2024.11.16-2024.11.17"
        },
        {
            title: "CGGC 2024",
            result: "13/64 Team(Name: NTUT_Computer Graphics Garbage Collection)",
            datetime: "2024.11.02-2024.11.03"
        },
        {
            title: "AIS3 Pre-exam 2024",
            result: "79/493",
            datetime: "2024.05.25-2024.05.27"
        },
        {
            title: "picoCTF 2024",
            result: "377/6957 Team(Name: PaLuPaLu)",
            datetime: "2024.03.13-2024.03.27"
        },
        {
            title: "TSCCTF 2024",
            result: "31/165",
            datetime: "2024.01.19-2024.01.22"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "Google 資安人才培育計畫",
            datetime: "2024.07.01-2024.12.31"
        },
        {
            title: "HITCON CMT 2024",
            datetime: "2024.08.23-2024.08.24"
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
