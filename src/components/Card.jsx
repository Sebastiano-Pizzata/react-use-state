const Card = ({ title, text }) => {
    return (
        <div className="card container">
            <div className="card-body ">
                <div className="card-title">{title}</div>
                <p className="card-text">{text}</p>
            </div>
        </div>
    )
}

export default Card