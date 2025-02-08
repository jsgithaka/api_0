import { Logo } from '@exports/components/shared';
import { BrandStyles } from '@exports/styles/shared';
import { BrandTypes } from '@exports/types/components';

export default function Brand({ size }: BrandTypes.Props) {
    return (
        <div
            className={BrandStyles.Brand}
            style={{ gap: `${size / 4}px` }}
        >
            <Logo
                size={size}
                icon={'logo.svg'}
            />
            <p
                style={{
                    fontSize: `${size - 4}px`,
                }}
            >
                API_0
            </p>
        </div>
    );
}
