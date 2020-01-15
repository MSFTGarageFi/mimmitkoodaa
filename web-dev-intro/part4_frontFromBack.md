# Front from Back - Let's get a web app up and running
Earlier we talked about packages and how the node package manager gives you access to hundreds of thousands of packages. Well now it's time to get one of those great packages.

We will install [Express.js](https://expressjs.com/) - it's a web framework for Node.js, containing a various tools to make it easy for you to create and run your web applications.

So, to install Express write `npm install express` in the VS Code Terminal and let the magic begin :sparkles:

npm will now fetch the required modules for you, install them and get express setup for this project. You'll see a new folder appear called `node_modules` and under it you'll see the required modules installed. As you can see, you got a lot of things ready made for you, making our life easier.

You'll also notice that the `package.json` file was edited and it now contains a new dependency for express (=telling the app that we need to install express before we can run it)

> :question: Sure this is great that a lot of people wrote ready made code and packaged it nicely so I can use it, but how can I be sure it's not packed with malicious code?
>
>Valid question. And that brings us to the magic of open-source communities. Check out the [Express package](https://www.npmjs.com/package/express) on the npm site. There you can see how many time it's downloaded, who is contributing, open issues and you can click on the repository link to view the source code on GitHub. All transparent.

### Use express in our Node.js app
Now that we have express installed we can use it in our app. We'll tell it what to do when someone goes to our  website and what port we will use to listen for requests.

We won't be deploying this to a cloud server but rather use a Node.js server that is running on our machine.

Replace the contents of your `index.js` file with the code below and save the file.

```javascript
// lets require express, so we can use it in this page
var express = require('express');

// create a new instance of express
var app = express();

// tell Express that if someone navigates on the root of our website '/' we should send them a hello back
app.get('/', function (request, response) {
  response.send('Hello from Node.js!');
});

// tell express that we will use port 3000 for this webserver
app.listen(3000);
```

Now again in your terminal run `node index.js` and then open your browser at http://localhost:3000/

> You can stop the process by pressing Ctrl+C

#### So what's happpening here?
You used your browser to navigate to the root ('/') of your server (localhost) at port 3000. Express responds with the response we defined above (send 'Hello from Node.js')

>localhost is a hostname that means "this computer".
>
>By default, if you navigate with your browser to http://localhost/ the browser will use port 80, which is the standard port for HTTP. In our sample above we use port 3000, just in case you already have some service listening at the default port (80) - but you could put any available port there, it doesn't need to be 3000.

**:bulb: Now look at the source of your page,** you'll see  only the text and not the whole JavaScript. This is because Node.js has executed all the code and Express has responded to the request by sending back the response text, but the browser never saw the rest of the code we wrote above.

### But wait, what about all that HTML code that we wrote earlier?
Excellent question! Right now our Node app is sending just plain text to the browser. But since we already have  neatly written and formatted HTML code, why don’t we ask Node to serve that up?

Our HTML page is our main public page, so let’s create a new folder called ‘public’ and drag and drop our index.html file in there.

The HTML pages are considered static, meaning that the content in them doesn’t change dynamically. So let’s instruct Node to see the folder we created as one containing static files, from which it can serve our HTML file.
```javascript
// tell express to serve our static files from the public folder
app.use(express.static('public'));
```

Next, let's change our response so instead of sending text, Node will send the index.html file:
```javascript
// update the root request to send the index.html file back as our home page
response.sendFile('public/index.html');
```

Wuuuuuuu! 

**You know what time is it?** It's time to take a breather and congratulate yourself: you've just built a fully functional web application. Doesn't do much yet, but that's what the next steps are for :)

**Next :arrow_right: [Fetching information from 3rd party APIs](https://github.com/MSFTGarageFi/mimmitkoodaa/blob/master/web-dev-intro/part4_eventsAPI.md)**
