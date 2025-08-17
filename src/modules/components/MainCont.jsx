import { useState } from 'react';

import '../../assets/stylesheets/MainCont.css';
import AppNotice from './AppNotice';
import Form from './Form';

export default function MainCont({theme}) {
    const [noticeClosed, closeNotice] = useState(false);

    // NOTE: can only dismiss the notice
    // Currently there is no option (apart from a refresh) to re-view the notice
    function handleNotice() {
        closeNotice(true);
    }

    return (
        <main>
            {noticeClosed ? (
                <Form  theme={theme} />
            ) : (
                <AppNotice handleNotice={handleNotice} />
            )}
        </main>
    );
}
