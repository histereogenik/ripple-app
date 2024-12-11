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
        
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
    }
`;

export const RippleetList = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const RippleetItem = styled.div`
    background: ${colors.darkgray};
    padding: 1rem;
    border-radius: 8px;
`;

export const Author = styled.span`
    font-weight: bold;
    color: ${colors.orange};
`;

export const Content = styled.p`
    margin: 0.5rem 0;
`;

export const Timestamp = styled.span`
    font-size: 0.8rem;
    color: ${colors.gray};
`;

export const LikeButton = styled.button`
    margin-top: 0.5rem;
    padding: 0.5rem;
    background: none;
    border: none;
    color: ${colors.orange};
    cursor: pointer;

    &:hover {
        color: ${colors.darkorange};
    }
`;

export const Loading = styled.div`
    text-align: center;
    color: ${colors.gray};
`;

export const LoadMoreButton = styled.button`
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    background-color: ${colors.orange};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: ${colors.white};

    &:hover {
        background-color: ${colors.darkorange};
    }
`;

