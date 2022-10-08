
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../komponen/navbar.js';

export default function About() {
    return(
        <div>
            <Header></Header>
            <div class="container">
                <div class="py-5" style={{width:'250px',position:'fixed',margin:'auto',width:'40%',left:'30%'}}>                    <>
                        <div class="mb-3 py-2">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3 py-2">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div class="mb-3 form-floating py-2">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label for="floatingTextarea">Comments</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </>
                </div>
                <div class="position-absolute bottom-0 start-50 translate-middle-x">
                    <iframe width="400" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.0623546306415!2d2.2916715157884173!3d48.85702134378663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sMenara%20Eiffel!5e0!3m2!1sid!2sid!4v1635924709289!5m2!1sid!2sid" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br />
                </div>
            </div>
        </div>
        
    )
}
