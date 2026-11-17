import { Sample } from "../Sample"
import JunAn from '../../assets/member/JunAn.jpg';
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType, MemberPresentationType } from "../../type/MemberCertificateType"

export const JunAnMemberPage = () => {
    const bio = "我是郭竣安，常用 ID 為 Jun-an。"
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2026.06.30"
        },
    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
			title: "HITCON CTF 2026",
			result: "隊名：HackerS1r1ab，排名: 12/1541",
			datetime: "2026.10.23 ~ 2026.10.25",
		},
        {
            title: "AEGIS 2026 (神盾盃初賽)",
			result: "隊名：oO卍乂 煞氣a Is1ab 乂卍Oo，排名: 27/56",
			datetime: "2026.09.17 ~ 2026.09.19",
        },
        {
            title: '2026 AIS3 新型態資安暑期課程 專題',
            result: '最佳專題獎',
            datetime: '2026.07',
        },
        {
			title: "AIS3 Pre-exam CTF 2026",
			result: "隊名：Jun-an，排名: 64/329",
			datetime: "2026.05.16 ~ 2026.05.18",
		},
        {
			title: "TexSAW CTF 2026",
			result: "隊名：NTUT_Is1ab，排名: 335/511",
			datetime: "2026.03.28 ~ 2026.03.30",
		},
        {
			title: "pico CTF 2026",
			result: "隊名：NTUT_Is1ab，排名: 261/8747",
			datetime: "2026.03.10 ~ 2026.03.20",
		},
        {
			title: "TSC CTF 2026",
			result: "隊名：Jun-an，排名: 98/115",
			datetime: "2026.02.27 ~ 2026.03.01",
		},
        {
            title: "AIS3 EOF 2025 (初賽)",
            result: "隊名：NTUT_ba1si，排名: 33/82",
            datetime: "2025.12.20 ~ 2025.12.22",
	    },
        {
			title: "SEKAI CTF 2025",
			result: "隊名：NTUT_Is1ab，排名: 199/1060",
			datetime: "2025.08.16 ~ 2025.08.18",
		},
		{
			title: "DownUnder CTF 2025",
			result: "隊名：NTUT_Is1ab，排名: 508/1667",
			datetime: "2025.07.18 ~ 2025.07.20"
		},
        {
            title: "AIS3 Pre-exam CTF 2024",
            result: "隊名：4153_nu11ptr，排名 : 60/493",
            datetime: "2024.05.25 ~ 2024.05.27"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "115 年度教育體系資安攻防演練 - 攻擊手",
            datetime: "2026.07.07 ~ 2026.09.17"
        },
        {
            title: "HITCON CMT 2026",
            datetime: "2026.08.21 ~ 2026.08.22"
        },
        {
            title: "2026 AIS3 新型態資安暑期課程",
            datetime: "2026.07.20 ~ 2026.07.26"
        },
        {
            title: "CYBERSEC 2026 臺灣資安大會",
            datetime: "2026.05.05 ~ 2026.05.07"
        },
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
    const presentations: MemberPresentationType[] = [
        {
            title: "Scaling Software Security Analysis to Satellites: Automated Fuzz Testing and Its Unique Challenges",
            authors: "Johannes Willbold, Moritz Schloegel, Florian Göhler, Tobias Scharnowski, Nils Bars, Simon Wörner, Nico Schiller, Thorsten Holz",
            journal: "2024 IEEE Aerospace Conference",
            datetime: "2026.09.04"
        },
        {
            title: "GDMA: Fully Automated DMA Rehosting via Iterative Type Overlays",
            authors: "Tobias Scharnowski, Simeon Hoffmann, Moritz Bley, Simon Wörner, Daniel Klischies, Felix Buchmann, Nils Ole Tippenhauer, Thorsten Holz, and Marius Muench",
            journal: "USENIX Security Symposium 2025",
            datetime: "2026.07.03"
        }
        {
            title: "A Case Study on Fuzzing Satellite Firmware",
            authors: "Tobias Scharnowski, Felix Buchmann, Simon Worner,and Thorsten Holz",
            journal: "Network and Distributed System Security Symposium (NDSS) 2023",
            datetime: "2026.01.15"
        }
    ]
    return (
        <Sample
            zhName="郭竣安"
            enName="Kuo, Chun-An"
            avatar={JunAn}
            institutes={["國立臺北科技大學 資訊安全碩士學位學程 碩二"]}
            bio={bio}
            experiences={competitionExperiences}
            certificates={certificates}
            participates={participates}
            intern={internExperiences}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
            presentations={presentations}
        ></Sample>
    )
}