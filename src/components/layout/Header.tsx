import { HeaderStyles } from '@exports/styles/layout';
import { Brand, Navigation, NavigationItem } from '@exports/components/shared';

export default function Header() {
    return (
        <header className={HeaderStyles.Header}>
            <Brand
                size={24}
                name='API_0'
            />
            <Navigation>
                <NavigationItem
                    href='/'
                    name='Landing'
                />
                <NavigationItem
                    href='/docs'
                    name='Documentation'
                />
            </Navigation>
        </header>
    );
}
