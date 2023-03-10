import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
         <center>
        

        <!-- About Me -->
        <div id="abtme">
            <h2 style="font-size: 50px;"> Who am I ?</h2>
            <br>
            <img src="images/me.jpg" alt="Profile Picture" style="border-radius: 50%; height:180px;">
            <br>
            <br>
            <h2><b><i>Kenneth Louis Alvares</i></b></h2><br>
            <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco <b>laboris nisi ut aliquip</b>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>

        <hr>

        <!-- Style focused on -->

        <div style="padding:  5px 300px;">
            <h2> Style Focused on </h2>
            
            <p> 
                There are several styles of photography I have been experimenting with, few of which are
            </p>
            <p> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco <b>laboris nisi ut aliquip</b>  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

           
        </div>

        <hr>

        <!--  Hi Key -->

        <div>
            <h2> My Equiptment </h2>
            
            <img src="Pictures/kit.jpg" alt="Photography kit" usemap="#workmap">
            <map name="workmap">
                <area shape="rect" coords="286,273,771,586" alt="Computer" href="https://www.lenovo.com/in/en/d/deals?sort=sortBy&currentResultsLayoutType=grid&cid=in%3Asem%3Akkjv7i&ef_id=%7Bgclid%7D%3AG%3As&s_kwcid=AL!8093!3!536567466124!p!!g!!lenovo%20laptop&resultsLayoutType=grid">
                <area shape="rect" coords="97,343,240,546" alt="camera" href="https://www.sony.co.in/electronics/interchangeable-lens-cameras/ilce-7m4/buy">
                <area shape="rect" coords="846,303,,944,525" alt="FlashLight" href="https://www.amazon.in/Godox-Thinklite-TT685-Flash-Cameras/dp/B01GHLNRL4?ref_=Oct_d_otopr_d_1389196031&pd_rd_w=jog8J&content-id=amzn1.sym.f5d0d3e7-fe8a-4766-96ee-1c39e69d20b3&pf_rd_p=f5d0d3e7-fe8a-4766-96ee-1c39e69d20b3&pf_rd_r=JWFRZTDZ8TBXW4FK86D9&pd_rd_wg=PgLb8&pd_rd_r=130fb106-fd79-4b0a-ae5b-6ffde6741ee0&pd_rd_i=B01GHLNRL4">
                <area shape="rect" coords="817,137,908,195" alt="SD Card" href="https://www.amazon.in/SanDisk-microSDXC-Memory-Adapter-SDSQUAR-128G-GN6MA/dp/B073JYC4XM/ref=sr_1_1_sspa?adgrpid=58472378106&ext_vrnc=hi&hvadid=398119348766&hvdev=c&hvlocphy=9062006&hvnetw=g&hvqmt=e&hvrand=10496889848998591039&hvtargid=kwd-3679735725&hydadcr=24345_1971221&keywords=sd+card+for+camera&qid=1667581852&qu=eyJxc2MiOiI0LjA2IiwicXNhIjoiMy42MiIsInFzcCI6IjIuODAifQ%3D%3D&sr=8-1-spons&psc=1&smid=A2X89M7O6ZTQRI">
                <area shape="rect" coords="300,56,752,191" alt="Lenses1" href="https://www.sony.co.in">
                <area shape="rect" coords="122,132,201,269" alt="Battery" href="https://www.amazon.in/NP-FW50-Batteries-SLT-A33-SLT-A35-SLT-A37/dp/B008OZT8HE   ">
                
              </map>
        <br>
              <form method="POST" action="HowTO.html" >  
                <br>
                <button>Check how to use them</button>  
              </form>
            <br>
              
        </div>


        <hr>

       

        <!--  Bubble Key -->

        <div style="padding: 5px,150px;">
            <h2> Some Of My Work </h2>
            <br><br>
            <img src="Pictures/pics/a.jpg" alt="" style="height: 250px; padding: 5px;" >
            <img src="Pictures/pics/b.jpg" alt="" style="height: 250px; padding: 5px;">
            <img src="Pictures/pics/n.jpg" alt="" style="height: 250px; padding: 5px;">
            <img src="Pictures/pics/p.jpg" alt="" style="height: 250px; padding: 5px;">
            <img src="Pictures/pics/h.jpg" alt="" style="height: 250px; padding: 5px;">
            <img src="Pictures/pics/k.jpg" alt="" style="height: 250px; padding: 5px;">
            <img src="Pictures/pics/j.jpg" alt="" style="height: 250px; padding: 5px;">
            <img src="Pictures/pics/l.jpg" alt="" style="height: 250px; padding: 5px;">
            <img src="Pictures/pics/i.jpg" alt="" style="height: 250px; padding: 5px;">
            <img src="Pictures/pics/m.jpg" alt="" style="height: 250px; padding: 5px;">
        </div>

<br>

        <div id="natureimg">
          <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="20000">
                <img src="Pictures/pics/e.jpg"  style="width: 800px;" alt="...">
                </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="Pictures/pics/f.jpg"  style="width: 800px;" alt="...">
               </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="Pictures/pics/g.jpg"  style="width: 800px;" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="Pictures/pics/c.jpg"  style="width: 800px;" alt="...">
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src="Pictures/pics/d.jpg"  style="width: 800px;" alt="...">
                    </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <br><br>

        <footer id="footer">
          <div>
            <br>
              
              <a href="https://www.instagram.com/" style="color: #03506F;">kentography</a>
              <br><br>
          </div>
      </footer>
</center>
        `;
    }
}