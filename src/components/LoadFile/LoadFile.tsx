import React, {useState, useRef} from 'react';
import DownloadImg from '../../assets/download-svgrepo-com.svg';
import FileCard from "../FileCard/FileCard.tsx";
const LoadFile = () => {
    const [files, setFiles] = useState<File[]>([]);
    const ref = useRef<HTMLInputElement>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files)
        const files: File[] = Array.from(e.target.files ?? [])
        setFiles(files)
    }

    const handleClick = ()=>{
        ref.current?.click();
    }

    return (
        <div className="flex flex-col items-center m-4">

            <div onClick={handleClick}
                className="w-44 p-4 m-2 flex flex-col items-center gap-2 bg-blue-200 text-black rounded-lg hover:bg-blue-300 cursor-pointer">
                <img src={DownloadImg} alt="file" className="w-16"/>
                <div>Выбрать файлы</div>
                <input type="file" multiple={true} ref={ref} onChange={handleChange} className="hidden"/>
            </div>

            <div className="m-2">
                {files.map((file, i)=>(
                    <FileCard key={i} name={file.name} size={file.size} status={'Selected'}/>
                ))}

            </div>




        </div>
    );
};

export default LoadFile;
