import "../Styles/ProfileDetails.css"
import 'bootstrap/dist/css/bootstrap.css';

const ProfileDetails = ({firstName, lastName, email}) => {
    return (
        // <div className="profile-page">
        //     <div className="row">
        //         <div className="col-xl-6 col-lg-7 col-md-12">
        //             <div className="card profile-header">
        //                 <div className="body">
        //                     <div className="row">
        //                         <div className="col-lg-4 col-md-4 col-12">
        //                             <div className="profile-image float-md-right"><img
        //                                 src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
        //                             </div>
        //                         </div>
        //                         <div className="col-lg-8 col-md-8 col-12">
        //                             <h4 className="m-t-0 m-b-0"><strong>{lastName}</strong> {firstName}</h4>
        //                             <span className="job_post">{email}</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="profile-row">
            <div className="image-div">
                    <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
            </div>
            <div className="col-lg-8 col-md-8 col-12">
                <h4 className="m-t-0 m-b-0"><strong>{lastName}</strong> {firstName}</h4>
                <span className="job_post">{email}</span>
            </div>
        </div>


    );
}

export default ProfileDetails;