import React, { useEffect } from "react";
// import { useUpdateBlogMutation } from "../../context/api/blogApi";
import { Button, Form, Input, Modal } from "antd";
import { useUpdateUserMutation } from "../../context/api/userApi";

const UpdateUser = ({ editUser, handleCancel }) => {
    const [updateUser, { isSuccess, isLoading }] = useUpdateUserMutation();
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onFinish = (values) => {
        updateUser({ body: values, id: editUser._id });
    };

    useEffect(() => {
        if (isSuccess) {
            handleCancel();
        }
    }, [isSuccess]);

    return (
        <Modal
            title="Edit Blog"
            open={editUser}
            onCancel={handleCancel}
            confirmLoading={isLoading}
            footer={false}
        >
            <div className="max-sm:p-4 p-6 flex-col gap-4">
                <Form
                    name="basic"
                    layout="vertical"
                    className="w-full max-sm:w-full"
                    initialValues={{
                        title: editUser?.title,
                        desc: editUser?.desc,
                    }}
                    onFinish={onFinish}
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
                        <Input value={editUser?.fname} />
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
                        <Input value={editUser?.lname} />
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
                        <Input value={editUser?.password} />
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
                        <Input value={editUser?.password} />
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
                        <Input value={editUser?.url} />
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
                        <Input value={editUser?.gender} />
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
                        <Input value={editUser?.budget} />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Modal>
    );
};

export default UpdateUser;
