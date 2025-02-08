import { HeaderStyles } from '@exports/styles/layout';
import { Brand } from '@exports/components/shared';

export default function Header() {
    return (
        <header className={HeaderStyles.Header}>
            <Brand
                size={24}
                name='API_0'
            />
        </header>
    );
}
