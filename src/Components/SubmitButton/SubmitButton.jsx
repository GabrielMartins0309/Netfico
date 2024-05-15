import "./SubmitButton.css"

const SubmitButton = ({ btnText }) => {
    return (
        <div>
            <button className="submitBtn">{btnText}</button>
        </div>
    )
}

export default SubmitButton