import Lottie from "react-lottie";

export type LottieIconProps = {
  animationData: any;
  enableLoop?: boolean;
  enableAutoPlay?: boolean;
  height: string;
  width?: string;
};

export default function LottieIcon(props: LottieIconProps) {
  const defaultOptions = {
    loop: props.enableLoop ?? true,
    autoplay: props.enableAutoPlay ?? true,
    animationData: props.animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      style={{
        height: props.height,
        width: props.width ?? "100%",
        marginTop: "8%",
        marginBottom: "20px",
      }}
    >
      <Lottie options={defaultOptions} />
    </div>
  );
}
