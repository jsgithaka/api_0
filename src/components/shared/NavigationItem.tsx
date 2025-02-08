import { NavigationItemStyles } from '@exports/styles/shared';
import { NavigationItemTypes } from '@exports/types/components';
import Link from 'next/link';

export default function NavigationItem({
    href,
    name,
}: NavigationItemTypes.Props) {
    return (
        <Link
            href={href}
            className={NavigationItemStyles.NavigationItem}
            scroll={false}
        >
            {name}
        </Link>
    );
}
