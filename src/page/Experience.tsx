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
        </div>
    )
}
