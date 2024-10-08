import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { timeAgo } from "../utils/timeAgo";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps {
    author: Author;
    content: Content[];
    publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
    const [newCommentText, setNewCommentText] = useState('');
    const [comments, setComments] = useState(['Post muito bacana, hein?!']);

    const isNewCommentInputEmpty = newCommentText.length === 0;

    const publishedDateRelativeToNow = timeAgo(publishedAt);
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    }).format(publishedAt);

    function handleCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.preventDefault();
        event.target.setCustomValidity('');

        setNewCommentText(event.target.value);
    }

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        if(newCommentText.length === 0) return;
        
        setComments(prevState => [...prevState, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        });

        setComments(commentsWithoutDeletedOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line) => {
                    if(line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if(line.type === 'link') {
                        return <p key={line.content}><a href=''>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea
                    placeholder="Deixe um comentário"
                    onChange={handleCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    value={newCommentText}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentInputEmpty}>
                        Comentar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => {
                    return (
                        <Comment
                            key={comment}
                            onDeleteComment={deleteComment}
                            content={comment} 
                        />
                    );
                })}
            </div>
        </article>
    );
}