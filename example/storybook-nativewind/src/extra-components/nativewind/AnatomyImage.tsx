import React from 'react';
import { Image } from '../../core-components/nativewind';

const AnatomyImage = ({
  mobileUrl,
  webUrl,
}: {
  mobileUrl: string;
  webUrl: string;
}) => {
  return (
    <>
      <Image
        source={{ uri: mobileUrl }}
        alt="anatomy-image"
        className="md:hidden w-full aspect-[513/375] mb-5"
        //@ts-ignore
        size="none"
      />

      <Image
        source={{ uri: webUrl }}
        alt="anatomy-image"
        className="hidden md:flex w-full aspect-[736/259] mb-6"
        //@ts-ignore
        size="none"
      />
    </>
  );
};
export default AnatomyImage;