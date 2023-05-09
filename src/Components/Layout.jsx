import Sidebar from "./Sidebar";
import { Layout } from 'antd';
import PropertyGrid from './PropertyGrid'
import { CaretDownOutlined } from '@ant-design/icons';
import './style.css'
import VerticalMenu from "./VerticalMenu";

const items = [
  {
    key: "1",
    label: "Menu 1",
    link: "/"
  },
  {
    key: "2",
    label: "Menu 2",
    children: [
      {
        key: "2.1",
        label: "Sub Menu 1",
        link: "/submenu1"
      },
      {
        key: "2.2",
        label: "Sub Menu 2",
        link: "/submenu2"
      }
    ]
  },
  {
    key: "3",
    label: "Menu 3",
    children: [
      {
        key: "3.1",
        label: "Sub Menu 3",
        link: "/submenu3"
      },
      {
        key: "3.2",
        label: "Sub Menu 4",
        link: "/submenu4"
      }
    ]
  },
  {
    key: "4",
    label: "Menu 5",
    children: [
      {
        key: "4.1",
        label: "Sub Menu 5",
        link: "/submenu5"
      },
      {
        key: "4.2",
        label: "Sub Menu 5",
        link: "/submenu6"
      }
    ]
  },
  {
    key: "6",
    label: "Menu 6",
    children: [
      {
        key: "6.1",
        label: "Sub Menu 3",
        link: "/submenu7"
      },
      {
        key: "6.2",
        label: "Sub Menu 4",
        link: "/submenu8"
      }
    ]
  },
  {
    key: "7",
    label: "Menu 7",
    children: [
      {
        key: "7.1",
        label: "Sub Menu 3",
        link: "/submenu9"
      },
      {
        key: "7.2",
        label: "Sub Menu 4",
        link: "/submenu10"
      }
    ]
  },
  {
    key: "8",
    label: "Menu 6",
    children: [
      {
        key: "8.1",
        label: "Sub Menu 3",
        link: "/submenu11"
      },
      {
        key: "8.2",
        label: "Sub Menu 4",
        link: "/submenu12"
      }
    ]
  }
];
const { Content, Footer } = Layout;


const MyLayout = () => {


  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#F1F6F9' }}>
      <div style={{ width: '370px' }} className="grid grid-rows-[30px,1fr, 30px] grid-cols-[35px,1fr]">
        <div
          className="w-[100%] h-[30px] row-start-1 col-start-1
                           row-end-1 col-end-3 border-b border-gray-400
                           border-r flex justify-between">
                            <h1 className="ml-2">System Settings</h1>
                            <div className="mr-2">
                              <button className="mr-2">Expand All</button>
                              <CaretDownOutlined />
                            </div>
        </div>
        <div
          className="grid-smallsidemenu row-start-2 col-start-1 row-end-3 col-end-2 ">
            <VerticalMenu />
        </div>
        <div
          style={{ marginBottom: '3px', border: '1px solid gray' }}
          className="grid-mainsidebar  row-start-2 col-start-2 row-end-3 col-end-3">
          <Sidebar items={items} />
        </div>
        <div
          style={{ borderTop: '1px solid gray', borderRight: '1px solid gray' }}
          className="w-[100%] h-[50px] row-start-3 col-start-1 row-end-3 col-end-3">
        </div>

      </div>
      <Layout className="site-layout" style={{ backgroundColor: '#F1F6F9', marginLeft: '3px', }}>
        <div style={{ padding: 0, height: '30px', borderLeft: '1px solid gray', borderBottom: '1px solid gray' }}></div>
        <Content style={{ border: '1px solid gray', marginTop: '3px', marginBottom: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <PropertyGrid />
        </Content>
        <div style={{ padding: 0, height: '30px', borderLeft: '1px solid gray', borderTop: '1px solid gray' }}></div>

      </Layout>
    </Layout>
  );
};
export default MyLayout;

