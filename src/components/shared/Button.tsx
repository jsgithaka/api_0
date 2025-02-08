import { ButtonStyles } from '@exports/styles/shared';
import { ButtonTypes } from '@exports/types/components';
import Link from 'next/link';

export default function Button({ href, name }: ButtonTypes.Props) {
    return (
        <Link
            href={href}
            className={ButtonStyles.Button}
        >
            {name}
        </Link>
    );
}
