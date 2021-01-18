

var artyom = new Artyom();


function startArtyom(){
    artyom.fatality();// use this to stop any of

    setTimeout(function(){// if you use artyom.fatality , wait 250 ms to initialize again.
         artyom.initialize({
            lang:"en-GB",// A lot of languages are supported. Read the docs !
            continuous:false,// recognize 1 command and stop listening !
            listen:true, // Start recognizing
            debug:true, // Show everything in the console
            speed:1 // talk normally
        }).then(function(){
            console.log("Ready to work !");
        });
    },250);
};

function stopArtyom(){
  artyom.fatality().then(() => {
        console.log("Artyom succesfully stopped !");
    })
};


artyom.addCommands([
  {
    indexes: ["hello","hi","whats up","hey"],
    action:function(){
      artyom.say("Hi Luna! What can I do for you?")
    }
  },
  {
    indexes: ["order","book","Portugal","wish list"],
    action:function(){
    artyom.say("I've ordered your book Traveling in Portugal - Lonely Planet. It will arrive on Saturday! Are you thinking about taking a trip to Portugal?")
    }
  },
  {
    indexes: ["yes","yea"],
    action:function(){
    artyom.say("What a great choice! Most people visit Porto, Lisbon or Faro. A hiking trip around the mountains is also very popular. Where would you like to go?")
    }
  },
    
    {
      indexes: ["Porto","nice"],
      action:function(){
      artyom.say("Great, Porto it is! You seem to have a free period of time in March, according to your calendar. I can book a flight from the 3rd to the 10th. How does that sound?")
    }
  },
    {
      indexes: ["rather","weekend","trip"],
      action:function(){
      artyom.say("Alrighty, how about the 5th to the 7th?")
    }
  },
    {
      indexes: ["home","late","Sunday"],
      action:function(){
      artyom.say("You could be home at 7pm on Sunday, how does that sound?")
    }
  },
  {
    indexes: ["good","fine"],
    action:function(){
    artyom.say("I can book for Friday, the 5th at 8.30 am from Stuttgart Airport to Porto and back on Sunday at 3pm.")
    }
  },
  {
    indexes: ["perfect"],
    action:function(){
    artyom.say("The dates are in your calendar.")
  }
},
    {
      indexes: ["thanks"],
      action:function(){
      artyom.say("There are some great apartments in the center of Porto. Are you interested?")
    }
  },
      {
      indexes: ["maybe"],
      action:function(){
      artyom.say("I've found two great apartments that are similar to the one you booked in Paris last month. I've sent them to your phone. What do you think?")
      }
    },
    {
      indexes: ["describe","me"],
      action:function(){
        artyom.say("The first is in the center, two bedrooms and a kitchen. The second one has a big bathroom and is near the ocean. How does that sound for you?")
    }
  },
    {
      indexes: ["repeat","please"],
      action:function(){
        artyom.say("Got it! So, one is in the center, with a fully equipped kitchen and two bedrooms. The other one is at the ocean and has a nice big bathroom.")
    }
  },
    {
      indexes: ["take","second"],
      action:function(){
        artyom.say("Sounds great! The booking receipt is in your email inbox.")
    }
  },
    {
      indexes: ["great","cool"],
      action:function(){
        artyom.say("Have a great trip!")
    }
  }
]);
