import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Feedback");
    }

    async getHtml() {
        return `
         <center>
       <div style="background-color: whitesmoke">


    <h1>Suggest ways for me to improve</h1>
    <form method='post' action='/submit'>
        <div>
        <h1>Insert Values</h1>
        Name: <input type="text" name="name" /><br>
        Phone: <input type="number" name="phone" /><br>
        Suggestion: <input type="text" name="suggestion" /><br>
        <button type='submit'>Click</button>
        </div>
   </form>
   
   <form method='post' action='/update'>
        <div>
            <h1>Update suggestion</h1>
            Enter your name: <input type="text" name="us_name" /><br>
            Edit Suggestion: <input type="text" name="us_sugg">
            <button type='submit'>Click</button>
        </div>
   </form>
   <br>
   <form method='post' action='/delete'>
    <div>
        <h1>Delete Suggestion</h1>
        Enter your name: <input type="text" name="del_name" /><br>
        <button type='submit'>Delete</button>
    </div>
    </form>
    <form method='post' action='/search'>
        <div>
            <h1>Search suggestion by Name</h1>
            Enter your name: <input type="text" name="search_name" /><br>
            <button type='submit'>Search</button>
        </div>
    </form>
    <br>
    <form method='post' action='/display'>
        <div>
            <h1>See all Suggestions</h1>
            <button type='submit'>Check</button>
        </div>
    </form>


    <footer id="footer">
        <div>
          <br>
            
            <a href="https://www.instagram.com/" style="color: #03506F;">kentography</a>
            <br><br>
        </div>
    </footer>
</div> 
</center>
        `;
    }
}
