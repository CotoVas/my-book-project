import React from 'react';



export interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
}

export const PngIconWrapper: React.FC<IconProps> = ({ src, size = 24, alt = 'icon', style, ...props }) => (
  <img
    src={src}
    alt={alt}
    width={size}
    height={size}
    style={{ objectFit: 'contain', ...style }}
    {...props}
  />
);


export const TrashIcon: React.FC<React.HTMLAttributes<HTMLSpanElement>> = (props) => (
    <span 
    role="img" 
    aria-label="Удалить" 
    style={{ fontSize: ` 24px`, lineHeight: 1, cursor: 'pointer' }} 
    {...props}
  >
    🗑️
  </span>
);


