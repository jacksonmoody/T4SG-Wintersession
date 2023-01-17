

function HowBlockingWorks(props) {
    return (
        <div className="HowBlockingWorks">
            <div className="box" style={
                {
                    border: "4px solid",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                    padding: "10px"
            }}>
                <h2 style={{
                    margin: "0",
                }}>How Blocking Works</h2>
                <p style={{
                    textAlign: "center"
                }}>
                Blocking is a process in which first-years form 
                self-selected groups of one to eight people who will 
                then be placed into the same house on Housing Day in the spring.
                <br />
                It is not necessary that you become roommates with your blockmates your sophomore year, 
                but you do have the option to do so. 
                <br />
                This platform is here to facilitate your blocking experience!
                </p>
                
            </div>
        </div>
    );
}

export default HowBlockingWorks;