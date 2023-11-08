import "./PillsRow.css"

const backgroundColors:string[] = ["#6CE0FF", "#CDA1FF", "#FFA14F", "#B9F08D", "#D9C668"];
const colors:string[] = ["#0A8DB3", "#8F4B97", "#CC7332", "#7EAA57", "#A5903A"];

interface PillsRowProps {
    speed: string
    direction: string
    technologies: string[]
}

export default function PillsGrid(props: PillsRowProps) {
    const styled = {
        "--t": props.speed,
        "--a": "animation" + props.direction,
        "--a2": "animation" + props.direction + "2"
    } as React.CSSProperties;
    return(

        
        <div className="pills-row__container">
            <div className="pills-row__scroll" style={styled}>
                <div>
                    {props.technologies.map((element, index) => (
                        <span key={index} className='pill' style={{backgroundColor: backgroundColors[index % colors.length], color: colors[index % colors.length]}}>
                            {element}
                        </span>
                    ))}
                </div>
                <div>
                    {props.technologies.map((element, index) => (
                        <span key={index} className='pill' style={{backgroundColor: backgroundColors[index % colors.length], color: colors[index % colors.length]}}>
                        {element}
                        </span>
                    ))}
                </div>
            </div>
        </div>
         
    )
}