import { Sample } from "../Sample"
import PaulWang from "../../assets/member/PaulWang.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType, MemberPresentationType } from "../../type/MemberCertificateType"

export const PaulWangMemberPage = () => {
    // const bio = "<br>hello"
    const bio = <div className="d-flex flex-column gap-3">
                    <p>大家好，我是王立翔，在 IsLab 中參與模糊測試的學術論文研究、也研究逆向工程相關技術、CTF 題目等，歡迎有興趣可以找我討論！</p>
                    <p>不定期會將 Crackmes、CTF 比賽的結果寫成 Writeups</p>
                    
                    <p>- <a href="https://www.notion.so/Paul-s-CTF-writeups-1bb9074f33df80e78ba9ee4abfd64528" target="_blank" rel="noopener noreferrer">My General CTFs Writeups</a></p>
                    <p>- <a href="https://github.com/paulwang19/ctf-writeups" target="_blank" rel="noopener noreferrer">My Competition CTFs Writeups</a></p>
                    <p>- <a href="https://github.com/paulwang19/crackmes-writeups" target="_blank" rel="noopener noreferrer">My Crackmes Writeups</a></p>
                </div>
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2025.06.10"
        }
    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "TSCCTF 2025",
            result: "排名: 137/509",
            datetime: "2025/01/13-2025/01/16"
        },
        {
            title: "picoCTF 2025",
            result: "隊伍排名: 1287/10460 (隊伍: NTUT_Is1ab)",
            datetime: "2025/03/08-2025/03/18"
        },
        {
            title: "Cyber Apocalypse CTF 2025: Tales from Eldoria",
            result: "隊伍排名: 715/8130 (隊伍: NTUT_Is1ab)",
            datetime: "2025/03/21-2025/03/26"
        },
        {
            title: "SwampCTF 2025",
            result: "219/751 Team (隊伍: NTUT_Is1ab)",
            datetime: "2025/03/29-2025/03/31"
        },
        {
            title: "DawgCTF 2025",
            result: "223/760 Team (隊伍: NTUT_Is1ab)",
            datetime: "2025/04/18-2025/04/20"
        },
        {
            title: "BYUCTF 2025",
            result: "477/1074 Team (隊伍: NTUT_Is1ab)",
            datetime: "2025/05/17-2025/05/18"
        },
        {
            title: "AIS3 Pre-exam 2025",
            result: "36/344",
            datetime: "2025/05/24-2025/05/26"
        },
        {
            title: "AIS3 EOF CTF 2026 初賽",
            result: "24/72 Team (隊伍: Is直日)",
            datetime: "2025/12/20-2025/12/22"
        },
        {
            title: "AEGIS 2025 初賽",
            result: "7/40 Team(Name: 在小小的實驗室裡挖阿挖阿挖)",
            datetime: "2025/09/27"
        },
        {
            title: "FLARE-On 12",
            result: "558/4139",
            datetime: "2025/09/27-2025/10/25"
        },
        {
            title: "Crackmes.one RE CTF 2026",
            result: "6/12 challenges solved",
            datetime: "2026/02/15-2026/02/21"
        },
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "HITCON CTF x 菁英人才交流活動",
            datetime: "2024/11/09-2024/11/10"
        },
        {
            title: "SITCON 2025 學生計算機年會",
            datetime: "2025/03/08"
        },
        {
            title: " 奧義社群論壇 - CyCraft C++ 讀書會",
            datetime: "2025/03/22"
        },
        {
            title: "2025 AIS3 新型態資安暑期課程",
            datetime: "2025/07/28-2025/08/03"
        },
        {
            title: "ACM CCS 2025 - 工作人員",
            datetime: "2025/10/12-2025/10/17"
        },
        {
            title: "Bak3 C00kie 寒假特訓營 - 工作人員",
            datetime: "2026/01/27-2026/01/28"
        }
    ]
    const internExperiences: MemberInternType[] = []
    const journals: MemberArticleType[] = []
    const conferences: MemberArticleType[] = []
    const techConfs: MemberArticleType[] = []
    const presentations: MemberPresentationType[] = [
        {
            title: "Speculative Probing: Hacking Blind in the Spectre Era",
            authors: "Enes Göktas, Kaveh Razavi, Georgios Portokalidis, Herbert Bos, Cristiano Giuffrida",
            journal: "CCS 2020",
            datetime: "2024/11/14"
        },
        {
            title: "ProphetFuzz: Fully Automated Prediction and Fuzzing of High-Risk Option Combinations with Only Documentation via Large Language Model",
            authors: "Dawei Wang, Geng Zhou, Li Chen, Dan Li, Yukai Miao",
            journal: "CCS 2024",
            datetime: "2025/09/11"
        }
    ]
    return (
        <Sample
            zhName="王立翔"
            enName="Wang, Li-Siang"
            avatar={PaulWang}
            institutes={["國立臺北科技大學 資訊工程所 碩一"]}
            bio={bio}
            presentations={presentations}
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
