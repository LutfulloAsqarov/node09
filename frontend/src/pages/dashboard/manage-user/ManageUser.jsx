import React, { useState } from "react";
import { useGetUsersQuery } from "../../../context/api/userApi";
import UpdateUser from "../../../components/update-user/UpdateUser";
import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

const ManageUser = () => {
    const [editUser, setEditUser] = useState(null);
    const { data } = useGetUsersQuery();
    // const [deleteBlog] = useDeleteBlogMutation();

    let user = data?.payload?.map((user) => (
        <div
            key={user._id}
            className="bg-gray-200 px-5 py-4 rounded-lg flex items-end justify-between"
        >
            <div>
                <h3 className="text-[20px] font-bold">
                    {user.fname} {user.lname}
                </h3>
                <p>{user.budget}</p>
            </div>
            <div className="flex items-center gap-2">
                <Button
                    type="primary"
                    shape="circle"
                    onClick={() => setEditUser(user)}
                >
                    <EditOutlined />
                </Button>
                {/* <Button
                    danger
                    shape="circle"
                    onClick={() => deleteBlog(blog._id)}
                >
                    <DeleteOutlined />
                </Button> */}
            </div>
        </div>
    ));

    const handleCancel = () => {
        setEditUser(null);
    };
    return (
        <>
            <div className="p-6 grid grid-cols-4 gap-5">{user}</div>
            {editUser ? (
                <UpdateUser editUser={editUser} handleCancel={handleCancel} />
            ) : (
                <></>
            )}
        </>
    );
};

export default ManageUser;
