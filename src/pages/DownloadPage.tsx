import LoadFile from "../components/LoadFile/LoadFile.tsx";
import Yandex from "../components/Yandex/Yandex.tsx";

const DownloadPage = () => {
    const access_token = new URLSearchParams(window.location.hash).get('#access_token');

    return (
        <div className="bg-gray-500 w-screen h-full flex justify-center">
            <Yandex isAuth={!access_token}/>
            <LoadFile/>
        </div>
    );
};

export default DownloadPage;