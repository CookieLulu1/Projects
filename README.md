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
For my HTML (index.html), my thought process was to create a simple way to format my code, tagging each element with a different ID to format it separately in my CSS file (style.css). Before I started to code, I planned out each section individually on a piece of paper. I drew out multiple drafts before finally deciding. 

My idea was to create a simple calculator with 4 columns and 5 rows of buttons. I thought a pink calculator would be pleasing to my eyes, so I made the background and buttons all shades of pink. The background is a light pink (medium light) The operator buttons (plus, divide, multiply, subtract, equals) are all in a darker shade than the rest of the buttons, and the function buttons, such as the parenthesis, and the clear button at the top are all in a light grey color. The screen is a rounded rectangle at the top and is a very light (near white) pink color. The rest of the number buttons, and . and ans are all in a medium dark pink to help contrast.

I debated making the buttons round, doing different themes, etc. However, I did try many ideas, and they didn't turn out how I expected. Because of this, I decided on a more simplistic design. (Ironic though because I still spent a lot of time experimenting)

- [x] Create an eye-pleasing design
- [x] Decide where to put each element (Numbers, Operators, Xtra)

> [!NOTE]
> I messed up on my JS a lot and had to go back and add things very often (unfortunately). To save time, next time I will create my HTML code with JS in mind. 



In my HTML code, I used a few different elements and tags to give different buttons different functions that relate back to my JS code[^1].

```
<button onclick="calculate()" class = "calc-button-red">
                    &equals;
                </button>

```
[^1]: I actually had to go back and tweak it. I didn't plan out the JS to HTML initially. 

