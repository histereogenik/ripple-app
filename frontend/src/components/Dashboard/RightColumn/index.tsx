import * as S from "./styles";

const RightColumn = () => {
    return (
        <S.Container>
            <S.SearchField placeholder="Search Rippleet" />
            <S.Section>
                <S.SectionTitle>Trending Topics</S.SectionTitle>
                <S.Topic>#React</S.Topic>
                <S.Topic>#Django</S.Topic>
                <S.Topic>#OpenAI</S.Topic>
            </S.Section>
            <S.Section>
                <S.SectionTitle>Who to Follow</S.SectionTitle>
                <S.UserSuggestion>
                    <S.Avatar src="https://robohash.org/user1" alt="User 1" />
                    <S.UserInfo>
                        <S.UserName>John Elden Ring</S.UserName>
                        <S.UserHandle>@johner</S.UserHandle>
                    </S.UserInfo>
                    <S.FollowButton>Follow</S.FollowButton>
                </S.UserSuggestion>
                <S.UserSuggestion>
                    <S.Avatar src="https://robohash.org/user2" alt="User 2" />
                    <S.UserInfo>
                        <S.UserName>Jane Dark Souls</S.UserName>
                        <S.UserHandle>@janethered</S.UserHandle>
                    </S.UserInfo>
                    <S.FollowButton>Follow</S.FollowButton>
                </S.UserSuggestion>
            </S.Section>
        </S.Container>
    );
};

export default RightColumn;
