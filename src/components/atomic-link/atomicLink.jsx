import './atomicLink.css';

const AtomicLink = ({children, link}) => {
    return (
        <a
          className="App-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >{children}</a>
    )
}

export default AtomicLink