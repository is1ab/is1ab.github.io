export function Publication(){
    const SCI = () => {
        return <span className="sci"> [SCI]</span>
    }
    const CoFirstAuther = () => {
        return <span className="co-first-auther"> [<sup>△</sup>Co-First Auther]</span>
    }
    const Author = (props: any) => {
        return <span>{props.children},&nbsp;</span>;
    }
    const Professor = (props: {
        coAuther?: boolean
        star?: boolean
    }) => {
        return (
            <span className="co-first-auther">Chin-Yu Sun
                {props.coAuther ? <sup>△</sup> : null}
                {props.star ? <sup>*</sup> : null}
            </span>
        )
    }
    const Title = (props: {
        title: string
    }) => {
        return (
            <span>"{props.title}",&nbsp;</span>
        )
    }
    const Journal = (props: {
        name: string
    }) => {
        return (
            <span><em>{props.name}</em></span>
        )
    }
    return (
        <div className="publication">
            <>
                <h4 className="text-center fw-bold">期刊論文 Journal Paper</h4>
                <ol>
                    <li>
                        <Author>
                            Kun-Ji Li, Sheng-Shan Chen, and <Professor coAuther/>
                        </Author>
                        <Title title="Analysis and Mitigation Strategies for Prompt Injection Attacks"/>
                        Accepted by <Journal name="Communications of the CCISA"/>, 30(3), pp. 1-19, September 2024.
                        
                    </li>
                    <li>
                        Shih-Jung Lin, <Professor coAuther/>, Dan-Ni Chen, Yi-No Kang, Nai Ming Lai, Kee-Hsin Chen, Chiehfeng Chen, 
                        <Title title="Perioperative Application of Chatbots: A Systematic Review and Meta-Analysis,"/>
                        Accepted by <Journal name="BMJ Health & Care Informatics"/>, April 2024. 
                        <SCI/> 
                        <CoFirstAuther/> 
                    </li>
                    <li>
                        <Author>
                            Yunjhen Su, <Professor coAuther/>, Wen-Kuan Chiu, Yi-No Kang, Chiehfeng Chen, 
                        </Author>
                        <Title title="Patient Decision Aids for Breast Cancer Reconstruction: A Systematic Review and Network Meta-Analysis of Randomized Controlled Trials,"/>
                        Accepted by <Journal name="Plastic and Reconstructive Surgery"/>, January 2024. 
                        <SCI/>
                        <CoFirstAuther/> 
                    </li>
                    <li>
                        <Author>
                            <Professor/>, Allen C.-H. Wu, and TingTing Hwang
                        </Author>
                        <Title title="A Novel Privacy-Preserving Deep Learning Scheme without a Cryptography Component,"/>
                        <Journal name="Computers & Electrical Engineering" />, Vol. 94, pp.1-15, September 2021. 
                        <SCI/>
                    </li>
                    <li>
                        <Author>
                            <Professor/>, Hsiao-Ling Wu, Hung-Min Sun, and TingTing Hwang
                        </Author>
                        <Title title="A New Attack to Self-Certified Digital Signature for E-commerce Applications,"/>
                        <Journal name="Journal of Information Science and Engineering" />, Vol. 37 No. 6, pp. 1449-1466, June 2021.
                        <SCI/>
                    </li>
                    <li>
                        <Author>
                            Chin-Chen Chang, Hsiao-Ling Wu, and <Professor/>
                        </Author>
                        <Title title="Notes on “Secure authentication scheme for IoT and cloud servers”"/>
                        <Journal name="Pervasive and Mobile Computing" />, Vol. 38, pp.275-278, July 2017.
                        <SCI/>
                    </li>
                    <li>
                        <Author>
                            Yanjun Liu, Chin-Chen Chang, and <Professor/>
                        </Author>
                        <Title title="Notes on “An Anonymous Multi-server Authenticated Key Agreement Scheme Based on Trust Computing Using Smart Card and Biometrics”"/>
                        <Journal name="International Journal of Network Security" />, Vol.18, No.5, September 2016, pp.997-1000.
                    </li>
                    <li>
                        <Author>
                            Hsiao-Ling Wu, Chin-Chen Chang, and <Professor/>
                        </Author>
                        <Title title="A secure authentication scheme with provable correctness for pay-TV systems"/>
                        <Journal name="Security and Communication Networks" />, Vol.9, No. 11, pp.1577-1588, February 2016.
                        <SCI/>
                    </li>
                    <li>
                        <Author>
                            <Professor/> and Ching-Chun Chang 
                        </Author>
                        <Title title="Cryptanalysis of a Secure and Efficient Authentication Scheme for Access Control in Mobile Pay-TV Systems"/>
                        <Journal name="International Journal of Network Security" />, Vol.18, No.3, pp.594-596, May 2016.
                    </li>
                    <li>
                        <Author>
                            Chin-Chen Chang, <Professor/>, and Shih-Chang Chang
                        </Author>
                        <Title title="A Strong RSA-based and Certificateless-based Signature Scheme"/>
                        <Journal name="International Journal of Network Security" />, Vol.18, No.2, pp.201-208, March 2016.
                    </li>
                    <li>
                        <Author>
                            Yanjun Liu, Chin-Chen Chang, and <Professor/>
                        </Author>
                        <Title title="A Novel Three-party Authenticated Key Exchange Protocol Based on Secret Sharing"/>
                        <Journal name="Journal of Information Hiding and Multimedia Signal Processing" />, Vol.7, No.4, pp.741-753, July 2016.
                    </li>
                    <li>
                        <Author>
                            Yanjun Liu, Chin-Chen Chang, and <Professor/>
                        </Author>
                        <Title title="A Secure and Efficient Scheme for Digital Gift Certificates"/>
                        <Journal name="Journal of Information Hiding and Multimedia Signal Processing" />, Vol.6, No.3, pp.416-429, May 2015.
                    </li>
                    <li>
                        <Author>
                            Chin-Chen Chang, <Professor/>, and Ting-Fang Cheng
                        </Author>
                        <Title title="A dependable storage service system in cloud environment"/>
                        <Journal name="Security and Communication Networks" />, Vol.8, No. 4, pp.574-588, March 2015.
                        <SCI/>
                    </li>
                    <li>
                        <Author>
                            Chin-Chen Chang, Yeh-Chieh Chou, and <Professor/>
                        </Author>
                        <Title title="Novel and practical scheme based on secret sharing for laptop data protection"/>
                        <Journal name="IET Information Security" />, Vol.9, No.2, pp.100-107, February 2015.
                        <SCI/>
                    </li>
                    <li>
                        <Author>
                            Chin-Chen Chang, <Professor/>, and Shih-Chang Chang
                        </Author>
                        <Title title="Practical secure and high efficient authentication scheme in global mobility networks"/>
                        <Journal name="Journal of Internet Technology" />, Vol.15, No.7, pp.1091-1100, December 2014.
                        <SCI/>
                    </li>
                    <li>
                        <Author>
                            Chin-Chen Chang and <Professor/>
                        </Author>
                        <Title title="A Secure and Efficient Authentication Scheme for E-coupon Systems"/>
                        <Journal name="Wireless Personal Communications" />, Vol.77, No.4, pp.2981-2996, August 2014.
                        <SCI/>
                    </li>
                    <li>
                        <Author>
                            Cheng Guo, Chin-Chen Chang, and <Professor/>
                        </Author>
                        <Title title="Chaotic Maps-Based Mutual Authentication and Key Agreement using Smart Cards for Wireless Communications"/>
                        <Journal name="Journal of Information Hiding and Multimedia Signal Processing" />, Vol.4, No.2, pp.99-109, April 2013.
                        <SCI/>
                    </li>
                </ol>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">會議論文 Journal Paper</h4>
                <ol>
                    <li>
                        <Author>
                            Sheng-Shan Chen, Yi-Xuan Wu, Ying-Xuan Ho, Pang-Po Cheng, and <Professor star/>
                        </Author>
                        <Title title="RANsomCheck: A CNN-Transformer Model for Malware Detection Based on API Call Sequences"/>
                        Accepted by <Journal name="38th International Conference on Industrial, Engineering & Other Applications of Applied Intelligent Systems (IEA/AIE 2025)"/>, pp. 116-127, Kitakyushu, Japan, July 1–4, 2025.
                    </li>
                    <li>
                        <Author>
                            Chia-Hsien Liao and <Professor star/>
                        </Author>
                        <Title title="Note on “Learning with error-based key agreement and authentication scheme for satellite communication"/>
                        In Proceedings of <Journal name="20th Taiwan Conference on Software Engineering (TCSE 2024)"/>, pp. 354-358, Taipei, Taiwan, July 2024.
                    </li>
                    <li>
                        <Author>
                            Sheng-Shan Chen, Ren-Hung Hwang*, <Professor star/>, Ying-Dar Lin, and Tun-Wen Pai
                        </Author>
                        <Title title="Enhancing Cyber Threat Intelligence with Named Entity Recognition using BERT-CRF,"/>
                        In Proceedings of <Journal name="IEEE Global Communication Conference"/>, Kuala Lunpur, Malaysia, December 2023.
                    </li>
                    <li>
                        <Author>
                            Yuan-Tai Lin, <Professor star/>, and TingTing Hwang
                        </Author>
                        <Title title="M-parties partitioning: A Secure Dynamic Cache Partitioning by More Than Two Parties,"/>
                        Accepted by <Journal name="IEEE 36th International System-on-Chip Conference (SOCC 2023) - Design for Secure and Reliable System"/>, June.
                    </li>
                    <li>
                        <Author>
                            Chun-Chieh Tsai, <Professor star/>
                        </Author>
                        <Title title="Note on “RAKS: robust authentication and key agreement scheme for satellite infrastructure"/>
                        Accepted by <Journal name="IEEE ICCE-TW 2023"/>, May.
                    </li>
                    <li>
                        <Author>
                            Sheng-Shan Chen, Tun-Wen Pai, and <Professor star/>
                        </Author>
                        <Title title="Applying the Diamond Model of Intrusion Analysis with Generative Pre-trained Transformer 3"/>
                        Accepted by <Journal name="IEEE ICCE-TW 2023"/>, May.
                    </li>
                    <li>
                        <Author>
                            Sheng-Shan Chen, <Professor/>, and Tun-Wen Pai*
                        </Author>
                        <Title title="Using Machine Learning for Efficient Smishing Detection"/>
                        Accepted by <Journal name="IEEE ICCE-TW 2023"/>, May.
                    </li>
                    <li>
                        <Author>
                            Chin-Chen Chang and <Professor/>
                        </Author>
                        <Title title="Polynomial-based secret sharing scheme based on the absolute moment block truncation coding technique"/>
                        <Journal name="2014 International Conference on Intelligent Information Hiding and Multimedia Signal Processing"/>, pp. 485-488, Kitakyushu, Japan. August 2014.
                    </li>
                </ol>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">Pending</h4>
                <ol>
                    <li>
                        <Author>
                            <Professor star/>, Sheng-Shan Chen, Ya-Han Ho
                        </Author>
                        <Title title="De-Identification of Open-Source Intelligence Using Finetuned LLaMA-3"/>
                        Submitted to <Journal name="High-Confidence Computing"/>, June 2025.                        
                    </li>
                    <li>
                        <Author>
                            Yi-Hsien Chen, Sheng-Shan Chen, Chun-Chia Huang, Sian-Yao Huang, <Professor/>, Hsu-Chun Hsiao, Chung-Kuan Chen, Cheng-Lin Yang, Chun-Ying Huang
                        </Author>
                        <Title title="BASGen: An Automated Breach and Attack Simulation Script Generator based on Cyber Threat Intelligence Reports"/>
                        Submitted to <Journal name="the 32nd ACM Conference on Computer and Communications Security (CCS 2025)"/>, April 2025.                        
                    </li>
                    <li>
                        <Author>
                            Sheng-Shan Chen, Tun-Wen Pai, and <Professor star/>
                        </Author>
                        <Title title="EnhanceCTI: An Enhanced Semantic Filtering and Feature Extraction Framework for Industry-Specific Cyber Threat Intelligence"/>
                        Submitted to <Journal name="Computers & Security"/>, April 2025.                        
                    </li>
                    <li>
                        <Author>
                            Sheng-Shan Chen, Yi-Hsien Chen, Tun-Wen Pai, Chung-Kuan Chen, Keisuke Furumoto, Takeshi Takahashi, and <Professor star/>
                        </Author>
                        <Title title="CTI-KG: A Structured Threat Information Expression-Based Knowledge Graph Construction for Cyber Threat Intelligence Analysts"/>
                        Submitted to <Journal name="Computers & Security"/>, April 2024.
                    </li>
                    <li>
                        <Author>
                            Han-Xuan Huang, Tzu-Yi Li, Sheng-Shan Chen, Kuang-Ming Chang, and <Professor star/>
                        </Author>
                        <Title title="Security Challenges in Online Judges: Understanding and Mitigating CCA Attacks"/>
                        prepared for submission to <Journal name="IEEE Transactions on Network and Service Management" />, 2023.
                    </li>
                </ol>
            </>
        </div>
    )
}
