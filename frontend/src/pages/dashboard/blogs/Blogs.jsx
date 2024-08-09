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
//     const [editBlog, setEditBlog] = useState(null);

//     const { data, isSuccess, error } = useGetBlogsQuery();
//     const [deleteBlog] = useDeleteBlogMutation();
//     const [updateBlog] = useUpdateBlogMutation();

//     const showModal = () => {
//         setIsModalOpen(true);
//     };

//     const handleUpdate = (blog) => {
//         setEditBlog(blog);
//         showModal();
//     };

//     const handleOk = () => {
//         let updatePro = {
//             title: editBlog.title,
//             desc: editBlog.desc,
//         };
//         updateBlog({ body: updatePro, id: editBlog._id });
//         console.log(editBlog);
//         // setEditBlog(null);

//         setIsModalOpen(false);
//     };

//     const handleCancel = () => {
//         setIsModalOpen(false);
//     };

//     const onFinishFailed = (errorInfo) => {
//         console.log("Failed:", errorInfo);
//     };

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
//                     <div>
//                         <label htmlFor="">Title</label>
//                         <input
//                             name="title"
//                             type="text"
//                             value={editBlog?.title}
//                             onChange={(e) =>
//                                 setEditBlog((prev) => ({
//                                     ...prev,
//                                     title: e.target.value,
//                                 }))
//                             }
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="">Desc</label>
//                         <input
//                             name="desc"
//                             type="text"
//                             value={editBlog?.desc}
//                             onChange={(e) =>
//                                 setEditBlog((prev) => ({
//                                     ...prev,
//                                     desc: e.target.value,
//                                 }))
//                             }
//                         />
//                     </div>
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
import UpdateModal from "../../../components/update-modal/UpdateModal";

const Blogs = () => {
    const [editBlog, setEditBlog] = useState(null);
    const { data } = useGetBlogsQuery();
    const [deleteBlog] = useDeleteBlogMutation();

    const handleCancel = () => {
        setEditBlog(null);
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
                    onClick={() => setEditBlog(blog)}
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
            {editBlog ? (
                <UpdateModal editBlog={editBlog} handleCancel={handleCancel} />
            ) : (
                <></>
            )}
        </>
    );
};

export default Blogs;
