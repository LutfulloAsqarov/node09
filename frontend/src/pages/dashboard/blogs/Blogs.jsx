// import React, { useEffect, useState } from "react";
// import {
//     useDeleteBlogMutation,
//     useGetBlogsQuery,
//     useUpdateBlogMutation,
// } from "../../../context/api/blogApi";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import { Button, Form, Input, Modal } from "antd";

// const Blogs = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [editBlog, setEditBlog] = useState({
//         title: "",
//         desc: "",
//     });
//     const [selectedBlog, setSelectedBlog] = useState(null);

//     const { data, isSuccess, error } = useGetBlogsQuery();
//     const [deleteBlog] = useDeleteBlogMutation();
//     const [updateBlog] = useUpdateBlogMutation();

//     const showModal = () => {
//         setIsModalOpen(true);
//     };

//     const handleOk = (e) => {
//         e.preventDefault();
//         let updatePro = {
//             title: editBlog.title,
//             desc: editBlog.desc,
//         };
//         updateBlog({ body: updatePro, id: editBlog._id });
//         setEditBlog(null);

//         setIsModalOpen(false);
//     };

//     const handleCancel = () => {
//         // setEditBlog(null);
//         setIsModalOpen(false);
//     };

//     const handleSubmit = (values) => {
//         createBlog(values);
//     };

//     useEffect(() => {
//         if (selectedBlog) {
//             setEditBlog({
//                 title: selectedBlog.title,
//                 desc: selectedBlog.desc,
//             });
//         }
//     }, [selectedBlog]);

//     const handleUpdate = (blog) => {
//         setSelectedBlog(blog);
//         showModal(true);
//         console.log(editBlog);
//     };

//     const onFinishFailed = (errorInfo) => {
//         console.log("Failed:", errorInfo);
//     };

//     // const handleUpdatedUser = (e) => {
//     //     e.preventDefault();
//     //     let updatePro = {
//     //         title: editCategory.title,
//     //     };
//     //     updateCategory({ body: updatePro, id: editCategory.id });
//     //     setEditBlog(false);
//     // };

//     let blog = data?.payload?.map((blog) => (
//         <div
//             key={blog._id}
//             className="bg-gray-200 px-5 py-4 rounded-lg flex items-end justify-between"
//         >
//             <div>
//                 <h3 className="text-[20px] font-bold">{blog.title}</h3>
//                 <p>{blog.desc}</p>
//             </div>
//             <div className="flex items-center gap-2">
//                 <Button
//                     type="primary"
//                     shape="circle"
//                     onClick={() => handleUpdate(blog)}
//                 >
//                     <EditOutlined />
//                 </Button>
//                 <Button
//                     danger
//                     shape="circle"
//                     onClick={() => deleteBlog(blog._id)}
//                 >
//                     <DeleteOutlined />
//                 </Button>
//             </div>
//         </div>
//     ));
//     return (
//         <>
//             <div className="p-6 grid grid-cols-2 gap-5">{blog}</div>
//             <Modal
//                 title="Edit Blog"
//                 open={isModalOpen}
//                 onOk={handleOk}
//                 onCancel={handleCancel}
//             >
//                 <div className="max-sm:p-4 p-6 flex-col gap-4">
//                     {/* <h2 className="text-2xl font-medium">Create Blog</h2> */}
//                     <Form
//                         name="basic"
//                         layout="vertical"
//                         className="w-full max-sm:w-full"
//                         initialValues={{
//                             title: editBlog?.title,
//                             desc: editBlog?.desc,
//                         }}
//                         onFinish={handleSubmit}
//                         onFinishFailed={onFinishFailed}
//                         autoComplete="off"
//                     >
//                         <Form.Item
//                             // key={editBlog.title}
//                             label="Title"
//                             name="title"
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: "Please input blog title!",
//                                 },
//                             ]}
//                         >
//                             <Input
//                                 value={editBlog?.title}
//                                 onChange={(e) =>
//                                     setEditBlog((prev) => ({
//                                         ...prev,
//                                         title: e.target.value,
//                                     }))
//                                 }
//                             />
//                         </Form.Item>

