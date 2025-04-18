//Language.jsx

import React from 'react'
import { popularAlbumsData } from '../assets/assets'
import { useNavigate } from "react-router-dom";

const Language = () => {
    const navigate = useNavigate();
    
    return (
        <div className="bg-[#ffffff26] rounded-[3px] mt-5 mb-5 pt-4">
            <p className="ml-7 font-bold underline">All Language</p>
            <table className="table-auto w-full text-[#a2a2a2]">
                <thead>
                    <tr className="border-b">
                        <th className="text-left p-2">#</th>
                        <th className="text-left p-2">Artist name</th>
                        <th className="hidden md:table-cell text-left p-2">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {popularAlbumsData.map((item, index) => (
                        <tr 
                            key={index} 
                            className="hover:bg-[#fff3] cursor-pointer" 
                            onClick={() => navigate(`/album/${item.name}/${item.id}`)}
                        >
                            <td className="p-2 font-bold text-[#fff]">{index + 1}</td>
                            <td className="p-2 font-bold text-[#fff]">
                                {item.name}
                            </td>
                            <td className="p-2 font-bold text-[#fff]">
                                {item.desc.length > 50 ? `${item.desc.substring(0, 50)}...` : item.desc}
                            </td>
                            <td className="p-2 font-bold text-[#fff]">{item.lang}</td>
                            <td className="p-2 font-bold text-[#fff]">{item.date}</td>
                            <td className="p-2 font-bold text-[#fff]">{item.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Language;
