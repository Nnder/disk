import React from 'react';

type fileStatus = "Loading" | "Loaded" | "Failed" | "Selected";

interface FileProps {
    name: string;
    size: number;
    status: fileStatus;
}

function setName(name: string): string{
    name = name.trim();
    if (name.length >= 20){
        return name.slice(0,20)+'...';
    }
    return name;
}



const FileCard = ({name, size, status = "Selected"} : FileProps) => {
    return (
        <div className="bg-gray-200 w-80 p-2 m-1 rounded-xl border-2 hover:bg-gray-300">
            <div>
                <div>Название: {setName(name)}</div>
                <div>Размер: {size}</div>
                <div>{status}</div>
            </div>

        </div>
    );
};

export default FileCard;