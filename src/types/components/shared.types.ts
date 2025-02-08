// Icon
export namespace IconTypes {
    export interface Props {
        icon: string;
        alt: string;
        width: number;
        height: number;
        styles: string;
    }
}

// Logo
export namespace LogoTypes {
    export interface Props {
        size: number;
        icon: string;
        styles: string;
    }
}

// Brand
export namespace BrandTypes {
    export interface Props {
        name: string;
        size: number;
    }
}
