CodeImage
=========

CodeImage is a way to package javascript code into an image. The javascript can be extracted and run as if it was located in a script tag.

Contents / Usage
================

**codeimage.html**

Use codeimage.html to encode blocks of code into an image. This page accepts text pasted into the textare. 
The encoding algoprithm can only handle text. A small image will appear after encoding. Save this image and 
use it in your own project. It contains your code. You can test the image using the decode button. This will
decode the iamge and show the result. It should match the input.

**codeimage-example.html**<br>
**example.png**

This page shows you how to load your codeimage and run it. THe decode function needs to know the id of the 
image object that contains the codeimage. The result after decoding is eval'ed and then main() is called.
This assumes that your codeimage contains a function called main(). You cna change this as needed. THe example
codeimage draws random rects on the canvas.

**codeimage-nodeclient.html**<br>
**codeimage-nodeserver.js**

This is the node.js version of the encoding tool. This version is the same as the codeimage.html page with the
extra ability to encode images into the codeimage. This is experimental and possibly useless. The example html 
page does not contain the ability to decode images currently, though the decode funtion in codeimage-nodeclient.html
does. 

Node.js is used to load source code and image files, which are not accessable publicly, from a server. I use this
to encode all my source code files into one codeimage. If you use this version, make sure node.js has the 
socket.io library.
