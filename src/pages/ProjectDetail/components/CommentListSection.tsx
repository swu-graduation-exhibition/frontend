import styled from 'styled-components';
import CommentBox from './CommentBox';

const Container = styled.div`
  height: fit-content;
`;

const commentList = [
  {
    from: '띄어쓰기팔자',
    date: '97.01.29',
    content:
      '안녕하세요 저는 강민서 친구에요 그냥 이건 아무렇게 쓰는 방명록이에요 이게 두줄 이상 되어야 하는데 어떻게 하는건지 잘모르겠어요. 안녕하세요 저는 강민서 친구에요 그냥 이건 아무렇게 쓰는 방명록이에요 ',
  },
  {
    from: '띄어쓰기팔자',
    date: '97.01.29',
    content:
      '안녕하세요 저는 강민서 친구에요 그냥 이건 아무렇게 쓰는 방명록이에요 이게 두줄 이상 되어야 하는데 어떻게 하는건지 잘모르겠어요. 안녕하세요 저는 강민서 친구에요 그냥 이건 아무렇게 쓰는 방명록이에요 ',
  },
  {
    from: '띄어쓰기팔자',
    date: '97.01.29',
    content:
      '안녕하세요 저는 강민서 친구에요 그냥 이건 아무렇게 쓰는 방명록이에요 이게 두줄 이상 되어야 하는데 어떻게 하는건지 잘모르겠어요. 안녕하세요 저는 강민서 친구에요 그냥 이건 아무렇게 쓰는 방명록이에요 ',
  },
  {
    from: '띄어쓰기팔자',
    date: '97.01.29',
    content:
      '안녕하세요 저는 강민서 친구에요 그냥 이건 아무렇게 쓰는 방명록이에요 이게 두줄 이상 되어야 하는데 어떻게 하는건지 잘모르겠어요. 안녕하세요 저는 강민서 친구에요 그냥 이건 아무렇게 쓰는 방명록이에요 ',
  },
  {
    from: '띄어쓰기팔자',
    date: '97.01.29',
    content:
      '안녕하세요 저는 강민서 친구에요 그냥 이건 아무렇게 쓰는 방명록이에요 이게 두줄 이상 되어야 하는데 어떻게 하는건지 잘모르겠어요. 안녕하세요 저는 강민서 친구에요 그냥 이건 아무렇게 쓰는 방명록이에요 ',
  },
];

const CommentListSection = () => {
  return (
    <Container>
      {commentList.map((commentData, i) => (
        <CommentBox
          key={i}
          commentData={commentData}
          lastElement={commentList.length - 1 === i ? false : true}
        />
      ))}
    </Container>
  );
};

export default CommentListSection;
