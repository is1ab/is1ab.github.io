import React from "react";

type PublicationItemType = {
  authors: string[];
  highlightedAuthors?: string[];
  title: string;
  venue: string;
  details: string;
  tags?: string[];
};

type PublicationSectionType = {
  titleZh: string;
  titleEn: string;
  items: PublicationItemType[];
};

const journalPapers: PublicationItemType[] = [
  {
    authors: [
      "Shih-Jung Lin",
      "Chin-Yu Sun",
      "Dan-Ni Chen",
      "Yi-No Kang",
      "Khanh Dinh Hoang",
      "Kee-Hsin Chen",
      "Chiehfeng Chen",
    ],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "Chatbots for breast cancer education: a systematic review and meta-analysis",
    venue: "Supportive Care in Cancer",
    details: "vol. 33, no. 55, December 2025.",
    tags: [
      "SCI",
      "2024 JCR IF 3.0 · Health Care Sciences & Services · Q2",
      "2024 SJR 1.109 · Oncology · Q1",
      "Co-first author",
    ],
  },
  {
    authors: [
      "Sheng-Shan Chen",
      "Kai-Siang Cao",
      "Chung-Kuan Chen",
      "Chin-Yu Sun",
    ],
    highlightedAuthors: ["Chin-Yu Sun"],
    title: "Retrieval-Augmented Generation for Identifying ATT&CK Technique",
    venue: "Communications of the CCISA",
    details: "Accepted by vol. 31, no. 3, pp. 20-39, August 2025.",
    tags: ["Corresponding author"],
  },
  {
    authors: ["Chin-Yu Sun", "Sheng-Shan Chen", "Ya-Han Ho"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "De-Identification of Open-Source Intelligence using Finetuned LLaMA-3",
    venue: "High-Confidence Computing",
    details: "Accepted by September 2025.",
    tags: [
      "SCI",
      "2024 JCR IF 3.0 · Computer Science, Information Systems · Q2",
      "2024 SJR 0.894 · Computer Networks and Communications · Q1",
      "Corresponding author",
    ],
  },
  {
    authors: ["Sheng-Shan Chen", "Tun-Wen Pai", "Chin-Yu Sun"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "EnhanceCTI: An Enhanced Semantic Filtering and Feature Extraction Framework for Industry-Specific Cyber Threat Intelligence",
    venue: "Computers & Security",
    details: "Accepted by August 2025.",
    tags: [
      "SCI",
      "2024 JCR IF 5.4 · Computer Science, Information Systems · Q1",
      "2024 SJR 1.445 · Computer Science · Q1",
      "Corresponding author",
    ],
  },
  {
    authors: ["Kun-Ji Li", "Sheng-Shan Chen", "Chin-Yu Sun"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title: "Analysis and Mitigation Strategies for Prompt Injection Attacks",
    venue: "Communications of the CCISA",
    details: "vol. 30, no. 3, pp. 1-19, September 2024.",
    tags: ["Corresponding author"],
  },
  {
    authors: [
      "Shih-Jung Lin",
      "Chin-Yu Sun",
      "Dan-Ni Chen",
      "Yi-No Kang",
      "Nai Ming Lai",
      "Kee-Hsin Chen",
      "Chiehfeng Chen",
    ],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "Perioperative Application of Chatbots: A Systematic Review and Meta-Analysis",
    venue: "BMJ Health & Care Informatics",
    details: "vol. 30, no. 1, e100985, July 2024.",
    tags: [
      "SCI",
      "2024 JCR IF 4.4 · Health Care Sciences & Services · Q1",
      "2024 SJR 1.263 · Computer Science Applications · Q1",
      "Co-first author",
    ],
  },
  {
    authors: [
      "Yunjhen Su",
      "Chin-Yu Sun",
      "Wen-Kuan Chiu",
      "Yi-No Kang",
      "Chiehfeng Chen",
    ],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "Patient Decision Aids for Breast Cancer Reconstruction: A Systematic Review and Network Meta-Analysis of Randomized Controlled Trials",
    venue: "Plastic and Reconstructive Surgery",
    details: "vol. 154, no. 5, pp. 929-940, January 2024.",
    tags: [
      "SCI",
      "2024 JCR IF 3.4 · Surgery · Q1",
      "2024 SJR 1.222 · Surgery · Q1",
      "Co-first author",
    ],
  },
  {
    authors: ["Chin-Yu Sun", "Allen C.-H. Wu", "TingTing Hwang"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "A Novel Privacy-Preserving Deep Learning Scheme without a Cryptography Component",
    venue: "Computers & Electrical Engineering",
    details: "vol. 94, pp. 1-15, September 2021.",
    tags: ["SCI"],
  },
  {
    authors: ["Chin-Yu Sun", "Hsiao-Ling Wu", "Hung-Min Sun", "TingTing Hwang"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "A New Attack to Self-Certified Digital Signature for E-commerce Applications",
    venue: "Journal of Information Science and Engineering",
    details: "vol. 37, no. 6, pp. 1449-1466, June 2021.",
    tags: ["SCI"],
  },
  {
    authors: ["Chin-Chen Chang", "Hsiao-Ling Wu", "Chin-Yu Sun"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title: 'Notes on "Secure authentication scheme for IoT and cloud servers"',
    venue: "Pervasive and Mobile Computing",
    details: "vol. 38, pp. 275-278, July 2017.",
    tags: ["SCI"],
  },
  {
    authors: ["Yanjun Liu", "Chin-Chen Chang", "Chin-Yu Sun"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      'Notes on "An Anonymous Multi-server Authenticated Key Agreement Scheme Based on Trust Computing Using Smart Card and Biometrics"',
    venue: "International Journal of Network Security",
    details: "vol. 18, no. 5, pp. 997-1000, September 2016.",
    tags: [],
  },
  {
    authors: ["Hsiao-Ling Wu", "Chin-Chen Chang", "Chin-Yu Sun"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "A secure authentication scheme with provable correctness for pay-TV systems",
    venue: "Security and Communication Networks",
    details: "vol. 9, no. 11, pp. 1577-1588, February 2016.",
    tags: ["SCI"],
  },
  {
    authors: ["Chin-Yu Sun", "Ching-Chun Chang"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "Cryptanalysis of a Secure and Efficient Authentication Scheme for Access Control in Mobile Pay-TV Systems",
    venue: "International Journal of Network Security",
    details: "vol. 18, no. 3, pp. 594-596, May 2016.",
    tags: [],
  },
  {
    authors: ["Chin-Chen Chang", "Chin-Yu Sun", "Shih-Chang Chang"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title: "A Strong RSA-based and Certificateless-based Signature Scheme",
    venue: "International Journal of Network Security",
    details: "vol. 18, no. 2, pp. 201-208, March 2016.",
    tags: [],
  },
  {
    authors: ["Yanjun Liu", "Chin-Chen Chang", "Chin-Yu Sun"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title: "A Novel Three-party Authenticated Key Exchange Protocol Based on Secret Sharing",
    venue: "Journal of Information Hiding and Multimedia Signal Processing",
    details: "vol. 7, no. 4, pp. 741-753, July 2016.",
    tags: [],
  },
  {
    authors: ["Yanjun Liu", "Chin-Chen Chang", "Chin-Yu Sun"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title: "A Secure and Efficient Scheme for Digital Gift Certificates",
    venue: "Journal of Information Hiding and Multimedia Signal Processing",
    details: "vol. 6, no. 3, pp. 416-429, May 2015.",
    tags: [],
  },
  {
    authors: ["Chin-Chen Chang", "Chin-Yu Sun", "Ting-Fang Cheng"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title: "A dependable storage service system in cloud environment",
    venue: "Security and Communication Networks",
    details: "vol. 8, no. 4, pp. 574-588, March 2015.",
    tags: ["SCI"],
  },
  {
    authors: ["Chin-Chen Chang", "Yeh-Chieh Chou", "Chin-Yu Sun"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title: "Novel and practical scheme based on secret sharing for laptop data protection",
    venue: "IET Information Security",
    details: "vol. 9, no. 2, pp. 100-107, February 2015.",
    tags: ["SCI"],
  },
  {
    authors: ["Chin-Chen Chang", "Chin-Yu Sun", "Shih-Chang Chang"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title: "Practical secure and high efficient authentication scheme in global mobility networks",
    venue: "Journal of Internet Technology",
    details: "vol. 15, no. 7, pp. 1091-1100, December 2014.",
    tags: ["SCI"],
  },
  {
    authors: ["Chin-Chen Chang", "Chin-Yu Sun"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title: "A Secure and Efficient Authentication Scheme for E-coupon Systems",
    venue: "Wireless Personal Communications",
    details: "vol. 77, no. 4, pp. 2981-2996, August 2014.",
    tags: ["SCI"],
  },
  {
    authors: ["Cheng Guo", "Chin-Chen Chang", "Chin-Yu Sun"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title: "Chaotic Maps-Based Mutual Authentication and Key Agreement using Smart Cards for Wireless Communications",
    venue: "Journal of Information Hiding and Multimedia Signal Processing",
    details: "vol. 4, no. 2, pp. 99-109, April 2013.",
    tags: ["SCI"],
  },
];

const conferencePapers: PublicationItemType[] = [
  {
    authors: [
      "Yi-Hsiang Chen",
      "Feng-Rui Liao",
      "Jun-Cheng Zhang",
      "Zheng-Hao Huang",
      "Chin-Yu Sun",
    ],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "Enhancing Small Language Models in Agentic Pipelines with Prompt Engineering and Fine-Tuning",
    venue: "Taiwan Academic Network Conference (TANET 2025)",
    details: "Accepted by September 2025.",
    tags: ["Corresponding author"],
  },
  {
    authors: [
      "Sheng-Shan Chen",
      "Yi-Xuan Wu",
      "Ying-Xuan Ho",
      "Pang-Po Cheng",
      "Chin-Yu Sun",
    ],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "RANsomCheck: A CNN-Transformer Model for Malware Detection Based on API Call Sequences",
    venue:
      "38th International Conference on Industrial, Engineering & Other Applications of Applied Intelligent Systems (IEA/AIE 2025)",
    details: "pp. 116-127, Kitakyushu, Japan, July 1–4, 2025.",
    tags: ["Corresponding author"],
  },
  {
    authors: ["Chia-Hsien Liao", "Chin-Yu Sun"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      'Note on "Learning with error-based key agreement and authentication scheme for satellite communication"',
    venue: "20th Taiwan Conference on Software Engineering (TCSE 2024)",
    details: "In Proceedings of pp. 354-358, Taipei, Taiwan, July 2024.",
    tags: ["Corresponding author"],
  },
  {
    authors: [
      "Sheng-Shan Chen",
      "Ren-Hung Hwang",
      "Chin-Yu Sun",
      "Ying-Dar Lin",
      "Tun-Wen Pai",
    ],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "Enhancing Cyber Threat Intelligence with Named Entity Recognition using BERT-CRF",
    venue: "IEEE Global Communication Conference",
    details: "Kuala Lumpur, Malaysia, December 2023.",
    tags: ["Corresponding author"],
  },
  {
    authors: ["Yuan-Tai Lin", "Chin-Yu Sun", "TingTing Hwang"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "M-parties partitioning: A Secure Dynamic Cache Partitioning by More Than Two Parties",
    venue:
      "IEEE 36th International System-on-Chip Conference (SOCC 2023) - Design for Secure and Reliable System",
    details: "Accepted by June 2023.",
    tags: ["Corresponding author"],
  },
  {
    authors: ["Chun-Chieh Tsai", "Chin-Yu Sun", "Shih-Hsuan Yang"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      'Note on "RAKS: robust authentication and key agreement scheme for satellite infrastructure"',
    venue: "IEEE ICCE-TW 2023",
    details: "Accepted by May 2023.",
    tags: ["Corresponding author"],
  },
  {
    authors: ["Sheng-Shan Chen", "Tun-Wen Pai", "Chin-Yu Sun"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "Applying the Diamond Model of Intrusion Analysis with Generative Pre-trained Transformer 3",
    venue: "IEEE ICCE-TW 2023",
    details: "Accepted by May 2023.",
    tags: ["Corresponding author"],
  },
  {
    authors: ["Sheng-Shan Chen", "Chin-Yu Sun", "Tun-Wen Pai"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title: "Using Machine Learning for Efficient Smishing Detection",
    venue: "IEEE ICCE-TW 2023",
    details: "Accepted by May 2023.",
    tags: [],
  },
  {
    authors: ["Chin-Chen Chang", "Chin-Yu Sun"],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "Polynomial-based secret sharing scheme based on the absolute moment block truncation coding technique",
    venue:
      "2014 International Conference on Intelligent Information Hiding and Multimedia Signal Processing",
    details: "pp. 485-488, Kitakyushu, Japan, August 2014.",
    tags: [],
  },
];

const pendingPapers: PublicationItemType[] = [
  {
    authors: [
      "Sheng-Shan Chen",
      "Ren-Hung Hwang",
      "Ying-Dar Lin",
      "Tun-Wen Pai",
      "Chin-Yu Sun",
    ],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "Extracting Attack Pattern from WAF Logs and CTIs Using Contrastive Semantic Learning",
    venue: "IEEE Transactions on Network and Service Management",
    details: "Submitted in January 2026.",
    tags: ["Submitted"],
  },
  {
    authors: [
      "Sheng-Shan Chen",
      "Yi-Sheng Hsu",
      "Chung-Kuan Chen",
      "Tien-Chih Lin",
      "Chin-Yu Sun",
    ],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "Enhancing Static Vulnerability Alert Validation using Large Language Models",
    venue: "The Journal of Systems & Software",
    details: "Submitted in November 2025.",
    tags: ["Submitted"],
  },
  {
    authors: [
      "Sheng-Shan Chen",
      "Po-Yao Yen",
      "Yu-Nung Cheng",
      "Chin-Yu Sun",
    ],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "Applying Machine Learning for EDoS Attack Detection and Cost Analysis in Cloud Microservices",
    venue: "Digital Threats: Research and Practice",
    details: "Submitted in September 2025.",
    tags: ["Submitted"],
  },
  {
    authors: [
      "Yi-Hsien Chen",
      "Sheng-Shan Chen",
      "Chun-Chia Huang",
      "Sian-Yao Huang",
      "Chin-Yu Sun",
      "Hsu-Chun Hsiao",
      "Chung-Kuan Chen",
      "Cheng-Lin Yang",
      "Chun-Ying Huang",
    ],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "BASGen: An Automated Breach and Attack Simulation Script Generator based on Cyber Threat Intelligence Reports",
    venue:
      "The 32nd ACM Conference on Computer and Communications Security (CCS 2025)",
    details: "Submitted in April 2025.",
    tags: ["Submitted"],
  },
  {
    authors: [
      "Sheng-Shan Chen",
      "Yi-Hsien Chen",
      "Tun-Wen Pai",
      "Chung-Kuan Chen",
      "Keisuke Furumoto",
      "Takeshi Takahashi",
      "Chin-Yu Sun",
    ],
    highlightedAuthors: ["Chin-Yu Sun"],
    title:
      "CTI-KG: A Structured Threat Information Expression-Based Knowledge Graph Construction for Cyber Threat Intelligence Analysts",
    venue: "Computers & Security",
    details: "Submitted in April 2024.",
    tags: ["Submitted"],
  },
];

const sections: PublicationSectionType[] = [
  { titleZh: "期刊論文", titleEn: "Journal Paper", items: journalPapers },
  { titleZh: "會議論文", titleEn: "Conference Paper", items: conferencePapers },
  { titleZh: "投稿中", titleEn: "Under Review", items: pendingPapers },
];

function renderAuthors(
  authors: string[],
  highlightedAuthors: string[] = []
): React.ReactNode {
  return authors.map((author, index) => {
    const isHighlighted = highlightedAuthors.includes(author);
    const isLast = index === authors.length - 1;

    return (
      <React.Fragment key={`${author}-${index}`}>
        <span className={isHighlighted ? "highlight-author" : ""}>
          {author}
        </span>
        {!isLast ? ", " : ""}
      </React.Fragment>
    );
  });
}

function getTagClassName(tag: string) {
  const lower = tag.toLowerCase();

  if (lower.includes("sci")) return "tag tag-sci";
  if (lower.includes("co-first")) return "tag tag-cofirst";
  if (lower.includes("corresponding")) return "tag tag-corresponding";
  if (lower.includes("submitted")) return "tag tag-submitted";

  return "tag";
}

function PublicationItem({ item }: { item: PublicationItemType }) {
  return (
    <li className="pub-item">
      <div className="pub-title">“{item.title}”</div>

      <div className="pub-authors">
        {renderAuthors(item.authors, item.highlightedAuthors)}
      </div>

      <div className="pub-meta">
        <em>{item.venue}</em>, {item.details}
      </div>

      {item.tags && item.tags.length > 0 && (
        <div className="pub-tags">
          {item.tags.map((tag) => (
            <span key={tag} className={getTagClassName(tag)}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </li>
  );
}

export function Publication() {
  return (
    <div className="publication">
      {sections.map((section, index) => (
        <section className="publication-section" key={section.titleEn}>
          <h4 className="publication-heading">
            {section.titleZh} <span>{section.titleEn}</span>
          </h4>

          <ol className="publication-list">
            {section.items.map((item, itemIndex) => (
              <PublicationItem
                key={`${section.titleEn}-${itemIndex}-${item.title}`}
                item={item}
              />
            ))}
          </ol>

          {index !== sections.length - 1 && <hr className="publication-divider" />}
        </section>
      ))}
    </div>
  );
}
