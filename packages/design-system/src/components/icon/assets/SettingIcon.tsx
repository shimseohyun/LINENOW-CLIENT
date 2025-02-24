import { IconAssetProps } from "../Icon";

const SettingIcon = (props: IconAssetProps) => {
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
        d="M9.2502 22L8.8502 18.8C8.63353 18.7167 8.42936 18.6167 8.2377 18.5C8.04603 18.3833 7.85853 18.2583 7.6752 18.125L4.7002 19.375L1.9502 14.625L4.5252 12.675C4.50853 12.5583 4.5002 12.4458 4.5002 12.3375V11.6625C4.5002 11.5542 4.50853 11.4417 4.5252 11.325L1.9502 9.375L4.7002 4.625L7.6752 5.875C7.85853 5.74167 8.0502 5.61667 8.2502 5.5C8.4502 5.38333 8.6502 5.28333 8.8502 5.2L9.2502 2H14.7502L15.1502 5.2C15.3669 5.28333 15.571 5.38333 15.7627 5.5C15.9544 5.61667 16.1419 5.74167 16.3252 5.875L19.3002 4.625L22.0502 9.375L19.4752 11.325C19.4919 11.4417 19.5002 11.5542 19.5002 11.6625V12.3375C19.5002 12.4458 19.4835 12.5583 19.4502 12.675L22.0252 14.625L19.2752 19.375L16.3252 18.125C16.1419 18.2583 15.9502 18.3833 15.7502 18.5C15.5502 18.6167 15.3502 18.7167 15.1502 18.8L14.7502 22H9.2502ZM11.0002 20H12.9752L13.3252 17.35C13.8419 17.2167 14.321 17.0208 14.7627 16.7625C15.2044 16.5042 15.6085 16.1917 15.9752 15.825L18.4502 16.85L19.4252 15.15L17.2752 13.525C17.3585 13.2917 17.4169 13.0458 17.4502 12.7875C17.4835 12.5292 17.5002 12.2667 17.5002 12C17.5002 11.7333 17.4835 11.4708 17.4502 11.2125C17.4169 10.9542 17.3585 10.7083 17.2752 10.475L19.4252 8.85L18.4502 7.15L15.9752 8.2C15.6085 7.81667 15.2044 7.49583 14.7627 7.2375C14.321 6.97917 13.8419 6.78333 13.3252 6.65L13.0002 4H11.0252L10.6752 6.65C10.1585 6.78333 9.67936 6.97917 9.2377 7.2375C8.79603 7.49583 8.39186 7.80833 8.0252 8.175L5.5502 7.15L4.5752 8.85L6.7252 10.45C6.64186 10.7 6.58353 10.95 6.5502 11.2C6.51686 11.45 6.5002 11.7167 6.5002 12C6.5002 12.2667 6.51686 12.525 6.5502 12.775C6.58353 13.025 6.64186 13.275 6.7252 13.525L4.5752 15.15L5.5502 16.85L8.0252 15.8C8.39186 16.1833 8.79603 16.5042 9.2377 16.7625C9.67936 17.0208 10.1585 17.2167 10.6752 17.35L11.0002 20ZM12.0502 15.5C13.0169 15.5 13.8419 15.1583 14.5252 14.475C15.2085 13.7917 15.5502 12.9667 15.5502 12C15.5502 11.0333 15.2085 10.2083 14.5252 9.525C13.8419 8.84167 13.0169 8.5 12.0502 8.5C11.0669 8.5 10.2377 8.84167 9.5627 9.525C8.8877 10.2083 8.5502 11.0333 8.5502 12C8.5502 12.9667 8.8877 13.7917 9.5627 14.475C10.2377 15.1583 11.0669 15.5 12.0502 15.5Z"
        fill={color}
      />
    </svg>
  );
};

export default SettingIcon;
