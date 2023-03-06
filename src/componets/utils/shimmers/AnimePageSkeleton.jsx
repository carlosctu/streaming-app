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
            <Skeleton style={{ height: "20px", width: "72px" }} />
            <Skeleton style={{ height: "300px", width: "100%" }} />
        </div>
    </>
}

export function EpisodesSectionSkeleton() {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "8px",
    }}>
        <Skeleton style={{ height: "20px", width: "80px" }} />
        {Array.apply(null, { length: 6 }).map((_, index) =>
            <EpisodeSkeleton key={index} />
        )}
    </div>
}

function EpisodeSkeleton() {
    return <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", columnGap: "4px" }}>
        <Skeleton style={{ height: "90px", width: "170px" }} />
        <div style={{ display: "flex", flexDirection: "column", rowGap: "4px", width: "50%" }}>
            <Skeleton style={{ height: "20px", width: "120px", marginBottom: "4px" }} />
            {Array.apply(null, { length: 3 }).map((_, index) =>
                <Skeleton key={index} style={{ height: "14px", width: "100%" }} />
            )}
        </div>
    </div>
} 