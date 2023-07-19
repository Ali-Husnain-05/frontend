import styles from './Textinput.module.css';

function Textinput (props) {
    return (
        <div className={styles.textinputwrapper}>
            <input {...props}/>
            {props.error && <p className={styles.errorMessage}>{props.errormessage}</p>}
        </div>
    )
}

export default Textinput;