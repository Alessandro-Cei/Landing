import "./SkillsGrid.css";

const backgroundColors:string[] = ["#6CE0FF", "#CDA1FF", "#FFA14F", "#B9F08D", "#D9C668"];
const colors:string[] = ["#0A8DB3", "#8F4B97", "#CC7332", "#7EAA57", "#A5903A"];

interface SkillsGridProps {
    skills:string[]
}
export default function SkillsGrid(props: SkillsGridProps) {

    return(
        <div className="skills-grid__container">
            {props.skills.map((element, index) => (
                <span key={index} className='pill' style={{backgroundColor: backgroundColors[index % colors.length], color: colors[index % colors.length]}}>
                    {element}
                </span>
            ))}
        </div>
    )

}