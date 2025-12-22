import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"
import { Sample } from "../Sample"
import Uriah from "../../assets/member/Sean.png"

export const RyanMemberPage = () => {

    const bio = (
        <div className="d-flex flex-column gap-3">
            <p>陳勝舢現為國立臺北科技大學資訊工程系博士候選人，並擔任奧義智慧科技 (CyCraft) 的實習資安研究員。他的研究專注於深度學習、網路安全、威脅情資分析及醫療資訊等。他曾參與多項大型專案，包括與國家資通安全研究院(NICS)、日本情報通信研究院(NICT)、國家衛生研究院(NHRI)及多家大型醫院的合作，並協助指導超過十五位碩士生投入研究。教學經歷包括教育部 AIS3 情資與分析講師、師大資工碩士班高等資安攻防課程講師及三重商工資料處理科培訓講師。</p>
            <p>更多資訊（著作、專案）請參閱：<a href="https://sectools.tw/about/sean">SecTools.tw</a></p>
            <p><a href="https://sectools.tw" target="_blank"><img src="https://img.shields.io/badge/Visit-SecTools.tw-blue" alt="Visit SecTools.tw" /></a></p>
        </div>
      );
      

    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2022.01.20"
        },
        {
            title: "EC-Council CEH",
            datetime: "2021.11.19"
        },
        {
            title: "Network Security Packet Analysis Class C",
            datetime: "2021.10.30"
        },
        {
            title: "Microsoft - Introduction to Programming using Python",
            datetime: "2019.05.29"
        },
        {
            title: "Microsoft - Security Fundamentals",
            datetime: "2019.05.01"
        },
        {
            title: "Microsoft - Networking Fundamentals.pdf",
            datetime: "2018.05.09"
        },
        {
            title: "Microsoft - Software Development Fundamentals.pdf",
            datetime: "2018.05.09"
        },
        {
            title: "Cisco Network Associate Routing and Switching",
            datetime: "2016.07.27"
        }
    ]
    const competitionExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "AIS3 新型態資安暑期課程",
            result: "最佳專題",
            datetime: "2022.07.31"
        },
        {
            title: "2022 T 貓盃全國資安基礎實務能力競賽大專組",
            result: "佳作",
            datetime: "2022.05.27"
        },
        {
            title: "AIS3 新型態資安暑期課程",
            result: "最佳專題",
            datetime: "2021.08.21"
        },
        {
            title: "第五十屆全國技能競賽暨國手選拔網路安全職類",
            result: "銀牌",
            datetime: "2020.09.21"
        },
        {
            title: "第五十屆全國技能競賽南區分區賽網路安全職類",
            result: "佳作",
            datetime: "2020.04.25"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "擔任 AIS3 2025 典範轉移:AI時代的情資運用及防禦講師 (學生超過百人)",
            datetime: "2024.08.04"
        },
        {
            title: "榮獲第九屆臺灣好厲駭高階導師培訓-表現優異獎",
            datetime: "2025.07.19"
        },
        {
            title: "臺灣師範大學資工系碩士班「 113-1 高等資安攻防演練 」課程講師",
            datetime: "2024.11.22"
        },
        {
            title: "榮獲第八屆臺灣好厲駭高階導師培訓-表現優異獎",
            datetime: "2024.09.01"
        },
        {
            title: "擔任 HITCON 2024 台灣駭客年會議程講者",
            datetime: "2024.08.23"
        },
        {
            title: "擔任 AIS3 2024 威脅運用與防禦組講師 (學生超過百人)",
            datetime: "2024.08.24"
        },
        {
            title: "擔任第 54 屆全國技能競賽「網路安全」職類解說技術顧問",
            datetime: "2024.07.02"
        },
        {
            title: "擔任第 53 屆全國技能競賽暨國手選拔賽青年組「網路安全」職類解說技術顧問",
            datetime: "2024.06.17"
        },
        {
            title: "榮獲DEVCORE戴夫寇爾獎學金",
            datetime: "2024.06.17"
        },
        {
            title: "第七屆臺灣好厲駭高階培訓-表現優異獎",
            datetime: "2023.09.01"
        },
        {
            title: "擔任 AIS3 2023 跨領域資安組助教",
            datetime: "2023.07.30"
        },
        {
            title: (
                <div>
                    <p>擔任第52屆全國技能競賽指導老師</p>
                    <p>培訓選手榮獲青年組網路安全職類全國第三名</p>
                </div>
            ),
            datetime: "2022.08.07"
        },
        {
            title: "錄取 2021 AIS3 新型態資安暑期課程",
            datetime: "2022.08.01"
        },
        {
            title: "錄取 TeamT5 Security Camp 2023 資安培訓營",
            datetime: "2022.07.31"
        },
        {
            title: "錄取 2022 AIS3 新型態資安暑期課程",
            datetime: "2022.07.31"
        },
        {
            title: (
                <div>
                    <p>擔任第52屆全國技能競賽北區分區技能競賽指導老師</p>
                    <p>培訓選手榮獲青年組網路安全職類第三名</p>
                </div>
            ),
            datetime: "2022.04.23"
        },
        {
            title: "錄取第六屆臺灣好厲駭高階培訓",
            datetime: "2021.09.01"
        },
    ]
    const internExperiences: MemberInternType[] = [
        {
            company: "奧義智慧科技股份有限公司",
            info: "應用人工智慧技術於網路威脅情資分析",
            datetime: "2023.05 - now"
        },
        {
            company: "勤業眾信聯合會計師事務所",
            info: "網路威脅情資工具開發",
            datetime: "2022.02 - 2022.02"
        },
    ]
    const journals: MemberArticleType[] = [
        {
            authors: "Sheng-Shan Chen, Kai-Siang Cao, Chung-Kuan Chen, Chin-Yu Sun*",
            title: "Retrieval-Augmented Generation for Identifying ATT&CK Technique",
            target: "Communications of the CCISA",
            details: "vol. 31, no. 3 , pp. 20-39. https://cccisa.ccisa.org.tw/article/view/3210",
            doi: ""
        },
        {
            authors: "Chin-Yu Sun*, Sheng-Shan Chen, Ya-Han Ho",
            title: "De-Identification of Open-Source Intelligence Using Finetuned LLaMA-3",
            target: "High-Confidence Computing",
            details: "2025, 100357, ISSN 2667-2952",
            doi: "https://doi.org/10.1016/j.hcc.2025.100357"
        },
        {
            authors: "Sheng-Shan Chen, Tun-Wen Pai, Chin-Yu Sun*",
            title: "EnhanceCTI: Enhanced semantic filtering and feature extraction framework for industry-specific cyber threat intelligence",
            target: "Computers & Security",
            details: "2025, 104649, ISSN 0167-4048",
            doi: "https://doi.org/10.1016/j.cose.2025.104649"
        },
        {
            authors: "Nai-Hsuan Hwang, Sheng-Shan Chen, Tun-Wen Pai*, Mary Hsin-Ju Ko, Ya-Lan Yu, and Hui-Ju Chen*",
            title: "Automatic assessment of fine motor development in children through hand-drawn shape images",
            target: "Pediatrics & Neonatology",
            details: "2025, ISSN 1875-9572",
            doi: "https://doi.org/10.1016/j.pedneo.2025.04.001"
        },
        {
            authors: "Kunji Li, Sheng-Shan Chen, Chin-Yu Sun*",
            title: "Analysis and Mitigation Strategies for Prompt Injection Attacks",
            target: "Communications of the CCISA",
            details: "Vol. 30 No. 3 Aug. 2024. https://cccisa.ccisa.org.tw/article/view/3084",
            doi: ""
        },
        {
            authors: "Sheng-Shan Chen, Ren-Hung Hwang*, Asad Ali, Ying-Dar Lin, Yu-Chih Wei, Tun-Wen Pai*",
            title: "Improving quality of indicators of compromise using STIX graphs",
            target: "Computers & Security",
            details: "2024, 103972, ISSN 0167-4048",
            doi: "https://doi.org/10.1016/j.cose.2024.103972"
        }
    ]
    const conferences: MemberArticleType[] = [
        {
            authors: "Sheng-Shan Chen, Yi-Xuan Wu, Ying-Xuan Ho, Pang-Po Cheng, and Chin-Yu Sun*",
            title: "RANsomCheck: A CNN-Transformer Model for Malware Detection Based on API Call Sequences",
            target: "In International Conference on Industrial, Engineering and Other Applications of Applied Intelligent Systems. Singapore: Springer Nature Singapore",
            details: "Fukuoka, Japan, 2025, pp.116-127"
        },
        {
            authors: "Sheng-Shan Chen, Ren-Hung Hwang, Chin-Yu Sun, Ying-Dar Lin, Tun-Wen Pai*",
            title: "Enhancing Cyber Threat Intelligence with Named Entity Recognition Using BERT-CRF",
            target: "GLOBECOM 2023 - 2023 IEEE Global Communications Conference",
            details: "Kuala Lumpur, Malaysia, 2023, pp. 7532-7537"
        },
        {
            authors: "Sheng-Shan Chen, Chin-Yu Sun, and Tun-Wen Pai*",
            title: "Using Machine Learning for Efficient Smishing Detection.",
            target: "2023 International Conference on Consumer Electronics - Taiwan (ICCE-Taiwan)",
            details: "PingTung, Taiwan, 2023, pp. 207-208"
        },
        {
            authors: "Sheng-Shan Chen, Tun-Wen Pai, and Chin-Yu Sun*",
            title: "Applying the Diamond Model of Intrusion Analysis with Generative Pre-trained Transformer 3",
            target: "2023 International Conference on Consumer Electronics - Taiwan (ICCE-Taiwan)",
            details: "PingTung, Taiwan, 2023, pp. 289-290"
        },
        {
            authors: "Sheng-Shan Chen, Hou-Tsan Lee, Tun-Wen Pai*, Chao-Hung Wang",
            title: "Intelligent Medical Interactive Educational System for Cardiovascular Disease",
            target: "Advances and Trends in Artificial Intelligence. Theory and Practices in Artificial Intelligence: 35th International Conference on Industrial, Engineering and Other Applications of Applied Intelligent Systems, IEA/AIE 2022",
            details: "Kitakyushu, Japan, July 19–22, 2022, Proceedings. Springer-Verlag, Berlin, Heidelberg, 101–111"
        },
        {
            authors: "李宗儒, 張光文, 陳勝舢, 林偉川*",
            title: "應用多功能感測器於車內安全系統",
            target: "2020 Taiwan Academic Network Conference (TANET)",
            details: "Taipei, Taiwan, Oct 28-30, 2020."
        },
        {
            authors: "陳勝舢, 李後燦, 王兆弘, 白敦文*",
            title: "心血管疾病之智慧醫療教育互動系統",
            target: "2020 Taiwan Academic Network Conference (TANET)",
            details: "Taipei, Taiwan, Oct 28-30, 2020."
        },
        
    ]
    const techConfs: MemberArticleType[] = [
        {
            authors: "Sheng-Shan Chen*, Shing-Li Hung",
            title: "Using Language Models and Knowledge Graph Techniques to Construct High-Credibility Intelligence Chains: A Case Study on Analyzing Data Leakage Incidents",
            target: "Hack In Taiwan Conference (HITCON 2024)",
            details: "Taipei, Taiwan, Aug 23-24, 2024"
            
        },
        {
            authors: "Sheng-Shan Chen*, Shing-Li Hung",
            title: "Applying Retrieval-Augmented Generation Techniques in Cybersecurity Incident Investigation: A Case Study on Data Breach Incidents",
            target: "PyCon 2024",
            details: "Kaohsiung, Taiwan, Sep. 21-22, 2024"
        },
        {
            authors: "Sheng-Shan Chen*, Shing-Li Hung",
            title: "Elk on Sesame Street - Cybersecurity Analysis in Action with ELK and BERT",
            target: "Hack In Taiwan Conference (HITCON 2023)",
            details: "Taipei, Taiwan, Aug 18, 2023"
        }, 
        {
            authors: "Sheng-Shan Chen, Chin-Yu Sun, Hou-Tsan Lee, Yu-Chih Wei, Tun-Wen Pai*",
            title: "Using Cyber Threat Intelligence to Defend Healthcare Security Threats",
            target: "2023 7th International Conference on Medical and Health Informatics (ICMHI 2023)",
            details: "Kyoto, Japan. May 12-14, 2023"
        }, 
         {
            authors: "Sheng-Shan Chen, Yu-Chih Wei, Hou-Tsan Lee, Tun-Wen Pai*",
            title: "Attack Pattern Classification Of Medical Institution Based On Open Source Intelligence",
            target: "2022 5th International Conference on Healthcare Service Management (ICHSM 2022)",
            details: "Taipei, Taiwan, May 2022."
        }, 
    ]
    return (
        <Sample
            zhName="陳勝舢"
            enName="Sheng-Shan Chen"
            avatar={Uriah}
            institutes={["國立臺北科技大學 資訊工程系 博士候選人"]}
            bio={bio}
            experiences={competitionExperiences}
            certificates={certificates}
            participates={participates}
            intern={internExperiences}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
        />
    )
}
