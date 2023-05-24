import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
interface CommentProps {
  content: string;
  onDeleteComment: (comment: string ) => void;
}
export function Comment({content, onDeleteComment}: CommentProps) {
  //console.log(content);
  const [likeCount, setLikeCount] = useState(0);

  function handleDelete() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
     //setLikeCount(likeCount + 1);
    setLikeCount(state => state + 1)
  }
  
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/49591462?v=4"
        alt=""
        
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTimes}>
              <strong>Eduardo Alves</strong>
              <time title="26 de Abril 08:15h" dateTime="2023-05-11 17:30:00">
                Há 1h atrás
              </time>
            </div>
            <button
              onClick={handleDelete}
              title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir
            <span>{likeCount}</span>
          </button >
        </footer>
      </div>
    </div>
  );
}
