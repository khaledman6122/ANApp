import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home.component2.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
getCoords($event){
    var title=document.querySelector('.mainTitle')
    
        var x=(window.innerWidth/2-$event.pageX)/10;
        var y=(window.innerHeight/2-$event.pageY)/10;
         (<HTMLElement>title).style.transform=`rotateX(${y}deg) rotateY(${x}deg)`
        
 }
  ngOnInit() {
   
   /*
    var title=document.querySelector('.mainTitle')
    title.addEventListener('mousemove',(e)=>{
        var x=(window.innerWidth/2-e.pageX)/10;
        var y=(window.innerHeight/2-e.pageY)/10;
         (<HTMLElement>title).style.transform=`rotateX(${y}deg) rotateY(${x}deg)`
        
    }) 
    */
        
        
    var recentWork=document.querySelector('.recentWork')
    var vid=document.querySelector('.recentWorkVideo')  
    var closeVid=document.querySelector('.closeVid');
    var vid_dsp=false;
    var vidPlayer=vid.querySelector('video')    
        
    recentWork.addEventListener('click',()=>{
        if(vid_dsp==false)
        {(<HTMLElement>vid).style.display='block';vid_dsp=false;}
        else 
        {
            (<HTMLElement>vid).style.display='none';vid_dsp=true;
            vidPlayer.pause();
        }
            
    })
    closeVid.addEventListener('click',()=>{
        (<HTMLElement>vid).style.display='none';vid_dsp=false;
            vidPlayer.pause();
    })
    
   
    
  }

}
