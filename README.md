# maximum-image-size

This maximum image size Webextension deals with smaller screens. Don't you get bothered when you look at a page and images are bigger than your browser's real estate? I do.

I know, there are responsive images etc. But most of the time, responsiveness is computed on the browser's **width**, and my screen is panoramic (and old) and images are taller than my browser's **height**.

So, here we are. A very small CSS file that limits the size of images to 96% on the browser's viewport with (just in case), and 96% of the browser's viewport height.

(Why small margins, you ask? Because it's easier to show images that way than if you have to make them fit exactly in the browser's window.)
