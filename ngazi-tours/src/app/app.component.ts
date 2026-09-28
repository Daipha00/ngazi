import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  logoPath = 'assets/images/logo.png';

  navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Tours', href: '#tours' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  stats = [
    { value: '10+', label: 'Years of local expertise' },
    { value: '500+', label: 'Happy travelers hosted' },
    { value: '24/7', label: 'Friendly support' }
  ];

  services = [
  {
    title: 'Historical Stone Town Tour',
    description: 'Explore Stone Town’s history and famous landmarks, including the Slave Market, Anglican Church, Africa House and House of Wonders.',
    icon: 'bi-building'
  },
  {
    title: 'Spices & Fruits Tasting Tour',
    description: 'Discover Zanzibar’s famous spices and enjoy a taste of fresh tropical fruits during this enjoyable island experience.',
    icon: 'bi-flower1'
  },
  {
    title: 'City & Spice Excursion',
    description: 'Enjoy a full-day experience combining Zanzibar’s city sights, spice heritage and tropical fruit tasting.',
    icon: 'bi-map'
  },
  {
    title: 'Prison Island Tour',
    description: 'Visit Prison Island and enjoy its history, beautiful surroundings and relaxing island atmosphere.',
    icon: 'bi-buildings'
  },
  {
    title: 'Jozani Forest Tour',
    description: 'Explore Jozani Forest and experience one of Zanzibar’s most famous natural and forest destinations.',
    icon: 'bi-tree'
  },
  {
    title: 'Kizimkazi Tour',
    description: 'Discover the beautiful southern coast of Zanzibar with a relaxing half-day excursion to Kizimkazi.',
    icon: 'bi-water'
  },
  {
    title: 'Zanzibar Cultural Excursion',
    description: 'Experience Zanzibar’s culture and heritage through a full-day excursion with a meal included.',
    icon: 'bi-globe2'
  },
  {
    title: 'Safari Blue Excursion',
    description: 'Enjoy a full day on Zanzibar’s beautiful waters with a boat excursion, meals and drinks included.',
    icon: 'bi-water'
  },
  {
    title: 'Sunset Dhow Cruise',
    description: 'Relax on a traditional dhow cruise while enjoying Zanzibar’s beautiful sunset, snacks and drinks.',
    icon: 'bi-sunset'
  }
];

  featuredTours = [
    {
      title: 'Prison Island Escape',
      info: 'Historic island visit, beach time, and memorable photos by the sea.',
     
      image: 'assets/images/img2.jpeg'
    },
    {
      title: 'Island Hopping Delight',
      info: 'Beautiful waters, snorkeling and leisure time around Zanzibar’s coastal islands.',
    
      image: 'assets/images/img1.jpeg'
    },
    {
      title: 'Stone Town & Beach Day',
      info: 'Enjoy Zanzibar’s culture, markets, coastline and easy-going island atmosphere.',

      image: 'assets/images/img3.jpeg'
    }
  ];

  galleryImages = [
    'assets/images/img1.jpeg',
    'assets/images/img2.jpeg',
    'assets/images/img3.jpeg'
  
  ];

  whatsappNumbers = ['+255 699 522 674', '+255 777 436 194'];
  email = 'info@ngazitours.com';
}
