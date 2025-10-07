export function Activities(){
    const ActivitiesItem = (props: {
        time: string
        descriptionItem: JSX.Element
    }) => {
        return (
            <tr>
                <td className="border border-1">
                    {props.time}
                </td>
                <td className="border border-1">
                    {props.descriptionItem}
                </td>
            </tr>
        )
    }

    return (
        <div className="activities">
            <h4 className="text-center fw-bold">歷史活動</h4>
            <table className="w-100 table-bordered">
                <ActivitiesItem
                    time="2025.08.15"
                    descriptionItem={
                        <div>
                            <p>HITCON CMT 2025</p>
                            <img 
                                src="https://drive.google.com/thumbnail?id=1AdZbm0KkppfzooqJ2jp-tMBRVeINB-R7&sz=w550" 
                              />
                            <img 
                                src="https://drive.google.com/thumbnail?id=1A6JBMKkfNFeQfLssvF5DmFajsfNaVMTK&sz=w550" 
                              />
                            <img 
                                src="https://drive.google.com/thumbnail?id=1u_O3Kii-NsOE_6bF19IUiiK3L21L0foO&sz=w550" 
                              />
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2025.07.28"
                    descriptionItem={
                        <div>
                            <p>2025 AIS3 新型態資安暑期課程</p>
                            <img 
                                src="https://drive.google.com/thumbnail?id=1nW4NGygr_16Y93etH7l6-mMz8dyfmPMB&sz=w550" 
                              />
                            <img 
                                src="https://drive.google.com/thumbnail?id=1d133d1uNoMwPjv2am-L5vdohhj9XuYfs&sz=w550" 
                              />
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2025.02.07"
                    descriptionItem={
                        <div>
                            <p>AIS3 EOF CTF 2025 final</p>
                            <img 
                                src="https://drive.google.com/thumbnail?id=1xw2zg76QZGzFgUaNnbrb-X_mZ4blyKm2&sz=w550" 
                              />
                            <img 
                                src="https://drive.google.com/thumbnail?id=1qmqxe37jXBu-f9Z1j1FiU1s2oatEUgRk&sz=w550" 
                              />
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2024.11.23"
                    descriptionItem={
                        <div>
                            <p>CTF 種子培訓工作坊 獲金獎</p>
                            <img 
                                src="https://drive.google.com/thumbnail?id=1PaI1q2ZsJ-ZYb9Bny_qC0wldeI28XipR&sz=w550" 
                              />
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2024.10.12"
                    descriptionItem={
                        <div>
                            <p>資安技能金盾獎競賽 2024 初賽</p>
                            <img 
                                src="https://drive.google.com/thumbnail?id=1SgKriQhuqAJcFEwTkiPYwfiHP0lnAukt&sz=w550" 
                              />
                            <img 
                                src="https://drive.google.com/thumbnail?id=1k4FmtOMN7ZarHTWcO21Yub3mhFHJIvFJ&sz=w450" 
                              />
                        </div>
                    }
                ></ActivitiesItem>
                 <ActivitiesItem
                    time="2024.04.27"
                    descriptionItem={
                        <div>
                            <p>尋找資安女婕思（決賽）</p>
                            <p>＊地點：臺南工業局沙崙資安服務基地</p>
                            <img 
                                src="https://drive.google.com/thumbnail?id=1cCYXbABWN5iwEQAzlUE3T_m4TKTev4C8&sz=w550" 
                              />
                            <img 
                                src="https://drive.google.com/thumbnail?id=1nNHcaqCG09UlzrngE_V3EpYwTyZ8rd-U&sz=w450" 
                              />
                            <img 
                                src="https://drive.google.com/thumbnail?id=1GmBs6XNTuTnJDPUIyOjZSGo45nLDM7lJ&sz=w550" 
                              />
                            <img 
                                src="https://drive.google.com/thumbnail?id=1uf6vptHMCvgUr1XoQrRgIoNNW-8K4loi&sz=w550" 
                              />
                            <img 
                                src="https://drive.google.com/thumbnail?id=1yKOkoovnrws5AKuXma7cTLJ1bJyXHpQ4&sz=w550" 
                              />
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2024.01.21"
                    descriptionItem={
                        <div>
                            <p>實驗室尾牙：旭集和食集錦 SUNRISE</p>
                            <img 
                                src="https://drive.google.com/thumbnail?id=1vFuyeIm8p5VD4k4cv1sTfhU6X9J7i8lh&sz=w550" 
                              />
                            <img 
                                src="https://drive.google.com/thumbnail?id=1tFaOtpgW44YZR_KTg8VIqkAbVSmdLuVx&sz=w550" 
                              />
                            <img 
                                src="https://drive.google.com/thumbnail?id=1z9d2b27Myzkm8qCHuvhtOtysF9N5oTzp&sz=w550" 
                              />
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2023.07.22"
                    descriptionItem={
                        <div>
                            <p>第四屆的奧義學院實習生發表會＆AI 資安社群論壇</p>
                            <img 
                                src="https://drive.google.com/thumbnail?id=1U-tNyCVfOmSYE04DhK0_N3ldPQRTUwCJ&sz=w550" 
                              />
                            <img 
                                src="https://drive.google.com/thumbnail?id=1d9m8BnlOPMjzwVASp8uefOHr2lsiSoOy&sz=w550" 
                              />
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2023.07.17"
                    descriptionItem={
                        <div>
                            <p> 2023 ICCE-TW 會議</p>
                            <p>＊Next Generation Cyberseucrity – Session Chair</p>
                            <p>＊學生論文發表</p>
                            <img 
                                src="https://drive.google.com/thumbnail?id=1yiEEUdSiLAN3KWsShPzjtmp7QDmSfik7&sz=w450" 
                              />
                            <img 
                                src="https://drive.google.com/thumbnail?id=10oIneb4zj9dSslUC33p902vGavLlZNWc&sz=w450" 
                              />
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2023.05.06"
                    descriptionItem={
                        <div>
                            <p>2023 尋找資安女婕思（決賽）</p>
                            <p>＊地點：臺南工業局沙崙資安服務基地</p>
                            <img 
                                src="https://drive.google.com/thumbnail?id=15TaJYXuUWz28ksNQIgD4OX33T-Lv_sOn&sz=w550" 
                              />
                        </div>
                    }
                ></ActivitiesItem>
                <ActivitiesItem
                    time="2023.01.21"
                    descriptionItem={
                        <div>
                            <p>實驗室尾牙：豐 Food 海陸百匯</p>
                            <img 
                                src="https://drive.google.com/thumbnail?id=1K8KTOhV-obkkhd5sZl8q5w2V_Z_2J2Qa&sz=w450" 
                              />
                            <img 
                                src="https://drive.google.com/thumbnail?id=1J8OgQPHjn9lR9XzgtfCQQoJfR6MG-Pk5&sz=w450" 
                              />
                            <img 
                                src="https://drive.google.com/thumbnail?id=15WvGOpe1sUNYyK9zjRgQJaH3Ers1RSnu&sz=w550" 
                              />
                        </div>
                    }
                ></ActivitiesItem>
            </table>
        </div>
    )
}
