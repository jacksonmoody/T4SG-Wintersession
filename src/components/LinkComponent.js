function LinkComponent(props) {
    //Anything passed into the component can be accessed via props.(something)
    return (
        <>
        <div className="Linking">
                <div className="box" style={{
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
                    }}>What is Linking?</h2>
                    <p style={{
                        textAlign: "center"
                    }}>
                        Blocking groups can “link” with another blocking group, which means that you will be placed in the same “House Neighborhood,” within a two-minute walk. They will not be in the same house. This usually occurs with groups that are too large to include in one block.
                    
                    </p>
                </div>
            </div></>
    );
}

export default LinkComponent;