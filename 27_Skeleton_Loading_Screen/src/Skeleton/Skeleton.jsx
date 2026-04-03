
import "./Skeleton.css";

const Skeleton = ({ width, height, circle }) => {
    const style = {
        width: width || "100%",
        height: height || "16px",
        borderRadius: circle ? "50%" : "4px",
        marginBottom: "8px",
    };

    return <div className="skeleton" style={style}></div>;
};

export default Skeleton;