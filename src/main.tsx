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
import { Record } from './page/Records.tsx'
import { News } from './page/News.tsx'

const router = createHashRouter(
  createRoutesFromElements(
      <Route element={<RootLayout></RootLayout>}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Member' element={<Member></Member>}></Route>
        <Route path='/Alumni' element={<Alumni></Alumni>}></Route>
        <Route path='/Partner' element={<Partner></Partner>}></Route>
        <Route path='/Profile' element={<Profile></Profile>}></Route>
        <Route path='/Publication' element={<Publication></Publication>}></Route>
        <Route path='/Experience' element={<Experience></Experience>}></Route>
        <Route path='/Record' element={<Record></Record>}></Route>
        <Route path='/News' element={<News></News>}></Route>
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
          headerColor: "white"
        }
      }
    }}>
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  </React.StrictMode>,
)
