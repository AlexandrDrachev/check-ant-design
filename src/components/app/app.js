import React, { Component } from 'react';

import 'antd/dist/antd.css';

import './app.css';

import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const list = [
    {id: 1, title: "nav 1", icon: UserOutlined},
    {id: 2, title: "nav 2", icon: VideoCameraOutlined},
    {id: 3, title: "nav 3", icon: UploadOutlined}
];

const refs = list.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
}, {});

const { Header, Sider, Content } = Layout;

class App extends Component {
    state = {
        collapsed: false,
    };

    handleClick = (id) =>
        refs[id].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {

        console.log(refs);

        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        {list.map((item) => {
                            return (
                                <Menu.Item
                                    onClick={() => this.handleClick(item.id)}
                                    key={item.id}
                                    icon={<item.icon />}>
                                    {item.title}
                                </Menu.Item>
                            )
                        })}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        Logo
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        Content
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div
                            ref={refs["1"]}>
                            nav 1
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div
                            ref={refs["2"]}>
                            nav 2
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div
                            ref={refs["3"]}>
                            nav 3
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;