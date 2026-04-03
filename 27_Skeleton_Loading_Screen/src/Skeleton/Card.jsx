
const Card = ({ user }) => {
    return (
        <div style={{
            border: "1px solid #ddd",
            padding: "16px",
            borderRadius: "8px",
            width: "200px",
            margin: "16px"
        }}>
            <img
                src={user.avatar}
                alt={user.name}
                style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h3 style={{ margin: "8px 0 4px 0" }}>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    );
};

export default Card;