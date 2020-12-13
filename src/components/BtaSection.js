import react from 'react';

const BtaSection = () => {
    return(
        <div>
                        <h5>Avatars:</h5>
                        <p>Only registered users can use E-shop. To become register user, please go to signUp page and fill up form.
                            <br/>
                             You can, also,  use default user or admin credentials for demo purpose</p>
                        <ol>
                            <li><h6> User </h6>
                                <p>Default value: email: user@user.com, password: UserUser1</p>
                                <ul>
                                <p>Can do:</p>
                                    <li>sign in,</li>
                                    <li>sign up,</li>
                                    <li>see information about hotels, restaurants, attractions, airports, providers(airplane, train, bus, rent a car)</li>
                                    <li>see other users comments,</li>
                                    <li>give feedback about hotels, restaurants, attractions, providers,</li>
                                    <li>see own comments,</li>
                                    <li>delete own comment</li>
                                </ul>
                            </li>
                            <li> <h6>Admin</h6>                                
                                <p>Default value: email: admin@admin.com, password: AdminAdmin1</p>
                                <ul>
                                    <p>Can do:</p>
                                    <li>all that user can do,</li>
                                    <li>delete users comment ,</li>
                                    <li>add new provider,</li>
                                    <li>edit provider</li>
                                </ul>
                            </li>
                        </ol>
                        <h5>Descriptions - App pages:</h5>
                        <ol>
                            <li><h6>SignUp Page </h6>
                                <p>
                                Validation on signUp page will not allow you to submit if information are not valid... 
                                Valid information * email - something@something.xy * password - Number, letter, Capital letter =8 
                                Submitting validate form will redirect you to SignIn page</p>
                            </li>
                            <li><h6>SignIn Page </h6>
                                <p>Information have to bi valid to submit Submitting validate signIn form will redirect you to App
                                <br/>
                                Notice: if you are not logIn you are not allow to go to App pages, and if you are logIn you have to 
                                Sign out to visit SignIn and SignUp pages.</p>
                            </li>
                            <li>
                                <h6>Home Page (user and admin) </h6>
                                <p>Select country, and than city from drop-down menu. Redirect to desire city page with information.</p>
                            </li>
                            <li>  
                               <h6> Life...(user and admin) </h6>
                                <p>Press button "SHOW INFORMATION ABOUT CITY" = Menu:</p>
                                <ul>
                                    <li>
                                        <p>Restaurants </p>
                                        <ul>
                                            <li> - information (name, contact, info, description, image, rating)</li>
                                            <li> - see comments (user comments from API and App)</li>
                                            <li> - leave a comment (user to App)</li>
                                            <li> - delete a comment (admin - user comment from App)</li>
                                        </ul>  
                                    </li>
                                    <li>
                                        <p>Hotels </p>
                                        <ul>
                                            <li> - information (name, contact, info, description, image, rating)</li>
                                            <li> - see comments (user comments from API and App)</li>
                                            <li> - leave a comment (user to App)</li>
                                            <li> - delete a comment (admin - user comment from App)</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>Attractions </p>
                                        <ul>
                                            <li> - information (name, contact, info, description, image, rating)</li>
                                            <li> - see comments (user comments from API and App)</li>
                                            <li> - leave a comment (user to App)</li>
                                            <li> - delete a comment (admin - user comment from App)</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>Airports - information (name, code, info)</p>
                                    </li>
                                    <li>
                                        Select form = change city</li>                                    
                                </ul>
                            </li> 
                            <li>
                                <h6>Feedback (only user)</h6>
                                <br/>
                                <ul>
                                    <li>My comments - See all your feedbacks- Delete your own comment</li>
                                    <li>Provider List - Providers - list - details - Leave comment (user to App)</li>
                                </ul> 
                            </li>
                            <li>
                                <h6>Providers (only admin)</h6>
                                <br/>
                                <ul>
                                    <li>New Provider Form - add new provider</li>
                                    <li>Provider List - Providers - list - details - Edit - change information about provider</li>
                                </ul>
                            </li>
                        </ol>
                    

        </div>
    )
}

export default BtaSection;