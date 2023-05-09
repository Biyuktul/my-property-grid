import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

function HorizontalMenu() {
  return (
    <Menu mode="horizontal" className="bg-gray-200 h-[40px] w-[85%]" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<MailOutlined />} className="small-menu-item">
        Menu One
      </Menu.Item>
      <Menu.Item key="2" icon={<AppstoreOutlined />}>
      Menu Two
      </Menu.Item>
      <Menu.Item key="3" icon={<SettingOutlined />}>
      Menu Three
      </Menu.Item>
      <Menu.Item key="4" icon={<MailOutlined />}>
      Menu Four
      </Menu.Item>
      <Menu.Item key="5" icon={<MailOutlined />}>
      Menu Five
      </Menu.Item>
      <Menu.Item key="6" icon={<MailOutlined />}>
      Menu Six
      </Menu.Item>
      <Menu.Item key="7" icon={<MailOutlined />}>
      Menu Seven
      </Menu.Item>
      <Menu.Item key="8" icon={<MailOutlined />}>
      Menu Eight
      </Menu.Item>
    </Menu>
  );
}

export default HorizontalMenu;
