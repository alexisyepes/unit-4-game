$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var score = 0;
    
        var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
    
        $("#targetNumber").text(randomNumber);
        $("#totalScore").text(score);
        $("#wins").text("Wins:" + " " + wins);
        $("#losses").text("Losses:" + " " + losses);
    
        var crystalImages = ["assets/images/blueCrystal.png", "assets/images/redCrystal.jpg" , "assets/images/yellowCrystal.jpg" , "assets/images/purpleCrystal.jpg"];
        
        function setData() {
            
            for (var i = 0; i < crystalImages.length; i++) {
    
            var image = $('<img>');
    
            image.addClass('ghostImage');
    
            image.attr('src', crystalImages[i]);
    
            image.attr('data-crystalvalue', Math.floor(Math.random() * 12) + 1);
    
            $("#crystals").append(image);
    
            }
        }
    
        setData();
    

        $(".ghostImage").on("click", function () {
    
            var crystalValue = ($(this).data("crystalvalue"));
    
            score = score + crystalValue;
    
            $("#totalScore").text(score);
    
             

            if (score === randomNumber) {
                wins++;
                $("#wins").text("Wins:" + " " + wins);
                $("#outcome").text("Winner!!!").delay(3000).hide(300);

            }
             
            else if (score > randomNumber) {
                losses++;
                $("#losses").text("Losses:" + " " + losses);
                $("#outcome").text("You Lose!").delay(3000).hide(300);
            
            }; 

            



            if (score === randomNumber || score > randomNumber) {

                // Select new random number

                randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
                score = 0;
                $("#targetNumber").text(randomNumber);
                $("#totalScore").text(score);
                             
               
            }

        
        });
 
        
        
        $(".btn-secondary").click(function() {
            $("#instructions").hide(2000)
        });

        $(".btn-primary").click(function() {
            $("#instructions").show(2000)
        });

    });
    
