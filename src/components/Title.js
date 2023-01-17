function Title(props) {
    return (
        <div className="Title">
             <div className="box" style={
                 {
                     justifyContent: "center",
                     alignItems: "center",
                     display: "flex",
                     flexDirection: "column",
                     width: "100%",
                     padding: "5px"
             }}>
                 <h1 style={{
                     marginTop: "20px",
                 }}>The Blocking Grouper</h1>

             </div>
         </div>
    );
}

export default Title;