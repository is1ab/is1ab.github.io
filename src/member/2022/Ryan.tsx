import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType } from "../../type/MemberCertificateType"
import { Sample } from "../Sample"

export const RyanMemberPage = () => {
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
            title: "第八屆臺灣好厲駭高階培訓-表現優異獎",
            datetime: "2024.09.01"
        },
        {
            title: "擔任 HITCON 2024 台灣駭客年會議程講者",
            datetime: "2024.08.23"
        },
        {
            title: "擔任 AIS3 2024 威脅運用與防禦組講師",
            datetime: "2024.08.24"
        },
        {
            title: "擔任第 54 屆全國技能競賽「網路安全」職類解說技術顧問",
            datetime: "2024.07.02"
        },
        {
            title: "參加 AWS - Machine Learning for Pipeline",
            datetime: "2024.06.27"
        },
        {
            title: "擔任第 53 屆全國技能競賽暨國手選拔賽青年組「網路安全」職類解說技術顧問",
            datetime: "2024.06.17"
        },
        {
            title: "參加 AWS - Architecting on AWS",
            datetime: "2024.03.12"
        },
        {
            title: "參與資安院「建構威脅情資知識圖及攻擊事件自動化辨識技術」產學案",
            datetime: "2023.10.18"
        },
        {
            title: "榮獲 DEVCORE 戴夫寇爾 獎學金資格",
            datetime: "2024.06.17"
        },
        {
            title: "第七屆臺灣好厲駭高階培訓-表現優異獎",
            datetime: "2023.09.01"
        },
        {
            title: "擔任 HITCON CMT 2023 志工",
            datetime: "2023.08.18"
        },
        {
            title: "擔任 AIS3 2023 跨領域資安組助教",
            datetime: "2023.07.30"
        },
        {
            title: "參加 Trend Micro 2022 Experience Day",
            datetime: "2022.12.10"
        },
        {
            title: "第七屆臺灣好厲駭高階培訓",
            datetime: "2022.09.01"
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
            title: "參與 CCoE 資安卓越計畫-博碩論文定題 網路威脅情資組",
            datetime: "2022.08.01"
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
            title: "第六屆臺灣好厲駭高階培訓",
            datetime: "2021.09.01"
        },
    ]
    const internExperiences: MemberInternType[] = [
        {
            company: "奧義智慧科技股份有限公司",
            info: "應用人工智慧於網路威脅情資分析",
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
            authors: "Sheng-Shan Chen, Ren-Hung Hwang*, Asad Ali, Ying-Dar Lin, Yu-Chih Wei, Tun-Wen Pai*",
            title: "Improving quality of indicators of compromise using STIX graphs",
            target: "Computers & Security",
            details: "2024, 103972, ISSN 0167-4048",
            doi: "https://doi.org/10.1016/j.cose.2024.103972"
        }
    ]
    const conferences: MemberArticleType[] = [
        {
            authors: "Sheng-Shan Chen, Ren-Hung Hwang, Chin-Yu Sun, Ying-Dar Lin, Tun-Wen Pai*",
            title: "Enhancing Cyber Threat Intelligence with Named Entity Recognition Using BERT-CRF,",
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
            title: "Intelligent Medical Interactive Educational System for Cardiovascular Disease.",
            target: "Advances and Trends in Artificial Intelligence. Theory and Practices in Artificial Intelligence: 35th International Conference on Industrial, Engineering and Other Applications of Applied Intelligent Systems, IEA/AIE 2022",
            details: "Kitakyushu, Japan, July 19–22, 2022, Proceedings. Springer-Verlag, Berlin, Heidelberg, 101–111"
        }
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
            institutes={["國立臺北科技大學 資訊工程所"]}
            bio={"Sheng-Shan Chen is a Ph.D. student in Computer Science and Information Engineering at the National Taipei University of Technology (NTUT) and a cybersecurity researcher at Cycraft (the unique company selected by Gartner as a representation AI security company in Asia-pacific area). His research primarily focuses on applying machine learning techniques to analyze cyber threat intelligence (CTI). He is currently involved in an academic research project under Taiwan National Institute of Cyber Security (NICS), focusing on using a Large Language Model (LLM) to analyze CTI. He has published several notable publications and conferences, including the Computers & Security Journal, IEEE Global Communications Conference (GLOBECOM), International Conference on Medical and Health Informatics (ICMHI), International Conference on Industrial, Engineering & Other Applications of Applied Intelligent Systems (IEA/AIE), and the Hacks In Taiwan Conference (HITCON). He has earned the second place from the 50th National Skills Competition in the Cybersecurity category in Taiwan (2020). Besides, he has coached junior students to obtain the third rank in the 52nd competition event (2022) and served as one of the Technical Consultant Members for the 53rd and 54th competitions (2023/2024). Sheng-Shan was awarded the TaiwanHolyHigh Performance Excellence Award (2022/2023). He received the Best Project Award at AIS3 (2021/2022), served as a teaching assistant (2023/2024), and was a lecturer for threat intelligence and security awareness (2024). He also shares knowledge on https://sectools.tw."}
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
