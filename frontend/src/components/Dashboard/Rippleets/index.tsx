import { useEffect, useRef, useState } from "react";
import { useCreateRippleetMutation,
    useDeleteRippleetMutation,
    useGetRippleetsQuery,
    useLikeRippleetMutation,
    useUpdateRippleetMutation
} from "../../../services/apiSlice";
import EmojiPicker from "emoji-picker-react";
import { FaSmile, FaHeart, FaRegHeart, FaTrash, FaPen } from "react-icons/fa";
import * as S from "./styles";
import { Button } from "../../../ui";

const Rippleets = () => {
    const [editingRippleetId, setEditingRippleetId] = useState<number | null>(null);
    const [editContent, setEditContent] = useState<string>("");
    const [content, setContent] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const emojiPickerRef = useRef<HTMLDivElement>(null);
    const [createRippleet] = useCreateRippleetMutation();
    const [likeRippleet] = useLikeRippleetMutation();
    const [deleteRippleet] = useDeleteRippleetMutation();
    const [updateRippleet] = useUpdateRippleetMutation();
    const [page, setPage] = useState(1);
    const { data, isFetching, isError } = useGetRippleetsQuery();

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleEmojiClick = (emoji: { emoji: string }) => {
        setContent((prev) => prev + emoji.emoji);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submit triggered");
        if (!content.trim()) return;

        try {
            await createRippleet({ content });
            setContent("");
        } catch (error) {
            console.error("Error creating rippleet:", error);
        }
    };

    const handleLike = async (id: number, liked: boolean) => {
        try {
            await likeRippleet({ id, liked });
        } catch (error) {
            console.error("Error liking rippleet:", error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteRippleet({ id });
        } catch (error) {
            console.error("Error deleting rippleet:", error);
        }
    };

    const handleUpdate = async (id: number, newContent: string) => {
        try {
            await updateRippleet({ id, content: newContent });
            stopEditing();
        } catch (error) {
            console.error("Error updating rippleet:", error);
        }
    };

    const startEditing = (rippleetId: number, content: string) => {
        setEditingRippleetId(rippleetId);
        setEditContent(content);
    };
    
    const stopEditing = () => {
        setEditingRippleetId(null);
        setEditContent("");
    };

    const handleLoadMore = () => {
        if (data?.next) {
            setPage(page + 1);
        }
    };
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
                setShowEmojiPicker(false);
            }
        };

        document.addEventListener("pointerdown", handleClickOutside);
        
        return () => document.removeEventListener("pointerdown", handleClickOutside);
    }, [])

    if (isFetching && !data) return <p>Loading...</p>;
    if (isError) return <p>Error loading rippleets.</p>;

    return (
        <S.MiddleColumn>
            <S.FormContainer onSubmit={handleSubmit}>
                <S.TextArea
                placeholder="A coin for your thoughts..."
                value={content}
                maxLength={280}
                onChange={handleInputChange}
                rows={Math.max(3, Math.ceil(content.length / 50))}
                />
                <S.ActionRow>
                    <S.EmojiButton type="button" onClick={() => setShowEmojiPicker((prev) => !prev)}>
                        <FaSmile />
                    </S.EmojiButton>
                    {showEmojiPicker && (
                        <S.EmojiPickerWrapper ref={emojiPickerRef}>
                            <EmojiPicker onEmojiClick={handleEmojiClick} />
                        </S.EmojiPickerWrapper>
                    )}
                    <S.PostButton type="submit" disabled={!content.trim()}>Post</S.PostButton>
                </S.ActionRow>
            </S.FormContainer>

            <S.RippleetList>
                {data?.results.map((rippleet) => (
                    <S.RippleetItem key={rippleet.id}>
                        <S.Author>{rippleet.author}</S.Author>
                        {editingRippleetId === rippleet.id ? (
                            <>
                                <S.TextArea
                                    value={editContent}
                                    onChange={(e) => setEditContent(e.target.value)}
                                    rows={Math.max(3, Math.ceil(editContent.length / 50))}
                                />
                                <S.RippleetActionRow>
                                    <S.EmojiButton onClick={() => setShowEmojiPicker((prev) => !prev)}>
                                        <FaSmile />
                                    </S.EmojiButton>
                                    {showEmojiPicker && (
                                        <S.EmojiPickerWrapper ref={emojiPickerRef}>
                                            <EmojiPicker
                                                onEmojiClick={(emoji) => setEditContent((prev) => prev + emoji.emoji)}
                                            />
                                        </S.EmojiPickerWrapper>
                                    )}
                                    <S.PostButton onClick={() => handleUpdate(rippleet.id, editContent)}>Save</S.PostButton>
                                    <S.PostButton onClick={stopEditing}>Cancel</S.PostButton>
                                </S.RippleetActionRow>
                            </>
                        ) : (
                            <>
                                <S.Content>{rippleet.content}</S.Content>
                                <S.Timestamp>
                                    {new Date(rippleet.created_at).toLocaleString([], {
                                        dateStyle: "medium",
                                        timeStyle: "short"
                                    })}
                                </S.Timestamp>
                            </>
                        )}
                        <S.RippleetActionRow>
                            <S.LikeButton 
                                $liked={rippleet.liked}
                                onClick={() => handleLike(rippleet.id, !rippleet.liked)}
                            >
                                {rippleet.liked ? <FaHeart /> : <FaRegHeart />}
                                {rippleet.likes_count}
                            </S.LikeButton>
                            {rippleet.is_owner && (
                                <>
                                    <S.EditButton 
                                        onClick={() => startEditing(rippleet.id, rippleet.content)}
                                    >
                                        <FaPen />
                                    </S.EditButton>
                                    <S.DeleteButton
                                        onClick={() => {
                                            if (window.confirm("Irreversible Action: Are you sure you want to delete this rippleet?")) {
                                                handleDelete(rippleet.id);
                                            }
                                        }}
                                    >
                                        <FaTrash />
                                    </S.DeleteButton>
                                </>
                            )}
                        </S.RippleetActionRow>
                    </S.RippleetItem>
                ))}
                {isFetching && <S.Loading>Loading more...</S.Loading>}
                {data?.next && <Button onClick={handleLoadMore}>Load More</Button>}
            </S.RippleetList>
        </S.MiddleColumn>
    );
};

export default Rippleets;