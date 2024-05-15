import "./Input.css"

const Input = ({type,placeholder, id, onChange, value}) => {
    return (
        <div className="LoginForm">
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                onChange={onChange}
                value={value}
                className="inputLogins"
            />
        </div>
    )
}

export default Input