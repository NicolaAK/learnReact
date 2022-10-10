

import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://s3.amazonaws.com/images.seroundtable.com/google-css-images-1515761601.jpg' />
            </div>
            <div className={s.avatar}>
                <div className={s.avatarFoto}>
                    <img src='https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg' />
                </div>
                <div>
                    age
                </div>
            </div>
        </div>


    )
}

export default ProfileInfo;