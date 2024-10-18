import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import { RootLayout } from './layout/RootLayout.tsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../src/index.css"
import { Home } from './page/Home.tsx'
import { ConfigProvider } from 'antd'
import { Member } from './page/Member.tsx'
import { Alumni } from './page/Alumni.tsx'
import { Partner } from './page/Partner.tsx'
import { Profile } from './page/Profile.tsx'
import { Publication } from './page/Publication.tsx'
import { Experience } from './page/Experience.tsx'
import { Course } from './page/Courses.tsx'
import { Record } from './page/Records.tsx'
import { News } from './page/News.tsx'
import { Activities } from './page/Activities.tsx'
import { Rule } from './page/Rule.tsx'
import { UriahMemberPage } from './member/2023/Uriah.tsx'
import { YMemberPage } from './member/2023/Y.tsx'
import { SaltMemberPage } from './member/2023/Salt.tsx'
import { RyanMemberPage } from './member/2022/Ryan.tsx'
import { Adb2MemberPage } from './member/2024/Adb2.tsx'
import { WIFIMemberPage } from './member/2024/WIFI.tsx'
import { YPPMemberPage } from './member/2024/ypp.tsx'
import { YoungMemberPage } from './member/2024/Young.tsx'
import { PaulWangMemberPage } from './member/2024/PaulWang.tsx'
import { JasonMemberPage } from './member/2024/Jason.tsx'
import { JoeMemberPage } from './member/2024/Joe.tsx'
import { EasonMemberPage } from './member/2023/Eason.tsx'
import { BoboMemberPage } from './member/2023/Bobo.tsx'
import { Guan4Tou2MemberPage } from './member/2024/Guan4Tou2.tsx'
import { CHWMemberPage } from './member/2023/CHW.tsx'
import { RavinMemberPage } from './member/2023/Ravin.tsx'

const router = createHashRouter(
  createRoutesFromElements(
      <Route element={<RootLayout></RootLayout>}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Member' element={<Member></Member>}></Route>
        <Route path='/Member/2023/Uriah' element={<UriahMemberPage />}></Route>
        <Route path='/Member/2023/Y' element={<YMemberPage />}></Route>
        <Route path='/Member/2023/Salt' element={<SaltMemberPage />}></Route>
        <Route path='/Member/2022/Ryan' element={<RyanMemberPage />}></Route>
        <Route path='/Member/2024/Adb2' element={<Adb2MemberPage />}></Route>
        <Route path='/Member/2024/WIFI' element={<WIFIMemberPage />}></Route>
        <Route path='/Member/2023/Eason' element={<EasonMemberPage />}></Route>
        <Route path='/Member/2024/ypp' element={<YPPMemberPage />}></Route>
        <Route path='/Member/2024/Young' element={<YoungMemberPage />}></Route>
        <Route path='/Member/2024/Jason' element={<JasonMemberPage />}></Route>
        <Route path='/Member/2023/Bobo' element={<BoboMemberPage />}></Route>
        <Route path='/Member/2024/PaulWang' element={<PaulWangMemberPage />}></Route>
        <Route path='/Member/2024/Joe' element={<JoeMemberPage />}></Route>
        <Route path='/Member/2024/Guan4Tou2' element={<Guan4Tou2MemberPage />}></Route>
        <Route path='/Member/2023/CHW' element={<CHWMemberPage />}></Route>
        <Route path='/Member/2023/Ravin' element={<RavinMemberPage />}></Route>
        <Route path='/Alumni' element={<Alumni></Alumni>}></Route>
        <Route path='/Partner' element={<Partner></Partner>}></Route>
        <Route path='/Profile' element={<Profile></Profile>}></Route>
        <Route path='/Publication' element={<Publication></Publication>}></Route>
        <Route path='/Experience' element={<Experience></Experience>}></Route>
        <Route path='/Course' element={<Course></Course>}></Route>
        <Route path='/Record' element={<Record></Record>}></Route>
        <Route path='/News' element={<News></News>}></Route>
        <Route path='/Activities' element={<Activities></Activities>}></Route>
        <Route path='/Rules' element={<Rule></Rule>}></Route>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={{
      components: {
        Menu: {
          darkItemColor: "white",
          darkItemSelectedBg: "black",
          darkItemBg: "black",
          darkSubMenuItemBg: "black",
          subMenuItemBg: "black",
          darkItemSelectedColor: "#cf2e2e"
        },
        Table: {
          colorBgContainer: "black",
          colorTextDescription: "white",
          colorText: "white",
          colorBorder: "white",
          headerColor: "white",
          borderColor: "white",
          headerBorderRadius: 0
        }
      }
    }}>
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  </React.StrictMode>,
)
