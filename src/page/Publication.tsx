import React from "react";

type AuthorType = {
  name: string;
  highlight?: boolean;
  coFirst?: boolean;
  corresponding?: boolean;
};

type PublicationItemType = {
  authors: AuthorType[];
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
      { name: "Shih-Jung Lin" },
      { name: "Chin-Yu Sun", highlight: true, coFirst: true },
      { name: "Dan-Ni Chen" },
      { name: "Yi-No Kang" },
      { name: "Khanh Dinh Hoang" },
      { name: "Kee-Hsin Chen" },
      { name: "Chiehfeng Chen" },
    ],
    title:
      "Chatbots for breast cancer education: a systematic review and meta-analysis",
    venue: "Supportive Care in Cancer",
    details: "vol. 33, no. 55, December 2025.",
    tags: [
      "SCI",
      "2024 JCR IF 3.0 · Health Care Sciences & Services · Q2",
      "2024 SJR 1.109 · Oncology · Q1",
      "△ Co-first author",
    ],
  },
  {
    authors: [
      { name: "Sheng-Shan Chen" },
      { name: "Kai-Siang Cao" },
      { name: "Chung-Kuan Chen" },
      { name: "Chin-Yu Sun", highlight: true, corresponding: true },
    ],
    title: "Retrieval-Augmented Generation for Identifying ATT&CK Technique",
    venue: "Communications of the CCISA",
    details: "Accepted by vol. 31, no. 3, pp. 20-39, August 2025.",
    tags: ["＊ Corresponding author"],
  },
  {
    authors: [
      { name: "Chin-Yu Sun", highlight: true, corresponding: true },
      { name: "Sheng-Shan Chen" },
      { name: "Ya-Han Ho" },
    ],
    title:
      "De-Identification of Open-Source Intelligence using Finetuned LLaMA-3",
    venue: "High-Confidence Computing",
    details: "Accepted by September 2025.",
    tags: [
      "SCI",
      "2024 JCR IF 3.0 · Computer Science, Information Systems · Q2",
      "2024 SJR 0.894 · Computer Networks and Communications · Q1",
      "＊ Corresponding author",
    ],
  },
  {
    authors: [
      { name: "Sheng-Shan Chen" },
      { name: "Tun-Wen Pai" },
      { name: "Chin-Yu Sun", highlight: true, corresponding: true },
    ],
    title:
      "EnhanceCTI: An Enhanced Semantic Filtering and Feature Extraction Framework for Industry-Specific Cyber Threat Intelligence",
    venue: "Computers & Security",
    details: "Accepted by August 2025.",
    tags: [
      "SCI",
      "2024 JCR IF 5.4 · Computer Science, Information Systems · Q1",
      "2024 SJR 1.445 · Computer Science · Q1",
      "＊ Corresponding author",
    ],
  },
  {
    authors: [
      { name: "Kun-Ji Li" },
      { name: "Sheng-Shan Chen" },
      { name: "Chin-Yu Sun", highlight: true, corresponding: true },
    ],
    title: "Analysis and Mitigation Strategies for Prompt Injection Attacks",
    venue: "Communications of the CCISA",
    details: "vol. 30, no. 3, pp. 1-19, September 2024.",
    tags: ["＊ Corresponding author"],
  },
  {
    authors: [
      { name: "Shih-Jung Lin" },
      { name: "Chin-Yu Sun", highlight: true, coFirst: true },
      { name: "Dan-Ni Chen" },
      { name: "Yi-No Kang" },
      { name: "Nai Ming Lai" },
      { name: "Kee-Hsin Chen" },
      { name: "Chiehfeng Chen" },
    ],
    title:
      "Perioperative Application of Chatbots: A Systematic Review and Meta-Analysis",
    venue: "BMJ Health & Care Informatics",
    details: "vol. 30, no. 1, e100985, July 2024.",
    tags: [
      "SCI",
      "2024 JCR IF 4.4 · Health Care Sciences & Services · Q1",
      "2024 SJR 1.263 · Computer Science Applications · Q1",
      "△ Co-first author",
    ],
  },
  {
    authors: [
      { name: "Yunjhen Su" },
      { name: "Chin-Yu Sun", highlight: true, coFirst: true },
      { name: "Wen-Kuan Chiu" },
      { name: "Yi-No Kang" },
      { name: "Chiehfeng Chen" },
    ],
    title:
      "Patient Decision Aids for Breast Cancer Reconstruction: A Systematic Review and Network Meta-Analysis of Randomized Controlled Trials",
    venue: "Plastic and Reconstructive Surgery",
    details: "vol. 154, no. 5, pp. 929-940, January 2024.",
    tags: [
      "SCI",
      "2024 JCR IF 3.4 · Surgery · Q1",
      "2024 SJR 1.222 · Surgery · Q1",
      "△ Co-first author",
    ],
  },
  {
    authors: [
      { name: "Chin-Yu Sun", highlight: true },
      { name: "Allen C.-H. Wu" },
      { name: "TingTing Hwang" },
    ],
    title:
      "A Novel Privacy-Preserving Deep Learning Scheme without a Cryptography Component",
    venue: "Computers & Electrical Engineering",
    details: "vol. 94, pp. 1-15, September 2021.",
    tags: ["SCI"],
  },
  {
    authors: [
      { name: "Chin-Yu Sun", highlight: true },
      { name: "Hsiao-Ling Wu" },
      { name: "Hung-Min Sun" },
      { name: "TingTing Hwang" },
    ],
    title:
      "A New Attack to Self-Certified Digital Signature for E-commerce Applications",
    venue: "Journal of Information Science and Engineering",
    details: "vol. 37, no. 6, pp. 1449-1466, June 2021.",
    tags: ["SCI"],
  },
  {
    authors: [
      { name: "Chin-Chen Chang" },
      { name: "Hsiao-Ling Wu" },
      { name: "Chin-Yu Sun", highlight: true },
    ],
    title: 'Notes on "Secure authentication scheme for IoT and cloud servers"',
    venue: "Pervasive and Mobile Computing",
    details: "vol. 38, pp. 275-278, July 2017.",
    tags: ["SCI"],
  },
  {
    authors: [
      { name: "Yanjun Liu" },
      { name: "Chin-Chen Chang" },
      { name: "Chin-Yu Sun", highlight: true },
    ],
    title:
      'Notes on "An Anonymous Multi-server Authenticated Key Agreement Scheme Based on Trust Computing Using Smart Card and Biometrics"',
    venue: "International Journal of Network Security",
    details: "vol. 18, no. 5, pp. 997-1000, September 2016.",
    tags: [],
  },
  {
    authors: [
      { name: "Hsiao-Ling Wu" },
      { name: "Chin-Chen Chang" },
      { name: "Chin-Yu Sun", highlight: true },
    ],
    title:
      "A secure authentication scheme with provable correctness for pay-TV systems",
    venue: "Security and Communication Networks",
    details: "vol. 9, no. 11, pp. 1577-1588, February 2016.",
    tags: ["SCI"],
  },
  {
    authors: [
      { name: "Chin-Yu Sun", highlight: true },
      { name: "Ching-Chun Chang" },
    ],
    title:
      "Cryptanalysis of a Secure and Efficient Authentication Scheme for Access Control in Mobile Pay-TV Systems",
    venue: "International Journal of Network Security",
    details: "vol. 18, no. 3, pp. 594-596, May 2016.",
    tags: [],
  },
  {
    authors: [
      { name: "Chin-Chen Chang" },
      { name: "Chin-Yu Sun", highlight: true },
      { name: "Shih-Chang Chang" },
    ],
    title: "A Strong RSA-based and Certificateless-based Signature Scheme",
    venue: "International Journal of Network Security",
    details: "vol. 18, no. 2, pp. 201-208, March 2016.",
    tags: [],
  },
  {
    authors: [
      { name: "Yanjun Liu" },
      { name: "Chin-Chen Chang" },
      { name: "Chin-Yu Sun", highlight: true },
    ],
    title:
      "A Novel Three-party Authenticated Key Exchange Protocol Based on Secret Sharing",
    venue: "Journal of Information Hiding and Multimedia Signal Processing",
    details: "vol. 7, no. 4, pp. 741-753, July 2016.",
    tags: [],
  },
  {
    authors: [
      { name: "Yanjun Liu" },
      { name: "Chin-Chen Chang" },
      { name: "Chin-Yu Sun", highlight: true },
    ],
    title: "A Secure and Efficient Scheme for Digital Gift Certificates",
    venue: "Journal of Information Hiding and Multimedia Signal Processing",
    details: "vol. 6, no. 3, pp. 416-429, May 2015.",
    tags: [],
  },
  {
    authors: [
      { name: "Chin-Chen Chang" },
      { name: "Chin-Yu Sun", highlight: true },
      { name: "Ting-Fang Cheng" },
    ],
    title: "A dependable storage service system in cloud environment",
    venue: "Security and Communication Networks",
    details: "vol. 8, no. 4, pp. 574-588, March 2015.",
    tags: ["SCI"],
  },
  {
    authors: [
      { name: "Chin-Chen Chang" },
      { name: "Yeh-Chieh Chou" },
      { name: "Chin-Yu Sun", highlight: true },
    ],
    title:
      "Novel and practical scheme based on secret sharing for laptop data protection",
    venue: "IET Information Security",
    details: "vol. 9, no. 2, pp. 100-107, February 2015.",
    tags: ["SCI"],
  },
  {
    authors: [
      { name: "Chin-Chen Chang" },
      { name: "Chin-Yu Sun", highlight: true },
      { name: "Shih-Chang Chang" },
    ],
    title:
      "Practical secure and high efficient authentication scheme in global mobility networks",
    venue: "Journal of Internet Technology",
    details: "vol. 15, no. 7, pp. 1091-1100, December 2014.",
    tags: ["SCI"],
  },
  {
    authors: [
      { name: "Chin-Chen Chang" },
      { name: "Chin-Yu Sun", highlight: true },
    ],
    title: "A Secure and Efficient Authentication Scheme for E-coupon Systems",
    venue: "Wireless Personal Communications",
    details: "vol. 77, no. 4, pp. 2981-2996, August 2014.",
    tags: ["SCI"],
  },
  {
    authors: [
      { name: "Cheng Guo" },
      { name: "Chin-Chen Chang" },
      { name: "Chin-Yu Sun", highlight: true },
    ],
    title:
      "Chaotic Maps-Based Mutual Authentication and Key Agreement using Smart Cards for Wireless Communications",
    venue: "Journal of Information Hiding and Multimedia Signal Processing",
    details: "vol. 4, no. 2, pp. 99-109, April 2013.",
    tags: ["SCI"],
  },
];

