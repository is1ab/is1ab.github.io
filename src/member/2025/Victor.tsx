import { Sample } from "../Sample";
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType";

export const VictorMemberPage = () => {
    const bio = "我是Victor，目前參與sunbird計畫。";
    const certificates: MemberCertificateType[] = [];
    const raceExperiences: MemberCompetitionExperienceType[] = [];
    const participates: MemberParticipateType[] = [
        {
            title: "115 幹部研習營 - 築基",
            datetime: "2026.03.20 - 2026.03.22"
        }
    ];
    const internExperiences: MemberInternType[] = [];
    const journals: MemberArticleType[] = [];
    const conferences: MemberArticleType[] = [];
    const techConfs: MemberArticleType[] = [];
    const presentations: MemberPresentationType[] = [
        {
            title: "Nightshade: Prompt-Specific Poisoning Attacks on Text-to-Image Generative Models",
            authors: "Shawn Shan, Wenxin Ding, Josephine Passananti, Stanley Wu, Haitao Zheng, Ben Y. Zhao",
            journal: "IEEE Symposium on Security and Privacy (SP)",
            datetime: "2026.02.05"
        }
    ]

    return (
        <Sample
            zhName="楊育誠"
            enName="Victor"
            institutes={["國立臺北科技大學 資訊工程所 資訊安全實驗室"]}
            bio={bio}
            experiences={raceExperiences}
            certificates={certificates}
            participates={participates}
            intern={internExperiences}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
        />
    );
}
