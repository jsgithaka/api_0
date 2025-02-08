import { NavigationStyles } from '@exports/styles/shared';
import { NavigationTypes } from '@exports/types/components';

export default function Navigation({ children }: NavigationTypes.Props) {
    return (
        <nav className={NavigationStyles.Navigation}>
            <div className={NavigationStyles.NavigationSmall}>
                <div className={NavigationStyles.NavigationSmallHead}></div>
                <div className={NavigationStyles.NavigationSmallBody}>
                    {children}
                </div>
            </div>
            <div className={NavigationStyles.NavigationLarge}>{children}</div>
        </nav>
    );
}
