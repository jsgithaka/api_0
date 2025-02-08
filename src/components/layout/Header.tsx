import { HeaderStyles } from '@exports/styles/layout';
import { Brand, Navigation } from '@exports/components/shared';
import { HeaderTypes } from '@exports/types/components';

export default function Header({ children }: HeaderTypes.Props) {
    return (
        <header className={HeaderStyles.Header}>
            <Brand
                size={24}
                name='API_0'
            />
            <Navigation>{children}</Navigation>
        </header>
    );
}