//                         <Form.Item
//                             key={editBlog.desc}
//                             label="Desc"
//                             name="desc"
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: "Please input blog desc!",
//                                 },
//                             ]}
//                         >
//                             <Input
//                                 value={editBlog?.desc}
//                                 onChange={(e) =>
//                                     setEditBlog((prev) => ({
//                                         ...prev,
//                                         desc: e.target.value,
//                                     }))
//                                 }
//                             />
//                         </Form.Item>
//                     </Form>
//                 </div>
//             </Modal>
//         </>
//     );
// };

// export default Blogs;

import React, { useEffect, useState } from "react";
import {
    useDeleteBlogMutation,
    useGetBlogsQuery,
    useUpdateBlogMutation,
} from "../../../context/api/blogApi";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";

const Blogs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editBlog, setEditBlog] = useState(null);

    const { data, isSuccess, error } = useGetBlogsQuery();
    const [deleteBlog] = useDeleteBlogMutation();
    const [updateBlog] = useUpdateBlogMutation();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        let updatePro = {
            title: editBlog.title,
            desc: editBlog.desc,
        };
        updateBlog({ body: updatePro, id: editBlog._id });
        setEditBlog(null);

        console.log(editBlog.id);

        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // useEffect(() => {
    //     if (selectedBlog) {
    //         setEditBlog({
    //             title: selectedBlog.title,
    //             desc: selectedBlog.desc,
    //             _id: selectedBlog._id, // _id ni saqlashni unutmang
    //         });
    //     }
    // }, [selectedBlog]);

    const handleUpdate = (blog) => {
        setEditBlog(blog);
        showModal();
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    let blog = data?.payload?.map((blog) => (
        <div
            key={blog._id}
            className="bg-gray-200 px-5 py-4 rounded-lg flex items-end justify-between"
        >
            <div>
                <h3 className="text-[20px] font-bold">{blog.title}</h3>
                <p>{blog.desc}</p>
            </div>
            <div className="flex items-center gap-2">
                <Button
                    type="primary"
                    shape="circle"
                    onClick={() => handleUpdate(blog)}
                >
                    <EditOutlined />
                </Button>
                <Button
                    danger
                    shape="circle"
                    onClick={() => deleteBlog(blog._id)}
                >
                    <DeleteOutlined />
                </Button>
            </div>
        </div>
    ));

    return (
        <>
            <div className="p-6 grid grid-cols-2 gap-5">{blog}</div>
            <Modal
                title="Edit Blog"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div className="max-sm:p-4 p-6 flex-col gap-4">
                    <div>
                        <label htmlFor="">Title</label>
                        <input
                            name="title"
                            type="text"
                            value={editBlog?.title}
                            onChange={(e) =>
                                setEditBlog((prev) => ({
                                    ...prev,
                                    title: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor="">Desc</label>
                        <input
                            name="desc"
                            type="text"
                            value={editBlog?.desc}
                            onChange={(e) =>
                                setEditBlog((prev) => ({
                                    ...prev,
                                    desc: e.target.value,
                                }))
                            }
                        />
                    </div>
                    {/* <Form
                        name="basic"
                        layout="vertical"
                        className="w-full max-sm:w-full"
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input blog title!",
                                },
                            ]}
                        >
                            <Input
                                value={editBlog.title}
                                onChange={(e) =>
                                    setEditBlog((prev) => ({
                                        ...prev,
                                        title: e.target.value,
                                    }))
                                }
                            />
                        </Form.Item>

                        <Form.Item
                            label="Desc"
                            name="desc"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input blog desc!",
                                },
                            ]}
                        >
                            <Input
                                value={editBlog.desc}
                                onChange={(e) =>
                                    setEditBlog((prev) => ({
                                        ...prev,
                                        desc: e.target.value,
                                    }))
                                }
                            />
                        </Form.Item>
                    </Form> */}
                </div>
            </Modal>
        </>
    );
};

export default Blogs;
