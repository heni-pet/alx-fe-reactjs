function WelcomeMessage() {
    return (
        <div style={styles.card}>
            <div>
                <h1>Hello everyone, I am learning React at ALX!</h1>
                <p>This is a simple JSX component.</p>
                <p>I am learning about JSX!</p>
            </div>
        </div>
    );
}

const styles = {
    card: {
        border: "1px solid #ccc",
        fontSize: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        padding: "15px",
        maxWidth: "600px",
        margin: "20px auto",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }
};


export default WelcomeMessage;