

class App extends React.Component {
    render() {
        let status = "hello";
        return (
            <Message  status={status && status}/>
        )
    }
}



ReactDOM.render(
    <App />,
    document.querySelector('#root')
)