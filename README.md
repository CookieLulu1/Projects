# CALCULATOR WEB APPLICATION
## TASK LIST:
- [ ] Create an eye-pleasing design
- [ ] Decide where to put each element (Numbers, Operators, Xtra)
- [ ] Decide how to link JS and HTML
- [ ] Create HTML
- [ ] Create CSS
- [ ] Create JavaScript code to implement
- [ ] Debug

## SUMMARY:
As my final project, I created a simple web program that functions as a calculator. I decided on this because I was tired of using my school calculator and online applications which were so bland and unappealing. It also provides functionality for clearing the input and calculating the result. The project consists of 3 files of code; HTML, CSS, and JS. 

### PLANNING THE AESTHETICS:
For my HTML (index.html), my thought process was to create a simple way to format my code, tagging each element with a different ID to format it separately in my CSS file (style.css). Before I started, I planned out each section individually on paper. I drew out multiple drafts before finally deciding. 

My idea was to create a simple calculator with 4 columns and 5 rows of buttons. I thought a pink calculator would be pleasing to my eyes, so I made the background and buttons all shades of pink. The background is a light pink (medium light) The operator buttons (plus, divide, multiply, subtract, equals) are all in a darker shade than the rest of the buttons, and the function buttons, such as the parenthesis, and the clear button at the top are all in a light grey color. The screen is a rounded rectangle at the top and is a very light (near white) pink color. The rest of the number buttons, and . and ans are all in a medium dark pink to help contrast.

I debated making the buttons round, doing different themes, etc. However, I did try many ideas, and they didn't turn out how I expected. Because of this, I decided on a more simplistic design. (Ironic though because I still spent a lot of time experimenting)

- [x] Create an eye-pleasing design
- [x] Decide where to put each element (Numbers, Operators, Xtra)

## PLAN HTML -> JS
> [!NOTE]
> I messed up on my JS a lot and had to go back and add things very often (unfortunately). To save time, next time I will create my HTML code with JS in mind. 

In my HTML code, I used a few different elements and tags to give different buttons different functions that relate back to my JS code[^1]. For example: 

```
<button onclick="calculate()" class = "calc-button-red">
                    &equals;
                </button>

```

I decided to add a function within my JS to take the exact value of each button (basically the str or int or character that each button represents). What it does, is essentially takes the character specified within the HTML and stores it within a variable. This is also used to create the display. 

I added a function within each button that will essentially store each input within a buffer and calculate the product of the combination of symbols. For my JavaScript, my starting idea was to program out each key as a different input and program each operator to do something different to manually calculate the result. However, my Dad pointed out I could just use a built-in function (eval) to calculate the result:

```
function calculate() {
    
        document.getElementById('displayInput').innerHTML = eval(buffer);
}
```
- [x] Decide how to link JS and HTML

## WRITING HTML AND CSS
In my calculator, there are 3 categories of things I need (and 3 subcategories in the second category). I need a display, buttons, and a background. For the display, the code was very simple. 

```
<section input id="displayInput" readonly class = display text="dddd">
        </section>
```
Next, the buttons. I added a class for the buttons, and a class for each row of buttons called "buttons" and "calc-row". 

```
<section class = "buttons">
        <div class = "calc-row">
```
After, I started the actual buttons. Each one was tagged as a button, with a few added functions, classes, and displays. 
```
<button onclick="displayThis('(')" class = "calc-button-grey">
                    &lpar;
                </button>
```
I did this for each button in every row and column, using the class to be able to conveniently style it in style.css. Initially, when I created the layout, I hadn't thought to create different colored buttons for different types of input (such as numbers vs operators), but after, I just tweaked it to specify in each button I wanted to turn it into a different color and color it manually in css rather than using inline styling. This made my code much neater and easy to read. 

- [x] Create HTML
- [x] Create CSS
- [x] Create JavaScript code to implement

I simplifed this part of my code as much as I could, and after writing all the code, it was time to debug. 

## DEBUGGING
- Problem: clear func not working.
    - Solution: clear is already an existing function within JS! Changed the name to clear1.
- Problem: ^ button not working.
    - Solution: Changed input to ** instead of ^, improper for JS. 
- Problem: Missing an entire row of number keys.
    - Solution: womp womp, redo the rows. 
- Problem: Couldn't get the spacing correct between buttons [^2]. 
    - Solution: (this took me an unironically long amount of time to figure out) Change margin-left and margin-right, and change the padding and margin of each row.
- [x] Debug

Final product:
![Final Product Image](https://github.com/CookieLulu1/Projects/assets/155854627/ddc55786-1a0c-44b9-ac73-6ce7cb80c476)


[^1]: I actually had to go back and tweak it. I didn't plan out the JS to HTML initially. 
[^2]: At first, I justified them, but when I made my page larger, the buttons would move apart and be too far to be convenient.

