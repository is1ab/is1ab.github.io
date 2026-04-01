export function Rule() {
    return (
        <div className="rule container my-4">
            <div className="card shadow-sm border-0 mb-4">
                <div className="card-body p-4">
                    <h2 className="text-center fw-bold mb-3">Lab Handbook</h2>
                    <p className="text-center text-muted mb-0">
                        資訊安全實驗室（is1ab）運作規範
                    </p>
                </div>
            </div>
            
            <div className="card shadow-sm border-0 mb-4">
                <div className="card-body p-4">
                    <h4 className="fw-bold mb-3">核心原則</h4>
                    <ul className="mb-0">
                        <li>本實驗室採「貢獻導向」運作。</li>
                        <li>投入程度與可獲得之資源、機會、指導強度成正比。</li>
                        <li>每位學生最終都需能回答：「我的貢獻是什麼？」</li>
                    </ul>
                </div>
            </div>

            <div className="card shadow-sm border-0 mb-4">
                <div className="card-body p-4">
                    <h4 className="fw-bold mb-3">基本要求（所有成員適用）</h4>
                    <ul className="mb-0">
                        <li>每週 Group Meeting 必須實體出席。</li>
                        <li>每月至少一次研究或技術分享。</li>
                        <li>需維持最低貢獻（依 KPI 制度）。</li>
                        <li>必須參與部分實驗室公共事務（實驗室運作、教學TA、系統維護、資安社團等）。</li>
                        <li>完成碩士論文並通過口試。</li>
                        <li>研究訓練與專業能力養成具有延續性，非僅限於學期期間，學生需自行管理進度。</li>
                        <li>知識及技術良好傳承。</li>
                    </ul>
                </div>
            </div>

            <div className="card shadow-sm border-0 mb-4">
                <div className="card-body p-4">
                    <h4 className="fw-bold mb-3">運作與考核機制</h4>
                    <ul className="mb-0">
                        <li>每位學生需選擇一個主軌（Research / CTF / Project）。</li>
                        <li>每位學生亦需承擔至少一項實驗室貢獻角色（如 實驗室運作、課程助教、社團等）。</li>
                    </ul>
                </div>
            </div>

            <div className="mb-4">
                <h4 className="fw-bold mb-3">KPI 制度</h4>
                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="card h-100 shadow-sm border-primary">
                            <div className="card-body">
                                <h5 className="card-title fw-bold text-primary">Research Track</h5>
                                <p className="text-muted">研究型</p>

                                <h6 className="fw-bold mt-3">目標</h6>
                                <p>培養研究能力與論文產出能力。</p>

                                <h6 className="fw-bold">基本要求</h6>
                                <ul>
                                    <li>每週閱讀論文並整理重點。</li>
                                    <li>每月進行一次 paper presentation。</li>
                                    <li>持續發展研究題目與方法。</li>
                                </ul>

                                <h6 className="fw-bold">Milestone</h6>
                                <ul>
                                    <li>碩一上：完成文獻整理與研究方向探索。</li>
                                    <li>碩一下：完成研究 proposal。</li>
                                    <li>碩二上：完成論文初稿或投稿版本。</li>
                                </ul>

                                <h6 className="fw-bold">畢業條件</h6>
                                <ul>
                                    <li>至少完成一篇研究論文，以投稿為目標，不強制接受。</li>
                                </ul>

                                <h6 className="fw-bold">資源</h6>
                                <ul className="mb-0">
                                    <li>高強度研究指導。</li>
                                    <li>論文共同作者機會。</li>
                                    <li>學術推薦信。</li>
                                    <li>視成果提供國際交流機會。</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card h-100 shadow-sm border-warning">
                            <div className="card-body">
                                <h5 className="card-title fw-bold text-warning">CTF Track</h5>
                                <p className="text-muted">比賽型</p>

                                <h6 className="fw-bold mt-3">目標</h6>
                                <p>培養實戰能力與產業就業競爭力。</p>

                                <h6 className="fw-bold">基本要求</h6>
                                <ul>
                                    <li>每週投入固定 CTF 訓練時間（建議 10 小時以上）。</li>
                                    <li>定期撰寫技術 writeup。</liL> 
                                    <li>每月進行一次技術分享。</li>
                                    <li>每學期參與 CTF 競賽或實戰活動。</li>
                                    <li>參與社團活動。</li>
                                </ul>

                                <h6 className="fw-bold">畢業條件（能力導向）</h6>
                                <ul>
                                    <li>持續參與國內外資安競賽或實戰活動。</li>
                                    <li>至少完成 1 項具技術深度之專題成果（如 exploit、工具、分析報告等）。</li>
                                    <li>參與 AIS3、臺灣好厲駭、漏洞回報或其他等值活動。</li>
                                </ul>

                                <h6 className="fw-bold">資源</h6>
                                <ul className="mb-0">
                                    <li>CTF 與訓練相關補助。</li>
                                    <li>推薦信(就業推薦)</li>
                                    <li>資安企業實習</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card h-100 shadow-sm border-danger">
                            <div className="card-body">
                                <h5 className="card-title fw-bold text-danger">Project Track</h5>
                                <p className="text-muted">專案型</p>

                                <h6 className="fw-bold mt-3">目標</h6>
                                <p>培養實務經驗、系統設計與開發能力。</p>

                                <h6 className="fw-bold">基本要求</h6>
                                <ul>
                                    <li>參與實驗室計畫或系統開發。</li>
                                    <li>每月進行一次技術或系統相關報告。</li>
                                    <li>配合專案進度交付成果。</li>
                                </ul>

                                <h6 className="fw-bold">畢業條件</h6>
                                <ul>
                                    <li>完成一項具完整設計與實作之系統或專案。</li>
                                    <li>須將專案成果轉化為碩士論文，內容應包含問題定義、方法、實作與評估。</li>
                                </ul>

                                <h6 className="fw-bold">說明</h6>
                                <ul>
                                    <li>專案參與不等同於論文成果，仍需符合碩士論文之基本學術要求。</li>
                                </ul>

                                <h6 className="fw-bold">資源</h6>
                                <ul className="mb-0">
                                    <li>穩定獎助金或專案補助。</li>
                                    <li>產業推薦信。</li>
                                    <li>企業實習。</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm border-0 mb-4">
                <div className="card-body p-4">
                    <h4 className="fw-bold mb-3">碩士兩年培養流程</h4>
                    <div className="row g-3">
                        <div className="col-md-6 col-xl-3">
                            <div className="card h-100 border-light bg-light">
                                <div className="card-body">
                                    <h6 className="fw-bold">入學前 / 碩一上</h6>
                                    <ul className="mb-0">
                                        <li>選擇 Track。</li>
                                        <li>建立基礎能力（CTF / 程式 / 研究方法）。</li>
                                        <li>開始參與實驗室任務。</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3">
                            <div className="card h-100 border-light bg-light">
                                <div className="card-body">
                                    <h6 className="fw-bold">碩一下</h6>
                                    <ul className="mb-0">
                                        <li>確立主軌方向。</li>
                                        <li>提出論文 proposal。</li>
                                        <li>開始主要產出（研究 / 比賽 / 專案）。</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3">
                            <div className="card h-100 border-light bg-light">
                                <div className="card-body">
                                    <h6 className="fw-bold">碩二上</h6>
                                    <ul className="mb-0">
                                        <li>深化主軌成果（投稿 / 比賽 / 系統）。</li>
                                        <li>完成論文初稿。</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3">
                            <div className="card h-100 border-light bg-light">
                                <div className="card-body">
                                    <h6 className="fw-bold">碩二下</h6>
                                    <ul className="mb-0">
                                        <li>完成論文與口試。</li>
                                        <li>完成工作或升學規劃。</li>
                                        <li>進行經驗傳承。</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm border-0 mb-4">
                <div className="card-body p-4">
                    <h4 className="fw-bold mb-3">實驗室職位制度</h4>
                    <div className="row g-3">
                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 border-light">
                                <div className="card-body">
                                    <h6 className="fw-bold">Lab Manager</h6>
                                    <p className="mb-0">協調整體運作、工作分配、重要事項追蹤與溝通。</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 border-light">
                                <div className="card-body">
                                    <h6 className="fw-bold">財務 / 採購管理</h6>
                                    <p className="mb-0">經費申請、核銷、採購與款項管理。</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 border-light">
                                <div className="card-body">
                                    <h6 className="fw-bold">設備管理</h6>
                                    <p className="mb-0">硬體設備、貴重物品、公有財產管理。</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 border-light">
                                <div className="card-body">
                                    <h6 className="fw-bold">系統 / 網路管理</h6>
                                    <p className="mb-0">IP 分配、NAS / 伺服器維護、帳號權限管理與備份。</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 border-light">
                                <div className="card-body">
                                    <h6 className="fw-bold">場地管理</h6>
                                    <p className="mb-0">實驗安全規範、危害評估與環境衛生管理。</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 border-light">
                                <div className="card-body">
                                    <h6 className="fw-bold">活動 / 公關</h6>
                                    <p className="mb-0">維護實驗室網頁、活動接洽、合作單位聯繫與新人接待。</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card h-100 border-light">
                                <div className="card-body">
                                    <h6 className="fw-bold">教學支援（TA）</h6>
                                    <p className="mb-0">協助課程教學、作業輔導、課堂支援與學生協助。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm border-0 mb-4">
                <div className="card-body p-4">
                    <h4 className="fw-bold mb-3">資源分配原則</h4>
                    <p>以下資源採貢獻導向分配：</p>
                    <ul className="mb-0">
                        <li>推薦信</li>
                        <li>補助（比賽 / 出國 / 計畫）</li>
                        <li>指導時間與優先度</li>
                        <li>對外機會（實習 / 合作）</li>
                    </ul>
                </div>
            </div>

            <div className="card shadow-sm border-0 mb-4">
                <div className="card-body p-4">
                    <h4 className="fw-bold mb-3">輔導與調整機制</h4>
                    <ul className="mb-0">
                        <li>若學生長期未達基本要求或 KPI，將進行個別面談與改善計畫。</li>
                        <li>若學生無法配合實驗室基本運作，將視情況調整 Track 或工作內容。</li>
                        <li>若經多次輔導仍無改善，指導教授得依系所規定重新評估指導關係與畢業時程。</li>
                    </ul>
                    <ul className="mb-0">
                        <li>碩士班期間，學生應以研究訓練、實驗室任務與專業能力養成為優先。</li>
                        <li>原則上不建議從事與研究訓練無直接相關，且可能影響學習、研究進度與實驗室運作之外部兼職工作。</li>
                        <li>校內工讀、研究助理或其他經指導教授同意之校內工作，不在此限。</li>
                        <li>如學生擬參與校外實習，應以與資安、資訊技術或職涯發展高度相關者為原則，並須事先取得指導教授同意。</li>
                        <li>未經同意，不得自行安排可能影響研究進度之長期校外兼職或實習。</li>
                    </ul>
                </div>
            </div>

            <div className="row g-4 mb-4">
                <div className="col-lg-6">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-3">實驗室文化</h4>
                            <ul className="mb-0">
                                <li>學術倫理。</li>
                                <li>誠信（嚴禁作弊、抄襲、造假等行為）。</li>
                                <li>守時與責任感。</li>
                                <li>團隊合作與互助。</li>
                                <li>主動學習與持續精進。</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card shadow-sm border-0 h-100">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-3">不適合加入本實驗室的學生</h4>
                            <ul className="mb-0">
                                <li>僅希望取得學位而無意提升能力者。</li>
                                <li>不願投入時間學習或訓練者。</li>
                                <li>無法配合基本團隊運作與責任者。</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
