import { IconAssetProps } from "../Icon";

const PauseIcon = (props: IconAssetProps) => {
  const { color = "black", size = 24 } = props;
  const scale = size / 24;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 19V5H19V19H13ZM5 19V5H11V19H5ZM15 17H17V7H15V17ZM7 17H9V7H7V17Z"
        fill={color}
      />
    </svg>
  );
};

export default PauseIcon;
