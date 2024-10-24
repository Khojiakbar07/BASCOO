import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    navSpeed: 700,
    items: 3,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      424: {
        items: 2
      },
      740: {
        items: 3
      },
    },
    nav: true
  }

  slides = [
    { id: 1,
      text: "Мы искали компанию, которая могла бы предложить комплексное решение для аудио- и видеосистем, и BASCOO нас не разочаровала. Проект был реализован точно в срок, и результат превзошел наши ожидания. Это профессионалы своего дела!",
      image: '../../../../assets/images/review/15.png',
      title:"Olga Aleksandrovna",
    },
    { id: 2,
      text: "Сотрудничество с BASCOO стало ключевым моментом для улучшения наших внутренних коммуникаций. Они предложили нам решение, которое значительно упростило проведение видеоконференций. Уровень поддержки и обслуживания просто на высоте!",
      image: '../../../../assets/images/review/5.png',
      title:"Azim Pulatov",
    },
    { id: 3,
      text: "BASCOO продемонстрировала высокий уровень профессионализма на всех этапах сотрудничества. Их технические решения не только современны, но и просты в использовании, что особенно важно для нашей компании. Очень довольны результатами!",
      image: '../../../../assets/images/review/6.png',
      title:"Nina Shakirovna",
    },
    { id: 4,
      text: "Мы работаем с компанией BASCOO уже более года, и результаты всегда превосходят ожидания. Их команда действительно понимает, как интегрировать самые современные технологии в нашу рабочую среду. Все проекты завершены в срок и с высочайшим качеством. Очень рекомендуем!",
      image: '../../../../assets/images/review/11.png',
      title:"Bekzod Mirahmedov",
    },
    { id: 5,
      text: "BASCOO смогли предложить уникальное решение для нашего бизнеса. Их знания в области аудио- и видеоинтеграции впечатляют. Мы получили комплексное решение, которое идеально отвечает нашим нуждам. Безусловно, это лучшая компания, с которой мы когда-либо работали.",
      image: '../../../../assets/images/review/12.png',
      title:"Anna Pitnovinna",
    },
    { id: 6,
      text: "BASCOO продемонстрировала высокий уровень профессионализма на всех этапах сотрудничества. Их технические решения не только современны, но и просты в использовании, что особенно важно для нашей компании. Очень довольны результатами!",
      image: '../../../../assets/images/review/9.png',
      title:"Elbek Normurodov",
    },
    { id: 7,
      text: "BASCOO всегда выполняет работу на высшем уровне. Отличная команда и современные решения. Рекомендую!",
      image: '../../../../assets/images/review/10.png',
      title:"Karina Zaitovna",
    }
  ];
}
