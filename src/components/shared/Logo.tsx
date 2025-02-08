import { Icon } from '@exports/components/shared';
import { LogoStyles } from '@exports/styles/shared';
import { LogoTypes } from '@exports/types/components';

export default function Logo({ size, icon }: LogoTypes.Props) {
    return (
        <Icon
            icon={icon}
            alt='The API_0 logo.'
            width={size}
            height={size}
            styles={LogoStyles.Logo}
        />
    );
}
