type StarProps = {
  active: boolean;
};

export const Star = (props: StarProps) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={16} height={16}>
      <polygon
        points='12,0 15.708,7.514 24,8.718 18,14.566 19.416,22.825 12,18.926 4.583,22.825 6,14.566 0,8.718 8.292,7.514'
        fill={props.active ? '#ffcc00' : '#ccc'}
      />
    </svg>
  );
};
