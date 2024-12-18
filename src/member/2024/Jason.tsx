import { Sample } from "../Sample"
import Jason from "../../assets/member/Jason.jpeg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const JasonMemberPage = () => {
    const bio =
    <div className="d-flex flex-column gap-3">
        <p>Hi, I’m Jason, a cybersecurity artist with a flair for full-stack web development. I don’t just write code—I craft secure, innovative masterpieces that blend creativity and technical brilliance. Whether I’m tackling complex security challenges or designing seamless user experiences, I bring an artist’s touch to every line of code and every layer of defense.</p>
        <p>Github：<a href="https://github.com/han20011222" target="_blank">github.com/Jason</a></p>
    </div>
    const certificates: MemberCertificateType[] = [

    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
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
            title: "NTUT_is1ab 聖誕禮物交換大會",
            datetime: "2024.12.32"
        },
        {
            title: "CTF 種子培訓工作坊 - 臺北場",
            datetime: "2024.11.23"
        },
        {
            title: "HITCON CTF Ｘ 菁英人才交流活動",
            datetime: "2024.11.09"
        },
        {
            title: "CYBERSEC 2024",
            datetime: "2024.05.14"
        },
        {
            title: "SITCON 2024",
            datetime: "2024.03.09"
        }

    ]
    const internExperiences: MemberInternType[] = [
        {
            company: "國立臺北科技大學 推廣教育中心",
            info: "設備網路維護，Python助教",
            datetime: "2020.08-now"
        },
        {
            company: "康和綜合證券股份有限公司",
            info: "Full Stack Engineer Intern",
            datetime: "2024.02.19-2024.08.31"
        }
    ]
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="黃廷翰"
            enName="Huang, Ting-Han"
            avatar={Jason}
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

