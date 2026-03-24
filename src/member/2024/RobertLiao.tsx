import { Sample } from "../Sample";
import Uriah from "../../assets/member/robertliao.jpg";
import {
    MemberArticleType,
    MemberCertificateType,
    MemberInternType,
    MemberParticipateType,
    MemberCompetitionExperienceType,
    MemberPresentationType
} from "../../type/MemberCertificateType";

export const RobertLiaoMemberPage = () => {
    const bio = "哈囉，我是哲霈。";
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2025.10.04"
        },
        {
            title: "PMP 專案管理師",
            datetime: "2025.10.15"
        }
    ];
    const raceExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "金盾獎 2025 決賽",
            result: "嶄露頭角獎 Team(Name: 帶一顆骰子來答題)",
            datetime: "2026/01/09"
        },               
        {
            title: "金盾獎 2025 初賽",
            result: "入圍決賽 Team(Name: 帶一顆骰子來答題)",
            datetime: "2025/10/18"
        },
        {
            title: "AEGIS 2025 初賽",
            result: "7/40 Team(Name: 在小小的實驗室裡挖阿挖阿挖)",
            datetime: "2025.09.27"
        },
        {
            title: "AIS3 Pre-exam 2025",
            result: "114/344",
            datetime: "2025.05.24 - 2025.05.26"
        },
        {
            title: "AIS3 EOF CTF 2026 初賽",
            result: "24/72 Team(Name: Is直日)",
            datetime: "2025/12/20 - 2025/12/22"
        },
        {
            title: "Google CTF 2025",
            result: "N/A",
            datetime: "2025.06.28 - 2025.06.30"
        },
        {
            title: "Crypto CTF 2025",
            result: "N/A",
            datetime: "2025.06.14 - 2025.06.15"
        },
        {
            title: "picoCTF 2025",
            result: "1287/10460 (隊伍: NTUT_Is1ab)",
            datetime: "2025.03.08 - 2025.03.18"
        },
    ];
    const participates: MemberParticipateType[] = [
        

    
        {
            title: "AIS3 CLUB 北區黑客松 2025 - 助教",
            datetime: "2025.05.03 - 2025.05.04"
        },
        {
            title: "11th AIS3 新型態資安實務暑期課程 - 學員",
            datetime: "2025.07.28 - 2025.08.03"
        },
        {
            title: "HITCON CMT 2025 - 學術攤位負責人",
            datetime: "2025.08.15 - 2025.08.16"
        },
        {
            title: "CYBERSEC 2025 臺灣資安大會 - 會眾",
            datetime: "2025.04.15 - 2025.04.17"
        },
        {
            title: "10th AIS3 好厲駭（高階培訓）- 學員",
            datetime: "2025.08.22 - now"
        },
        {
            title: "HITCON CTF Ｘ 菁英人才交流活動",
            datetime: "2025.10.17 - 2025.10.18"
        },
        {
            title: "北科程式設計社 Lightning Talk - 講者",
            datetime: "2025.11.25" 
        },
    ];
    const internExperiences: MemberInternType[] = [
        {
            company: "海韻智能股份有限公司",
            info: "工具開發、設備架設、韌體維護",
            datetime: "2022.03 - 2022.06",
        },
        {
            company: "艾里空股份有限公司",
            info: "需求彙整、規格撰寫、推動專案進度",
            datetime: "2026.02 - ",
        }
    ];
    const presentations: MemberPresentationType[] = [
        {
            title: "KeySpace: Public Key Infrastructure Considerations in Interplanetary Networks",
            authors: "Joshua Smailes, Filip Futera, Sebastian Köhler, Simon Birnbach, Martin Strohmeier, Ivan Martinovic",
            journal: "arXiv preprint (arXiv:2408.10963), 2024.",
            datetime: "2024.11.28"
        },
        {
            title: "High-Risk LEO Satellite Network Path Detection Based on Spatial and Temporal Delay Anomaly Analysis",
            authors: "Tianyu Zhang, Hewu Li, Jun Liu, Lu Lu, Qian Wu, Shaowen Zheng, Zeqi Lai, Yuanjie Li",
            journal: "China Communications, vol. 20, no. 7, pp. 57–71, July 2023.",
            datetime: "2025.5.15"
        },
        {
            title: "Application Scenarios of Confidential Computing in Satellite Internet",
            authors: "Jie Ren, Lin Lin, Miao Xue, Zelin Wang",
            journal: "In Proc. EAI SecureComm 2023, Springer LNICST, Hong Kong, October 2023.",
            datetime: "2025.10.9"
        }
    ];
    const journals: MemberArticleType[] = [];
    const conferences: MemberArticleType[] = [];
    const techConfs: MemberArticleType[] = [];
    return (
        <Sample
            zhName="廖哲霈"
            enName="Robert Liao"
            avatar={Uriah}
            institutes={["國立臺北科技大學 資訊工程所 資訊安全實驗室"]}
            bio={bio}
            presentations={presentations}
            experiences={raceExperiences}
            certificates={certificates}
            participates={participates}
            intern={internExperiences}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
        ></Sample>
    );
};
