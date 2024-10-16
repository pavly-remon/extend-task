import { FC } from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

const SunIcon: FC<Props> = ({ className}) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.15406 5.94234C7.15406 4.39547 7.38141 2.83219 7.96172 1.5C4.10344 3.17953 1.5 7.11984 1.5 11.5959C1.5 17.618 6.38203 22.5 12.4041 22.5C16.8802 22.5 20.8205 19.8966 22.5 16.0383C21.1678 16.6186 19.6031 16.8459 18.0577 16.8459C12.0356 16.8459 7.15406 11.9644 7.15406 5.94234Z"
          fill="currentColor" />
      </svg>

    </div>
  );
};

export default SunIcon;
