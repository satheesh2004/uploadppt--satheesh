

function Frontend(){

return (
    <div className="main-div" >
        <div className="navbar">
            <a href="admin.html" className="admin-link">ADMIN</a>
        </div>
        <div className="header-container">
            <h1>REGISTER</h1>
        </div>
        <div className="form-container">
            <div className="form-overlay">
                <h2 style={{ textAlign: 'center' }}>UPLOAD YOUR PPT</h2>

                <label htmlFor="email">Email ID:</label>
                <input type="email" id="email" name="email" ref={emailInputRef} required />

                <button className="emailbutton" type="button" onClick={fetchTeamName}>Verify</button>

                {teamName && (
                    <div className="team-name-container">
                        <label htmlFor="name">Team Name:</label>
                        <input type="text" id="name" name="name" value={teamName} readOnly />
                    </div>
                )}

                <label htmlFor="fileUpload">Upload File:</label>
                <input type="file" id="fileUpload" name="fileUpload" accept=".ppt,.pptx" ref={fileInputRef} required />

                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>

                {showSubmitButton && (
                    <button type="button" className="sub" onClick={uploadFile}>Submit</button>
                )}

                <div id="status">{statusMessage}</div>
            </div>
        </div>
    </div>
)};


export default Frontend;