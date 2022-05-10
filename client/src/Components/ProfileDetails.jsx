import "../Styles/ProfileDetails.css"
import 'bootstrap/dist/css/bootstrap.css';

const ProfileDetails = ({firstName, lastName, email}) => {
    return (
        <div className="marginTop">
            <div className="profile-row">

                <div className="image-div">
                    <div className="centerAvatar">
                        <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Avatar" class="avatar" />
                    </div>
                </div>
                    <div className="col-lg-8 col-md-8 col-12">
                    <div className="nameEmail">
                        <h4 className="m-t-0 m-b-0"><strong>{lastName+" "+firstName}</strong></h4>
                        <span className="job_post">{email}</span>
                    </div>
                    </div>
            </div>
        </div>


    );
}

export default ProfileDetails;