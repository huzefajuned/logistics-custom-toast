type Props = {
  className: string;
};

export const Close = ({ className }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
    <g width="28" height="28" id="Group_2664" data-name="Group 2664">
      <circle id="Ellipse_336" data-name="Ellipse 336" cx="14" cy="14" r="14"  fill="#e6e6e6"/>
      <g id="Icon_feather-plus" data-name="Icon feather-plus" transform="translate(13.612 3.504) rotate(45)">
        <path id="Path_140" data-name="Path 140" d="M0,0V14.114" transform="translate(7.057)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path id="Path_141" data-name="Path 141" d="M0,0H14.114" transform="translate(0 7.057)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      </g>
    </g>
  </svg>
  
  
  );
};

export const Error = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.433"
      height="20.433"
      viewBox="0 0 20.433 20.433"
    >
      <g
        id="Icon_feather-plus"
        data-name="Icon feather-plus"
        transform="translate(10.216 -16.58) rotate(45)"
      >
        <path
          id="Path_156"
          data-name="Path 156"
          d="M18,7.5V30.4"
          transform="translate(0.948)"
          fill="none"
          stroke="#ec0048"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          id="Path_157"
          data-name="Path 157"
          d="M7.5,18H30.4"
          transform="translate(0 0.948)"
          fill="none"
          stroke="#ec0048"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
      </g>
    </svg>
  );
};

export const Info = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13.054"
      height="26.107"
      viewBox="0 0 13.054 26.107"
    >
      <path
        id="Icon_open-info"
        data-name="Icon open-info"
        d="M9.79,0a3.263,3.263,0,1,0,3.263,3.263A3.273,3.273,0,0,0,9.79,0ZM4.9,8.159a4.889,4.889,0,0,0-4.9,4.9H3.263a1.632,1.632,0,0,1,3.263,0c0,.914-3.263,5.352-3.263,8.159a4.827,4.827,0,0,0,4.9,4.9,4.889,4.889,0,0,0,4.9-4.9H9.79a1.632,1.632,0,0,1-3.263,0c0-1.175,3.263-6,3.263-8.159A4.931,4.931,0,0,0,4.9,8.159Z"
        fill="#2a7ae9"
      />
    </svg>
  );
};
export const Success = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27.022"
      height="26.534"
      viewBox="0 0 27.022 26.534"
    >
      <g
        id="Icon_feather-check-circle"
        data-name="Icon feather-check-circle"
        transform="translate(-1.747 -1.726)"
      >
        <path
          id="Path_154"
          data-name="Path 154"
          d="M27,13.895V15A12,12,0,1,1,19.885,4.03"
          transform="translate(0 0)"
          fill="none"
          stroke="#00b10c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
        />
        <path
          id="Path_155"
          data-name="Path 155"
          d="M29.1,6l-12,12.013-3.6-3.6"
          transform="translate(-2.1 -0.602)"
          fill="none"
          stroke="#00b10c"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
        />
      </g>
    </svg>
  );
};

export const ErrorStick = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="72"
      viewBox="0 0 6 72"
    >
      <rect
        id="Rectangle_618"
        data-name="Rectangle 618"
        width="6"
        height="72"
        rx="3"
        fill="#ec0048"
      />
    </svg>
  );
};

export const InfoStick = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="72"
      viewBox="0 0 6 72"
    >
      <rect
        id="Rectangle_616"
        data-name="Rectangle 616"
        width="6"
        height="72"
        rx="3"
        fill="#2a7ae9"
      />
    </svg>
  );
};

export const SuccessStick = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="72"
      viewBox="0 0 6 72"
    >
      <rect
        id="Rectangle_614"
        data-name="Rectangle 614"
        width="6"
        height="72"
        rx="3"
        fill="#00b10c"
      />
    </svg>
  );
};
