import '../../assets/stylesheets/AppNotice.css';

export default function AppNotice({ handleNotice}) {
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
        <div className="list-wrapper">
            <h2 className="notice-subheading">Please Note:</h2>
            <ul className="notice-list">
                <li className="notice-item">The template used in this app is based on popular resume templates.</li>
                <li className="notice-item">Although only some of the fields are mandatory, I recommend filling all of them.</li>
                <li className="notice-item">Some sections can be switched on and off depending on how you would like to structure your resume.</li>
                <li className="notice-item">I recommend doing additional research to better understand what information you would want include in your resume.</li>
            </ul>
        </div>
        <div className="button-cont"><button className="close-notice" onClick={handleNotice}>Start</button></div>
    </div>)
}