function Title(props) {
    return (
        <div className="Title">
             <div className="box" style={
                 {
                     justifyContent: "center",
                     alignItems: "center",
                     display: "flex",
                     flexDirection: "column",
                     width: "80%",
                     padding: "5px"
             }}>
                 <h2 style={{
                     margin: "0",
                 }}>The Blocking Grouper</h2>
                 <h3 style={{
                     textAlign: "center"
                 }}>
                 How it works
                 <br />
                 </h3>

             </div>
         </div>
    );
}

export default Title;