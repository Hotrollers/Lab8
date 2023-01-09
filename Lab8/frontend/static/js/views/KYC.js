import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("KYC");
    }

    async getHtml() {
        return `
           <center> 
  
    
    <div style="background-color: whitesmoke; padding: 10px,150px;">

    
    <h2>KYC</h2>

    
    <br>

    <!--Feedback div-->


    <div id="bg" style="border-style: solid; border-radius: 5px; border-color: #111; margin: 5px,100px;width: 60%;">
        <form action="" >

        <table style="padding: 35px;">
            <tr>
                <td>Name</td>
                <td><input type="text" id="name" placeholder="Kenneth Alvares" onkeypress="return isalphaKey(event)" required></td>
                <td><label for="pname" id="pname"></label></td>
                </tr>
            <tr>
                <td>Phone Number</td>
                <td><input type="tel" id="phone" name="phone" placeholder="9983483872" onkeypress="return isNumberKey(event)" required></td>
                <td><label for="pphone" id="pphone"></label></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="email" id="email" name="email" placeholder="kenn@email.com" required></td>
                <td><label for="pemail" id="pemail"></label></td>
            </tr>
            <tr>
                <td for="checkout-date">Birthday</td>
                <td><input type="date" id="date"></td>
                <td><label for="pdate" id="pdate"></label></td>
            </tr>
            <tr>
                <td>Feedback about Web Page</td>
                <td><input type="text" id="fwp"></td>
                <td><label for="pfwp" id="pfwp"></label></td>
            </tr>
            <tr>
                <td>Feedback for Photography</td>
                <td><input type="text" id="fphoto"></td>
            </tr>
            <tr>
                <td>Do like any Picture</td>
                <td><input type="radio" name="rsvp">Yes   
                    <input type="radio" name="rsvp"> No</td>
            </tr>
            <tr>
                <td>Would you like a response mail to your feedback</td>
                <td><input type="checkbox" name="" id="">Yes</td>
            </tr>
            <tr>
                <td>Whats the range u would rate the picture at</td>
                <td><input type="range" name="picrange" id=""></td>
                
            </tr>
            <tr>
                <!-- <td><button type="button" onclick="myFunction()">Submit</button></td> -->
                <!--<td><button type="button" onclick="validate()">Submit</button></td>-->
                <td><input type="button" onclick="func1()" value="Submit"></td>
                <td><input type="button" onclick="fillbox()" value="Check Response"></td>
                <td><input type="button" onclick="remove()" value="Clear Cookie"></td>
                <td><input type="button" onclick="func2()" value="Change background"></td>
            </tr>
        </table>


            <label for="geoLocation">Where are you located</label>
            <input type="button" value="Location" onclick="getloc()">
            <div id="loc"> </div>
        
        </form>

        <div>
            <h3>Sign Here</h3>
            <canvas id="myCanvas" width="200" height="40" style="border:1px solid #000000;">
            </canvas>
        </div>
        <br><br>

    
    </div>



<br/>

<button onclick="checkCookie()">Click me</button>

<div id="bg1" style="border-radius: 20px;">
  <p>Choose your Theme<br><br>
  <input type="radio" name="theme" id="blue" style="accent-color: #C0DEFF;" onclick="func1('#C0DEFF')" value="blue">
  <input type="radio" name="theme" id="white" style="accent-color: antiquewhite;" onclick="func1('antiquewhite')" value="white">
 </p>
</div>

<div id="bgg" style="height: 50px;">
         
</div>

</div>
    

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