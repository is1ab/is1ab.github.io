import { Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

export function Navbar(){
    const navigate = useNavigate()
    const items: MenuProps["items"] = [
        {
            key: "about us",
            label: "關於我們 About Us",
            children: [
                {
                    key: "member",
                    label: "實驗室成員 Members",
                    onClick: () => navigate("/Member")
                },
                {
                    key: "alumni",
                    label: "畢業成員 Alumni",
                    onClick: () => navigate("/Alumni")
                },
                {
                    key: "partner",
                    label: "合作成員 Partner"
                }
            ]
        },
        {
            key: "about prof",
            label: "指導教授 About Dr. Sun",
            children: [
                {
                    key: "CV",
                    label: "簡歷 CV"
                },
                {
                    key: "publication",
                    label: "著作 Publication"
                },
                {
                    key: "experience",
                    label: "經歷 Experience"
                },
                {
                    key: "records",
                    label: "紀錄 Records"
                }
            ]
        },
        {
            key: "news",
            label: "消息 News"
        },
        {
            key: "activities",
            label: "活動 Activities"
        }
    ]
    return (
        <Menu className="bg-black fw-bold" theme="dark" mode="horizontal" items={items}></Menu>
    )
}