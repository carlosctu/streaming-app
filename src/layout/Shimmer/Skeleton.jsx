import { width } from "@mui/system";
import styled from "styled-components";

export function CarrouselSkeleton() {
  return <CarrouselWrapper>
    {Array.apply(null, { length: 4 }).map((_, index) =>
      <div style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "12px",
        scrollSnapAlign: "start"
      }}>
        <Skeleton key={index} style={{
          height: "240px",
          width: "160px",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }} />
        <Skeleton key={index} style={{
          height: "20px",
          width: "160px"
        }} />

      </div>
    )}
  </CarrouselWrapper>
}

export function Skeleton(props) {
  return <SkeletonContainer {...props} />;
}

const CarrouselWrapper = styled.div`
  display: grid;
  column-gap: 14px;
  grid-auto-flow: column;
  flex-direction: row;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  width: 100%;
  height: 318px;
`

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
