import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Clipboard } from '@angular/cdk/clipboard';
import * as echarts from 'echarts';

@Component({
  selector: 'app-my-parcels',
  templateUrl: './my-parcels.component.html',
  styleUrls: ['./my-parcels.component.scss']
})
export class MyParcelsComponent {

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);
    let option: echarts.EChartsOption;

    option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: { color: 'rgb(5, 140, 66)' },
        },
      ],
    };

    option && myChart.setOption(option);
  }
  cards = [
    {
      id: 1,
      image: '../../../../../assets/images/user-cabinet/llimit.png',
      title: 'O’zbekiston bojxona limiti',
      subtitle: '$1000 / 20 kg',
      link: '',
    },
    {
      id: 2,
      image: '../../../../../assets/images/user-cabinet/boxx.png',
      title: 'Yetkazib berish manzilini qanday aniqlash mumkin?',
      subtitle: '',
      link: '',
    },
    {
      id: 3,
      image: '../../../../../assets/images/user-cabinet/not-allowed.png',
      title: 'Yetkazib berish taqiqlangan tovarlar',
      subtitle: '',
      link: '',
    },
    {
      id: 4,
      image: '../../../../../assets/images/user-cabinet/store.png',
      title: 'Tovarlarni qayerdan sotib olish mumkin?',
      subtitle: '',
      link: '',
    },
    {
      id: 5,
      image: '../../../../../assets/images/user-cabinet/dispetcher.png',
      title: 'Sotib olishda yordam kerakmi?',
      subtitle: '',
      link: '',
    },
  ];


  customOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    navSpeed: 700,
    items: 3,
    navText: ['', ''],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
    },
    nav: true,
  };

  redirectToDetails(card: any) {
    console.log('Redirect to details:', card.title);
  }

  copyToClipboard(text: string) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  
    const tooltip = event?.target as HTMLElement;
    tooltip.classList.add('copied');
  
    setTimeout(() => {
      tooltip.classList.remove('copied');
    }, 1500);
  }  
}
