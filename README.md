# YungV_IMD3901_A2

Overview of what you did (i.e. what are the controls? Why this design?)

For this assignmnet, the user can move around in the barn house and spawn, delete and pickup packages. 
On desktop, users can move around with wasd/arrow controls and look around with their mouse. To adapt this movement 
with mobile users, I added a joystick feature which is accessible in both views. I chose to add the joystick instead of arrow buttons 
because the UI was going to take up too much space while users are walking with the package.

To make the environment more immersive, I added some folk music and a video of buffalo to solidify the barn theme. 
As well, when the user picks up a package, a ding noise will be triggered.

• What was challenging.

Some things I found especially difficult was implementing the package pickup. I tried numerous ways to either parent the package to 
the camera, set the package co-ordinates to the camera etc, however the result would always be that I could no longer see the package 
or all packages would go to where the camera first spawned in. Additionally, when trying to import assets into a-frame, some gltf 
assets would not render no matter how large or small I scaled it. 

• What went well (i.e. how did you solve the above challenges?).

To solve the picking up challenge, I first tried to get the active camera co-ordinates using tick(), however when I animated the package 
going to these co-ordinates, it was very laggy and did not look like a pick-up action. I also had to look more into THREE.js to get 
co-ordinates in the world space which took a long time to figure out. To fully resolve this issue, I made the illusion that the original
package being picked up would be attached to the camera, whereas in reality I am setting the original package's visibility to false and 
turning the "attachedBox" package on, which is visible to the camera. Then when the user releases the package, it turns the original 
package's visibility back on and dropped down to where the camera's co-ordinates were. 

As for the assets that did not show up, because I used assets from sketch fab and could not look at the textures or export settings, 
I decided to go for different models with less detail. This seemed to work well.

• The URL to your GitHub repository: https://github.com/veronicaYung/YungV_IMD3901_A2



#----------- Assets Used --------------#

crate asset: https://sketchfab.com/3d-models/low-poly-rectangular-crate-d49fa1098c274faea8fffe8744d2a5e1#download
song: https://pixabay.com/music/search/barn/
buffalo video: https://pixabay.com/videos/buffalo-bull-cows-horns-barn-85541/
ding sound: https://pixabay.com/sound-effects/search/ding/
