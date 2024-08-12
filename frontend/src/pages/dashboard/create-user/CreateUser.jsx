import { Button, Form, Input } from "antd";
import React from "react";
import {
    useGetUsersQuery,
    useRegisterUserMutation,
} from "../../../context/api/userApi";

const CreateUser = () => {
    const [createUser, { data }] = useRegisterUserMutation();
    const { data: users } = useGetUsersQuery();
    console.log(users?.payload);
    const handleSubmit = (values) => {
        // createBlog(values);
        createUser(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div className="max-sm:p-4 p-6 flex-col gap-2">
            <h2 className="text-2xl font-medium">Add User</h2>
            <Form
                name="basic"
                layout="vertical"
                className="w-96 max-sm:w-full"
                initialValues={{
                    remember: true,
                }}
                onFinish={handleSubmit}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="First name"
                    name="fname"
                    rules={[
                        {
                            required: true,
                            message: "Please input blog title!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Last name"
                    name="lname"
                    rules={[
                        {
                            required: true,
                            message: "Please input blog desc!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input blog desc!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input blog desc!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Age"
                    name="age"
                    rules={[
                        {
                            required: true,
                            message: "Please input blog desc!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Url"
                    name="url"
                    rules={[
                        {
                            required: true,
                            message: "Please input blog desc!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Gender"
                    name="gender"
                    rules={[
                        {
                            required: true,
                            message: "Please input blog desc!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Budget"
                    name="budget"
                    rules={[
                        {
                            required: true,
                            message: "Please input blog desc!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full">
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateUser;
