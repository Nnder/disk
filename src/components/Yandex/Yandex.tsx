import React, {useRef} from 'react';
import yandex from '../../assets/yandex-ru-svgrepo-com.svg'

const url = 'https://oauth.yandex.ru/authorize?response_type=token&client_id=825d1cdcf8704fadb729620d362282af'

// https://oauth.yandex.ru/client/825d1cdcf8704fadb729620d362282af
// y0_AgAAAAA1GsUuAApAVQAAAADo-8ifELQONesWTaCop6RXkIeDuYgKenY
// Authorization: Oauth
// Authorization: OAuth oauth_token="авторизационный_токен", oauth_client_id="идентификатор_приложения"


// https://localhost:5173/#
// access_token=y0_AgAAAAA1GsUuAApAVQAAAADo-8ifELQONesWTaCop6RXkIeDuYgKenY
// &token_type=bearer&expires_in=31536000&
// scope=cloud_api%3Adisk.read%20cloud_api%3Adisk.app_folder%20login%3Ainfo%20cloud_api%3Adisk.info

interface YaProps {
    isAuth: boolean;
}

const Yandex = ({ isAuth}: YaProps) => {
    const button = useRef<HTMLButtonElement>(null)
    const auth = ()=>{
        window.location.replace(url);
    }

    if (isAuth){
        return (
            <dialog open>
                <div className="bg-white flex justify-center items-center w-screen h-screen">
                    <form method="dialog">
                        <button ref={button} onClick={auth} className="bg-yellow-300 rounded-xl p-4 m-2">
                            Авторизоваться через <span className="text-red-700">Я</span>ндекс
                        </button>
                    </form>
                </div>
            </dialog>


        );
    }
};

export default Yandex;