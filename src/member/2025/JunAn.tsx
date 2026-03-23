import { Sample } from "../Sample"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"

export const JunAnMemberPage = () => {
    const bio = "我是郭竣安。"
    const certificates: MemberCertificateType[] = []
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
			title: "pico CTF 2026",
			result: "隊名: NTUT_Is1ab，排名: 261/8747",
			datetime: "2026/03/10 ~ 2026/03/20",
		},
        {
			title: "TSC CTF 2026",
			result: "隊名: Jun-an，排名: 98/115",
			datetime: "2026/02/27 ~ 2026/03/01",
		},
        {
            title: "AIS3 EOF 2025 (初賽)",
            result: "隊名：NTUT_ba1si，排名: 33/82",
            datetime: "2025/12/20 ~ 2025/12/22",
	    },
        {
			title: "SEKAI CTF 2025",
			result: "隊名：NTUT_Is1ab，排名: 199/1060",
			datetime: "2025/08/16 ~ 2025/08/18",
		},
		{
			title: "DownUnder CTF 2025",
			result: "隊名：NTUT_Is1ab，排名: 508/1667",
			datetime: "2025/07/18 ~ 2025/07/20"
		},
        {
            title: "AIS3 Pre-exam CTF 2024",
            result: "隊名：4153_nu11ptr，排名 : 60/493",
            datetime: "2024.05.25 ~ 2024.05.27"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "HITCON CMT 2025",
            datetime: "2025.08.15 ~ 2025.08.16"
        },
        {
            title: "DEVCORE CONFERENCE 2025",
            datetime: "2025.03.15"
        },
        {
            title: "第九屆臺灣好厲駭 高階學員培訓",
            datetime: "2024.09 ~ 2025.08"
        },
        {
            title: "HITCON CMT 2024",
            datetime: "2024.08.23 ~ 2024.08.24"
        },
        {
            title: "2024 AIS3 新型態資安暑期課程",
            datetime: "2024.07.29 ~ 2024.08.04"
        },
        {
            title: "CYBERSEC 2024 臺灣資安大會",
            datetime: "2024.05.14 ~ 2024.05.16"
        },
        {
            title: "DEVCORE CONFERENCE 2024",
            datetime: "2024.03.16"
        },
        {
            title: "HITCOM CMT 2023",
            datetime: "2023.08.18 ~ 2023.08.19"
        }
    ]
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="郭竣安"
            enName="Kuo, Chun-An"
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