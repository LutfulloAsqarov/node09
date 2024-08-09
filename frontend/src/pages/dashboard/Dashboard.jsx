import React, { useState } from "react";
// import Header from "../../components/header/Header";
// import Blogs from "../blogs/Blogs";
// import { Flex, Layout } from "antd";
// const { Header, Sider, Content } = Layout;

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
// import Blogs from "../blogs/Blogs";
import { Link, Outlet } from "react-router-dom";
import { useGetProfileQuery } from "../../context/api/userApi";
const { Header, Sider, Content } = Layout;

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { data } = useGetProfileQuery();
    console.log(data);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout
            // style={{
            //     minHeight: "100vh",
            // }}
            className="min-h-screen"
        >
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {/* <div className="demo-logo-vertical" /> */}
                <div className="demo-logo-vertical">asdf</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    // className="w-[400px]"
                    items={[
                        {
                            key: "1",
                            icon: (
                                <Link to={"createBlog"}>
                                    <UserOutlined />
                                </Link>
                            ),
                            label: "Create blog",
                        },
                        {
                            key: "2",
                            icon: (
                                <Link to={"manageBlogs"}>
                                    <VideoCameraOutlined />
                                </Link>
                            ),
                            label: "Manage blog",
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                    className="flex"
                >
                    <Button
                        type="text"
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                    <h2 className="text-[22px]">{data?.payload?.fname}</h2>
                </Header>
                <Outlet
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                ></Outlet>
            </Layout>
        </Layout>
    );
};

export default Dashboard;
