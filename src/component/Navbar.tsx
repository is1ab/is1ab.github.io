import { Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  const items: MenuProps["items"] = [
    {
      key: "about us",
      label: "關於我們 About Us",
      children: [
        {
          key: "member",
          label: "實驗室成員 Members",
          onClick: () => navigate("/Member"),
        },
        {
          key: "alumni",
          label: "畢業成員 Alumni",
          onClick: () => navigate("/Alumni"),
        },
        {
          key: "rule",
          label: "實驗室規則 Rules",
          onClick: () => navigate("/Rules"),
        },
        {
          key: "partner",
          label: "合作夥伴 Partners",
          onClick: () => navigate("/Partner"),
        },
      ],
    },
    {
      key: "about prof",
      label: "指導教授 About Dr. Sun",
      children: [
        {
          key: "Profile",
          label: "簡介 Profile",
          onClick: () => navigate("/Profile"),
        },
        {
          key: "publication",
          label: "著作 Publication",
          onClick: () => navigate("/Publication"),
        },
        {
          key: "experience",
          label: "經歷 Experience",
          onClick: () => navigate("/Experience"),
        },
        {
          key: "Courses",
          label: "課程 Courses",
          onClick: () => navigate("/Course"),
        },
        {
          key: "records",
          label: "紀錄 Records",
          onClick: () => navigate("/Record"),
        },
      ],
    },
    {
      key: "news",
      label: "消息 News",
      onClick: () => navigate("/News"),
    },
    {
      key: "activities",
      label: "活動 Activities",
      onClick: () => navigate("/Activities"),
    },
    {
      key: "calendar",
      label: "實驗室活動 Calendar",
      onClick: () => navigate("/Calendar"),
    },
    {
      key: "club",
      label: "社團 Club",
      onClick: () => window.location.href = "https://club.is1ab.com/",
    },
  ];
  return (
    <Menu
      className="bg-black fw-bold"
      theme="dark"
      mode="horizontal"
      items={items}
    ></Menu>
  );
}
