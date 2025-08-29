const UserProfile = (props) => {
  return (
    <div style={styles.card}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>{props.bio}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    maxWidth: "300px",
    margin: "20px auto",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
  }
};

export default UserProfile;
