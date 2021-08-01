
class Message extends React.Component {
    render() {
        return(
            <h1>{this.props.status ? this.props.status : 'Hello'}, World!</h1>
        )
    }
}