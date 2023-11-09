import "./SectionTitle.css"

interface SectionTitleProps {
    color:string
    title:string
    subtitle:string
}

export default function SectionTitle(props: SectionTitleProps) {

    return (
        <div className="section-title__container">
            <h1 style={{
                color: props.color
            }}>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    )

}