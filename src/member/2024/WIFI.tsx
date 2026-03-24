import { Sample } from "../Sample"
import WIFI from "../../assets/member/WIFI.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType, MemberPresentationType } from "../../type/MemberCertificateType"
export const WIFIMemberPage = () => {
    const bio = "嗨伊，我是 WIFI。"
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2023/06/21"
        },
        {
            title: "iPAS 資訊安全工程師-中級能力鑑定",
            datetime: "2025/04/24"
        },
        {
            title: "Google Cybersecurity Certificate",
            datetime: "2025/06/21"
        }
    ]

    const competitionExperiences: MemberCompetitionExperienceType[] = [

        {
            title: "picoCTF 2024",
            result: "461/69574",
            datetime: "2024/03/13-2024/3/27"
        },
        {
            title: "GICS 尋找資安女捷思",
            result: "資安闖天關 佳作",
            datetime: "2024/04/27"
        },
        {
            title: "AIS3 Pre-exam CTF 2024",
            result: "61/493",
            datetime: "2024/05/25 - 2024/05/27"
        },
        {
            title: "AEGIS CTF 神盾盃預賽",
            result: "N/A",
            datetime: "2024/09/14"
        },
        {
            title: "成大資安社 2024 期初 CTF",
            result: "29/106",
            datetime: "2024/10/07 - 2024/10/12"
        },
        {
            title: "資安技能金盾獎競賽 2024 初賽",
            result: "N/A",
            datetime: "2024/10/12"
        },
        {
            title: "CGGC 2024",
            result: "13/64 Team(Name: NTUT_Computer Graphics Garbage Collection)",
            datetime: "2024/11/02 - 2024/11/03"
        },
        {
            title: "NHNC 2024",
            result: "All: 111/287, Student: 25/61",
            datetime: "2024/11/16 - 2024/11/17"
        },
        {
            title: "Platypwn 2024",
            result: "195/328 Team(Name: NTUT_Is1ab)",
            datetime: "2024/12/07 - 2024/12/08"
        },
        {
            title: "TSCCTF 2025",
            result: "65/509",
            datetime: "2025/01/13 - 2025/01/16"
        },
        {
            title: "Srdnlen CTF 2025",
            result: "117/848 Team(Name: NTUT_Is1ab)",
            datetime: "2025/01/19 - 2025/01/20"
        },
        {
            title: "TUCTF 2024",
            result: "153/485 Team(Name: NTUT_Is1ab)",
            datetime: "2025/01/25 - 2025/01/27"
        },
        {
            title: "picoCTF 2025",
            result: "305/10460 Team(Name: NTUT Is1ab)",
            datetime: "2025/03/08 - 2025/03/18"
        },
        {
            title: "Cyber Apocalypse CTF 2025: Tales from Eldoria",
            result: "715/8129 Team(Name: NTUT_Is1ab)",
            datetime: "2025/03/21 - 2025/03/26"
        },
        {
            title: "Dawg CTF 2025",
            result: "451/760 Team(Name: NTUT_Is1ab)",
            datetime: "2025/04/18 - 2025/04/20"
        },
        {
            title: "NHNC 2025",
            result: "53/473 Team(Name: _WIFI)",
            datetime: "2025/07/05 - 2025/07/07"
        },
        {
            title: "WHYCTF 2025",
            result: "188/1806 Team(Name: NTUT_Is1ab)",
            datetime: "2025/08/09 - 2025/08/12"
        },
        {
            title: " DEF CON CTF Qualifier 2025",
            result: "31/195 Team(Name: 星爆牛炒竹狐)",
            datetime: "2025/04/12 - 2025/04/14"
        },
        {
            title: "AEGIS 2025 初賽",
            result: "7/40 Team(Name: 在小小的實驗室裡挖阿挖阿挖)",
            datetime: "2025/09/27"
        },
        {
            title: "picoMini by CMU-Africa",
            result: "96/2942 Team(Name: BongoCatCat)",
            datetime: "2025/10/01 - 2025/10/16"
        },
        {
            title: "資安技能金盾獎競賽 2025 初賽",
            result: "入圍決賽 Team(Name: 帶一顆骰子來答題)",
            datetime: "2025/10/18"
        },
        {
            title: "AEGIS 2025 決賽",
            result: "10/10 Team(Name: 在小小的實驗室裡挖阿挖阿挖)",
            datetime: "2025/11/22 - 2025/11/23"
        },
        {
            title: "AIS3 EOF CTF 2026 初賽",
            result: "2/xx Team(Name: Islover)",
            datetime: "2025/12/20 - 2025/12/22"
        },
        {
            title: "資安技能金盾獎競賽 2025 決賽暨頒獎典禮",
            result: "嶄露頭角獎 Team(Name: 帶一顆骰子來答題)",
            datetime: "2026/01/09"
        },
        {
            title: "AIS3 EOF CTF 2026 決賽",
            result: "N/A Team(Name: Islover)",
            datetime: "2026/01/31 - 2026/02/01"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "9th AIS3 情資運用與惡意程式分析",
            datetime: "2023/07/24-2023/07/30"
        },
        {
            title: "SITCON 2024 學生計算機年會",
            datetime: "2024/03/09"
        },
        {
            title: "CYBERSEC 2024 臺灣資安大會",
            datetime: "2024/05/14-2024/05/16"
        },
        {
            title: "CraftCon Taiwan 奧義 AI 資安年會",
            datetime: "2024/07/12"
        },
        {
            title: "10th AIS3 進階資安攻防競技",
            datetime: "2024/07/29 - 2024/08/04"
        },
        {
            title: "HITCON CMT 2024 - 會眾",
            datetime: "2024/08/23 - 2024/08/24"
        },
        {
            title: "第九屆臺灣好厲駭 (高階培訓)",
            datetime: "2024/08 - 2025/08"
        },
        {
            title: "CYBERDAY 2024 資安產業日 (大專校院資安社團互動體驗區展攤)",
            datetime: "2024/11/22"
        },
        {
            title: "vLAB ICT 社群 2025 藍隊線上活動",
            datetime: "2025/01/12 - 2025/01/18"
        },
        {
            title: "SITCON 2025",
            datetime: "2025/03/08"
        },
        {
            title: "DEVCORE CONFERENCE 2025",
            datetime: "2025/03/15"
        },
        {
            title: "CYBERSEC 2025 臺灣資安大會",
            datetime: "2025/04/15 - 2024/04/17"
        },
        {
            title: "2025 AIS3 Club 北區高中職程式安全黑客松工作坊 - 助教",
            datetime: "2025/05/03 - 2025/05/04"
        },
        { 
            title: "HITCON CMT 2025 - 會眾",
            datetime: "2025/08/15 - 2025/08/16"
        },
        {
            title: "第十屆 AIS3 好厲駭 (高階培訓)",
            datetime: "2025/08 - now"
        },
        {
            title: "HITCON GIRLS 8th 讀書會",
            datetime: "2025/11 - now"
        },
        {
            title: "Bak3 C00kie 寒假特訓營 - 助教",
            datetime: "2026/01/27 - 2026/01/28"
        }
    ]
    const presentations: MemberPresentationType[] = [
        {
            title: "File Hijacking Vulnerability : The Elephant in the Room",
            authors: "Chendong Yu, Yang Xiao, Jie Lu, Yuekang Li, Yeting Li, Lian Li, Yifan Dong, Jian Wang, Jingyi Shi, Defang Bo and Wei Huo",
            journal: "Network and Distributed System Security (NDSS) Symposium 2024",
            datetime: "2025.05.08"
        }
    ]
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = [
        {
            authors: "Cheng-Ta Huang, Chia-Hsuan Lee, Hao-Yu Wang,Wei-Jen Wang,",
            title: "Integrated Network Intrusion Detection and Alarm System based on Convolutional Neural Networks and Feature Mechanisms",
            target: "Communications of the CCISA",
            details: "vol. 29, no. 3 , pp. 18-32, Aug. 2023",
            doi: ""
        }
    ]
    const conferences: MemberArticleType[] = [
        {
            authors: "曾冠智, 李佳軒, 翁浩宇, 黃正達",
            title: "視覺化暨告警入侵偵測系統",
            target: "2022年臺灣網際網路研討會TANET暨資訊工程學門、智慧計算學門成果發表會論文集",
            details: "ISBN／ISSN：9786269570553",
            doi: ""
        }
    ]
    const techConfs: MemberArticleType[] = []
    return (
        <Sample
            zhName="李佳軒"
            enName="Lee, Chia-Hsuan"
            avatar={WIFI}
            institutes={["國立臺北科技大學 資訊安全碩士學位學程 碩二"]}
            bio={bio}
            experiences={competitionExperiences}
            certificates={certificates}
            participates={participates}
            intern={internExperiences}
            presentations={presentations}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
        ></Sample>
    )
}
