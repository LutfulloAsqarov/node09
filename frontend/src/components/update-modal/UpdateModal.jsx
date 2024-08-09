import React, { useEffect } from "react";
import { useUpdateBlogMutation } from "../../context/api/blogApi";
import { Button, Form, Input, Modal } from "antd";

const UpdateModal = ({ editBlog, handleCancel }) => {
    const [updateBlog, { isSuccess, isLoading }] = useUpdateBlogMutation();
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onFinish = (values) => {
        updateBlog({ body: values, id: editBlog._id });
    };

    useEffect(() => {
        if (isSuccess) {
            handleCancel();
        }
    }, [isSuccess]);

    return (
        <Modal
            title="Edit Blog"
            open={editBlog}
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
                        title: editBlog?.title,
                        desc: editBlog?.desc,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        // key={editBlog.title}
                        label="Title"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: "Please input blog title!",
                            },
                        ]}
                    >
                        <Input value={editBlog?.title} />
                    </Form.Item>

                    <Form.Item
                        key={editBlog?.desc}
                        label="Desc"
                        name="desc"
                        rules={[
                            {
                                required: true,
                                message: "Please input blog desc!",
                            },
                        ]}
                    >
                        <Input value={editBlog?.desc} />
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

export default UpdateModal;
