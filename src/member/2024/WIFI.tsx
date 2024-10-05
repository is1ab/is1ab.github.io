import { Sample } from "../Sample"
import WIFI from "../../assets/member/WIFI.jpg"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"
export const WIFIMemberPage = () => {
    const bio = "嗨伊，我是 WIFI。"
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2023/06/21"
        }
    ]
    const raceExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "第28屆 Innoserve 資訊應用服務創新競賽 ",
            result: "資安創新技術組 第二名",
            datetime: "2023/11/04"
        },
        {
            title: "picoCTF 2024",
            result: "排名: 461/69574",
            datetime: "2024/03/13-2024/3/27"
        },
        {
            title: "GICS 尋找資安女捷思",
            result: "資安闖天關 佳作",
            datetime: "2024/04/27"
        },
        {
            title: "AIS3 Pre-exam CTF 2024",
            result: "排名: 61/493",
            datetime: "2024/05/25-2024/05/27"
        },
        {
            title: "AEGIS CTF 神盾盃預賽",
            result: "",
            datetime: "2024/09/14"
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
            datetime: "2024/07/29-2024/08/04"
        },
        {
            title: "HITCON CMT 2024",
            datetime: "2024/08/23-2024/08/24"
        },
        {
            title: "第九屆臺灣好厲駭 ( 高階培訓 & 導師深度輔導 )",
            datetime: "2024.08 - now"
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
            institutes={["國立臺北科技大學 資訊安全碩士學位學程 碩一"]}
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
