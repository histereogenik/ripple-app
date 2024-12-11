import styled from "styled-components";
import { breakpoints, colors } from "../../../styles";
import { Button } from "../../../ui";

export const MiddleColumn = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const FormContainer = styled.form`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-bottom: 1px solid ${colors.translucentGray};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: ${breakpoints.tablet}) {
        padding: 0.5rem;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    resize: none;
    font-size: 1rem;
    padding: 0.8rem;
    border: none;
    border-bottom: 1px solid ${colors.gray};
    background: ${colors.black};
    color: ${colors.white};

    &:focus {
        outline: none;
        border-color: ${colors.orange};
    }

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 0.9rem;
    }
`;

export const ActionRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const EmojiButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    color: ${colors.orange};
    cursor: pointer;

    &:hover {
        color: ${colors.darkorange};
    }
`;

export const EmojiPickerWrapper = styled.div`
    position: absolute;
    z-index: 100;
    background: ${colors.gray};
    border: 1px solid ${colors.translucentGray};
    border-radius: 8px;
`;

export const PostButton = styled(Button)`
    width: 15%;

    &:disabled {
        background: ${colors.lightgray};
        cursor: default;
    }
`;

export const RippleetList = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: ${breakpoints.tablet}) {
        padding: 0.5rem;
    }
`;

export const RippleetItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-bottom: 1px solid ${colors.translucentGray};
    background-color: ${colors.black};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: ${breakpoints.tablet}) {
        padding: 12px;
    }
`;

export const Author = styled.div`
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 8px;
    color: ${colors.orange};

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 1rem;
    }
`;

export const Content = styled.div`
    font-size: 1rem;
    margin-bottom: 8px;
    line-height: 1.5;
    color: ${colors.white};

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 0.95rem;
    }
`;

export const Timestamp = styled.div`
    font-size: 0.9rem;
    color: ${colors.lightgray};
    margin-bottom: 12px;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 0.85rem;
    }
`;

export const RippleetActionRow = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 8px;

    @media (max-width: ${breakpoints.tablet}) {
        gap: 8px;
    }
`;

export const LikeButton = styled.button<{ liked?: boolean }>`
    display: flex;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    color: ${(props) => (props.liked ? colors.darkorange : colors.white)};
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 0.9rem;
    }
`;

export const EditButton = styled.button`
    background-color: ${colors.black};
    border: 1px solid ${colors.lightgray};
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 0.9rem;
    cursor: pointer;
    color: ${colors.white};

    &:hover {
        background-color: ${colors.translucentGray};
    }

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 0.85rem;
    }
`;

export const DeleteButton = styled.button`
    background-color: ${colors.error};
    border: 1px solid ${colors.darkorange};
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 0.9rem;
    color: ${colors.white};
    cursor: pointer;

    &:hover {
        background-color: ${colors.darkorange};
    }

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 0.85rem;
    }
`;

export const Loading = styled.div`
    text-align: center;
    font-size: 1rem;
    color: ${colors.gray};
    padding: 16px;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: 0.9rem;
    }
`;