const conferencePapers: PublicationItemType[] = [
  {
    authors: [
      { name: "Yi-Hsiang Chen" },
      { name: "Feng-Rui Liao" },
      { name: "Jun-Cheng Zhang" },
      { name: "Zheng-Hao Huang" },
      { name: "Chin-Yu Sun", highlight: true, corresponding: true },
    ],
    title:
      "Enhancing Small Language Models in Agentic Pipelines with Prompt Engineering and Fine-Tuning",
    venue: "Taiwan Academic Network Conference (TANET 2025)",
    details: "Accepted by September 2025.",
    tags: ["＊ Corresponding author"],
  },
  {
    authors: [
      { name: "Sheng-Shan Chen" },
      { name: "Yi-Xuan Wu" },
      { name: "Ying-Xuan Ho" },
      { name: "Pang-Po Cheng" },
      { name: "Chin-Yu Sun", highlight: true, corresponding: true },
    ],
    title:
      "RANsomCheck: A CNN-Transformer Model for Malware Detection Based on API Call Sequences",
    venue:
      "38th International Conference on Industrial, Engineering & Other Applications of Applied Intelligent Systems (IEA/AIE 2025)",
    details: "pp. 116-127, Kitakyushu, Japan, July 1–4, 2025.",
    tags: ["＊ Corresponding author"],
  },
  {
    authors: [
      { name: "Chia-Hsien Liao" },
      { name: "Chin-Yu Sun", highlight: true, corresponding: true },
    ],
    title:
      'Note on "Learning with error-based key agreement and authentication scheme for satellite communication"',
    venue: "20th Taiwan Conference on Software Engineering (TCSE 2024)",
    details: "In Proceedings of pp. 354-358, Taipei, Taiwan, July 2024.",
    tags: ["＊ Corresponding author"],
  },
  {
    authors: [
      { name: "Sheng-Shan Chen" },
      { name: "Ren-Hung Hwang" },
      { name: "Chin-Yu Sun", highlight: true, corresponding: true },
      { name: "Ying-Dar Lin" },
      { name: "Tun-Wen Pai" },
    ],
    title:
      "Enhancing Cyber Threat Intelligence with Named Entity Recognition using BERT-CRF",
    venue: "IEEE Global Communication Conference",
    details: "Kuala Lumpur, Malaysia, December 2023.",
    tags: ["＊ Corresponding author"],
  },
  {
    authors: [
      { name: "Yuan-Tai Lin" },
      { name: "Chin-Yu Sun", highlight: true, corresponding: true },
      { name: "TingTing Hwang" },
    ],
    title:
      "M-parties partitioning: A Secure Dynamic Cache Partitioning by More Than Two Parties",
    venue:
      "IEEE 36th International System-on-Chip Conference (SOCC 2023) - Design for Secure and Reliable System",
    details: "Accepted by June 2023.",
    tags: ["＊ Corresponding author"],
  },
  {
    authors: [
      { name: "Chun-Chieh Tsai" },
      { name: "Chin-Yu Sun", highlight: true, corresponding: true },
      { name: "Shih-Hsuan Yang" },
    ],
    title:
      'Note on "RAKS: robust authentication and key agreement scheme for satellite infrastructure"',
    venue: "IEEE ICCE-TW 2023",
    details: "Accepted by May 2023.",
    tags: ["＊ Corresponding author"],
  },
  {
    authors: [
      { name: "Sheng-Shan Chen" },
      { name: "Tun-Wen Pai" },
      { name: "Chin-Yu Sun", highlight: true, corresponding: true },
    ],
    title:
      "Applying the Diamond Model of Intrusion Analysis with Generative Pre-trained Transformer 3",
    venue: "IEEE ICCE-TW 2023",
    details: "Accepted by May 2023.",
    tags: ["＊ Corresponding author"],
  },
  {
    authors: [
      { name: "Sheng-Shan Chen" },
      { name: "Chin-Yu Sun", highlight: true },
      { name: "Tun-Wen Pai" },
    ],
    title: "Using Machine Learning for Efficient Smishing Detection",
    venue: "IEEE ICCE-TW 2023",
    details: "Accepted by May 2023.",
    tags: [],
  },
  {
    authors: [
      { name: "Chin-Chen Chang" },
      { name: "Chin-Yu Sun", highlight: true },
    ],
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
      { name: "Sheng-Shan Chen" },
      { name: "Ren-Hung Hwang" },
      { name: "Ying-Dar Lin" },
      { name: "Tun-Wen Pai" },
      { name: "Chin-Yu Sun", highlight: true, corresponding: true },
    ],
    title:
      "Extracting Attack Pattern from WAF Logs and CTIs Using Contrastive Semantic Learning",
    venue: "IEEE Transactions on Network and Service Management",
    details: "Submitted in January 2026.",
    tags: ["Submitted"],
  },
  {
    authors: [
      { name: "Sheng-Shan Chen" },
      { name: "Yi-Sheng Hsu" },
      { name: "Chung-Kuan Chen" },
      { name: "Tien-Chih Lin" },
      { name: "Chin-Yu Sun", highlight: true, corresponding: true },
    ],
    title:
      "Enhancing Static Vulnerability Alert Validation using Large Language Models",
    venue: "The Journal of Systems & Software",
    details: "Submitted in November 2025.",
    tags: ["Submitted"],
  },
  {
    authors: [
      { name: "Sheng-Shan Chen" },
      { name: "Po-Yao Yen" },
      { name: "Yu-Nung Cheng" },
      { name: "Chin-Yu Sun", highlight: true, corresponding: true },
    ],
    title:
      "Applying Machine Learning for EDoS Attack Detection and Cost Analysis in Cloud Microservices",
    venue: "Digital Threats: Research and Practice",
    details: "Submitted in September 2025.",
    tags: ["Submitted"],
  },
  {
    authors: [
      { name: "Yi-Hsien Chen" },
      { name: "Sheng-Shan Chen" },
      { name: "Chun-Chia Huang" },
      { name: "Sian-Yao Huang" },
      { name: "Chin-Yu Sun", highlight: true },
      { name: "Hsu-Chun Hsiao" },
      { name: "Chung-Kuan Chen" },
      { name: "Cheng-Lin Yang" },
      { name: "Chun-Ying Huang" },
    ],
    title:
      "BASGen: An Automated Breach and Attack Simulation Script Generator based on Cyber Threat Intelligence Reports",
    venue:
      "The 32nd ACM Conference on Computer and Communications Security (CCS 2025)",
    details: "Submitted in April 2025.",
    tags: ["Submitted"],
  },
  {
    authors: [
      { name: "Sheng-Shan Chen" },
      { name: "Yi-Hsien Chen" },
      { name: "Tun-Wen Pai" },
      { name: "Chung-Kuan Chen" },
      { name: "Keisuke Furumoto" },
      { name: "Takeshi Takahashi" },
      { name: "Chin-Yu Sun", highlight: true, corresponding: true },
    ],
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
  { titleZh: "處理中", titleEn: "Pending", items: pendingPapers },
];

