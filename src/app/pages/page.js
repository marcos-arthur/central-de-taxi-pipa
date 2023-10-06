import Image from "next/image"
import { Container, Row, Col } from "react-bootstrap"
import pipa_beach from "../../../public/assets/pipa_beach.png"

export default function teste(){
    return(
        <Image
            alt="beach"
            src={pipa_beach}
            placeholder="blur"
            priority 
            quality={75} /* 100 */
            sizes="100vw"
            style={{
                objectFit: 'cover',
            }}
        />
    )
}