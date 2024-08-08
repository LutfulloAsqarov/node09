import React from "react";
import { useGetProfileQuery } from "../../context/api/userApi";

const Header = () => {
    const { data, isSuccess, isError, error } = useGetProfileQuery();
    console.log(data);
    console.log(error);
    return (
        <header className="px-10 py-4 bg-slate-400  ">
            <h2 className="text-white text-[24px]">
                {data?.payload?.fname} {data?.payload?.lname}
            </h2>
        </header>
    );
};

export default Header;
