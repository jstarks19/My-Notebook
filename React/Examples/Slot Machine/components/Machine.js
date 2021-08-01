

class Machine extends React.Component {

    render() {

        function won(s1, s2, s3) {
            if ((s1 === s2) && (s1 === s3)) {
                return true;
            } else {
                return false;
            }
        }

        let {one:s1, two:s2, three:s3} = this.props.slotResults;
        
        return (
            <div>
                <h2> {s1} {s2} {s3} </h2>
                <span> {won(s1,s2,s3) ? "YOU WON!" : "YOU LOST!"} </span>
            </div>
        )

    }


}