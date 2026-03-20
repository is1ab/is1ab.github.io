import { Sample } from "../Sample";
import Uriah from "../../assets/member/robertliao.jpg";
import {
    MemberArticleType,
    MemberCertificateType,
    MemberInternType,
    MemberParticipateType,
    MemberCompetitionExperienceType,
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
