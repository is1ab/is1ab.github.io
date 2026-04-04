import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { Button, Drawer, Dropdown, Grid } from "antd";
import type { MenuProps } from "antd";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

const { useBreakpoint } = Grid;

type NavItem = {
  key: string;
  label: string;
  path?: string;
  external?: string;
  children?: {
    key: string;
    label: string;
    path: string;
  }[];
};

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      {
        key: "about-us",
        label: "關於我們 About Us",
        children: [
          { key: "member", label: "實驗室成員 Members", path: "/Member" },
          { key: "alumni", label: "畢業成員 Alumni", path: "/Alumni" },
          { key: "rules", label: "實驗室規則 Rules", path: "/Rules" },
          { key: "partner", label: "合作夥伴 Partners", path: "/Partner" },
        ],
      },
      {
        key: "about-prof",
        label: "指導教授 About Dr. Sun",
        children: [
          { key: "profile", label: "簡介 Profile", path: "/Profile" },
          { key: "publication", label: "著作 Publication", path: "/Publication" },
          { key: "experience", label: "計畫 Projects", path: "/Experience" },
          { key: "course", label: "課程 Courses", path: "/Course" },
          { key: "record", label: "紀錄 Records", path: "/Record" },
        ],
      },
      {
        key: "news",
        label: "消息 News",
        path: "/News",
      },
      {
        key: "activities",
        label: "活動 Activities",
        path: "/Activities",
      },
      {
        key: "calendar",
        label: "實驗室活動 Calendar",
        path: "/Calendar",
      },
      {
        key: "club",
        label: "社團 Club",
        external: "https://club.is1ab.com/",
      },
    ],
    []
  );

  const handleNavigate = (path?: string, external?: string) => {
    if (external) {
      window.location.href = external;
      return;
    }
    if (path) {
      navigate(path);
    }
    setDrawerOpen(false);
  };

  const isPathActive = (item: NavItem) => {
    if (item.path && location.pathname === item.path) return true;
    if (item.children?.some((child) => location.pathname === child.path)) return true;
    return false;
  };

  const getDropdownMenu = (children: NavItem["children"]): MenuProps => ({
    items:
      children?.map((child) => ({
        key: child.key,
        label: (
          <div
            style={{
              padding: "6px 4px",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            {child.label}
          </div>
        ),
      })) ?? [],
    onClick: ({ key }) => {
      const target = children?.find((child) => child.key === key);
      if (target) handleNavigate(target.path);
    },
  });

  return (
    <>
      <header style={headerStyle}>
        <div style={containerStyle}>
          <div
            style={brandStyle}
            onClick={() => navigate("/")}
            role="button"
            aria-label="Go to homepage"
          >
            <span style={brandMainStyle}>isLab</span>
            <span style={brandSubStyle}>資訊安全實驗室</span>
          </div>

          {isMobile ? (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerOpen(true)}
              style={mobileMenuButtonStyle}
              aria-label="Open navigation menu"
            />
          ) : (
            <nav style={desktopNavStyle}>
              {navItems.map((item) => {
                const active = isPathActive(item);

                if (item.children?.length) {
                  return (
                    <Dropdown
                      key={item.key}
                      menu={getDropdownMenu(item.children)}
                      trigger={["hover", "click"]}
                      placement="bottomCenter"
                      overlayStyle={{ minWidth: 220 }}
                    >
                      <button
                        type="button"
                        style={{
                          ...navButtonStyle,
                          ...(active ? navButtonActiveStyle : {}),
                        }}
                      >
                        <span>{item.label}</span>
                        <DownOutlined style={{ fontSize: 11, marginLeft: 6 }} />
                      </button>
                    </Dropdown>
                  );
                }

                return (
                  <button
                    key={item.key}
                    type="button"
                    style={{
                      ...navButtonStyle,
                      ...(active ? navButtonActiveStyle : {}),
                    }}
                    onClick={() => handleNavigate(item.path, item.external)}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          )}
        </div>
      </header>

      <Drawer
        title={<span style={{ fontWeight: 700 }}>選單 Menu</span>}
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width={300}
        styles={{
          body: {
            padding: 0,
            background: "#0b1220",
          },
          header: {
            background: "#0b1220",
            color: "#fff",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          },
        }}
      >
        <div style={mobileNavWrapperStyle}>
          {navItems.map((item) => {
            const active = isPathActive(item);

            if (item.children?.length) {
              return (
                <div key={item.key} style={mobileGroupStyle}>
                  <div
                    style={{
                      ...mobileGroupTitleStyle,
                      ...(active ? mobileGroupTitleActiveStyle : {}),
                    }}
                  >
                    {item.label}
                  </div>

                  <div style={mobileChildrenWrapperStyle}>
                    {item.children.map((child) => {
                      const childActive = location.pathname === child.path;

                      return (
                        <button
                          key={child.key}
                          type="button"
                          onClick={() => handleNavigate(child.path)}
                          style={{
                            ...mobileChildButtonStyle,
                            ...(childActive ? mobileChildButtonActiveStyle : {}),
                          }}
                        >
                          {child.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => handleNavigate(item.path, item.external)}
                style={{
                  ...mobileSingleButtonStyle,
                  ...(active ? mobileSingleButtonActiveStyle : {}),
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </Drawer>
    </>
  );
}

/* ===================== styles ===================== */

const headerStyle: CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 1000,
  width: "100%",
  backdropFilter: "blur(10px)",
  background: "rgba(7, 12, 20, 0.88)",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};

const containerStyle: CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  height: 72,
  padding: "0 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 24,
};

const brandStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  cursor: "pointer",
  minWidth: 120,
  userSelect: "none",
};

const brandMainStyle: CSSProperties = {
  color: "#ffffff",
  fontSize: 22,
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: 0.3,
};

const brandSubStyle: CSSProperties = {
  color: "rgba(255,255,255,0.72)",
  fontSize: 12,
  marginTop: 4,
  letterSpacing: 0.2,
};

const desktopNavStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 8,
  flex: 1,
  minWidth: 0,
};

const navButtonStyle: CSSProperties = {
  height: 44,
  padding: "0 14px",
  borderRadius: 12,
  border: "1px solid transparent",
  background: "transparent",
  color: "rgba(255,255,255,0.88)",
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",
  whiteSpace: "nowrap",
};

const navButtonActiveStyle: CSSProperties = {
  color: "#ffffff",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const mobileMenuButtonStyle: CSSProperties = {
  color: "#fff",
  width: 42,
  height: 42,
  borderRadius: 10,
  fontSize: 20,
};

const mobileNavWrapperStyle: CSSProperties = {
  padding: 16,
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const mobileGroupStyle: CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: 16,
  overflow: "hidden",
};

const mobileGroupTitleStyle: CSSProperties = {
  padding: "14px 16px",
  color: "#ffffff",
  fontSize: 15,
  fontWeight: 700,
  background: "rgba(255,255,255,0.02)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
};

const mobileGroupTitleActiveStyle: CSSProperties = {
  background: "rgba(255,255,255,0.08)",
};

const mobileChildrenWrapperStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: 8,
};

const mobileChildButtonStyle: CSSProperties = {
  textAlign: "left",
  border: "none",
  background: "transparent",
  color: "rgba(255,255,255,0.82)",
  padding: "12px 12px",
  borderRadius: 10,
  fontSize: 14,
  fontWeight: 500,
  cursor: "pointer",
};

const mobileChildButtonActiveStyle: CSSProperties = {
  background: "rgba(255,255,255,0.10)",
  color: "#ffffff",
};

const mobileSingleButtonStyle: CSSProperties = {
  textAlign: "left",
  border: "1px solid rgba(255,255,255,0.06)",
  background: "rgba(255,255,255,0.03)",
  color: "#ffffff",
  padding: "14px 16px",
  borderRadius: 16,
  fontSize: 15,
  fontWeight: 700,
  cursor: "pointer",
};

const mobileSingleButtonActiveStyle: CSSProperties = {
  background: "rgba(255,255,255,0.10)",
};
