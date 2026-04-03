import { useState, useEffect } from "react";
import Card from "./Skeleton/Card";
import Skeleton from "./Skeleton/Skeleton";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "John Doe", email: "john@example.com", avatar: "https://i.pravatar.cc/200?img=1" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", avatar: "https://i.pravatar.cc/200?img=2" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", avatar: "https://i.pravatar.cc/200?img=3" },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", padding: "16px" }}>
      {loading
        ? Array(3).fill(0).map((_, i) => (
            <div key={i} style={{ width: "200px" }}>
              <Skeleton width="100%" height="150px" />
              <Skeleton width="80%" height="20px" />
              <Skeleton width="60%" height="16px" />
            </div>
          ))
        : users.map(user => <Card key={user.id} user={user} />)
      }
    </div>
  );
}

export default App;