function AuthorName({ author }: { author: AuthorType }) {
  return (
    <span className={author.highlight ? "highlight-author" : ""}>
      {author.name}
      {author.coFirst && <sup className="author-mark mark-cofirst">△</sup>}
      {author.corresponding && (
        <sup className="author-mark mark-corresponding">＊</sup>
      )}
    </span>
  );
}

function renderAuthors(authors: AuthorType[]): React.ReactNode {
  if (authors.length === 1) {
    return <AuthorName author={authors[0]} />;
  }

  if (authors.length === 2) {
    return (
      <>
        <AuthorName author={authors[0]} />
        {" and "}
        <AuthorName author={authors[1]} />
      </>
    );
  }

  return authors.map((author, index) => {
    const isLast = index === authors.length - 1;
    const isSecondLast = index === authors.length - 2;

    return (
      <React.Fragment key={`${author.name}-${index}`}>
        <AuthorName author={author} />
        {!isLast && !isSecondLast ? ", " : ""}
        {isSecondLast ? ", and " : ""}
      </React.Fragment>
    );
  });
}

function getTagClassName(tag: string) {
  const lower = tag.toLowerCase();
  if (lower.includes("jcr")) return "tag tag-jcr";
  if (lower.includes("sjr")) return "tag tag-sjr";
  if (lower === "sci") return "tag tag-sci";
  if (lower.includes("co-first")) return "tag tag-cofirst";
  if (lower.includes("corresponding")) return "tag tag-corresponding";
  if (lower.includes("submitted")) return "tag tag-submitted";

  return "tag";
}

