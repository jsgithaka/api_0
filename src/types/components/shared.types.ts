import { ReactNode } from 'react';

// Icon
export namespace IconTypes {
    export interface Props {
        icon: string;
        alt: string;
        width: number;
        height: number;
        styles?: string;
    }
}

// Logo
export namespace LogoTypes {
    export interface Props {
        size: number;
        icon: string;
    }
}

// Brand
export namespace BrandTypes {
    export interface Props {
        name: string;
        size: number;
    }
}

// Navigation
export namespace NavigationTypes {
    export interface Props {
        children?: ReactNode;
    }
}

// NavigationItem
export namespace NavigationItemTypes {
    export interface Props {
        href: string;
        name: string;
        active?: boolean;
    }
}

// Button
export namespace ButtonTypes {
    export interface Props {
        href: string;
        name: string;
    }
}
