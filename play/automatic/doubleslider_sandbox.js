window.PICK_UP_ANYONE = true;

var bias_text = document.getElementById("bias_text");
var nonconform_text = document.getElementById("nonconform_text");

var whatever = new DoubleSlider(document.getElementById("slider"),{
    backgrounds:[
        {color:"#555",icon:"ds_sad.png"},
        {color:"#aaa",icon:"ds_happy.png"},
        {color:"#555",icon:"ds_sad.png"}
    ],
    values:[0.20,0.80],
    onChange:function(values){

        window.BIAS = values[0];
        window.NONCONFORM = values[1];

        // Write stats
        START_SIM = false;
        window.writeStats();
        bias_text.innerHTML = Math.round(window.BIAS*100)+"%";
        nonconform_text.innerHTML = Math.round(window.NONCONFORM*100)+"%";

    }
});

var whatever = new DoubleSlider(document.getElementById("slider2"),{
    backgrounds:[
        {color:"#FFDD56",icon:"ds_happy.png"},
        {color:"#567DFF",icon:"ds_happy.png"},
        {color:"#000",icon:"ds_sad.png"}
    ],
    values:[0.40,0.80],
    onChange:function(values){

        // Actual values
        var VALUE_1 = values[0];
        var VALUE_2 = values[1];
        window.EMPTINESS = 1-VALUE_2;
        window.RATIO_TRIANGLES = VALUE_1/VALUE_2;
        window.RATIO_SQUARES = (VALUE_2-VALUE_1)/VALUE_2;

        // Write stats
        START_SIM = false;
        document.getElementById("ratio_text_triangles").innerHTML = Math.round(window.RATIO_TRIANGLES*100);
        document.getElementById("ratio_text_squares").innerHTML = Math.round(window.RATIO_SQUARES*100);
        document.getElementById("empty_text").innerHTML = Math.round(window.EMPTINESS*100)+"% empty";

    },
    onLetGo:function(){
        reset();
    }
});
