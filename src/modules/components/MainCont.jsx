import { useState } from 'react';

import '../../assets/stylesheets/MainCont.css';
import AppNotice from './AppNotice';
import Form from './Form';

export default function MainCont({ theme }) {
    const [noticeClosed, closeNotice] = useState(false);

    // NOTE: can only dismiss the notice
    // Currently there is no option (apart from a refresh) to re-view the notice
    function handleNotice() {
        closeNotice(true);
    }

    function submissionHandler() {
        console.log('attempted to submit the form');
    }

    return (
        <main>
            {noticeClosed ? (
                <Form  submissionHandler={submissionHandler} />
            ) : (
                <AppNotice handleNotice={handleNotice} theme={theme} />
            )}
        </main>
    );
}
