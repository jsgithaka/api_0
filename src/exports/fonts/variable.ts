import localFont from 'next/font/local';

export const workSans = localFont({
    src: [
        {
            path: '../../../public/assets/fonts/variable/work_sans/normal.ttf',
            style: 'normal',
        },
        {
            path: '../../../public/assets/fonts/variable/work_sans/italic.ttf',
            style: 'italic',
        },
    ],
});
