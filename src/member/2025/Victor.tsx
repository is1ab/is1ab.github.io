import { Sample } from "../Sample";
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType";

export const VictorMemberPage = () => {
    const bio = "我是Victor，從零開始的資安新鮮人，邊學邊做，慢慢變強。";
    const certificates: MemberCertificateType[] = [];
    const raceExperiences: MemberCompetitionExperienceType[] = [];
    const participates: MemberParticipateType[] = [];
    const internExperiences: MemberInternType[] = [];
    const journals: MemberArticleType[] = [];
    const conferences: MemberArticleType[] = [];
    const techConfs: MemberArticleType[] = [];

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
