import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { useState } from 'react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }
    function handleLikeComment() {
        setLikeCount((likes) => likes + 1);
    }
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/samuellucas21504.png" 
                alt=""
                />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Samuel Lucas</strong>

                            <time
                                title="16 de Agosto às 10:30" 
                                dateTime="2024-08-16 10:30:30">
                                    Cerca de 1h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title='Remover comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}