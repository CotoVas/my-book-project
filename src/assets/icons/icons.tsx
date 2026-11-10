import React from 'react';

import books from '../books.png';
import bookOpen from '../book-open.png';
import bookmark from '../bookmark.png';
import check from '../check.png';
import bookLogo from '../book-logo.png';


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


export const BooksIcon: React.FC<IconProps> = (props) => (
  <PngIconWrapper src={books}  {...props} />
);

export const BookOpenIcon: React.FC<IconProps> = (props) => (
  <PngIconWrapper src={bookOpen} {...props} />
);

export const BookmarkIcon: React.FC<IconProps> = (props) => (
  <PngIconWrapper src={bookmark} {...props} />
);

export const CheckIcon: React.FC<IconProps> = (props) => (
  <PngIconWrapper src={check} {...props} />
);

export const BookLogoIcon: React.FC<IconProps> = (props) => (
  <PngIconWrapper src={bookLogo} {...props} />
);

