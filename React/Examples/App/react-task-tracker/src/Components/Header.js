import Button from "./Button"

const Header = ({title, onShow, status}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Add" onShow={onShow} status={status}/>
        </header>            
    )
}


Header.defaultProps = {
    title: "Task Tracker",
}




export default Header
