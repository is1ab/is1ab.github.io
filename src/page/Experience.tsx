export function Experience(){
    const Passed = () => {
        return <span className="project-passed">核定通過</span>
    }
    const Finished = () => {
        return <span className="project-finished">結案</span>
    }
    const Progressing = () => {
        return <span className="project-progressing">執行中</span>
    }
    return (
        <div className="experience">
            <>
                <h4 className="text-center fw-bold">現職 Current Institutional Affiliation/Position</h4>
                <ul>
                    <li>國立臺北科技大學 資訊工程系 助理教授（2022/8 - pres.）
                        <ul>
                            <li>計算機與網路中心 網路作業組組長（2024/2 - pres.）</li>
                            <li>校外實習委員（2024/8 - pres.）</li>
                            <li>系學審會委員（2023/8 - pres.）</li>
                            <li>技優學生輔導小組成員（2023/8 - pres.）</li>
                        </ul>
                    </li>
                    <li>中華民國資訊安全學會 北區副秘書長（2024/12 - pres.）</li>
                </ul>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">行政經歷 Positions Held</h4>
                <ul>
                    <li>國立臺北科技大學
                        <ul>
                            <li>宋恭源獎學金 關懷導師（2024/6 - 2025/8）</li>
                            <li>計算機與網路發展指導委員（2022/8 - 2024/7）</li>
                            <li>院務會議 候補委員（2023/8 - 2024/7）</li>
                            <li>系課程委員（2022/8 - 2023/7）</li>
                        </ul>
                    </li>
                    <li>國立清華大學 資訊工程系 博士後研究員（2021/9 – 2022/7）</li>
                </ul>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">計畫經歷 Project</h4>
                <ul>
                    <li>開發具提示注入緩解功能的強化學習式乳癌重建AI決策輔助系統之研究（校際合作 - 萬芳醫院，<Passed/>）</li>
                    <li>建構威脅情資知識圖及攻擊事件自動化辨識技術（資安院計畫，<Finished/>）</li>
                    <li>具網路韌性且可信賴之低軌衛星通訊系統：互聯互通認證、軟體安全、物聯網永續性、保有隱私、假資訊偵測（國科會計畫共同主持人，<Progressing/>）</li>
                    <li>整合多項新穎技術於網路防禦系統以抵抗網路威脅之研究（國科會計畫，<Finished/>）</li>
                    <li>發展精準且有效的偵測技術以抵抗網路威脅之研究（國科會計畫，<Finished/>）</li>
                    <li>建立人工智慧聊天機器人以輔助乳癌術後重建病人醫病共同決策之研究（校際合作 - 萬芳醫院，<Finished/>）</li>
                    <li>半導體資安人才產業共通職能基準資料蒐集（2022 產學案 - 資策會，<Finished/>）</li>
                    <li>深度神經網路下深度神經網路安全模型與工作排成之研究（協助執行國科會計畫, 2020/8 - 2021/7）</li>
                    <li>先進晶片技術之可靠度設計自動化研究-子計畫:三微晶片之可靠度技術研究（協助執行國科會計畫, 2019/8 - 2020/7）</li>
                    <li>仲裁式量子代理盲簽章（協助執行國科會計畫, 2016/8 - 2017/7）</li>
                    <li>數位影像秘密共享之研究及其在移動通訊環境中的應用（協助執行國科會計畫, 2015/8 - 2015/11）</li>
                    <li>安全有效的認證機制及其在電子商務應用之研究（協助執行國科會計畫, 2014/8 - 2015/7）</li>
                    <li>數位影像編輯技術之研究及在多媒體安全之應用（協助執行國科會計畫, 2011/8 - 2014/7）</li>
                </ul>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">學術經歷 Academic</h4>
                <ul>
                    <li>擔任 2024 Taiwan Conference on Software Engineering - 註冊主席</li>
                    <li>擔任 2024 Cryptology and Information Security Conference - 協辦/窗口/場地主席</li>
                    <li>擔任 2023 IEEE International Conference on Consumer Electronics-Taiwan - Next Generation Cybersecurity - Special Session Chair</li>
                </ul>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">個人榮譽 Honors</h4>
                <ul>
                    <li>榮獲 國立臺北科技大學 電資學院 113學年度 - (院)傑出教學獎 114.09.12</li>
                    <li>榮獲 國立臺北科技大學 112學年度 - 優良導師 113.07.02</li>
                    <li>榮獲 國立臺北科技大學 保管教室整潔評比優良</li>
                    <ul>
                        <li>112學年度第2學期（113.09.06, 與大一導生）</li>    
                        <li>112學年度第1學期（113.02.16, 與大一導生）</li>
                    </ul>
                    <li>通過 經濟部產業人才能力鑑定證書 資訊安全工程師 - 初級能力鑑定 112.07.31</li>
                </ul>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">會員身份 Group/Membership</h4>
                <ul>
                    <li>中華民國資訊安全學會 永久會員（2022/9 - pres.）</li>
                    <li>IEEE Member（No. 93106665）</li>
                </ul>
            </>
        </div>
    )
}
