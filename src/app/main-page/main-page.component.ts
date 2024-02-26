import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements AfterViewInit {
  selectedMood: string = ''; // Variable to store the selected mood
  moodPopupVisible: boolean = false; // Flag to track the visibility of mood pop-up

  moods = [
    { name: 'Happy', icon: 'https://static.thenounproject.com/png/174696-200.png', message: "Let's keep the good vibes going!" },
    { name: 'Sad', icon: 'https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png', message: "I'm feeling down today" },
    { name: 'Calm', icon: 'https://static-00.iconduck.com/assets.00/peace-icon-511x512-gzxqaw35.png', message: "I need some time to relax" },
    { name: 'Confused', icon: 'https://static.thenounproject.com/png/1938477-200.png', message: "I'm not sure how I feel" },
    { name: 'Energetic', icon: 'https://cdn-icons-png.flaticon.com/512/3208/3208106.png', message: "I'm ready to take on the world" }
  ];

  constructor(private router: Router, private renderer: Renderer2, private elementRef: ElementRef,@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    this.renderer.listen('document', 'click', (event: MouseEvent) => {
      if (!this.elementRef.nativeElement.querySelector('.mood-popup').contains(event.target)) {
        this.closeMoodPopup();
      }
    });
  }

  navigateToPopup(mood: string) {
    this.selectedMood = mood; // Set the selected mood
    this.moodPopupVisible = true; // Show mood pop-up
    this.router.navigate([mood.toLowerCase()]);
  }

  closeMoodPopup() {
    this.moodPopupVisible = false; // Hide mood pop-up
  }

  // Event handler to close mood pop-up when emitted from child component
  onHappyPopupClose() {
    this.closeMoodPopup();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      (function (d, m) {
        var kommunicateSettings = {
          appId: "3cc70b6fbb9fe0493a162d4b66fa43dd1",
          popupWidget: true,
          automaticChatOpenOnNavigation: true,
        };
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0];
        h.appendChild(s);
        (window as any).kommunicate = m;
        m._globals = kommunicateSettings;
      })(document, (window as any).kommunicate || {});
    }
  }
}
