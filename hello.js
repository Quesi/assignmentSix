// bring in the Express module
var express = require('express');
// create a new instance of express
var app = express();

// ** Routes ** //
// Set up the home page
app.get('/poem1',function(request,response){
	// respond with  SELORM DEKU poem
	response.send("<h2>Like a lioness, you fought your house to keep And swift as deer, you ran ahead of time,  Fearing neither the Western rifles nor barriers of the African culture</h2>")
});

app.get('/instagram',function(request,response){
	// respond with my instagram information
	response.send("<h2>Nana Kwasi Berko Digital artists • 3D Artist (Generalist) • Product concept artist• A p p l e  enthusiast 🇬🇭 • email: ghostmediahouse@gmail.com • ✟ Christ Saves ✞ www.behance.net/quesi2938e9</h2>")
});

app.get('/news',function(request,response){
	// respond with "news"
	response.send('<h2>Create, design and stop wasting time on social media and movies</h2>')
});

app.get('/poem2',function(request,response){
	// respond with "Hello world"
	response.send('<h2>Far away, your lonely self hang in a crowded stall Far away, your being was on display for all humanity. Through all your aloofness, magnificence oozed from your guarded pores. And your beauty drew the masses for that’s what they could see. The minute I saw you, I felt a longing in my chest. Cliché yes, but you reeked of comfort and adventure. And my essentials were in need of a redress. Lord knows my soul needed a combustion; no fear of being charred. The people; they starred with beseeching eyes and smoldering intensity. Some lavished with praise till the sugar eased off their tongues. They failed to see, though your exterior was intricate, you were just an icon of simplicity. And still others undermined your value in mimic theory songs</h2>')
});


app.get('/poem3',function(request,response){
	// respond with "Mutombo Da Poets poem"
	response.send('<h2>I can’t count the number of susu boxes (piggy bank) I bought when I was a young boy growing up. It got to a time that I was so close to our ‘neighbourhood carpenter’ because I destroyed a box every week or so. I would save for things like a ‘disco watch’, a fan fair or party coming up and other silly things. My mother was proud and not proud of me at the same time. She was proud because I was saving to buy and do my own stuff, easing the pressure on her, and she wasn’t proud because I was saving for a short time. I think the longest I saved was for 3 weeks, and I can’t count the number of times she encouraged me to save for longer periods.</h2>')
});


// Start the server. Listen for traffic on port 3000
app.listen(3000, function () {
	// Print out a message to the console
  	console.log('Listening on port 3000!');
});
