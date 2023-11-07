import logo from '../../assets/logo.svg'
import './Logo.css'

interface LogoProps {
    size: number
    opacity: string
}

export default function Logo(props: LogoProps) {

    return(
        <div className="logo__container">
            <img className="logo__icon" src={logo} alt="The logo's icon"/>
            <div className="logo__logotype">
                <h1 style={{
                    fontSize: props.size + "%",
                    opacity: props.opacity
                }}>Alessandro Cei</h1>
                <h3 style={{
                    fontSize: (props.size / 2) + "%",
                    opacity: props.opacity
                }}>iOS Developer</h3>
            </div>
        </div>
    )

}

