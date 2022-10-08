import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../komponen/navbar.js';

export default function Feature() {
    return(
        <div>
            <Header/>
            <div class="container w-50">
                <div class="display py-5"> 
                    <h1>Display 1</h1>
                    <h2>Display 2</h2>
                    <h3>Display 3</h3>
                    <h4>Display 4</h4>
                </div>
                <div class="tag p">
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. duis mollis, est non commodo luctus.</p>
                        </blockquote>                
                    </figure>
                </div>
                <div class="heading">
                    <div class="float-end">You can use the mark tag to highlight text.</div><br></br>
                    <div class="float-end text-decoration-line-through">This line of text is meant to be treated as deleted text .</div><br></br>
                    <div class="float-end text-decoration-line-through">Ths line of text is meant to be treated as no longer accurate.</div><br></br>
                    <div class="float-end text-decoration-underline">This line of text is meant to be treated as an addition to the document.</div><br></br>
                    <div class="float-end"><sup>This line of text will render as underline.</sup></div><br></br>
                    <div class="float-end"><b>This line of text will render as underline.</b></div><br></br>
                    <div class="float-end"><i>This line of text will render as underline.</i></div><br></br>
                </div>
            </div>
        </div>
    )
}