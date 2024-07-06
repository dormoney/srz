import './Header.css'

export default function Header(){
    return(
        <>
            <header className="pt-[20px] pb-[20px] bg-[#54a431] flex justify-center text-white text-[30px]">
                <div className="container flex justify-between">
                    <h1 className="font-semibold">SAFQ</h1>
                    <div className="navig text-[24px] pt-[5px] flex gap-[20px]">
                        <p className="nav_text">Главная</p>
                        <p className="nav_text">О нас</p>
                        <p className="nav_text">Каталог</p>
                        <p className="nav_text">Контакты</p>
                    </div>
                </div>
            </header>
        </>
    );
}
