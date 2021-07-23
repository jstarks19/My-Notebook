



const Button = ({color, text, onShow, status}) => {
    let buttonStyle = status ? {color: "white", backgroundColor: "red"} : {color: "white", backgroundColor: color};
    let btnText = status ? 'Close' : 'Add';
    return (
        <button style={buttonStyle} onClick={onShow}>{btnText}</button>
    )
}


Button.defaultProps = {
    text: "click me",
    color: "white",
    backgroundColor: "black"
}






export default Button
