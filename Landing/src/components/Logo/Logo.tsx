import logo from '../../assets/logo.svg'
import './Logo.css'

interface LogoProps {
    size: number
    opacity: string
}

export default function Logo(props: LogoProps) {
    let titleSize = {
        fontSize: props.size + "%",
        opacity: props.opacity
    }
    let descriptionSize = {
        fontSize: (props.size / 2) + "%",
        opacity: props.opacity
    }
    return(
        <div id="logoContainer">
            <img id="logo" src={logo} alt=""/>
            <div id="title">
                <h1 style={titleSize}>Alessandro Cei</h1>
                <h3 style={descriptionSize}>iOS Developer</h3>
            </div>
        </div>
    )

}

