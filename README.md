# Additive Manufacturing Virtual Kiosk
This application was developed as a companion to the CMTC Additive Manufacturing Kiosk project and offered a way for users to interact with the kiosk that does not require them to be in the same physical space as the kiosk itself but still get the majority of the experience.
## Installation
**This project uses LFS. You will have to install Git LFS to use this.**
To install this application first you will either need NodeJS or Docker. A Dockerfile is supplied with the code so if you choose that option all you will need to do is build the project and run the code straight from there.
To install with NodeJS it is almost as simple, first requiring you to install NodeJS, and then requiring you to type `node server.js` to start it.
By default the server will connect to port 3000. This can either be changed by editing the last line of the `server.js` file if running through node, or by exposing a different port if running through Docker.
## Routing
Routing is completed through the combination of the `transitions.json` and `pages.json` files.
### pages.JSON
This file controls the physical endpoints of the experience. Each end point is defined in the JSON with the following elements:
 * `endpoint`: this is essentially the address of the page. It is the physical URL that will return this page along with the name that is associated with it in the transitions.
 * `title`: Easy enough, this is the title of the page.
 * `image`: This again is easy enough, it is the image that is used for that scene.
 * `links`: This section is a little more complicated as it is an array of objects that look like this:
    * `container`: This describes the kind of `w3-display` container that is used (IE `w3-display-topleft`, `w3-display-middle`, etc.).
    * `width`: This is the width of the container.
    * `height`: This is the height of the container.
    * `dest`: This is the destination page. All that needs to be known is the destination's `endpoint`, as the source is already known.
 * `content`: This is the link to the actual content that will be displayed under the scene.
### transitions.JSON
This file defines a system of "key key value" pairs that define which video should be played for each transition.
Under the hood, when a transition link is clicked it is supplied with a query (IE: `/t?src=home&dst=static` where the user has requested to move from the `home` screen to the `static` screen) that tells the server which video to go to depending on that "key key value" pair.
For clarity I broke this file into the following 11 separate sections separated by new lines:
1. Source is `static`
2. Source is `leftposter`
3. Source is `dynamic`
4. Source is `leftleg`
5. Source is `printer`
6. Source is `rightleg`
7. Source is `recreational`
8. Source is `rightposter`
9. Source is `artistic`
10. Source is `home` (Index or `/`)
11. DESTINATION is `home` (Index or `/`)
