import React from 'react';
import { Link } from 'react-router-dom';

const ETicket = () => {
    return(
        <div>
            <Link to = "/eticket" target = "_blank">
                <button className="cta">Go to App</button> 
            </Link>
            
            <h5>Avatars:</h5>
            <p>Only registered users can use E-shop. To become register user, please go to signUp page and fill up form.
                            <br/>
                             You can, also,  use default user or admin credentials for demo purpose.</p>
                        <ol>
                            <li><h6> User </h6>
                                <p> Default value: email: user@user.com, password: UserUser1</p>
                                <ul>Can do:                                    
                                    <li>see information about performances</li>
                                    <li>sign up,</li>
                                    <li>sign in,</li>                                    
                                    <li>buy tickets on E-shop page,</li>
                                </ul>
                            </li>
                            <li><h6> Admin</h6>
                                <p> Default value: email: admin@admin.com, password: AdminAdmin1</p>
                                <ul>
                                    Can do:
                                    <li>all that user can do,</li>
                                    <li>sell tickets for performance</li>
                                    <li>add new performance,</li>
                                    <li>make entry for new tickets</li>
                                </ul>
                            </li>
                        </ol>
                        <h5>Descriptions - App pages:</h5>
                        <ol>
                            <li><h6>SHOPPING CARD:</h6>
                                <ul>
                                    <li>
                                       <p> Admin have possibilities to filter performances by:</p>
                                        <ul>
                                            <li> - type of performance : ballet, drama, opera, philharmonic,</li>
                                            <li> - type of scene: big scene and small scene,</li>
                                            <li> - the letters that are in the title of the play,</li>
                                            <li> - quantity of tickets: all tickets or only more then 0 on stock - checkbox,</li>
                                            <li> - number of filtered plays - checkbox</li>
                                        </ul>                         
                                        <p>You can use all filters or some of them.</p>
                                    </li>
                                    <li>
                                        <p>User have possibilities to filter performances by:</p>
                                        <br/>
                                        - type of performance: ballet, drama, opera, philharmonic    
                                   <br/>
                                           When you order tickets, go to the cart and pay. Then the purchased tickets are removed from the warehouse. If you try to order more tickets than are in stock, a warning message appears and you will not be allowed to do so.
                                   
                                    </li>
                                </ul>                                
                            </li>
                            <li><h6>Entry page(only Admin)</h6>
                                <p> Adding new tickets - This option is enabled only for the admin.</p>
                                <ul>
                                    <li>Go to ENTRY</li>
                                    <li>Fill the entry form:
                                        
                                        <ul>Validation:
                                            <li> - title - letters</li>
                                            <li> - author - letters</li>
                                            <li> - price - numbers</li>
                                            <li> - quantity - press button quantity - random number</li>
                                            <li> - scene - radio button - 2 options - small or large</li>
                                            <li> - image is randomly by type of performance</li>
                                        </ul>
                                    </li>
                                    <li>Press button ENTRY</li>
                                </ul>      
                                <p>Congratulation!!! You added new performance on stock, and now you can sell it.</p>
                            </li>
                            <li><h6>SignUp Page</h6> 
                                <br/>Validation on signUp page will not allow you to submit if information are not valid... 
                                Valid information * email - something@something.xy 
                            </li>
                            <li><h6>SignIn Page </h6>
                                <br/>Information have to bi valid to submit. Submitting validate signIn form will redirect you to App
                                <p>Notice: if you are not logIn you are not allow to go to E-shop page, and only if you are  logIn
                                with admin credentials you can visit entry page to add new entry of tickets.  </p>                              
                            </li>
                      
                            <li><h6>Landing page:</h6>
                                <br/>
                                <ul>
                                    <li><p>Language menu (choose English or Serbian)</p></li>
                                    <li><p>Responsive navigation menu hamburger</p></li>
                                    <li><p>E-shop -position:</p>
                                        
                                    Responsive - inside hamburger menu
                                        <br/>
                                    Desk top - inside navigation menu on the top right
                                    </li>
                                    <li><p> Sections:</p>
                                        <ul>
                                            <li>Links</li>
                                            <li>Text</li>
                                            <li>Premiere</li>
                                            <li>Reviews - slider left to right</li>
                                            <li>Location
                                                <ul>
                                                    <li>Gallery - slider with dots</li>
                                                    <li>Google map</li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>
                                    <li><p>Footer</p></li>
                                    <li><p>Credits for images and icons</p></li>
                                </ul>
                            </li>
                        </ol>
                        <h6>Thank you for reading!
                        <br/>Tanja</h6>
        </div>
    )
}

export default ETicket;