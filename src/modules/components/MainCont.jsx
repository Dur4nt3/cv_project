import { useState } from 'react';

import '../../assets/stylesheets/MainCont.css';
import AppNotice from './AppNotice';

export default function MainCont() {
    const [noticeClosed, closeNotice] = useState(false);

    // NOTE: can only dismiss the notice
    // Currently there is no option (apart from a refresh) to re-view the notice
    function handleNotice() {
        closeNotice(true);
    }

    return (
        <main>
            {noticeClosed ? (
                console.log('notice closed render form')
            ) : (
                <AppNotice handleNotice={handleNotice} />
            )}
        </main>
    );
}
