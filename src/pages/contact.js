import React from 'react';
import RootLayout from '@/components/layouts/RootLayout';

const contact = () => {
    return (
        <div>
            <h1>This is contact page</h1>
        </div>
    );
};

export default contact;
contact.getLayout = function getLayout(page){
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}