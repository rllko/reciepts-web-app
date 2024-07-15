function Footer(){
    return(<footer className="bg-orange-200 flex justify-between px-16 items-center">
        <div>
            <img className="p-2 l- hover:cursor-pointer" src="./src/assets/img/logo nobg small.png" width={"90px"} alt="" />
        </div>
        <p className="text-xs text-center">© CopyRight 2022 - MixList Corporation</p>
        <button className=
        "flex text-[10px] bg-transparent justify-center \
         items-center p-4 px-5 rounded-lg border-2 mr-3 relative \
         w-[100] align-text-top h-[3vw] border-black \
         hover:bg-gradient-to-tr cursor-pointer hover:from-orange-100 \
         shadow-solid hover:to-orange-300 text-md hover:font-bold">
        Registra-te gratuitamente
        </button>
    </footer>)
}

export default Footer;