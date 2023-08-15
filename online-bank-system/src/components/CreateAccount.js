import React from 'react';
import './CreateAccount.css'
import Navbar from './Navbar';

export const CreateAccount = () => {
        return (
          <div>
            <Navbar></Navbar>
          
            <section className="vh-100 bg-image"
            style ={ { backgroundImage: "url('https://i.pinimg.com/originals/5d/e0/8d/5de08de24459fedac3d28b10a039e2a6.jpg')" } }>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
              <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card" style={{borderradius: 15+"px"}}>
                      <div className="card-body p-5">
                        <h2 className="text-uppercase text-center mb-5">Open an Account</h2>
          
                        <form>

                        <div className="col-md-12">
                                <select className="form-select mt-3" required="true">
                                      <option selected disabled value="">Select Type of Account</option>
                                      <option value="savings">Savings</option>
                                      <option value="current">Current</option>
                                      <option value="salary">Salary</option>
                                      <option value="fixedDeposit">Fixed Deposit</option>
                                      <option value="recurringDeposit">Recurring Deposit</option>
                                      <option value="nri">NRI</option>
                               </select>
                               <br></br>
                           </div>

                        <div className="col-md-12">
                                <select className="form-select mt-3" required="true">
                                      <option selected disabled value="">Title</option>
                                      <option value="mr">Mr.</option>
                                      <option value="mrs">Mrs.</option>
                                      <option value="miss">Miss.</option>
                               </select>
                               <br></br>
                           </div>
                        
          
                          <div className="form-outline mb-4">
                            <input type="text" id="firstName" className="form-control form-control-lg" placeholder='First Name' required="true"/>
                          </div>
          
                          <div className="form-outline mb-4">
                            <input type="text" id="middleName" className="form-control form-control-lg" placeholder='Middle Name'/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="lastName" className="form-control form-control-lg" placeholder='Last Name' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="fatherName" className="form-control form-control-lg" placeholder="Father's Name" required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="mobileNumber" className="form-control form-control-lg" placeholder='Mobile Number' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="email" id="emailID" className="form-control form-control-lg" placeholder='Email ID'/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="aadharNumber" className="form-control form-control-lg" placeholder='Aadhar Card Number' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="dateOfBirth" className="form-control form-control-lg" placeholder='Date of Birth' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="middleName" className="form-control form-control-lg" placeholder='Middle Name' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <h5>Residential Address</h5>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="rAddressLine1" className="form-control form-control-lg" placeholder='Address Line 1' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="rAddressLine2" className="form-control form-control-lg" placeholder='Address Line 2' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="rLandmark" className="form-control form-control-lg" placeholder='Landmark'/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="rState" className="form-control form-control-lg" placeholder='State' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="rCity" className="form-control form-control-lg" placeholder='City' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="rPincode" className="form-control form-control-lg" placeholder='Pincode' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <h5>Permanent Address</h5>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="pAddressLine1" className="form-control form-control-lg" placeholder='Address Line 1' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="pAddressLine2" className="form-control form-control-lg" placeholder='Address Line 2' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="pLandmark" className="form-control form-control-lg" placeholder='Landmark'/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="pState" className="form-control form-control-lg" placeholder='State' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="pCity" className="form-control form-control-lg" placeholder='City' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="pPincode" className="form-control form-control-lg" placeholder='Pincode' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <h5>Occupation Details</h5>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="occupationType" className="form-control form-control-lg" placeholder='Occupation Type' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="sourceIncome" className="form-control form-control-lg" placeholder='Source of Income' required="true"/>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="text" id="annualIncome" className="form-control form-control-lg" placeholder='Gross Annual Income' required="true"/>
                          </div>

                          <div className="form-check-inline">
                                <label className="form-check-label" required="true">Do you want a debit card?
                                </label>
                            </div>
                            <div className="form-check-inline">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="debitRadio"/>Yes
                                </label>
                            </div>
                            <div className="form-check-inline">
                                <label className="form-check-label">
                                    <input type="radio" className="form-check-input" name="debitRadio"/>No
                                </label>
                            </div>

                          <div className="form-check d-flex mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="optNetBanking" />
                            <label className="form-check-label" for="optNetBanking" required="true">Opt for Net Banking</label>
                          </div>
          
                          <div className="form-check d-flex mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="agree" />
                            <label className="form-check-label" for="agree" required="true">I agree...</label>
                          </div>
          
                          <div className="d-flex justify-content-center">
                            <button type="button"
                              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Submit</button>
                          </div>
          
                        </form>
          
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
        );
    }


