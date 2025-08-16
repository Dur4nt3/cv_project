import '../../assets/stylesheets/AppNotice.css';

import historyLight from '../../assets/media/icons/history-light-mode.svg';
import historyDark from '../../assets/media/icons/history-dark-mode.svg';

export default function AppNotice({ handleNotice, theme }) {
    return (<div className='notice-cont'>
        <h1 className="notice-header">Welcome to CV Create</h1>
        <p className="notice-paragraph">This app helps you put together a clean, simple CV.</p>

        <div className="list-wrapper">
            <h2 className="notice-subheading">How it works:</h2>
            <ol className="notice-list">
                <li className="notice-item">Fill in your information in the provided fields.</li>
                <li className="notice-item">preview and edit your CV as you go.</li>
                <li className="notice-item">Download your CV (PDF format) when you're finished.</li>
            </ol>
        </div>

        <p className="notice-paragraph"><b>NOTE: </b>data is saved across sessions.</p>
        <p className="notice-paragraph">
            You can access and manage your CVs via the history 
            (<img src={theme === 'light' ? historyLight : historyDark } className='inline-img' alt='resume history indicator example' />) 
            button at the top of the page.
        </p>

        <div className="button-cont"><button className="close-notice" onClick={handleNotice}>Start</button></div>
    </div>)
}