import React from 'react';
import * as classes from './ProfileData.module.css';
import '../../Theme/bootstrap.css';
import image from '../../Assets/commentImg.png';

const ProfileData = (props) => {
  return (
    <>
      <div className="card border-black" style={{ marginTop: '2.3rem' }}>
        <div className={classes.profileData}>
          <div className="card-header" style={{
            backgroundColor: '#000', color: 'white', fontWeight: 'bold',
            fontSize: 20
          }}>البيانات</div>
          <div className="card-body" style={{ paddingTop: '2rem' }}>
            {props.children}
          </div>
          <button type="button" className="btn btn-danger" style={{ float: "left", margin: '1rem' }}>تعديل</button>
        </div>
      </div>
    </>
  )
}
export default (ProfileData);