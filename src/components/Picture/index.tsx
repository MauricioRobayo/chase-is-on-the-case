import React from "react";

export type PictureProps = {
  alt: string;
  png: string;
  webp: string;
  webpSmall: string;
  className?: string;
  onClickHandler: () => void;
};

const Picture = ({
  alt,
  className,
  png,
  webp,
  webpSmall,
  onClickHandler,
}: PictureProps) => {
  return (
    <picture onClick={onClickHandler} className={className}>
      <source type="image/webp" srcSet={webpSmall} media="(max-width: 319px)" />
      <source type="image/webp" srcSet={webp} media="(min-width: 320px)" />
      <img src={png} alt={alt} />
    </picture>
  );
};

export default Picture;
