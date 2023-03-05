import styled from "styled-components";

export function Skeleton(props) {
  return <SkeletonContainer {...props} />;
}

const SkeletonContainer = styled.div`
  background-image: linear-gradient(
    -90deg,
    #dddbdd 0%,
    #efefef 20%,
    #eeeeee 60%,
    #dddbdd 100%
  );
  background-size: 400% 400%;
  animation: shimmer 2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
