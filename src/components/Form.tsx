type FormProps = {
    setCity: React.Dispatch<React.SetStateAction<string>>
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void
}  

const Form = (props: FormProps) => {
    return (
        <form onSubmit={props.getWeather}>
            <input type="text" 
                   name="city" 
                   placeholder="都市名"
                   onChange={e => props.setCity(e.target.value)} 
            />
            <button type="submit">
                Get Weather
            </button>
        </form>
    )
}

export default Form