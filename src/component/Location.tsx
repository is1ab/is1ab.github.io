export function Location(){
    return (
        <div className="p-3 py-4">
            <h4 className="text-center fw-bold mb-3">位址</h4>
            <p className="" style={{fontWeight: 300, lineHeight: 2}}> 國立臺北科技大學 宏裕科研大樓 1321 室（Hong-Yue Tech. Research Building 1321, NTUT）</p>
            <div className="w-100 d-flex justify-content-center" style={{height: "60vh"}}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1044.067077385593!2d121.53435193385918!3d25.04381596889608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97cd4962b0b%3A0x75144e30dbb37ee6!2z5ZyL56uL6Ie65YyX56eR5oqA5aSn5a245a6P6KOV56eR5oqA56CU56m25aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1718103769950!5m2!1szh-TW!2stw" 
                    className="mx-auto w-100"
                    height={"h-100"}
                    style={{border: 0}} 
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}