import styled from "styled-components";
import { Skeleton } from "./Skeleton";

export function TitleSectionSkeleton() {
    return <>
        <Skeleton style={{ height: "554px", width: "390px" }} />
        <div style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "12px",
            margin: "0 12px",
        }}>
            <Skeleton style={{ height: "28px", width: "240px" }} />
            <div style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "4px"
            }}>
                <Skeleton style={{ height: "16px", width: "90px" }} />
                <Skeleton style={{ height: "16px", width: "150px" }} />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "4px"
            }}>
                {Array.apply(null, { length: 6 }).map((_, index) =>
                    <Skeleton key={index} style={{ height: "14px", width: "100%" }} />
                )}
            </div>
        </div>
    </>
}
