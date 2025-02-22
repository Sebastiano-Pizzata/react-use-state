import { useState } from "react"

const AccordionList = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { faq } = props;
    const { title, description } = faq;

    const handleAccordion = () => setIsOpen(!isOpen);

    return (
        <>
            <div className=" m-3">
                <button className="btn bg-primary text-white" onClick={handleAccordion}>{title}</button>
            </div>
            <div className=" mt-5">
                <div className="card">
                    {isOpen && <h4 className="p-2">{title} </h4>}
                    {isOpen && <p className="p-2">{description}</p>}
                </div>
            </div>


        </>


    )


}

export default AccordionList