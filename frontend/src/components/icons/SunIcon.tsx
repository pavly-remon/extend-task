import { FC } from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

const SunIcon: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.0312 1.21875H10.9688V5.53125H13.0312V1.21875Z" fill="currentColor" />
        <path d="M13.0312 18.4688H10.9688V22.7812H13.0312V18.4688Z" fill="currentColor" />
        <path d="M18.8941 3.64714L15.8447 6.69653L17.3031 8.15494L20.3525 5.10554L18.8941 3.64714Z" fill="currentColor" />
        <path d="M6.69686 15.8446L3.64746 18.894L5.10587 20.3525L8.15527 17.3031L6.69686 15.8446Z" fill="currentColor" />
        <path d="M22.7812 10.9688H18.4688V13.0312H22.7812V10.9688Z" fill="currentColor" />
        <path d="M5.53125 10.9688H1.21875V13.0312H5.53125V10.9688Z" fill="currentColor" />
        <path d="M17.3036 15.8451L15.8452 17.3035L18.8946 20.3529L20.353 18.8945L17.3036 15.8451Z" fill="currentColor" />
        <path d="M5.10538 3.64731L3.64697 5.10571L6.69637 8.15511L8.15478 6.6967L5.10538 3.64731Z" fill="currentColor" />
        <path
          d="M12 16.7813C11.0544 16.7813 10.13 16.5008 9.34368 15.9755C8.55741 15.4501 7.94458 14.7034 7.5827 13.8297C7.22082 12.956 7.12614 11.9947 7.31062 11.0672C7.49511 10.1398 7.95048 9.28782 8.61915 8.61915C9.28782 7.95048 10.1398 7.49511 11.0672 7.31062C11.9947 7.12614 12.956 7.22082 13.8297 7.5827C14.7034 7.94458 15.4501 8.55741 15.9755 9.34368C16.5008 10.13 16.7813 11.0544 16.7813 12C16.7798 13.2676 16.2755 14.4829 15.3792 15.3792C14.4829 16.2755 13.2676 16.7798 12 16.7813Z"
          fill="currentColor" />
      </svg>

    </div>
  );
};

export default SunIcon;
