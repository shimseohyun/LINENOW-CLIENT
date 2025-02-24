import { IconAssetProps } from "../Icon";

const PhoneIcon = (props: IconAssetProps) => {
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
        d="M6.38661 7.99707C6.12883 6.36181 7.32596 4.89294 9.15472 4.35479C9.47926 4.25987 9.82913 4.28737 10.1334 4.43172C10.4376 4.57607 10.6735 4.82646 10.7932 5.13212L11.3803 6.63999C11.4748 6.88256 11.4919 7.1468 11.4294 7.3988C11.3668 7.6508 11.2275 7.87905 11.0294 8.05426L9.28294 9.59462C9.19675 9.67063 9.13252 9.7669 9.09656 9.87399C9.0606 9.98109 9.05413 10.0953 9.07779 10.2056L9.09399 10.2732L9.13583 10.4421C9.35356 11.263 9.68447 12.0522 10.1197 12.7884C10.595 13.5702 11.184 14.2824 11.8688 14.9034L11.9228 14.9502C12.01 15.0247 12.1158 15.0762 12.2298 15.0997C12.3438 15.1231 12.4622 15.1177 12.5734 15.084L14.8313 14.399C15.0879 14.3214 15.3627 14.3194 15.6205 14.3933C15.8783 14.4672 16.1073 14.6136 16.2781 14.8137L17.347 16.0629C17.7924 16.5828 17.7384 17.3471 17.2269 17.806C15.8273 19.063 13.9028 19.3204 12.5639 18.2844C10.9221 17.0101 9.5385 15.4549 8.4826 13.6971C7.41637 11.9415 6.70609 10.0075 6.38661 7.99707ZM10.4922 10.2914L11.939 9.01228C12.3356 8.662 12.6144 8.20557 12.7397 7.70157C12.865 7.19757 12.8311 6.669 12.6422 6.18373L12.0564 4.67586C11.8161 4.06072 11.3417 3.55674 10.7296 3.26629C10.1174 2.97585 9.41346 2.92072 8.76063 3.1121C6.48918 3.78154 4.66582 5.74307 5.05182 8.19335C5.32175 9.904 5.94393 12.08 7.31651 14.3522C8.45576 16.2476 9.94824 17.9243 11.719 19.2983C13.7273 20.8516 16.4077 20.3213 18.1487 18.7588C18.6469 18.3121 18.9493 17.6991 18.9942 17.0449C19.0391 16.3907 18.8231 15.7447 18.3903 15.2387L17.3214 13.9882C16.9794 13.5885 16.5213 13.2962 16.0058 13.1489C15.4902 13.0016 14.9407 13.006 14.4278 13.1615L12.5531 13.7296C12.0691 13.2489 11.6451 12.7154 11.2899 12.1398C10.9471 11.5577 10.6796 10.9374 10.4936 10.2927"
        fill={color}
      />
    </svg>
  );
};

export default PhoneIcon;
