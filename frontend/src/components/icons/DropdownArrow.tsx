import { FC } from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

const DropdownArrow: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9181 8.45117L13.3981 14.9712C12.6281 15.7412 11.3681 15.7412 10.5981 14.9712L4.07812 8.45117" stroke="currentColor" stroke-width="1.5"
              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  );
};

export default DropdownArrow;
