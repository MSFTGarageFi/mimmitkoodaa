# Running JavaScript in the backend with Node.js

In the previous part, we used HTML and JavaScript to create the base for our page. All of this code was in our HTML-page that we sent to the client (=browser) and the client rendered it, showing us a title, input field and a button. You could see all of your HTML-markup and JS-code when you right-clicked the page and selected "View Source".

Next we'll talk about the backend. In our case it's the part that will get the search query from the user and then in the background find the events in Helsinki that match that query.

## Que? What's this backend? :information_desk_person:
When you go to a website you interact with the front-end, the elements: the text, the buttons etc. And if you have a static page, you can include all of this in the HTML-page. But when you're creating web apps that have dynamic pages and content that changes, you'll usually have some sort of a backend that handles the logic and data.

Usually the backend consists of three parts:

1. The server, in our case a webserver, that serves content like html pages, images, videos etc.
2. The application logic (=code) that might contain things like authentication, accessing databases to fetch information etc.
3. The database which contains.. you guessed it, data!

:point_right: There are different types of servers, databases (SQL, no-SQL and others) different architectures (the MVVMs, MVCs and others of the world). You'll stumble across these topics once you get deeper on your webdev journey but for now you just need to understand the most common three parts of the backend

## Why would I run something in the backend? :raising_hand:
So, why are we talking about the backend? Why not just serve HTML pages with all the data and use JavaScript to filter the right events to show the user? ...I mean, technically you could create that but before you do that, maybe consider the below *(in addition to the fact that having everything on one page would be an unmaintainable horrible mess marinated in your tears and suffering)*

* **You might be serving more than you need, causing the page size and load times to grow.** Would you rather send the browser a file with five events that contain the word "food" or a file with all the possible events in Helsinki?
* **Often you don't want to share all the business logic** back to the users browser but keep some keys, authorizations and logic in the backend and not visible to the client.
* **Doing data validation and authentication/authorization is safer on the backend, rather than doing it in the clients browser.** Because the client can be instructed to behave differently than what you expect. For example, you can tell your browser to disable JavaScript. Now all your data validation that is written in JavaScript doesn't work anymore (like our test to see if the user entered more than 3 characters in their search)
* **When you run code on the browser, you're dependent on it's resources (CPU, memory, network etc.).** When running your logic on the server side, you get to use your servers and can then just send the browser the outcome.

## Node.js - a JavaScript runtime on the server-side :sparkles:
Node.js enables you to run JavaScript without the browser and do all of your logic on the server-side and tackle the issues we've listed above.

But that's not all. Node.js has a lot of modules that you can leverage to interact with files, networking, functions, data and more. One way to think about it is that Node.js has a lot of things built-in to make it easier to use JavaScript in the backend.

Node.js is very extensible and has an active community writing packages that are distributed through the Node Package Manager (NPM) - which is the largest package repository in the world.

>Take a second to take this in...there is a collection of over 800,000 building blocks (=packages) that someone else has written to make JS development easier for the rest of us. These packages are developed and maintain by the community and you can use them in your projects :pray:

**:bulb: JavaScript hasn't always been popular in the backend**, but we'll leave that history lesson for another time...Or who am I to tell what to do, you can start reading about it right now. Here's one take on it: [A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

## Lets start using Node.js
So lets start creating our Node.js application. We'll first install Node.js on your machine and then create our Hello World on Node.js

:arrow_right: Install Node.js from project site https://nodejs.org/en/download/
Select the right version for your OS (Windows or macOs) 

>:exclamation: Some users might be working from a restricted corporate machines, where you are not able to install Node.js directly from the installation package. No worries, just follow these steps and you should be good to go!
>-	Download the Windows Binary zip package [32bit](https://nodejs.org/dist/v12.14.1/node-v12.14.1-win-x86.zip) or [64bit](https://nodejs.org/dist/v12.14.1/node-v12.14.1-win-x64.zip) (if you are not sure, choose the 32bit one)
>-	Open and extract the package to a folder on your desktop
>-	Press Win+R to open a “Run” dialog and then execute this command: 
>	
>        rundll32 sysdm.cpl,EditEnvironmentVariables
>-	Click on Path and press Edit
>-	Press New and copy the address of the directory where you extracted the files

Now close and reopen the Visual Studio Code, so it is ready to detect Node.js.

Back in the VS Code go to the toolbar and select View->Terminal. This will open the integrated terminal inside the editor, so you don't have to jump between different windows.

Now we will start by basically saying "Hey Node Package Manager! I'd like to create a Node.js app here and use the Node Package Manager (npm)". So in your Terminal window (from VS Code go to View -> Terminal) type in the init command for npm to start up and answer questions about your app (What's the name? Who created it? Does it have tests ready? What is the license for this app?)

`npm init`

You will be asked a series of questions. You can type in your answers or just hit enter to accept the default values. 

This will create a `package.json` file that will include your answers and this is where you will define properties, scripts and depencies for your app.

Now create a new file (File->New File) and name it `index.js`. This is going to be an entry point for your app.

Inside index.js add the following line, so we can ensure Node.js is installed and running properly.
```javascript
console.log("Hello World, from Node.js");
```

Now to run your new app, write the following in the Terminal `node index.js`

:tada::tada::tada:

**Next :arrow_right: [Getting frontend from the backend](https://github.com/MSFTGarageFi/mimmitkoodaa/blob/master/web-dev-intro/part4_frontFromBack.md)**
