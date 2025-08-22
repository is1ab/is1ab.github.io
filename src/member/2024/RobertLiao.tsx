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
    const certificates: MemberCertificateType[] = [];
    const raceExperiences: MemberCompetitionExperienceType[] = [];
    const participates: MemberParticipateType[] = [];
    const internExperiences: MemberInternType[] = [
        {
            company: "海韻智能股份有限公司",
            info: "工具開發、設備架設、韌體維護",
            datetime: "2022.03 - 2022.06",
        },
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
