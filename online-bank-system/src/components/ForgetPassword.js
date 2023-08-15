import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ForgetPassword = () => {
    const navigate = useNavigate();
        return (
            <div>
                <section className="vh-100">
                    <div className="container py-5 h-100">
                        <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

                            <div className="d-flex justify-content-around align-items-center mb-4">
                                    <h1>Forget Password</h1>
                            </div>

                            <form>
                            <div className="form-outline mb-4">
                                <label className="form-label" for="userID">Enter Email.ID</label>
                                <input type="text" id="userID" className="form-control form-control-lg" />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" for="otp">Enter OTP</label>
                                <input type="text" id="otp" className="form-control form-control-lg" />
                            </div>

                            <div className="d-flex justify-content-around align-items-center mb-4">
                                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={()=>navigate('setNewPassword')}>Proceed</button>
                                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={()=>navigate(-1)}>Back</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    </div>
        )
}