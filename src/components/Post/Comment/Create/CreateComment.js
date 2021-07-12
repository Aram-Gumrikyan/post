import { useState } from "react";

import CommentForm from "./Form";
import styles from "./CreateComment.module.scss";

const CreateComment = ({ action, id, index }) => {
    const [formVisibility, setFormVisibility] = useState(false);

    return (
        <div className={styles.createComment}>
            <button onClick={() => setFormVisibility(!formVisibility)}>
                <i className="fas fa-plus fa-2x"></i>
            </button>
            {formVisibility && <CommentForm index={index} action={action} id={id} />}
        </div>
    );
};

export default CreateComment;
