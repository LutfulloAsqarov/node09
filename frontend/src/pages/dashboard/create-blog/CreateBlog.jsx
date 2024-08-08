import React, { useEffect } from "react";
import { useSignInMutation } from "../../../context/api/userApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { useCreateBlogMutation } from "../../../context/api/blogApi";

const CreateBlog = () => {
    // const [signIn, { data, isSuccess, error }] = useSignInMutation();
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    const [createBlog, { data }] = useCreateBlogMutation();

    const handleSubmit = (values) => {
        createBlog(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div className="max-sm:p-4 p-6 flex-col gap-4">
            <h2 className="text-2xl font-medium">Create Blog</h2>
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
                    label="Title"
                    name="title"
                    rules={[
                        {
                            message: "Please input blog title!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Desc"
                    name="desc"
                    rules={[
                        {
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

export default CreateBlog;
