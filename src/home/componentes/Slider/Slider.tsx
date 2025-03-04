import { useEffect, useState } from "react"
import Img1 from "../../imagens/Img1.png"
import Img2 from "../../imagens/img2.png"
import Img3 from "../../imagens/img3.png"
import Img4 from "../../imagens/img4.png"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css";
import { useContext } from "react"
import ContextArmValue from "../../../Contex/Contex.tsx"



const Slider= ()=>{
    const [ activeSlide, setSlide ]= useState(0)
    const [ RotateAplic, setRotate ]= useState<string | undefined>()
    const { ManipulationBack, RotateImg, TimeRotate }= useContext(ContextArmValue)

    const ActiveSlide= (e: any)=>{
        setSlide(e.realIndex)
    }

    //identificador de slide ativo
    useEffect(()=>{
       ManipulationBack(activeSlide)
    }, [activeSlide])

    //Modificacao de rotacao
    useEffect(()=>{
        setRotate(RotateImg)
        console.log(RotateAplic)
    }, [activeSlide])


    const StyleImg= 'w-[330px] h-[300px] object-cover'
    return(
        <section className="absolute w-full h-[350px]">
            <Swiper className="w-full" style={{ display: "flex", justifyContent: "center", paddingLeft: "39%", alignItems: 'center'}} loop={true} centeredSlides={true} slidesPerView={1} modules={[Navigation]} navigation={{nextEl: ".Next-Previw", prevEl: ".Back-previw"}} onSlideChange={ActiveSlide} simulateTouch={false} speed={1200}>
                    <SwiperSlide className="flex justify-center items-center"><img style={{transform: `${RotateAplic}`, transition: `${TimeRotate}`}} className='w-[300px] h-[300px] object-cover' src={Img1}/></SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center"><img style={{transform: `${RotateAplic}`, transition: `${TimeRotate}`}} className={StyleImg} src={Img2}/></SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center"><img style={{transform: `${RotateAplic}`, transition: `${TimeRotate}`}} className={StyleImg} src={Img3}/></SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center"><img style={{transform: `${RotateAplic}`, transition: `${TimeRotate}`}} className={StyleImg} src={Img4}/></SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Slider