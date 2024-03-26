class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
    <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div class="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
            <div class="col-lg-6 px-5 text-start">
                <small><i class="fa fa-map-marker-alt me-2"></i>Innovation & Incubation Center, BIET Jhansi</small>
                <small class="ms-4"><i class="fa fa-envelope me-2"></i>iic.bietjhansi@gmail.com</small>
            </div>
            <div class="col-lg-6 px-5 d-flex flex-row text-end">
                <small class="p-2">Follow us:</small>
              <a class="text-white-50 p-2 ms-3"
                    href="https://www.facebook.com/BIET-Jhansi-Innovation-and-Incubation-Cell-116551726553214/"><i
                        class="fab fa-facebook-f"></i></a>
                <a class="text-white-50 p-2 ms-3" href="https://www.youtube.com/watch?v=vmAfQXCDPlQ"><i
                        class="fab fa-youtube"></i></a>
                <a class="text-white-50 p-2 ms-3"
                    href="https://www.linkedin.com/company/innovation-and-incubation-cell-biet-jhansi/mycompany/"><i
                        class="fab fa-linkedin-in"></i></a>
                <a class="text-white-50 p-2 ms-3" href="https://www.instagram.com/iic_bietjhs/"><i
                        class="fab fa-instagram"></i></a>
            </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
                <h1 id ="nav-responsive-big" class="fw-bold text-primary m-0">Innovation and Incubation<span class="text-white"> Cell</span></h1>
                <h1 id ="nav-responsive-small" class="fw-bold text-primary m-0" >IIC<span class="text-white"> BIET</span></h1>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="../index.html" class="nav-item nav-link ">Home</a>


                    <div class="nav-item dropdown">
                       <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Events</a>
                      <div class="dropdown-menu m-0">
                        <a href="../events/index.html" class="dropdown-item">Innovanza'22</a>
                        <a href="../other-events/index.html" class="dropdown-item">Other Events</a>
                      </div>
                    </div>
                    <div class="nav-item dropdown">
                       <a href="../events\index.html" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Innovanza'23</a>
                      <div class="dropdown-menu m-0">
                        <a href="../events/CodeEThon.html" class="dropdown-item">Code-E-Thon</a>
                        <a href=" " class="dropdown-item">HackThon</a>
                        <a href=" " class="dropdown-item">Setu Nirman</a>
                        <a href=" " class="dropdown-item">Egg Drop</a>
                        <a href=" " class="dropdown-item">F1 Racing</a>
                        <a href=" " class="dropdown-item">Exibition</a>
                
                      </div>
                    </div>


                    <div class="nav-item dropdown">
                       <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Traning & Certification</a>
                      <div class="dropdown-menu m-0">
                        <a href="../training/index.html" class="dropdown-item">Training</a>
                        <a href="../certification.html" class="dropdown-item">Certificate Verification</a>
                      </div>
                    </div>

                    <a href="../entrepreneurship/index.html" class="nav-item nav-link">BIICF</a>
                 
                    <div class="nav-item dropdown">
                       <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">About US</a>
                      <div class="dropdown-menu m-0">
                        <a href="../about.html" class="dropdown-item">Mission</a>
                        <a href="../team/team.html" class="dropdown-item">Our Team</a>
                      </div>
                    </div>
                 
                </div>

            </div>
        </nav>
    </div>

        
        `
    }
}

customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <div class="container-fluid bg-dark text-white-50 footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h1 class="fw-bold text-primary mb-4">Innovation and Incubation<span class="text-white">
                            Cell</span></h1>
                    <p>The incubation centre of Bundel- khand region which give a wing to your innovative idea and also build a foundation for your startups</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-square me-1" href="https://www.instagram.com/iic_bietjhs/"><i
                                class="fab fa-instagram"></i></a>
                        <a class="btn btn-square me-1"
                            href="https://www.facebook.com/BIET-Jhansi-Innovation-and-Incubation-Cell-116551726553214/"><i
                                class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square me-1" href="https://www.youtube.com/watch?v=vmAfQXCDPlQ"><i
                                class="fab fa-youtube"></i></a>
                        <a class="btn btn-square me-0"
                            href="https://www.linkedin.com/company/innovation-and-incubation-cell-biet-jhansi/mycompany/"><i
                                class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-light mb-4">Address</h5>
                    <p><i class="fa fa-map-marker-alt me-3"></i>Innovation and Incubation cell, BIET Jhansi</p>
                    <p><i class="fa fa-phone-alt me-3"></i>+91 70072 57972</p>
                    <p><i class="fa fa-envelope me-3"></i>iic.bietjhansi@gmail.com</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-light mb-4">Quick Links</h5>
                    <a class="btn btn-link" href="">Home</a>
                    <a class="btn btn-link" href="">Events</a>
                    <a class="btn btn-link" href="">Tranings</a>
                    <a class="btn btn-link" href="">R&D Patnership</a>
                    <a class="btn btn-link" href="">About</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-light mb-4">Newsletter</h5>
                    <p>Get Notified to our latest updates.</p>
                    <div class="position-relative mx-auto" style="max-width: 400px;">
                        <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                            placeholder="Your email">
                        <button type="button"
                            class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">iic_bietjhs</a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">            
                        Designed By <a href="https://www.instagram.com/the_golden_hearted/">Shubham Pathak</a> &
                        <a href="https://srivastava-abhishek.in/">Abhishek Srivastava</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
}

customElements.define('my-footer', MyFooter)