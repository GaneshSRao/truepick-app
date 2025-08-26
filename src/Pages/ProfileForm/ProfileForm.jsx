import React, { useEffect } from 'react';
import './ProfileForm.css';

const ProfileForm = () => {
    useEffect(() => {
        // Initialize Materialize components when the component mounts
        M.AutoInit();

        // Custom logic for the chips input for hobbies
        const hobbiesInput = document.getElementById('hobbies_interests');
        if (hobbiesInput) {
            M.Chips.init(hobbiesInput, {
                data: [],
                onChipAdd: (e, chip) => {
                    console.log('Chip added:', chip.textContent);
                },
                onChipDelete: (e, chip) => {
                    console.log('Chip deleted:', chip.textContent);
                }
            });
        }
    }, []);

    return (
        <div className="main-wrapper">
            <div className="container-wrapper">
                <form action="#" method="POST" encType="multipart/form-data">
                    <div className="row">
                        <div className="hero-section center">
                            <h1 className="profile-name-display">Create your Profile</h1>
                            <p className="profile-tagline-display">Let's get to know you better!</p>
                        </div>

                        <div className="profile-section">
                            <h2 className="section-title">Basic & Contact Information</h2>
                            <div className="row">
                                <div className="input-field col s12 m4">
                                    <input id="profile_id" type="text" className="validate" name="profile_id" />
                                    <label htmlFor="profile_id">Profile ID</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <select id="gender" name="gender">
                                        <option value="" disabled>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <label htmlFor="gender">Gender</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="dob" type="date" className="datepicker" name="dob" />
                                    <label htmlFor="dob">Date of Birth</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="age" type="number" className="validate" name="age" min="18" max="100" />
                                    <label htmlFor="age">Age</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="email" type="email" className="validate" name="email" />
                                    <label htmlFor="email">Email Address</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="mobile_number" type="tel" className="validate" name="mobile_number" />
                                    <label htmlFor="mobile_number">Mobile Number</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="alt_mobile_number" type="tel" className="validate" name="alt_mobile_number" />
                                    <label htmlFor="alt_mobile_number">Alternate Mobile Number</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <select id="profile_created_by" name="profile_created_by">
                                        <option value="" disabled>Select Who Created</option>
                                        <option value="Self">Self</option>
                                        <option value="Parent">Parent</option>
                                        <option value="Sibling">Sibling</option>
                                        <option value="Friend">Friend</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <label htmlFor="profile_created_by">Profile Created By</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <select id="marital_status" name="marital_status">
                                        <option value="" disabled>Select Marital Status</option>
                                        <option value="Never Married">Never Married</option>
                                        <option value="Divorced">Divorced</option>
                                        <option value="Widowed">Widowed</option>
                                        <option value="Awaiting Divorce">Awaiting Divorce</option>
                                    </select>
                                    <label htmlFor="marital_status">Marital Status</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="children" type="text" className="validate" name="children" />
                                    <label htmlFor="children">Children</label>
                                </div>
                            </div>
                        </div>

                        <div className="profile-section">
                            <h2 className="section-title">Personal & Lifestyle Details</h2>
                            <div className="row">
                                <div className="input-field col s12 m4">
                                    <input id="religion" type="text" className="validate" name="religion" />
                                    <label htmlFor="religion">Religion</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="community_caste" type="text" className="validate" name="community_caste" />
                                    <label htmlFor="community_caste">Community/Caste</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="sub_community_caste" type="text" className="validate" name="sub_community_caste" />
                                    <label htmlFor="sub_community_caste">Sub-Community/Sub-Caste</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="mother_tongue" type="text" className="validate" name="mother_tongue" />
                                    <label htmlFor="mother_tongue">Mother Tongue</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <select id="dietary_habits" name="dietary_habits">
                                        <option value="" disabled>Select Dietary Habits</option>
                                        <option value="Vegetarian">Vegetarian</option>
                                        <option value="Eggetarian">Eggetarian</option>
                                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                                    </select>
                                    <label htmlFor="dietary_habits">Dietary Habits</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <select id="drinking_habits" name="drinking_habits">
                                        <option value="" disabled>Select Drinking Habits</option>
                                        <option value="Non-drinker">Non-drinker</option>
                                        <option value="Occasional drinker">Occasional drinker</option>
                                        <option value="Regular drinker">Regular drinker</option>
                                    </select>
                                    <label htmlFor="drinking_habits">Drinking Habits</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <select id="smoking_habits" name="smoking_habits">
                                        <option value="" disabled>Select Smoking Habits</option>
                                        <option value="Non-smoker">Non-smoker</option>
                                        <option value="Occasional smoker">Occasional smoker</option>
                                        <option value="Regular smoker">Regular smoker</option>
                                    </select>
                                    <label htmlFor="smoking_habits">Smoking Habits</label>
                                </div>
                                <div className="input-field col s12">
                                    <textarea id="hobbies_interests" className="materialize-textarea" name="hobbies_interests"></textarea>
                                    <label htmlFor="hobbies_interests">Hobbies & Interests</label>
                                    <div className="chip-container" id="hobbies_chips"></div>
                                </div>
                                <div className="input-field col s12">
                                    <textarea id="about_me" className="materialize-textarea" name="about_me"></textarea>
                                    <label htmlFor="about_me">About Me/Self Description</label>
                                </div>
                            </div>
                        </div>

                        <div className="profile-section">
                            <h2 className="section-title">Professional & Educational Information</h2>
                            <div className="row">
                                <div className="input-field col s12 m4">
                                    <input id="highest_education" type="text" className="validate" name="highest_education" />
                                    <label htmlFor="highest_education">Highest Education</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="education_field" type="text" className="validate" name="education_field" />
                                    <label htmlFor="education_field">Education Field</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="college_university" type="text" className="validate" name="college_university" />
                                    <label htmlFor="college_university">College/University</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="occupation_profession" type="text" className="validate" name="occupation_profession" />
                                    <label htmlFor="occupation_profession">Occupation/Profession</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="company_name" type="text" className="validate" name="company_name" />
                                    <label htmlFor="company_name">Company Name</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="annual_income" type="text" className="validate" name="annual_income" />
                                    <label htmlFor="annual_income">Annual Income</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="work_location" type="text" className="validate" name="work_location" />
                                    <label htmlFor="work_location">Work Location</label>
                                </div>
                            </div>
                        </div>

                        <div className="profile-section">
                            <h2 className="section-title">Family Details</h2>
                            <div className="row">
                                <div className="input-field col s12 m4">
                                    <input id="father_occupation" type="text" className="validate" name="father_occupation" />
                                    <label htmlFor="father_occupation">Father's Occupation</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="mother_occupation" type="text" className="validate" name="mother_occupation" />
                                    <label htmlFor="mother_occupation">Mother's Occupation</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="num_siblings" type="number" className="validate" name="num_siblings" min="0" />
                                    <label htmlFor="num_siblings">Number of Siblings</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="brothers" type="text" className="validate" name="brothers" />
                                    <label htmlFor="brothers">Brothers</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="sisters" type="text" className="validate" name="sisters" />
                                    <label htmlFor="sisters">Sisters</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="family_type" type="text" className="validate" name="family_type" />
                                    <label htmlFor="family_type">Family Type</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="family_status" type="text" className="validate" name="family_status" />
                                    <label htmlFor="family_status">Family Status</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="family_values" type="text" className="validate" name="family_values" />
                                    <label htmlFor="family_values">Family Values</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="ancestral_origin" type="text" className="validate" name="ancestral_origin" />
                                    <label htmlFor="ancestral_origin">Ancestral Origin</label>
                                </div>
                            </div>
                        </div>

                        <div className="profile-section">
                            <h2 className="section-title">Location Details</h2>
                            <div className="row">
                                <div className="input-field col s12 m4">
                                    <input id="current_city" type="text" className="validate" name="current_city" />
                                    <label htmlFor="current_city">Current City</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="current_state" type="text" className="validate" name="current_state" />
                                    <label htmlFor="current_state">Current State</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="current_country" type="text" className="validate" name="current_country" />
                                    <label htmlFor="current_country">Current Country</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="permanent_city" type="text" className="validate" name="permanent_city" />
                                    <label htmlFor="permanent_city">Permanent City</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="permanent_state" type="text" className="validate" name="permanent_state" />
                                    <label htmlFor="permanent_state">Permanent State</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="permanent_country" type="text" className="validate" name="permanent_country" />
                                    <label htmlFor="permanent_country">Permanent Country</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="citizenship" type="text" className="validate" name="citizenship" />
                                    <label htmlFor="citizenship">Citizenship</label>
                                </div>
                            </div>
                        </div>

                        <div className="profile-section">
                            <h2 className="section-title">Physical Attributes</h2>
                            <div className="row">
                                <div className="input-field col s12 m4">
                                    <input id="height" type="text" className="validate" name="height" />
                                    <label htmlFor="height">Height</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="weight" type="text" className="validate" name="weight" />
                                    <label htmlFor="weight">Weight</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="body_type" type="text" className="validate" name="body_type" />
                                    <label htmlFor="body_type">Body Type</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="complexion" type="text" className="validate" name="complexion" />
                                    <label htmlFor="complexion">Complexion</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="physical_status" type="text" className="validate" name="physical_status" />
                                    <label htmlFor="physical_status">Physical Status</label>
                                </div>
                            </div>
                        </div>

                        <div className="profile-section">
                            <h2 className="section-title">Horoscope/Astrological Details</h2>
                            <div className="row">
                                <div className="input-field col s12 m4">
                                    <input id="star_nakshatra" type="text" className="validate" name="star_nakshatra" />
                                    <label htmlFor="star_nakshatra">Star/Nakshatra</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="raasi_moon_sign" type="text" className="validate" name="raasi_moon_sign" />
                                    <label htmlFor="raasi_moon_sign">Raasi/Moon Sign</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <select id="manglik_dosham" name="manglik_dosham">
                                        <option value="" disabled>Select Manglik/Dosham</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Angshik">Angshik (Partial)</option>
                                    </select>
                                    <label htmlFor="manglik_dosham">Manglik/Dosham</label>
                                </div>
                                <div className="input-field col s12 m4">
                                    <input id="birth_time" type="text" className="validate" name="birth_time" />
                                    <label htmlFor="birth_time">Birth Time</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="birth_place" type="text" className="validate" name="birth_place" />
                                    <label htmlFor="birth_place">Birth Place</label>
                                </div>
                            </div>
                        </div>

                        <div className="profile-section">
                        <h2 className="section-title">Partner Preferences</h2>
                        <div className="row">
                            <div className="input-field col s12 m4">
                                <input id="pref_age_range" type="text" className="validate" name="pref_age_range" placeholder="e.g., 30-36" />
                                <label for="pref_age_range">Age Range</label>
                            </div>
                            <div className="input-field col s12 m4">
                                <input id="pref_height_range" type="text" className="validate" name="pref_height_range" placeholder="e.g., 170 cm - 185 cm" />
                                <label for="pref_height_range">Height Range</label>
                            </div>
                            <div className="input-field col s12 m4">
                                <select id="pref_marital_status" name="pref_marital_status">
                                    <option value="" disabled selected>Select Marital Status</option>
                                    <option value="Never Married">Never Married</option>
                                    <option value="Divorced">Divorced</option>
                                    <option value="Widowed">Widowed</option>
                                    <option value="Awaiting Divorce">Awaiting Divorce</option>
                                    <option value="No Preference">No Preference</option>
                                </select>
                                <label for="pref_marital_status">Marital Status Preference</label>
                            </div>
                            <div className="input-field col s12 m4">
                                <input id="pref_religion" type="text" className="validate" name="pref_religion"/>
                                <label for="pref_religion">Religion Preference</label>
                            </div>
                            <div className="input-field col s12 m4">
                                <input id="pref_community_caste" type="text" className="validate" name="pref_community_caste"/>
                                <label for="pref_community_caste">Community/Caste Preference</label>
                            </div>
                            <div className="input-field col s12 m4">
                                <input id="pref_mother_tongue" type="text" className="validate" name="pref_mother_tongue" placeholder="e.g., Tamil, Telugu, Kannada (comma-separated)"/>
                                <label for="pref_mother_tongue">Mother Tongue Preference</label>
                            </div>
                            <div className="input-field col s12 m4">
                                <input id="pref_education" type="text" className="validate" name="pref_education"/>
                                <label for="pref_education">Education Preference</label>
                            </div>
                            <div className="input-field col s12 m4">
                                <input id="pref_occupation" type="text" className="validate" name="pref_occupation"/>
                                <label for="pref_occupation">Occupation Preference</label>
                            </div>
                            <div className="input-field col s12 m4">
                                <input id="pref_annual_income" type="text" className="validate" name="pref_annual_income" placeholder="e.g., 20 Lakhs+ INR"/>
                                <label for="pref_annual_income">Annual Income Preference</label>
                            </div>
                            <div className="input-field col s12 m4">
                                <select id="pref_dietary_habits" name="pref_dietary_habits">
                                    <option value="" disabled selected>Select Dietary Habits</option>
                                    <option value="Vegetarian">Vegetarian</option>
                                    <option value="Eggetarian">Eggetarian</option>
                                    <option value="Non-Vegetarian">Non-Vegetarian</option>
                                    <option value="No Preference">No Preference</option>
                                </select>
                                <label for="pref_dietary_habits">Dietary Habits Preference</label>
                            </div>
                            <div className="input-field col s12 m4">
                                <select id="pref_drinking_habits" name="pref_drinking_habits">
                                    <option value="" disabled selected>Select Drinking Habits</option>
                                    <option value="Non-drinker">Non-drinker</option>
                                    <option value="Occasional drinker">Occasional drinker</option>
                                    <option value="Regular drinker">Regular drinker</option>
                                    <option value="No Preference">No Preference</option>
                                </select>
                                <label for="pref_drinking_habits">Drinking Habits Preference</label>
                            </div>
                            <div className="input-field col s12 m4">
                                <select id="pref_smoking_habits" name="pref_smoking_habits">
                                    <option value="" disabled selected>Select Smoking Habits</option>
                                    <option value="Non-smoker">Non-smoker</option>
                                    <option value="Occasional smoker">Occasional smoker</option>
                                    <option value="Regular smoker">Regular smoker</option>
                                    <option value="No Preference">No Preference</option>
                                </select>
                                <label for="pref_smoking_habits">Smoking Habits Preference</label>
                            </div>
                            <div className="input-field col s12 m4">
                                <input id="pref_location" type="text" className="validate" name="pref_location" placeholder="e.g., Bengaluru, Chennai (comma-separated)"/>
                                <label for="pref_location">Location Preference</label>
                            </div>
                            <div className="input-field col s12">
                                <select id="pref_manglik_dosham" name="pref_manglik_dosham">
                                    <option value="" disabled selected>Select Manglik/Dosham Preference</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Angshik">Angshik (Partial)</option>
                                    <option value="No Preference">No Preference</option>
                                </select>
                                <label for="pref_manglik_dosham">Manglik/Dosham Preference</label>
                            </div>
                            <div className="input-field col s12">
                                <textarea id="about_partner" className="materialize-textarea" name="about_partner"></textarea>
                                <label for="about_partner">About My Partner</label>
                            </div>
                        </div>
                    </div>

                    <div className="profile-section">
                        <h2 className="section-title">Profile Management & Security</h2>
                        <div className="row">
                            <div className="input-field col s12 m4">
                                <select id="profile_status" name="profile_status">
                                    <option value="" disabled selected>Select Profile Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Hidden">Hidden</option>
                                </select>
                                <label for="profile_status">Profile Status</label>
                            </div>
                            <div className="input-field col s12 m4">
                                <select id="profile_visibility" name="profile_visibility">
                                    <option value="" disabled selected>Select Profile Visibility</option>
                                    <option value="Visible to all">Visible to all</option>
                                    <option value="Visible to accepted interests">Visible to accepted interests</option>
                                    <option value="Hidden">Hidden</option>
                                </select>
                                <label for="profile_visibility">Profile Visibility</label>
                            </div>
                            <div className="input-field col s12 m4">
                                <select id="photo_visibility_settings" name="photo_visibility_settings">
                                    <option value="" disabled selected>Select Photo Visibility</option>
                                    <option value="Visible to all">Visible to all</option>
                                    <option value="Visible to accepted interests">Visible to accepted interests</option>
                                    <option value="Hidden">Hidden</option>
                                </select>
                                <label for="photo_visibility_settings">Photo Visibility Settings</label>
                            </div>
                            <div className="input-field col s12 m4">
                                <input id="verification_status" type="text" className="validate" name="verification_status" placeholder="e.g., Email Verified, Phone Verified"/>
                                <label for="verification_status">Verification Status</label>
                            </div>
                        </div>
                    </div>

                    <div className="profile-section">
                        <h2 className="section-title">Media</h2>
                        <div className="row">
                            <div className="col s12">
                                <div className="file-field input-field">
                                    <div className="view-profile-btn waves-effect waves-light">
                                        <span>Upload Profile Picture(s)</span>
                                        <input type="file" multiple accept="image/*" name="profile_pictures[]"/>
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" placeholder="Upload one or more profile pictures"/>
                                    </div>
                                </div>
                                <div className="media-gallery" id="profile_pic_preview">
                                    </div>
                            </div>
                            <div className="col s12 mt-4">
                                <div className="file-field input-field">
                                    <div className="view-profile-btn waves-effect waves-light">
                                        <span>Upload Photo Album Images</span>
                                        <input type="file" multiple accept="image/*" name="album_pictures[]"/>
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" placeholder="Upload additional album images"/>
                                    </div>
                                </div>
                                <div className="media-gallery" id="album_pic_preview">
                                    </div>
                            </div>
                            <div className="col s12 mt-4">
                                <div className="file-field input-field">
                                    <div className="view-profile-btn waves-effect waves-light">
                                        <span>Upload Video Profile</span>
                                        <input type="file" accept="video/*" name="video_profile"/>
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" placeholder="Upload a video profile (optional)"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 center">
                        <button className="view-profile-btn waves-effect waves-light" type="submit" name="action">Submit Profile
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    );
};

export default ProfileForm;