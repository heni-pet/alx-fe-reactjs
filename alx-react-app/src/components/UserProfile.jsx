const UserProfile = (props) => {
  return (
    <div style={styles.card}>
      <h1>{props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Bio: {props.bio}</h3>
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
