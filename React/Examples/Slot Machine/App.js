

class App extends React.Component {

    render() {

        let values = ['🍇', '🍒', '🍌', '🍏'];
        
        function getSlotValue() {
            let idx = Math.floor(Math.random() * values.length);
            let v = values[idx];
            return v;
        }
              

        return(
            <div>
                <Machine slotResults={{one: getSlotValue(), two: getSlotValue(), three: getSlotValue()}}/>
                <Machine slotResults={{one: getSlotValue(), two: getSlotValue(), three: getSlotValue()}}/>
                <Machine slotResults={{one: getSlotValue(), two: getSlotValue(), three: getSlotValue()}}/>
            </div>
        )
    }

}



ReactDOM.render(
    <App />,
    document.querySelector('#root')
);