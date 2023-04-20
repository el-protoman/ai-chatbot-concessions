import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { MenuInfo } from 'rc-menu/lib/interface';


const { SubMenu } = Menu;

class NavMenu extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = (e: MenuInfo) => {
        console.log('click ', e);
        // this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    Navigation One
                </Menu.Item>
                <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
                    Navigation Two
                </Menu.Item>
                <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1"><Link href="/product-menu">Product Menu</Link></Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                </Menu.Item>
            </Menu>
        );
    }
}

export default NavMenu;
