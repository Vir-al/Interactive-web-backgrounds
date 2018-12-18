# Messy Particles
There will be certain number of particles initially delocated from its actual position and will be moved to its position with certain velocity. The particles will reflected outside near the mouse pointer in the circular area of 150 pixles. The number of particles will be added to the screen when user clicks the mouse pointer.

## Shape class

This class contains different variables listed below.
* `pos` - It is 2D position vector which contains current position of particles in `pos.x`, `pos.y`.
* `target` - It is 2D vector which stores actual location of particle where it belongs to.
* `r` - It is radius of particle which has value between 1 to 10.
* `color` - This variable stores random olour for each particle in RGB mode.
* `vel` - This is velocity of particle initially assign to (0,0).
* `acc` - This is acceleration of particle initially assign to (0,0).
* `maxSpeed` - This is maximum speed a particle can achive.

There are functions as below.
* `update`
  * This function adds velocity and acceleration to the particles and hence updates its current position to reach the actual location.
* `locate`
  * This function calculates the force vector to apply on each particle to move from its current position to actual loaction.
* `mouseRepulse`
  * This function calulates the revrese force to apply on each particle if particle is in the radius of 150 pixles from the mouse pointer. That is, if particle is closer then the distance, repulsive(Negative force) is returned else return 0.
* `behaviour`
  * This function ask for two forces, 1. steer force - from `locate` function and 2. repulsive force - from `mouseRepulse` function, which then added to the acceleration of the particle.

## Shape container
There is an array called `shapes` in main.js file which contains `totalParticle`. Each particle is randomly assign to particular position and different acutal location.

## Parameters to play with
* Total particles
  - You can change the number of particles by changing the value of `totalParticle` at line number 2 in main.js file.
* Number of particles added on Mouse click
  - You can change the number of particles to be added when user clicks the mouse by changing the value of `addParticle` at line number 3 in main.js file.
And you can also twist the size and colors of the particles.

## Preview
![Messy Particle preview](https://raw.githubusercontent.com/Vir-al/Interactive-web-backgrounds/master/previews/messyParticles.gif "Messy Particles")

<a href="https://messyParticles-Js--vir-al.repl.co">Full screen</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://repl.it/@vir_al/messyParticles-Js">Live editing</a>
