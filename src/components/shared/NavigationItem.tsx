import { NavigationItemStyles } from '@exports/styles/shared';
import { NavigationItemTypes } from '@exports/types/components';
import Link from 'next/link';

export default function NavigationItem({
    href,
    name,
    active,
}: NavigationItemTypes.Props) {
    return (
        <Link
            href={href}
            className={
                active
                    ? NavigationItemStyles.NavigationItemActive
                    : NavigationItemStyles.NavigationItem
            }
            scroll={false}
        >
            {name}
        </Link>
    );
}
