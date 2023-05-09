import { Link } from "react-router-dom";
import { Layout, Tree } from 'antd';
import { DownOutlined, RightCircleOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = ({ items }) => {
  const renderTreeNodes = (data) =>
    data.map((item) => {
      if (item.children) {
        return (
          <Tree.TreeNode
            key={item.key}
            title={item.label}
            icon={<DownOutlined />}
            style={{ fontSize: "20px" }}
          >
            {renderTreeNodes(item.children)}
          </Tree.TreeNode>
        );
      }

      return (
        <Tree.TreeNode
          key={item.key}
          title={<Link to={item.link}>{item.label}</Link>}
          style={{ fontSize: "20px" }}
        />
      );
    });

  return (
    <Sider
      className="h-screen "
      width="320px"
      style={{ height: "88vh", backgroundColor: "white" }}
    >
      <Tree defaultExpandAll>{renderTreeNodes(items)}</Tree>
    </Sider>
  );
};

export default Sidebar;

