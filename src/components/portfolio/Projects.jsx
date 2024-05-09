import "./project.css"


export function Projects({proj, des, img, link}){
    return (
        <div id="projects" className="w-[27rem] h-[32rem] flex justify-center">
            <a href={link} className="w-[25rem] h-[30rem] flex flex-col justify-center items-center">
                <img src={img} alt="" className="w-[25rem] h-[25rem] object-center object-contain" />
                <div className="w-[20rem] flex flex-col text-center" id="text">
                    <p className="text-[20px] font-bold text-[#A98F76]">{proj}</p>
                    <p className="text-[12px] text-[#A98F76]">{des}</p>
                </div>
            </a>
        </div>
    )
}