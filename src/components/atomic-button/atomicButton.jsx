import './atomicButton.css'

const AtomicButton = ({children}) => {
    const handleClick = () => {
        alert('Se pulso el boton')
    }
    return (
        <button onClick={handleClick}>{children}</button>
    )
}

export default AtomicButton