import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import { RootLayout } from './layout/RootLayout.tsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../src/index.css"
import { Home } from './page/Home.tsx'
import { ConfigProvider } from 'antd'
import { Member } from './page/Member.tsx'

const router = createHashRouter(
  createRoutesFromElements(
      <Route element={<RootLayout></RootLayout>}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Member' element={<Member></Member>}></Route>
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
