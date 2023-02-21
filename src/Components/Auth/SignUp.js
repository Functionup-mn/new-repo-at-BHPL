import './SignUp.css'

function SignUp() {
    return (
        <body>
            <form id="form">
                <h3>SignUp Form-</h3>
                <label class="name">Enter First Name:-</label>
                <br />
                <input type="text" class="inputBox" required />
                <br />
                <label class="name">Enter Middle Name:-</label>
                <br />
                <input type="text" class="inputBox" />
                <br />
                <label class="name">Enter Last Name:-</label>
                <br />
                <input type="text" class="inputBox" required />
                <br />
                <label class="name">Enter Address:-</label>
                <br />
                <input type="text" class="inputBox" required />
                <br />
                <label class="name">Contact Number:-</label>
                <br />
                <input type="number" class="inputBox" required />
                <br />
                <label class="name">Enter Email Address:-</label>
                <br />
                <input type="email" class="inputBox" required />
                <br />
                <label class="name">Password:-</label>
                <br />
                <input type="password" class="inputBox" required />
                <br />
                <label class="name">Confirm_Password:-</label>
                <br />
                <input type="password" class="inputBox" required />
                <br />
                <label class="Add">Country:-</label>
                <br />
                <select class="dropBox" required>
                    <option value=""> </option>
                    <option value="india">India</option>
                    <option value="nepal">Nepal</option>
                    <option value="bhutan">Bhutan</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <label class="Add">State:- </label>
                <br />
                <select class="dropBox" required>
                    <option value=""> </option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Madhaya Pradesh">Madhaya Pradesh</option>
                    <option value="Maharastara">Maharastara</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <label class="Add">City:-</label>
                <br />
                <select class="dropBox" required>
                    <option value=""> </option>
                    <option value="mau">Mau</option>
                    <option value="varanasi">Varanasi</option>
                    <option value="kanpur">Kanpur</option>
                    <option value="lucknow">Lucknow</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <label class="Add">Sex:-</label>
                <br />
                <select class="dropBox" required>
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <label class="Add">Preferred Language:-</label>
                <br />
                <input type="radio" name='Hindi' value="Hindi" />
                <span class="lang">Hindi</span>
                <br />
                <input type="radio" name='Hindi' value="English" />
                <span class="lang">English</span>
                <br />
                <input type="radio" name='Hindi' value="Marathi" />
                <span class="lang">Marathi</span>
                <br />
                <label id='hb'>Hobbies:-</label>
                <br />
                <span class="hobi">Playing Cricket</span>
                <input type="checkbox" />
                <br />
                <span class="hobi">Watching Movies</span>
                <input type="checkbox" />
                <br />
                <span class="hobi">Playing Football</span>
                <input type="checkbox" />
                <br />
                <span class="hobi">Coocking</span>
                <input type="checkbox" />
                <br />
                <span class="hobi">Reading Books</span>
                <input type="checkbox" />
                <br />
                <span class="hobi">Other</span>
                <input type="checkbox" />
                <br />
                <label class="mydate" >Date of Birth:-</label>
                <br />
                <input type="date" class="date" />
                <br />
                <label class="mydate" >Date:-</label>
                <br />
                <input type="date" class="date" />
                <br />
                <br />
                <input type="checkbox" required />
                <label id='cnd'>I accept the terms and conditions</label>
                <br />
                <br />
                <input type="reset" value="    Reset    " id="btn" />
                <input type="submit" value="   Submit    " id='sbtn' />

            </form>
        </body>
    )
}

export default SignUp