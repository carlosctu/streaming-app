import styled from "styled-components";
import { Skeleton } from "./Skeleton";

export function CarrouselSkeleton() {
    return <CarrouselWrapper>
        {Array.apply(null, { length: 6 }).map((_, index) =>
            <div key={index} style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "12px",
                scrollSnapAlign: "start"
            }}>
                <Skeleton style={{
                    height: "240px",
                    width: "160px",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                }} />
                <Skeleton style={{
                    height: "20px",
                    width: "160px"
                }} />

            </div>
        )}
    </CarrouselWrapper>
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