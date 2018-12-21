# Star Field

## Star class
This class contains `X`, `Y`, and `Z` variables of star. `X` and `Y` variables gives actual position of star in canvas and `Z` var gives distance(Far or near) of the star. The Size is mapped according to the depth of the star i.e. If star is far away(Z is larger) then it looks much smaller and vice versa.

## Star container
There is an array called `stars` which contains 800 stars at any moment. Whenever star moves out of the window it will be removed from the array and new star at random position in window will be added to the array.

## Parameters to play with
There is a toolbox available for live demo website, you can twist the value of parameters and see the instant changes there. The parameters covered are as follows:

* Star speed
  - You can manually set the speed of the star at line `var speed = 20`, line number 47.
  - Or just uncomment the line `speed = map(mouseX, 0, width, 0, 50)` at line number 74, and speed will vary as you move your mouse
* Number of stars
  - Increase the number of loop limit at line `for (var i = 0; i < 800; i++)`, line number 58 (Initially 800).
* Fixed position of origin
  - Uncomment the line `translate(width / 2, height / 2)` at line number 82, and comment the line below it.

## Preview
![Star field preview](https://raw.githubusercontent.com/Vir-al/Interactive-web-backgrounds/master/previews/starField.gif "Star field")

<a href="https://StarField-Js--vir-al.repl.co">Full screen</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://repl.it/@vir_al/StarField-Js">Live editing</a>
