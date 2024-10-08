import styles from './Avatar.module.css';

interface AvatarProps {
    hasBorder?: boolean;
    alt?: string;
    src: string;
}

export function Avatar({src, hasBorder = true, alt}: AvatarProps) {
    return (
        <img 
            src={src} 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            alt={alt}
        />
    )
}