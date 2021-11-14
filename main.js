function preload()
{

}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    rect(10, 250, 20, 20, rgb(33, 23, 56))
    
}

function draw()
{
    image(video, 0, 0, 640, 480);
    
}

function take_snapshot(){
    save('person.png');
}

