import React from 'react';
import RootLayout from '@/components/layouts/RootLayout';

const about = () => {
    return (
        <div>
            <h1>This is about page</h1>
        </div>
    );
};

export default about;
about.getLayout = function getLayout(page){
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}