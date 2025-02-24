const AccordionList = ({ title, isActive, onSelect }) => {
    const active = isActive ? "btn-warning" : "btn-primary"
    return (
        <button className={`btn m-2 ${active}`} onClick={() => onSelect()}>{title}</button>
    )


}

export default AccordionList