function PublicationItem({
  item,
  index,
}: {
  item: PublicationItemType;
  index: number;
}) {
  return (
    <li className="pub-item">
      <div className="pub-card">
        <div className="pub-index">{index + 1}</div>

        <div className="pub-body">
          <div className="pub-title">{item.title}</div>

          <div className="pub-authors">{renderAuthors(item.authors)}</div>

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
        </div>
      </div>
    </li>
  );
}

export function Publication() {
  return (
    <div className="publication">
      <style>
        {`
          .publication {
            max-width: 1120px;
            margin: 0 auto;
            padding: 0 0.75rem 2rem;
          }

          .publication-section {
            margin-bottom: 3rem;
          }

          .publication-heading {
            color: #cf2e2e !important;
            font-weight: 800;
            text-align: center;
            margin-bottom: 1rem;
            letter-spacing: 0.02em;
            font-size: clamp(1.4rem, 2vw, 2rem);
          }

          .publication-heading span {
            color: #ffffff;
            opacity: 0.92;
            font-weight: 700;
            margin-left: 0.35rem;
            font-style: italic;
          }

          .author-legend {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            justify-content: flex-end;
            margin-bottom: 1.5rem;
            color: #cbd5e1;
            font-size: 0.82rem;
            line-height: 1.6;
          }

          .legend-item {
            display: inline-flex;
            align-items: center;
            gap: 0.2rem;
          }

          .publication-list {
            list-style: none;
            padding-left: 0;
            margin: 0;
          }

          .publication .pub-item {
            margin: 0 0 1rem 0;
            padding: 0;
            border: 0;
            color: inherit;
          }

          .publication .pub-card {
            display: grid;
            grid-template-columns: 56px 1fr;
            gap: 1rem;
            padding: 1.15rem 1.15rem 1.2rem;
            border-radius: 18px;
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.03),
              rgba(255, 255, 255, 0.015)
            );
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition:
              transform 0.2s ease,
              box-shadow 0.2s ease,
              border-color 0.2s ease;
          }

          .publication .pub-card:hover {
            transform: translateY(-2px);
            border-color: rgba(207, 46, 46, 0.45);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.28);
          }

          .publication .pub-index {
            width: 42px;
            height: 42px;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            background: rgba(207, 46, 46, 0.16);
            border: 1px solid rgba(207, 46, 46, 0.28);
            font-weight: 800;
            font-size: 0.95rem;
            margin-top: 0.15rem;
          }

          .publication .pub-body {
            min-width: 0;
          }

          .publication .pub-title {
            display: block;
            color: #f8fafc;
            font-size: clamp(1.08rem, 1rem + 0.5vw, 1.45rem);
            font-weight: 800;
            line-height: 1.45;
            margin-bottom: 0.5rem;
          }

          .publication .pub-authors {
            display: block;
            color: #d1d5db;
            font-size: clamp(0.96rem, 0.88rem + 0.22vw, 1.12rem);
            font-weight: 400;
            line-height: 1.75;
            margin-bottom: 0.45rem;
          }

          .publication .pub-meta {
            display: block;
            color: #aeb6c2;
            font-size: clamp(0.9rem, 0.82rem + 0.18vw, 1rem);
            font-weight: 400;
            line-height: 1.7;
            margin-bottom: 0.8rem;
          }

          .publication .highlight-author {
            color: #60a5fa;
            font-weight: 700;
          }

          .publication .author-mark {
            margin-left: 0.08rem;
            font-size: 0.72em;
            vertical-align: super;
            font-weight: 800;
          }

          .publication .mark-cofirst {
            color: #60a5fa;
          }

          .publication .mark-corresponding {
            color: #60a5fa;
          }

          .publication .pub-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.55rem;
          }

          .publication .tag {
            display: inline-flex;
            align-items: center;
            padding: 0.28rem 0.75rem;
            border-radius: 999px;
            font-size: 0.78rem;
            font-weight: 700;
            line-height: 1.35;
            color: #d1d5db;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.08);
            white-space: nowrap;
          }

          .publication .tag-sci {
            color: #fbbf24;
            background: rgba(251, 191, 36, 0.12);
            border-color: rgba(251, 191, 36, 0.24);
          }

          .publication .tag-jcr {
            color: #ffffff;
            background: rgba(251, 191, 36, 0.12);
            border-color: rgba(251, 191, 36, 0.24);
          }
          
          .publication .tag-sjr {
            color: #ffffff;
            background: rgba(251, 191, 36, 0.12);
            border-color: rgba(251, 191, 36, 0.24);
          }

          .publication .tag-cofirst {
            color: #60a5fa;
            background: rgba(96, 165, 250, 0.12);
            border-color: rgba(96, 165, 250, 0.24);
          }

          .publication .tag-corresponding {
            color: #fca5a5;
            background: rgba(252, 165, 165, 0.12);
            border-color: rgba(252, 165, 165, 0.22);
          }

          .publication .tag-submitted {
            color: #86efac;
            background: rgba(134, 239, 172, 0.12);
            border-color: rgba(134, 239, 172, 0.22);
          }

          .publication-divider {
            border: 0;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            margin: 2.2rem 0 0;
          }

          .publication ol li {
            font-size: inherit !important;
            line-height: inherit;
            margin: 0;
            color: inherit;
            font-weight: inherit;
          }

          @media (max-width: 768px) {
            .publication {
              max-width: 100%;
              padding: 0 0.35rem 1.5rem;
            }

            .author-legend {
              justify-content: flex-start;
              margin-bottom: 1rem;
              font-size: 0.76rem;
            }

            .publication .pub-card {
              grid-template-columns: 1fr;
              gap: 0.8rem;
              padding: 1rem;
            }

            .publication .pub-index {
              width: 36px;
              height: 36px;
              font-size: 0.86rem;
              margin-top: 0;
            }

            .publication .pub-title {
              font-size: 1.02rem;
            }

            .publication .pub-authors,
            .publication .pub-meta {
              font-size: 0.92rem;
            }

            .publication .tag {
              font-size: 0.72rem;
            }
          }
        `}
      </style>

      

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
                index={itemIndex}
              />
            ))}
          </ol>

          {index !== sections.length - 1 && (
            <hr className="publication-divider" />
          )}
        </section>
      ))}
    </div>
  );
}
