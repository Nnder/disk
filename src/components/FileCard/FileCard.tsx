import React from 'react';

type fileStatus = "Loading" | "Loaded" | "Failed" | "Selected";

interface FileProps {
    name: string;
    size: number;
    status: fileStatus;
}


const FileCard = ({name, size, status = "Selected"} : FileProps) => {
    return (
        <div className="bg-gray-200 w-80 p-2 m-1 h-24 rounded-xl border-2 hover:bg-gray-300">
            <div>Название: {name.trim().slice(0,20)}...</div>
            <div>Размер: {size}</div>
            <div>{status}</div>
        </div>
    );
};

export default FileCard;