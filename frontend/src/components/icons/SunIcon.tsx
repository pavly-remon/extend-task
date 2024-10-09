import { FC } from "react";

interface Props {
  fill?: string;
  width?: number;
  height?: number;
}

const SunIcon: FC<Props> = ({ fill, width = 24, height = 24 }) => {
  return (
    <div>
      <svg viewBox="0 0 256 256" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <rect fill="none" height="256" width="256" />
        <circle cx="128" cy="128" r="68" fill={fill} />
        <path d="M128,44a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V36A8,8,0,0,0,128,44Z" fill={fill} />
        <path fill={fill} d="M57.3,68.6a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3L54.5,43.1A8.1,8.1,0,1,0,43.1,54.5Z" />
        <path fill={fill} d="M44,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H36A8,8,0,0,0,44,128Z" />
        <path fill={fill} d="M57.3,187.4,43.1,201.5a8.1,8.1,0,0,0,0,11.4,8.5,8.5,0,0,0,5.7,2.3,8.3,8.3,0,0,0,5.7-2.3l14.1-14.2a8,8,0,0,0-11.3-11.3Z" />
        <path fill={fill} d="M128,212a8,8,0,0,0-8,8v20a8,8,0,0,0,16,0V220A8,8,0,0,0,128,212Z" />
        <path fill={fill} d="M198.7,187.4a8,8,0,0,0-11.3,11.3l14.1,14.2a8.3,8.3,0,0,0,5.7,2.3,8.5,8.5,0,0,0,5.7-2.3,8.1,8.1,0,0,0,0-11.4Z" />
        <path fill={fill} d="M240,120H220a8,8,0,0,0,0,16h20a8,8,0,0,0,0-16Z" />
        <path fill={fill} d="M193.1,70.9a7.8,7.8,0,0,0,5.6-2.3l14.2-14.1a8.1,8.1,0,0,0-11.4-11.4L187.4,57.3a8,8,0,0,0,0,11.3A7.8,7.8,0,0,0,193.1,70.9Z" />
      </svg>
    </div>
  );
};

export default SunIcon;
