import { Header, Main } from '@exports/components/layout';
import { Button, NavigationItem } from '@exports/components/shared';

export default function Landing() {
    return (
        <>
            <Header>
                <NavigationItem
                    href='/'
                    name='Landing'
                    active
                />
                <NavigationItem
                    href='/docs'
                    name='Docs'
                />
                <Button
                    href='/api'
                    name='API'
                />
            </Header>
            <Main />
        </>
    );
}
