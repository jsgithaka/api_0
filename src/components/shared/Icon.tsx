import Image from 'next/image';
import { IconTypes } from '@exports/types/components';
import { IconStyles } from '@exports/styles/shared';

export default function Icon({
    icon,
    alt,
    width,
    height,
    styles,
}: IconTypes.Props) {
    return (
        <Image
            src={icon}
            alt={alt}
            width={width}
            height={height}
            className={[IconStyles.Icon, styles].join(' ')}
        />
    );
}
